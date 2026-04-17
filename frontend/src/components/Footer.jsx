import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Web Design & Development',
    'AI Automation Solutions',
    'Software Development',
    'E-commerce Solutions',
    'Mobile App Development',
    'Payment Gateway Integration',
  ];

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-3 group mb-4">
              <img src="/LOGO.png" alt="BSLM Tech Logo" className="h-16 w-auto object-contain" />
            </Link>
            <p className="text-slate-400">
              Grow your business with smart digital solutions. We build premium, modern, and high-converting websites and AI tools.
            </p>
            <div className="mt-6 flex space-x-4">
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone size={18} className="text-primary" />
                <span>+91 6385823899</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail size={18} className="text-primary" />
                <span>bslmtechsolutions@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Globe size={18} className="text-primary" />
                <span>www.bslmtech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© {currentYear} BSLM Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
