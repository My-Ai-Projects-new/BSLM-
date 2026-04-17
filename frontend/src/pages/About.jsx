import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Cpu, Rocket, Shield } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Target className="text-primary" />, title: 'Mission', desc: 'To empower businesses with innovative digital solutions that drive growth and efficiency.' },
    { icon: <Eye className="text-secondary" />, title: 'Vision', desc: 'To be the leading global partner for digital transformation and technological excellence.' },
    { icon: <Users className="text-accent" />, title: 'Values', desc: 'Integrity, innovation, and client success are at the core of everything we do.' },
  ];

  const technologies = [
    { name: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { name: 'Backend', items: ['Python Flask', 'Node.js', 'FastAPI', 'Express'] },
    { name: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'] },
    { name: 'AI & Gen AI', items: ['OpenAI / Anthropic API', 'RAG Frameworks', 'LangChain', 'Vector DBs (Pinecone/Chroma)'] },
  ];

  return (
    <div className="section-padding pt-32">
      {/* Introduction */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">BSLM Tech Solutions: <span className="gradient-text">Your Digital Growth Partner</span></h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded with a passion for technology and a commitment to excellence, BSLM Tech Solutions has grown into a full-service digital agency. We specialize in creating high-performance websites, innovative AI tools, and scalable software solutions.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our team of experts combines creative design with technical mastery to help businesses navigate the digital era successfully. We believe in building long-term partnerships through transparent communication and measurable results.
            </p>
            <div className="flex space-x-8">
              <div className="flex flex-col">
                <span className="text-4xl font-bold gradient-text">5+</span>
                <span className="text-sm text-slate-500 font-medium">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold gradient-text">100+</span>
                <span className="text-sm text-slate-500 font-medium">Projects Done</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold gradient-text">99%</span>
                <span className="text-sm text-slate-500 font-medium">Happy Clients</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-3xl overflow-hidden shadow-2xl p-1">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  <Rocket size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Fast Delivery</p>
                  <p className="text-xs text-slate-500">Agile methodology</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Secure Solutions</p>
                  <p className="text-xs text-slate-500">Top-tier security</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-6">
                {React.cloneElement(val.icon, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
              <p className="text-slate-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-24 bg-slate-900 rounded-3xl p-12 text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-slate-400">We use the latest tools and frameworks to build robust solutions.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <h4 className="text-xl font-bold mb-6 text-primary">{tech.name}</h4>
              <ul className="space-y-3">
                {tech.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
