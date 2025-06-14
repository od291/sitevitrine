
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Site E-commerce',
      description: 'Boutique en ligne moderne avec paiement sécurisé et gestion des stocks.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'Stripe'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Application SaaS',
      description: 'Plateforme de gestion de projets avec dashboard analytique avancé.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Portfolio Créatif',
      description: 'Site vitrine pour artiste avec galerie interactive et animations.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      demo: '#',
      github: '#'
    },
    {
      title: 'App Mobile',
      description: 'Application de fitness avec suivi personnalisé et communauté.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase', 'Redux'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Site Corporate',
      description: 'Site d\'entreprise multilingue avec CMS et optimisation SEO.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tags: ['Next.js', 'Sanity', 'SEO'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Plateforme eLearning',
      description: 'Système de formation en ligne avec quiz et suivi de progression.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop',
      tags: ['React', 'MongoDB', 'Socket.io'],
      demo: '#',
      github: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mon Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets récents, 
            chacun reflétant mon attention aux détails et ma passion pour l'innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-sky-blue-100 hover:border-sky-blue-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-sky-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" className="bg-white text-sky-blue-600 hover:bg-gray-100">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white text-sky-blue-600 hover:bg-gray-100">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-sky-blue-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-sky-blue-100 text-sky-blue-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-sky-blue-300 text-sky-blue-700 hover:bg-sky-blue-50 px-8 py-3"
          >
            Voir tous mes projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
