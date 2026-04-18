import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, MessageSquare, Send, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus({ submitting: true, success: false, error: null });

  try {
    const form = e.target;

    const formDataEncoded = new URLSearchParams({
      "form-name": "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message
    }).toString();

    const response = await fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formDataEncoded,
    });

    if (response.ok) {
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus({ submitting: false, success: false, error: "Failed to send message." });
    }

  } catch (error) {
    console.error(error);
    setStatus({ submitting: false, success: false, error: "Something went wrong." });
  }
};
  const contactInfo = [
    { icon: <Phone className="text-primary" />, label: 'Phone', val: '+91 6385823899', link: 'tel:+916385823899' },
    { icon: <Mail className="text-secondary" />, label: 'Email', val: 'bslmtechsolutions@gmail.com', link: 'mailto:bslmtechsolutions@gmail.com' },
    { icon: <Globe className="text-accent" />, label: 'Website', val: 'www.bslmtech.com', link: 'https://www.bslmtech.com' },
    { icon: <MapPin className="text-primary" />, label: 'Location', val: 'Poonamallee, Chennai, Tamil Nadu', link: 'https://maps.google.com/?q=Poonamallee,Chennai' },
  ];

  return (
    <div className="section-padding pt-32">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Let's <span className="gradient-text">Connect</span>
        </motion.h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can help you grow digitally.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
          <p className="text-slate-600 mb-12 text-lg">
            Feel free to reach out to us via any of these channels. Our team is available 24/7 to assist you.
          </p>
          
          <div className="flex flex-col gap-6 mb-12">
            {contactInfo.map((info, i) => (
              <a 
                key={i} 
                href={info.link} 
                className="card group hover:bg-slate-50 transition-all duration-300 flex items-center p-6 gap-8 w-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-white transition-colors flex-shrink-0 shadow-sm">
                  {React.cloneElement(info.icon, { size: 32 })}
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{info.label}</h4>
                  <p className="text-lg md:text-xl font-bold text-slate-800 break-words leading-tight">
                    {info.val}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="p-8 bg-slate-900 rounded-3xl text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <MessageSquare className="text-primary" />
              <span>WhatsApp Chat</span>
            </h3>
            <p className="text-slate-400 mb-6">Connect instantly with our experts via WhatsApp for a quick consultation.</p>
            <a 
              href="https://wa.me/+916385823899" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-xl flex items-center justify-center space-x-2 hover:bg-green-600 transition-all duration-300 active:scale-95"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
          
          {status.success ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600 mb-10">We've received your inquiry and will get back to you within 24 hours.</p>
              <button 
                onClick={() => setStatus({ ...status, success: false })}
                className="btn-primary"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">How can we help?</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
              </div>
              
              {status.error && (
                <div className="p-4 bg-red-50 text-red-500 rounded-xl flex items-center space-x-3 text-sm font-bold">
                  <AlertCircle size={18} />
                  <span>{status.error}</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status.submitting}
                className="w-full py-5 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/30 flex items-center justify-center space-x-3 hover:bg-primary-dark transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.submitting ? (
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Google Maps Live Location */}
      <section className="mt-32">
        <div className="bg-white rounded-3xl p-4 shadow-2xl border border-slate-100 overflow-hidden group">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold mb-2">Our Location</h4>
            <p className="text-slate-600">Poonamallee, Chennai, Tamil Nadu</p>
          </div>
          <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31093.072237889114!2d80.0716631!3d13.0511855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526189916634cf%3A0x6a05370d9a6c7104!2sPoonamallee%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713256000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="BSLM Tech Solutions Location"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://maps.google.com/?q=Poonamallee,Chennai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Open in Google Maps</span>
              <MapPin size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
