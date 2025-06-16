import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const controls = useAnimation();
  const footerRef = useRef(null);
  
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/david-yjioletan-andriandislala-715b10129/', 
      label: 'LinkedIn',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      icon: Mail, 
      href: 'mailto:andriandislala@gmail.com', 
      label: 'Email',
      color: 'bg-red-600 hover:bg-red-700'
    },
    { 
      icon: Phone, 
      href: 'tel:+261340515861', 
      label: 'Appel',
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  const quickLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: "Expertise", href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Recrutement',
    'Externalisation RH',
    'Audit RH',
    'Team Building',
    'Coaching & Mentoring',
    'Formation RH'
  ];

  const handleNavigation = (href) => {
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerPosition = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (footerPosition < windowHeight * 0.8) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6
      }
    })
  };

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0 }}
      animate={controls}
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8 overflow-hidden"
      style={{ marginTop: '80px' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.1, 0],
          transition: { duration: 4, repeat: Infinity }
        }}
        className="absolute bottom-0 left-0 w-full overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-900 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-indigo-900 blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2"
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
              whileHover={{ scale: 1.02 }}
            >
              David Andriandislala
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed max-w-md"
              whileHover={{ x: 5 }}
            >
              "Confier à un professionnel RH votre gestion des ressources humaines pour optimiser votre capital humain."
            </motion.p>
            <motion.div 
              className="flex items-center gap-2 text-gray-400 mb-4"
              whileHover={{ x: 5 }}
            >
              <MapPin className="w-5 h-5" />
              <span>Antananarivo, Madagascar</span>
            </motion.div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg`}
                  aria-label={social.label}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerItem}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h4 
              className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              whileHover={{ x: 5 }}
            >
              Navigation
            </motion.h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerItem}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.href);
                    }}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                    whileHover={{ 
                      x: 10,
                      color: '#22d3ee'
                    }}
                  >
                    <motion.span 
                      className="w-2 h-2 bg-cyan-400 rounded-full mr-2"
                      whileHover={{ scale: 1.5 }}
                    ></motion.span>
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h4 
              className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              whileHover={{ x: 5 }}
            >
              Services RH
            </motion.h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerItem}
                  viewport={{ once: true }}
                  className="text-gray-300 flex items-center"
                  whileHover={{ 
                    x: 10,
                    color: '#22d3ee'
                  }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-cyan-400 rounded-full mr-2"
                    whileHover={{ scale: 1.5 }}
                  ></motion.span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Copyright section avec le trait de séparation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <hr className="border-t border-gray-700 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              © {new Date().getFullYear()} David Andriandislala. Tous droits réservés.
            </motion.p>
            <motion.p 
              className="text-gray-400 text-sm"
              whileHover={{ scale: 1.02 }}
            >
              Développé avec par Tantelison Odion
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;