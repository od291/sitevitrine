import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const quickLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: "Domaine d'expertise", href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-sky-blue-400">
              David Vjioletan A.
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              "Confier à un professionnel RH, votre gestion des ressources humaines"
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-sky-blue-600 hover:bg-sky-blue-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-blue-400">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-sky-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-blue-400">
              Services
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>Recrutement</li>
              <li>Externalisation</li>
              <li>Audit RH</li>
              <li>Team Building</li>
              <li>Coaching et Mentoring</li>
              <li>Formation</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 David. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Développé par Tantelison Odion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
