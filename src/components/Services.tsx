import React, { useState } from 'react';
import { Users, Briefcase, FileSearch, Users2, UserCog, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const services = [
    {
      icon: Users,
      title: 'Recrutement',
      shortDescription: 'Recherche et sélection de talents pour répondre à vos besoins spécifiques.',
      details: [
        'Définition du poste : Décrire les responsabilités, compétences et qualifications requises',
        'Recherche de candidats via divers canaux (réseaux sociaux, sites de recrutement...)',
        'Sélection des CV correspondant aux exigences du poste',
        'Organisation et conduite des entretiens',
        'Vérification des références professionnelles',
        'Aide à la décision finale d\'embauche',
        'Facultatif : Accompagnement à l\'intégration du nouvel employé'
      ]
    },
    {
      icon: Briefcase,
      title: 'Externalisation',
      shortDescription: 'Délégation complète ou partielle de vos processus RH.',
      details: [
        'Recrutement et administration du personnel',
        'Gestion de paie et déclarations sociales',
        'Formation et développement des compétences',
        'Gestion des performances et relations employeurs',
        'Étude et pesée des postes',
        'GPEC (Gestion Prévisionnelle des Emplois et Compétences)',
        'Rédaction/mise à jour des documents RH (manuel, RI, DUER, PAP)',
        'Avantages : Réduction des coûts, expertise spécialisée, flexibilité'
      ]
    },
    {
      icon: FileSearch,
      title: 'Audit RH',
      shortDescription: 'Évaluation complète de vos processus et pratiques RH.',
      details: [
        'Analyse de la gestion RH et contrôle interne',
        'Vérification de conformité légale et réglementaire',
        'Audit des processus de recrutement et gestion des talents',
        'Évaluation des systèmes de formation et développement',
        'Analyse des politiques de rémunération et avantages sociaux',
        'Entretiens avec dirigeants et collaborateurs',
        'Recommandations d\'amélioration personnalisées',
        'Bénéfices : Optimisation des coûts, réduction des risques, meilleure prise de décision'
      ]
    },
    {
      icon: Users2,
      title: 'Team Building',
      shortDescription: 'Renforcement de la cohésion et collaboration d\'équipe.',
      details: [
        'Activités de communication et résolution de problèmes',
        'Ateliers de créativité et innovation',
        'Jeux collaboratifs et défis d\'équipe',
        'Événements sociaux et sorties motivantes',
        'Programmes sur mesure selon vos besoins spécifiques',
        'Objectifs : Amélioration de la communication, confiance, motivation',
        'Résultats : Équipe plus cohésive, réduction des conflits, productivité accrue'
      ]
    },
    {
      icon: UserCog,
      title: 'Coaching & Mentoring',
      shortDescription: 'Développement personnalisé des compétences et leadership.',
      details: [
        'Coaching individuel pour objectifs spécifiques',
        'Amélioration des compétences managériales',
        'Programmes de leadership et communication',
        'Mentoring pour intégration ou développement de carrière',
        'Transfert d\'expérience et savoir-faire',
        'Bénéfices : Performance accrue, confiance renforcée, satisfaction professionnelle',
        'Approches adaptées à chaque profil et besoin'
      ]
    },
    {
      icon: BookOpen,
      title: 'Formation',
      shortDescription: 'Programmes de formation sur mesure en ressources humaines.',
      details: [
        'Thématiques clés : Gestion des conflits, communication efficace',
        'Leadership et management d\'équipe',
        'Gestion du stress et bien-être au travail',
        'Respect, Équité, Diversité et Inclusion',
        'Gestion des performances et entretiens annuels',
        'Techniques de recrutement et sélection',
        'Gestion du changement organisationnel',
        'Formations adaptées à votre secteur d\'activité'
      ]
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mes Services RH
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solutions complètes pour optimiser votre gestion des ressources humaines
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              onClick={() => handleServiceClick(service)}
              className="group hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-blue-300 hover:-translate-y-2 cursor-pointer"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {service.shortDescription}
                </CardDescription>
                <button className="text-sm text-blue-600 font-medium hover:underline">
                  Voir les détails →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dialog pour les détails du service */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedService && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <selectedService.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <DialogTitle className="text-center text-2xl">
                    {selectedService.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4 mt-4">
                  <h3 className="font-semibold text-lg">Détails du service :</h3>
                  <ul className="space-y-3 list-disc pl-5">
                    {selectedService.details.map((detail, index) => (
                      <li key={index} className="text-gray-700">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Services;