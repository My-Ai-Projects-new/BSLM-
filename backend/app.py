import os
import json
import logging
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('email_logs.txt'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Mail Configuration
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USE_SSL'] = os.getenv('MAIL_USE_SSL', 'False').lower() == 'true'
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'True').lower() == 'true'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = (
    os.getenv('MAIL_DEFAULT_SENDER_NAME', 'BSLM Tech Solutions'),
    os.getenv('MAIL_DEFAULT_SENDER_EMAIL')
)

mail = Mail(app)

# Path for the database file
DB_FILE = 'messages.json'

def save_message(data):
    logger.info("[DATABASE] Attempting to save new message to database")
    messages = []
    if os.path.exists(DB_FILE):
        try:
            with open(DB_FILE, 'r') as f:
                messages = json.load(f)
            logger.info(f"[DATABASE] Loaded existing database with {len(messages)} messages")
        except Exception as e:
            logger.warning(f"[DATABASE] Error reading existing database: {str(e)}, starting fresh")
            messages = []
    else:
        logger.info("[DATABASE] Database file does not exist, creating new one")
    
    # Add timestamp and ID
    data['id'] = len(messages) + 1
    data['timestamp'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    messages.append(data)
    
    try:
        with open(DB_FILE, 'w') as f:
            json.dump(messages, f, indent=4)
        logger.info(f"[DATABASE SUCCESS] Message saved with ID: {data['id']}, Total messages: {len(messages)}")
    except Exception as e:
        logger.error(f"[DATABASE ERROR] Failed to write to database: {str(e)}")
        raise
    
    return data

def send_email(data):
    try:
        logger.info(f"[EMAIL ATTEMPT] Preparing email for: {data['name']} ({data['email']})")
        
        # Check if password is still placeholder
        if app.config['MAIL_PASSWORD'] == 'PASTE_YOUR_16_CHAR_APP_PASSWORD_HERE':
            logger.error("[EMAIL FAILED] Gmail App Password not configured. Please update MAIL_PASSWORD in app.py")
            return False
        
        logger.info(f"[EMAIL CONFIG] Using SMTP: {app.config['MAIL_SERVER']}:{app.config['MAIL_PORT']}")
        logger.info(f"[EMAIL CONFIG] TLS: {app.config['MAIL_USE_TLS']}, SSL: {app.config['MAIL_USE_SSL']}")
            
        msg = Message(
            subject=f"New Lead from BSLM Tech: {data['name']}",
            recipients=os.getenv('MAIL_RECIPIENTS', 'bslmtechsolutions@gmail.com').split(','),
            body=f"""
            Hello BSLM Team,

            You have a new contact form submission:

            Name: {data['name']}
            Email: {data['email']}
            Timestamp: {data['timestamp']}

            Message:
            {data['message']}

            ---
            This email was sent automatically from BSLM Tech Solutions Website.
            """
        )
        
        logger.info("[EMAIL SENDING] Initiating mail.send()...")
        mail.send(msg)
        logger.info(f"[EMAIL SUCCESS] Email sent successfully to {os.getenv('MAIL_RECIPIENTS', 'bslmtechsolutions@gmail.com')}")
        logger.info(f"[EMAIL SUCCESS] Message ID: {data.get('id', 'N/A')} | Sender: {data['email']}")
        return True
        
    except Exception as e:
        error_msg = str(e)
        logger.error(f"[EMAIL FAILED] Exception occurred: {error_msg}")
        logger.error(f"[EMAIL FAILED] Error type: {type(e).__name__}")
        
        # Common error causes with detailed logging
        if "Authentication failed" in error_msg or "Invalid login" in error_msg:
            logger.error("[EMAIL DIAGNOSIS] CAUSE: Invalid Gmail credentials or expired app password")
            logger.error("[EMAIL DIAGNOSIS] ACTION: Regenerate app password at https://myaccount.google.com/apppasswords")
        elif "Connection refused" in error_msg:
            logger.error("[EMAIL DIAGNOSIS] CAUSE: SMTP server connection failed")
            logger.error("[EMAIL DIAGNOSIS] ACTION: Check your internet connection")
        elif "Temporary failure" in error_msg:
            logger.error("[EMAIL DIAGNOSIS] CAUSE: Gmail temporarily blocked the connection")
            logger.error("[EMAIL DIAGNOSIS] ACTION: Try again in a few minutes")
        elif "STARTTLS" in error_msg:
            logger.error("[EMAIL DIAGNOSIS] CAUSE: TLS/SSL configuration mismatch")
            logger.error("[EMAIL DIAGNOSIS] ACTION: Verify MAIL_USE_TLS and MAIL_USE_SSL settings")
        else:
            logger.error("[EMAIL DIAGNOSIS] CAUSE: Unknown SMTP error")
            
        return False

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        logger.info("[CONTACT FORM] New request received from contact form")
        data = request.json
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        
        logger.info(f"[FORM DATA] Name: {name}, Email: {email}")
        logger.info(f"[FORM DATA] Message length: {len(message)} characters")
        
        # Save to local JSON file
        logger.info("[DATABASE] Saving message to messages.json...")
        saved_data = save_message({
            "name": name,
            "email": email,
            "message": message
        })
        logger.info(f"[DATABASE SUCCESS] Message saved with ID: {saved_data['id']}")
        
        # Send Email Notification
        logger.info("[EMAIL PROCESS] Starting email notification process...")
        email_sent = send_email(saved_data)
        
        # Log results for debugging
        if email_sent:
            logger.info(f"[PROCESS COMPLETE] SUCCESS - All operations completed for {name}")
            return jsonify({
                "success": True, 
                "message": "Message received and email notification sent!"
            }), 200
        else:
            logger.warning(f"[PROCESS PARTIAL] WARNING - Message saved but email failed for {name}")
            return jsonify({
                "success": True, 
                "message": "Message saved, but email notification failed. Please check backend logs."
            }), 200
            
    except Exception as e:
        logger.error(f"[CONTACT FORM ERROR] Exception: {str(e)}")
        logger.error(f"[CONTACT FORM ERROR] Error type: {type(e).__name__}")
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/messages', methods=['GET'])
def get_messages():
    logger.info("[GET-MESSAGES] Request received to fetch all stored messages")
    if os.path.exists(DB_FILE):
        with open(DB_FILE, 'r') as f:
            messages = json.load(f)
        logger.info(f"[GET-MESSAGES SUCCESS] Retrieved {len(messages)} messages from database")
        return jsonify(messages), 200
    logger.warning("[GET-MESSAGES] Database file not found, returning empty list")
    return jsonify([]), 200

@app.route('/api/send-stored-messages', methods=['POST'])
def send_stored_messages():
    """Send all stored messages from messages.json via email"""
    try:
        logger.info("[SEND-STORED] Request received to send all stored messages")
        
        if not os.path.exists(DB_FILE):
            logger.warning("[SEND-STORED] Database file not found")
            return jsonify({"success": False, "error": "No messages found"}), 404
        
        with open(DB_FILE, 'r') as f:
            messages = json.load(f)
        
        logger.info(f"[SEND-STORED] Loaded {len(messages)} messages from database")
        
        if not messages:
            logger.warning("[SEND-STORED] Messages list is empty")
            return jsonify({"success": False, "error": "Messages list is empty"}), 400
        
        # Format messages for email body
        email_body = "BSLM Tech Solutions - Stored Messages Report\n"
        email_body += "=" * 60 + "\n\n"
        email_body += f"Total Messages: {len(messages)}\n"
        email_body += f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n"
        email_body += "=" * 60 + "\n\n"
        
        for msg in messages:
            email_body += f"Message ID: {msg.get('id', 'N/A')}\n"
            email_body += f"Name: {msg.get('name', 'N/A')}\n"
            email_body += f"Email: {msg.get('email', 'N/A')}\n"
            email_body += f"Timestamp: {msg.get('timestamp', 'N/A')}\n"
            email_body += f"Message: {msg.get('message', 'N/A')}\n"
            email_body += "-" * 60 + "\n\n"
        
        # Send the email
        logger.info("[SEND-STORED] Sending formatted email report...")
        msg = Message(
            subject=f"BSLM Tech - Stored Messages Report ({len(messages)} messages)",
            recipients=[os.getenv('MAIL_DEFAULT_SENDER_EMAIL', 'bslmtechsolutions@gmail.com')],
            body=email_body
        )
        mail.send(msg)
        logger.info(f"[SEND-STORED SUCCESS] Successfully sent {len(messages)} messages")
        
        return jsonify({
            "success": True,
            "message": f"Successfully sent {len(messages)} messages to {os.getenv('MAIL_DEFAULT_SENDER_EMAIL', 'bslmtechsolutions@gmail.com')}"
        }), 200
    
    except Exception as e:
        logger.error(f"[SEND-STORED ERROR] Exception: {str(e)}")
        logger.error(f"[SEND-STORED ERROR] Error type: {type(e).__name__}")
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    logger.info("=" * 70)
    logger.info("[STARTUP] BSLM Tech Solutions - Flask Backend Server Starting")
    logger.info("=" * 70)
    logger.info(f"[STARTUP] Flask environment: {os.getenv('FLASK_ENV', 'production')}")
    logger.info(f"[STARTUP] Debug mode: {os.getenv('FLASK_DEBUG', 'False')}")
    logger.info(f"[CONFIG] Mail Server: {app.config['MAIL_SERVER']}")
    logger.info(f"[CONFIG] Mail Port: {app.config['MAIL_PORT']}")
    logger.info(f"[CONFIG] Mail Username: {os.getenv('MAIL_USERNAME', 'Not set')}")
    logger.info(f"[CONFIG] TLS Enabled: {app.config['MAIL_USE_TLS']}")
    logger.info(f"[CONFIG] SSL Enabled: {app.config['MAIL_USE_SSL']}")
    logger.info(f"[CONFIG] Database file: {DB_FILE}")
    logger.info("[STARTUP] All configurations loaded successfully from .env")
    logger.info("[STARTUP] Starting Flask server on http://localhost:5000")
    logger.info("=" * 70)
    app.run(debug=True, port=5000)
