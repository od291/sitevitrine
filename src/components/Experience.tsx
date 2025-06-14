import React from 'react';
import { Search, FileText, Compass, Target, BookOpenIcon, Wallet, User, Lightbulb, ChartBar, ClipboardCheck, Heart, Handshake, DollarSign, TrendingUp, Scale, UserPlus, User2, Users, ChartBarIcon} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, } from '@/components/ui/card';

const Experience = () => {
  const competenceCategories = [
    {
      title: 'Recrutement & Acquisition des Talents',
      icon: Search,
    },
    {
      title: 'Intégration, désintégration et engagement des employés',
      icon: Compass,
    },
    {
      title: 'Administration du personnel (contrat, congé, ...)',
      icon: FileText,
    },
    {
      title: 'Gestion de la rémunération et de la paie et des avantages sociaux',
      icon: Wallet,
    },
    {
      title: 'Formation, développement de programmes de Formation et Apprentissage',
      icon: BookOpenIcon,
    },
    {
      title: 'Gestion des performances',
      icon: Target,
    },
    {
      title: 'Gestion de la conformité, des risques et protection des stratégies RH',
      icon: Scale,
    },
    {
      title: 'Configuration, optimisation et analyse des données (HRIS)',
      icon: ChartBarIcon,
    },
    {
      title: 'Coaching et mentorat',
      icon: Users,
    },
    {
      title: 'Audits',
      icon: ClipboardCheck,
    },
    {
      title: 'Réalisation de projets RH',
      icon: Lightbulb,

    },
    {
      title: 'Bien être des employés et la protection contre les abus et exploitations',
      icon: Heart,

    },
    {
      title: 'Dialogue sociale',
      icon: Handshake,

    },
    {
      title: 'Gestion budget RH',
      icon: DollarSign,

    },
    {
      title: 'KPIs RH',
      icon: TrendingUp,

    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mes domaines d'expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un aperçu de mes différents domaines dans lesquels je mets à profit
            mon expertise RH pour accompagner les organisations tout au long du cycle de vie de leurs collaborateurs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competenceCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-sky-blue-100 hover:border-sky-blue-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-blue-100 to-sky-blue-200 rounded-full flex items-center justify-center group-hover:from-sky-blue-500 group-hover:to-sky-blue-600 transition-all duration-300">
                  <category.icon className="w-8 h-8 text-sky-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-sky-blue-700 transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">

              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-sky-blue-500 to-sky-blue-600 p-8 rounded-2xl text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">En apprentissage constant</h3>
            <p className="mb-6 opacity-90">
              La technologie évolue rapidement, c'est pourquoi je me forme continuellement 
              aux nouvelles technologies et meilleures pratiques du développement web.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">GraphQL</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Three.js</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Web3</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">AI/ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
