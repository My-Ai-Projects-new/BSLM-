import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Smartphone, ShoppingCart, CreditCard, Layout, ShieldCheck, Zap, Clock, Headphones, Target, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    { icon: <Code className="text-primary" />, title: 'Web Development', desc: 'Custom, responsive, and SEO-optimized websites built for conversion.' },
    { icon: <Bot className="text-secondary" />, title: 'Gen AI & LLM Solutions', desc: 'Custom RAG Chatbots, LLM fine-tuning, and Generative AI agents for your business.' },
    { icon: <Smartphone className="text-accent" />, title: 'Mobile Apps', desc: 'Native and cross-platform apps for iOS and Android.' },
    { icon: <ShoppingCart className="text-primary" />, title: 'E-commerce', desc: 'Feature-rich online stores with secure payment gateways.' },
  ];

  const whyChooseUs = [
    { icon: <Layout />, title: 'Professional Design', desc: 'Pixel-perfect, modern aesthetics.' },
    { icon: <Zap />, title: 'Affordable Pricing', desc: 'Premium quality without the premium price tag.' },
    { icon: <Clock />, title: 'Fast Delivery', desc: 'Strict adherence to timelines. We value your time.' },
    { icon: <Headphones />, title: 'Customer Support', desc: 'Dedicated support team ready to assist you.' },
    { icon: <Target />, title: 'Customized Solutions', desc: 'Tailored specifically for your business goals.' },
  ];

  const testimonials = [
    { name: 'Rahul Sharma', role: 'Business Owner', text: 'BSLM Tech transformed our business online. Excellent work! The new website has doubled our leads in just one month.' },
    { name: 'Priya Nair', role: 'E-commerce Entrepreneur', text: 'Professional team, delivered on time. Highly recommend! Our new online store is fast, secure, and beautiful.' },
    { name: 'Arun Kumar', role: 'Startup Founder', text: 'Best AI automation solution for my business. Worth every rupee! We saved hundreds of hours of manual work.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 bg-slate-50">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              x: [0, -100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-secondary/20 rounded-full blur-[120px]" 
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-primary text-sm font-bold mb-8 shadow-sm"
            >
              🚀 Innovative IT Services & Digital Solutions
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tight">
              Grow Your Business with <br />
              <span className="gradient-text">Smart Digital Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Premium Web Development, AI Automation, and Mobile Apps tailored for your success in the digital era. Fast delivery, affordable pricing, and unmatched quality.
            </p>
            <div className="flex flex-col sm:row items-center justify-center gap-6">
              <Link to="/contact" className="btn-primary flex items-center space-x-3 px-10 py-5 text-lg group">
                <span>Get Free Consultation</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-secondary px-10 py-5 text-lg bg-white/50 backdrop-blur-sm">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-slate-600">Comprehensive digital solutions designed to scale your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {React.cloneElement(service.icon, { size: 28, className: "transition-colors group-hover:text-white" })}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-6">{service.desc}</p>
              <Link to="/services" className="text-primary font-semibold flex items-center space-x-1 group-hover:space-x-2 transition-all">
                <span>Learn more</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 text-white section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Why Businesses Trust <span className="gradient-text">BSLM Tech</span></h2>
            <p className="text-slate-400 mb-10 text-lg">
              We don't just build websites; we build digital businesses. Our approach combines technical excellence with strategic business thinking.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-12">
               {/* Visual representation of process */}
               <div className="grid grid-cols-2 gap-6 w-full h-full">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center items-center border border-white/10">
                    <span className="text-4xl font-bold gradient-text">100+</span>
                    <span className="text-slate-400 text-sm mt-2">Projects Delivered</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center items-center border border-white/10">
                    <span className="text-4xl font-bold gradient-text">50+</span>
                    <span className="text-slate-400 text-sm mt-2">Happy Clients</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center items-center border border-white/10">
                    <span className="text-4xl font-bold gradient-text">15+</span>
                    <span className="text-slate-400 text-sm mt-2">Expert Team</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center items-center border border-white/10">
                    <span className="text-4xl font-bold gradient-text">24/7</span>
                    <span className="text-slate-400 text-sm mt-2">Support</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-slate-600">Don't just take our word for it. Here's what our clients have to say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 italic mb-8">"{testi.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                  {testi.name[0]}
                </div>
                <div>
                  <h4 className="font-bold">{testi.name}</h4>
                  <p className="text-sm text-slate-500">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join hundreds of successful businesses. Let's discuss your project today and get a free demo before you pay.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-xl hover:bg-slate-100 transition-all duration-300 active:scale-95">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="px-8 py-4 bg-primary-dark/30 text-white border border-white/20 backdrop-blur-sm font-bold rounded-xl hover:bg-white/10 transition-all duration-300 active:scale-95">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
