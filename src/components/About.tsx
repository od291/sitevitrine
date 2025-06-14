
import React from 'react';
import { Award, Clock, Users, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '50+', label: 'Projets réalisés' },
    { icon: Clock, value: '20+', label: 'Années d\'expérience' },
    { icon: Users, value: '100%', label: 'Clients satisfaits' },
    { icon: Coffee, value: '∞', label: 'Cafés bu' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-sky-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              À propos de moi
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Je suis un professionnel chevronné des RH qui a fait la transition vers un pigiste
                avec plus de 20 ans d'aide à la mise en oeuvre et à la mise à l'échelle des stratégies
                de ressources humaines pour les organisations qui en ont besoin.
              </p>
              <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-sky-blue-100">
              <h3 className="font-semibold text-gray-900 mb-3">Ma mission :</h3>
              <p>
                  Aider à résoudre vos problèmes liés aux ressources humaines et à améliorer les performances de votre équipe.
              </p>

            </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-sky-blue-100">
              <h3 className="font-semibold text-gray-900 mb-3">Mes valeurs :</h3>
              <div className="flex flex-wrap gap-2">
                {['Respect de la dignité humaine', 'Intégrité', 'Redevabilité', 'Confidentialité'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-sky-blue-100 text-sky-blue-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Mes résultats en chiffres
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-sky-blue-500 to-sky-blue-600 rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-sky-blue-600 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-sky-blue-500 to-sky-blue-600 p-8 rounded-2xl text-white text-center">
              <h3 className="text-xl font-semibold mb-3">Prêt à collaborer ?</h3>
              <p className="mb-4 opacity-90">
                Discutons de votre projet et donnons-lui vie ensemble !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
