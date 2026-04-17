import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Smartphone, ShoppingCart, CreditCard, Layout, Zap, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Code className="text-primary" />,
      title: 'Web Design & Development',
      desc: 'Custom, responsive, and SEO-optimized websites built for conversion.',
      features: ['Modern UI/UX Design', 'Full Responsive Layout', 'SEO-friendly Code', 'High Performance'],
      price: '₹5,000+',
      time: '3-7 Days',
    },
    {
      icon: <Bot className="text-secondary" />,
      title: 'Gen AI & LLM Solutions',
      desc: 'Harness the power of Generative AI with custom LLM and RAG integrations.',
      features: ['Custom RAG Chatbots', 'LLM Fine-tuning (GPT, Llama)', 'AI Agentic Workflows', 'Vector Database Integration'],
      price: '₹15,000+',
      time: '10-15 Days',
    },
    {
      icon: <Layout className="text-accent" />,
      title: 'Software Development',
      desc: 'Robust and scalable custom software tailored to your specific needs.',
      features: ['Custom Admin Panels', 'ERP/CRM Solutions', 'SaaS Product Development', 'Legacy System Migration'],
      price: '₹25,000+',
      time: '20-30 Days',
    },
    {
      icon: <ShoppingCart className="text-primary" />,
      title: 'E-commerce Development',
      desc: 'Feature-rich online stores with secure payment gateways.',
      features: ['Product Management', 'Inventory Control', 'Multi-payment Integration', 'Order Tracking'],
      price: '₹20,000+',
      time: '10-14 Days',
    },
    {
      icon: <Smartphone className="text-secondary" />,
      title: 'Mobile App Development',
      desc: 'Native and cross-platform apps for iOS and Android.',
      features: ['React Native/Flutter', 'User-friendly Interface', 'Push Notifications', 'API Integration'],
      price: '₹30,000+',
      time: '25-40 Days',
    },
    {
      icon: <CreditCard className="text-accent" />,
      title: 'Payment Gateway Integration',
      desc: 'Seamless and secure payment gateway setups for your platform.',
      features: ['Razorpay/Stripe Setup', 'Subscription Models', 'Auto-invoicing', 'Multi-currency Support'],
      price: '₹3,000+',
      time: '1-2 Days',
    },
  ];

  return (
    <div className="section-padding pt-32">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Our <span className="gradient-text">Premium Services</span>
        </motion.h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Comprehensive digital solutions designed to scale your business and automate your workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card flex flex-col h-full hover:-translate-y-2 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
              {React.cloneElement(service.icon, { size: 32 })}
            </div>
            
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-slate-600 mb-8">{service.desc}</p>
            
            <div className="space-y-4 mb-10 flex-grow">
              <h4 className="font-bold text-slate-900 flex items-center space-x-2">
                <CheckCircle2 size={18} className="text-primary" />
                <span>Key Features:</span>
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Starting from</p>
                <p className="text-2xl font-bold gradient-text">{service.price}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Delivery Time</p>
                <p className="text-sm font-bold text-slate-700">{service.time}</p>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="mt-8 btn-primary flex items-center justify-center space-x-2 w-full group-hover:shadow-primary/20"
            >
              <span>Book Service</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Custom Solution Section */}
      <section className="mt-32 p-12 bg-slate-900 rounded-3xl text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          Have a unique business requirement that isn't listed here? Our expert team can build tailored solutions just for you.
        </p>
        <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
          <span>Get Free Consultation</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
};

export default Services;
