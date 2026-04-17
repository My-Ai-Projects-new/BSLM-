import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Target, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Website',
      price: '₹5,000',
      icon: <Target className="text-primary" />,
      features: [
        'Single Page Website',
        'Fully Responsive Design',
        'SEO-optimized Structure',
        'Contact Form Integration',
        '3-Day Delivery',
        '1 Month Free Support',
      ],
      cta: 'Start with Basic',
      recommended: false,
    },
    {
      name: 'Business Website',
      price: '₹10,000',
      icon: <Zap className="text-secondary" />,
      features: [
        'Up to 5 Pages',
        'Premium Modern UI/UX',
        'Advanced Animations',
        'Content Management System',
        'Google Maps & Analytics',
        '1-Week Delivery',
        '3 Months Free Support',
      ],
      cta: 'Get Business Plan',
      recommended: true,
    },
    {
      name: 'E-commerce Website',
      price: '₹20,000+',
      icon: <Rocket className="text-accent" />,
      features: [
        'Full E-commerce Features',
        'Product & Order Management',
        'Secure Payment Integration',
        'Inventory Tracking',
        'Customer Accounts',
        '2-Week Delivery',
        '6 Months Free Support',
      ],
      cta: 'Start E-commerce',
      recommended: false,
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
          Choose Your <span className="gradient-text">Package</span>
        </motion.h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Transparent pricing for businesses of all sizes. No hidden costs, just quality work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-4 ${
              plan.recommended 
                ? 'bg-slate-900 text-white shadow-2xl shadow-primary/40 scale-105 z-10' 
                : 'bg-white text-slate-900 border border-slate-100 shadow-xl'
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg">
                Most Popular
              </div>
            )}
            
            <div className="mb-10">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${plan.recommended ? 'bg-white/10' : 'bg-slate-50'}`}>
                {React.cloneElement(plan.icon, { size: 32, className: plan.recommended ? 'text-white' : 'text-primary' })}
              </div>
              <h3 className="text-2xl font-black mb-2 tracking-tight">{plan.name}</h3>
              <div className="flex items-baseline gap-2">
                <span className={`text-5xl font-black tracking-tighter ${plan.recommended ? 'text-white' : 'gradient-text'}`}>
                  {plan.price}
                </span>
              </div>
            </div>
            
            <ul className="space-y-5 mb-12 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className={`mt-1 p-0.5 rounded-full ${plan.recommended ? 'bg-primary/30 text-primary-light' : 'bg-primary/10 text-primary'}`}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className={`text-sm font-bold ${plan.recommended ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              to="/contact" 
              className={`w-full py-5 rounded-2xl font-black text-center flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 ${
                plan.recommended 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-xl shadow-primary/20 hover:brightness-110' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <span>{plan.cta}</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* FAQ Preview */}
      <section className="mt-32 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { q: 'How long does it take?', a: 'Simple websites take 3-7 days, while complex platforms take 2-4 weeks.' },
            { q: 'Can I update the content?', a: 'Yes, we build user-friendly dashboards for easy content management.' },
            { q: 'Is there ongoing support?', a: 'Every package includes free support. We also offer maintenance plans.' },
            { q: 'Do you provide hosting?', a: 'Yes, we offer premium cloud hosting and domain registration services.' },
          ].map((faq, i) => (
            <div key={i} className="card p-8">
              <h4 className="text-lg font-bold mb-4 flex items-start space-x-3">
                <span className="text-primary font-bold">Q:</span>
                <span>{faq.q}</span>
              </h4>
              <p className="text-slate-600 text-sm flex items-start space-x-3">
                <span className="text-secondary font-bold">A:</span>
                <span>{faq.a}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
