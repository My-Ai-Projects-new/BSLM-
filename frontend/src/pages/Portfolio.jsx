import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Layers, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Business Website',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
      desc: 'Modern, SEO-optimized business website for a leading consulting firm.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web Design',
    },
    {
      title: 'E-commerce Platform',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
      desc: 'Full-featured online store with payment integration and inventory management.',
      tech: ['Next.js', 'PostgreSQL', 'Stripe'],
      category: 'E-commerce',
    },
    {
      title: 'Admin Dashboard',
      image: 'https://picsum.photos/id/1/800/450',
      desc: 'Comprehensive management system with real-time tracking and reporting.',
      tech: ['React', 'Node.js', 'Chart.js'],
      category: 'Software',
    },
    {
      title: 'AI Analytics Platform',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      desc: 'Advanced AI-driven analytics dashboard with predictive modeling.',
      tech: ['Next.js', 'TensorFlow', 'PostgreSQL'],
      category: 'AI Solutions',
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
          Featured <span className="gradient-text">Projects</span>
        </motion.h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Explore our portfolio of successful projects and digital transformations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-slate-600 mb-8">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-bold rounded-lg border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
              
              <button className="flex items-center space-x-2 text-primary font-bold hover:space-x-3 transition-all">
                <span>View Details</span>
                <ExternalLink size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { icon: <Code />, label: 'Web Projects', val: '65+' },
          { icon: <Zap />, label: 'AI Solutions', val: '20+' },
          { icon: <Layers />, label: 'Mobile Apps', val: '15+' },
          { icon: <ExternalLink />, label: 'Client Success', val: '99%' },
        ].map((stat, i) => (
          <div key={i} className="card text-center p-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              {React.cloneElement(stat.icon, { size: 28 })}
            </div>
            <h4 className="text-3xl font-bold mb-2">{stat.val}</h4>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
