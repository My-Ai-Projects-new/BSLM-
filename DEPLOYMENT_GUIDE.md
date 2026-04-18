# BSLM Tech Solutions - Deployment Guide

## 🎯 Architecture
- **Frontend**: React + Vite (Deploys to Netlify)
- **Backend**: Python Flask (Deploys to Render/Heroku)

---

## 📋 LOCAL SETUP

### 1. Backend Setup
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your Gmail credentials
python app.py
# Runs on http://localhost:5000
```

### 2. Frontend Setup
```bash
cd frontend
npm install
# .env already configured for localhost:5000
npm run dev
# Runs on http://localhost:5173
```

### 3. Test Form
- Go to http://localhost:5173/contact
- Fill and submit form
- Check backend terminal for logs
- Email sent to recipients

---

## 🚀 PRODUCTION DEPLOYMENT

### OPTION A: Deploy Backend to Render

#### Step 1: Prepare Backend
```bash
cd backend
# Create requirements.txt
pip freeze > requirements.txt
git add .
git commit -m "Add Flask backend"
git push
```

#### Step 2: Deploy to Render
1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect GitHub repo
4. Settings:
   - Name: `bslm-backend`
   - Runtime: `Python 3.9`
   - Build: `pip install -r requirements.txt`
   - Start: `python app.py`
5. Add Environment Variables:
   - Copy all values from `backend/.env`
   - Add `CORS_ORIGINS=https://yourdomain.netlify.app`
6. Deploy

#### Step 3: Get Backend URL
- After deployment, you'll get URL like: `https://bslm-backend.onrender.com`
- Copy this URL

---

### OPTION B: Deploy Backend to Heroku
```bash
# Install Heroku CLI
heroku login
cd backend
heroku create bslm-backend
heroku config:set FLASK_ENV=production
heroku config:set MAIL_USERNAME=your-email@gmail.com
# ... set all other env variables
git push heroku main
```

---

### Step 4: Deploy Frontend to Netlify

#### 4.1 Update Frontend .env
```bash
cd frontend
# Edit .env:
VITE_API_URL=https://bslm-backend.onrender.com
```

#### 4.2 Push to GitHub
```bash
git add .
git commit -m "Update API URL for production"
git push
```

#### 4.3 Deploy to Netlify
1. Go to https://netlify.com
2. Click "New site from Git"
3. Select your GitHub repo
4. Build Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy

#### 4.4 Update Backend CORS
1. Go back to Render dashboard
2. Edit environment variable:
   - `CORS_ORIGINS=https://your-netlify-site.netlify.app`
3. Redeploy

---

## 📧 GMAIL APP PASSWORD SETUP

⚠️ **IMPORTANT**: Gmail requires App Passwords

1. Enable 2FA on your Gmail account
2. Go to https://myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer"
4. Google generates 16-character password
5. Copy that password to `MAIL_PASSWORD` in `.env`

---

## 🧪 TEST AFTER DEPLOYMENT

1. Go to your Netlify site
2. Fill contact form
3. Submit
4. Check:
   - Browser shows "Message Sent!"
   - Email arrives in inbox within 1 minute
   - Check Render logs for any errors

---

## 📊 ENVIRONMENTS SUMMARY

| Local | Production |
|-------|-----------|
| Frontend: localhost:5173 | Frontend: netlify.app |
| Backend: localhost:5000 | Backend: render.com |
| Email: Logs to console | Email: Sent via Gmail |

---

## 🆘 TROUBLESHOOTING

### Form says "Failed to send message"
- Check backend is running
- Check API URL in frontend/.env
- Check CORS settings in backend
- Check browser console for errors

### Email not received
- Check MAIL_USERNAME in backend/.env
- Check MAIL_PASSWORD (use App Password, not Gmail password)
- Check MAIL_RECIPIENTS in backend/.env
- Check spam folder
- Check Render logs for email errors

### CORS Error
- Update CORS_ORIGINS in backend/.env
- Include your Netlify domain
- Redeploy backend

---

## 📁 FILE STRUCTURE

```
BSLM/
├── backend/
│   ├── .env (your secrets)
│   ├── .env.example
│   ├── app.py
│   ├── requirements.txt
│   └── messages.json
├── frontend/
│   ├── .env (your API URL)
│   ├── .env.example
│   ├── src/
│   │   ├── config.js (reads VITE_API_URL)
│   │   └── pages/Contact.jsx
│   └── package.json
└── README.md
```

---

## ✅ DEPLOYMENT CHECKLIST

- [ ] Backend .env configured with Gmail
- [ ] Frontend .env has backend API URL
- [ ] Backend deployed to Render
- [ ] Frontend deployed to Netlify
- [ ] CORS_ORIGINS updated on Render
- [ ] Test form submission
- [ ] Receive test email
- [ ] Check both logs
- [ ] Production ready! 🎉
