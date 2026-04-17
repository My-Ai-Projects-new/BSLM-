import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Top Offer Banner */}
        <div className="bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark text-white py-2 px-4 text-center text-sm font-bold fixed top-0 w-full z-[60] h-10 flex items-center justify-center">
          Special Offer: Get FREE demo before payment! 
          <Link to="/contact" className="ml-4 underline hover:text-white/80 transition-colors">Claim Now</Link>
        </div>
        
        <Navbar />
        
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
        
        <WhatsAppButton />
        
        {/* Sticky Get Quote Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-28 right-8 z-50 hidden md:block"
        >
          <Link to="/contact" className="btn-primary flex items-center space-x-2">
            <span>Get Free Quote</span>
          </Link>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
