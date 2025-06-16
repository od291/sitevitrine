import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Menu, X, User, BookOpen, Briefcase, Phone, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const controls = useAnimation();
  const headerRef = useRef(null);

  const menuItems = [
    { label: 'Accueil', href: '#home', icon: <Home size={18} /> },
    { label: 'À propos', href: '#about', icon: <User size={18} /> },
    { label: "Expertise", href: '#experience', icon: <Briefcase size={18} /> },
    { label: 'Services', href: '#services', icon: <BookOpen size={18} /> },
    { label: 'Contact', href: '#contact', icon: <Phone size={18} /> }
  ];

  // Détection de la section active au scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        controls.start({
          y: 0,
          opacity: 1,
          backdropFilter: 'blur(10px)',
          transition: { duration: 0.3 }
        });
      } else {
        controls.start({
          backdropFilter: 'blur(5px)',
          transition: { duration: 0.3 }
        });
      }

      // Détection de la section active
      const sections = menuItems.map(item => item.href);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, menuItems]);

  const handleNavigation = (href) => {
    setActiveSection(href);
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        // Calculer la position en prenant en compte la hauteur de la navbar
        const headerHeight = headerRef.current?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-blue-100/50 z-50 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo avec effet 3D */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <motion.div
              initial={{ rotateY: 0 }}
              whileHover={{ rotateY: 10 }}
              transition={{ duration: 0.3 }}
              className="font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            >
              David Vjioletan ANDRIANDISLALA
            </motion.div>
          </motion.div>
          
          {/* Desktop Navigation - Effet 3D */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <motion.div
                key={item.label}
                initial={{ rotateX: 0 }}
                whileHover={{ rotateX: activeSection === item.href ? 0 : 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
                <motion.a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 font-medium group whitespace-nowrap ${
                    activeSection === item.href 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  whileHover={{ y: activeSection === item.href ? 0 : -2 }}
                >
                  <span className={`mr-2 ${
                    activeSection === item.href 
                      ? 'text-blue-500 opacity-100' 
                      : 'text-blue-500 opacity-0 group-hover:opacity-100'
                  } transition-opacity`}>
                    {item.icon}
                  </span>
                  {item.label}
                  <motion.span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 ${
                      activeSection === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    } transition-all duration-300`}
                    layoutId="underline"
                  />
                </motion.a>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-full bg-blue-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              rotate: isMenuOpen ? 180 : 0,
              backgroundColor: isMenuOpen ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)'
            }}
          >
            {isMenuOpen ? (
              <X size={24} className="text-red-500" />
            ) : (
              <Menu size={24} className="text-blue-500" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: 1,
                y: 0,
                transition: { duration: 0.2 }
              }}
              exit={{ 
                opacity: 0,
                y: -20,
                transition: { duration: 0.1 }
              }}
              className="md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md"
              style={{
                top: headerRef.current?.offsetHeight || '64px'
              }}
            >
              <div className="container mx-auto px-4">
                <nav className="flex flex-col space-y-2 py-2">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                        activeSection === item.href
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ 
                        x: 0, 
                        opacity: 1,
                        transition: { 
                          delay: index * 0.1,
                          type: 'spring',
                          stiffness: 100
                        }
                      }}
                    >
                      <span className={`mr-3 ${
                        activeSection === item.href ? 'text-blue-600' : 'text-blue-500'
                      }`}>
                        {item.icon}
                      </span>
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;