
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-blue-50 to-white pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">Freelance certifié</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Donnez vie à vos
              <span className="text-sky-blue-600 block">projets digitaux</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Freelance passionné spécialisé dans le développement web moderne. 
              Je transforme vos idées en solutions digitales performantes et attrayantes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-sky-blue-500 hover:bg-sky-blue-600 text-white px-8 py-3 text-lg font-semibold group"
              >
                Découvrir mes services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

            </div>
          </div>
          
          <div className="mt-16 animate-float">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-sky-blue-400 to-sky-blue-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-sky-blue-600">{'<\/>'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
