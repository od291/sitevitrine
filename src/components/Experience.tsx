import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
  Compass,
  Target,
  BookOpen,
  Wallet,
  User,
  Lightbulb,
  ChartBar,
  ClipboardCheck,
  Heart,
  Handshake,
  DollarSign,
  TrendingUp,
  Scale,
  UserPlus,
  Users,
  X,
} from "lucide-react";

const Experience = () => {
  const [selectedCompetence, setSelectedCompetence] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const competences = [
    {
      name: "Recrutement & Acquisition",
      icon: UserPlus,
      color: "bg-blue-100 text-blue-600",
      details: ["Plus de 800 recrutements faits depuis 20 ans."],
    },
    {
      name: "Intégration & Engagement",
      icon: Compass,
      color: "bg-indigo-100 text-indigo-600",
      details: [
        "- Plus 800 salariés orientés depuis 20 ans.",
        "- Conduite enquête de satisfaction annuellement, suivi d'analyse et plan d'action",
      ],
    },
    {
      name: "Administration du personnel",
      icon: FileText,
      color: "bg-purple-100 text-purple-600",
      details: [
        "- Gestion des dossiers du personnel : Maintenir à jour les dossiers des employés, y compris les informations personnelles, les contrats de travail et les évaluations de performance.",
        "- Gestion des absences et des congés : Gérer les absences et les congés des employés, y compris les demandes de congés et les notifications d'absence.",
        "- Gestion des données du personnel : Gérer les données du personnel, y compris les données démographiques, les données de performance et les données de formation.",
        "- Gestion logiciel du personnel : Mettre à jour systématique",
      ],
    },
    {
      name: "Gestion de paie",
      icon: Wallet,
      color: "bg-pink-100 text-pink-600",
      details: [
        "- Calcul des salaires : Calculer les salaires des employés en fonction de leur temps de travail, de leurs heures supplémentaires, de leurs primes et de leurs avantages.",
        "- Gestion des impôts et des cotisations : Gérer les impôts et les cotisations sociales des employés, y compris les retenues à la source et les cotisations de sécurité sociale.",
        "- Gestion des avantages sociaux : Gérer les avantages sociaux des employés, tels que les assurances maladie, les régimes de retraite et les congés payés.",
        "- Paiement des salaires : Effectuer les paiements des salaires aux employés, soit par chèque, soit par virement bancaire.",
        "- Déclarations fiscales : Effectuer les déclarations fiscales nécessaires, telles que les déclarations de revenus et les déclarations de cotisations sociales.",
        "- Gestion des erreurs et des litiges : Gérer les erreurs et les litiges liés à la paie, tels que les erreurs de calcul ou les contestations de salaire.",
        "- Gestion Logiciel Paie : Mettre à jour systématique.",
      ],
    },
    {
      name: "Formation & Apprentissage",
      icon: BookOpen,
      color: "bg-rose-100 text-rose-600",
      details: [
        "- Développement des compétences : Identifier les compétences nécessaires pour les employés et développer des programmes de formation pour les acquérir.",
        "- Formation continue : Offrir des opportunités de formation continue pour les employés pour améliorer leurs compétences et leurs connaissances.",
        "- Apprentissage en ligne : Utiliser les plateformes d'apprentissage en ligne pour offrir des formations flexibles et accessibles.",
        "- Mentorat et coaching : Mettre en place des programmes de mentorat et de coaching pour aider les employés à développer leurs compétences et à atteindre leurs objectifs.",
        "- Évaluation des besoins de formation : Évaluer les besoins de formation des employés pour déterminer les domaines où ils ont besoin de développement.",
        "- Conception de programmes de formation : Concevoir des programmes de formation qui répondent aux besoins des employés et de l'organisation.",
        "- Évaluation de l'efficacité : Évaluer l'efficacité des programmes de formation pour déterminer leur impact sur les employés et l'organisation",
      ],
    },
    {
      name: "Gestion des performances",
      icon: Target,
      color: "bg-emerald-100 text-emerald-600",
      details: [
        "- Conduite une session de sensibilisation sur la gestion de performance",
        "- Définition des objectifs SMART : Définir des objectifs clairs et mesurables pour les employés.",
        "- Évaluation des performances : Évaluer les performances des employés de manière régulière.",
        "- Feedback et coaching : Fournir des feedbacks constructifs et du coaching pour aider les employés à améliorer leurs performances.",
        "- Identification des besoins de développement : Identifier les besoins de développement des employés pour améliorer leurs compétences et leurs connaissances.",
        "- Planification du développement : Créer des plans de développement pour les employés pour les aider à atteindre leurs objectifs.",
        "- Suivi et évaluation : Suivre et évaluer les progrès des employés pour déterminer l'efficacité des plans de développement.",
      ],
    },
    {
      name: "Conformité & Risques",
      icon: Scale,
      color: "bg-teal-100 text-teal-600",
      details: [
        "Conformité aux lois et réglementations : Assurer la conformité aux lois et réglementations relatives au travail, telles que les lois sur l'égalité, la discrimination, la santé et la sécurité.",
        "Gestion des risques RH : Identifier et gérer les risques RH, tels que les litiges, les plaintes, les accidents du travail.",
        "Politiques et procédures : Établir des politiques et procédures claires pour gérer les risques RH.",
        "Formation et sensibilisation : Fournir des formations et des sensibilisations aux employés sur les politiques et procédures RH.",
        "Audit et évaluation : Effectuer des audits et des évaluations régulières pour assurer la conformité et identifier les domaines d'amélioration.",
        "Gestion des risques RH :",
        "- Les litiges et les plaintes",
        "- Les accidents du travail",
        "- La non-conformité aux lois et réglementations",
        "- Les problèmes de santé et de sécurité",
        "- Les conflits et les harcèlements",
      ],
    },
    {
      name: "Analyse données (HRIS)",
      icon: ChartBar,
      color: "bg-sky-100 text-sky-600",
      details: [
        "- Collecte de données : Collecter des données sur les employés, les performances, les formations, les départs, etc.",
        "- Analyse des tendances : Analyser les tendances et les modèles dans les données pour identifier les domaines d'amélioration.",
        "- Indicateurs clés de performance (KPI) : Définir et suivre des KPI pour mesurer l'efficacité des stratégies RH.",
        "- Visualisation des données : Utiliser des outils de visualisation pour présenter les données de manière claire et compréhensible.",
        "- Prise de décision : Utiliser les données pour prendre des décisions éclairées en matière de recrutement, de formation, de développement, etc.",
      ],
    },
    {
      name: "Coaching & Mentorat",
      icon: Users,
      color: "bg-amber-100 text-amber-600",
      details: [
        "Coaching :",
        "- Développement des compétences : Aider les employés à développer des compétences spécifiques.",
        "- Amélioration des performances : Améliorer les performances des employés en leur fournissant des feedbacks et des conseils.",
        "- Objectifs personnalisés : Aider les employés à définir et à atteindre des objectifs personnalisés.",
        "Mentoring :",
        "- Partage d'expérience : Partager l'expérience et les connaissances avec les employés.",
        "- Développement de carrière : Aider les employés à développer leur carrière et à atteindre leurs objectifs.",
        "- Réseau professionnel : Fournir un réseau professionnel et des contacts utiles.",
      ],
    },
    {
      name: "Audits RH",
      icon: ClipboardCheck,
      color: "bg-lime-100 text-lime-600",
      details: [
        "- Amélioration de la conformité : S'assurer que les pratiques RH sont conformes aux lois et réglementations.",
        "- Optimisation des processus : Optimiser les processus RH pour améliorer l'efficacité et la productivité.",
        "- Développement des talents : Identifier les domaines de développement pour les employés et les managers.",
        "- Gestion des risques : Identifier et atténuer les risques RH.",
      ],
    },
    {
      name: "Projets RH",
      icon: Lightbulb,
      color: "bg-orange-100 text-orange-600",
      details: [
        "Plus de 20 projets réalisés en 20 ans sur :",
        "- La Mise en place d'un système de gestion des performances",
        "- Le Recrutement et intégration de nouveaux employés",
        "- La Formation et développement des employés",
        "- La Gestion de la diversité et de l'inclusion",
        "- La Mise en place d'un système de gestion des talents",
        "- L'Amélioration de la communication interne",
        "- La Gestion du changement",
        "- L'Évaluation et amélioration de la culture d'entreprise",
        "- Le Bien être des employés",
        "- Les Reconnaissances",
      ],
    },
    {
      name: "Bien-être employés",
      icon: Heart,
      color: "bg-red-100 text-red-600",
      details: [
        "- Santé physique et mentale : Promouvoir la santé physique et mentale des employés.",
        "- Équilibre travail-vie personnelle : Aider les employés à trouver un équilibre entre leur travail et leur vie personnelle.",
        "- Environnement de travail sain : Créer un environnement de travail sain et sûr.",
        "- Soutien et ressources : Fournir des ressources et un soutien pour les employés qui en ont besoin.",
        "- Reconnaissance et appréciation : Reconnaître et apprécier les contributions des employés.",
      ],
    },
    {
      name: "Dialogue sociale",
      icon: Handshake,
      color: "bg-cyan-100 text-cyan-600",
      details: [
        "- Amélioration des relations : Améliorer les relations entre les employés et les employeurs.",
        "- Augmentation de la confiance : Augmenter la confiance entre les parties.",
        "- Résolution des problèmes : Résoudre les problèmes de manière efficace.",
        "- Amélioration des conditions de travail : Améliorer les conditions de travail pour les employés.",
      ],
    },
    {
      name: "Budget RH",
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
      details: [
        "1.000.000 $ budget géré tous les ans sur :",
        "- Salaires et avantages sociaux",
        "- Formations et développement",
        "- Recrutement et intégration",
        "- Gestion des performances",
        "- Événements RH: Team Building, social, etc.",
      ],
    },
    {
      name: "KPIs RH",
      icon: TrendingUp,
      color: "bg-teal-100 text-teal-600",
      details: [
        "Recrutement :",
        "- Délai de recrutement moyen",
        "- Coût total par recrutement",
        "- Turnover des nouveaux collaborateurs à 3 mois, 6 mois, 1 an et 2 ans",
        "- Taux d'acceptation des offres",
        "- Équilibre hommes/femmes dans le recrutement",
        "- Score de diversité du recrutement",
        "- Satisfaction à l'issue de l'onboarding",
        "QVT (qualité de vie au travail) :",
        "- Employé net promoteur score",
        "- Taux d'engagement des salariés vis-à-vis des dispositifs RH",
        "- Taux de rotation du personnel (turnover)",
        "Accueillir vos nouveaux talents :",
        "- Temps de formation par collaborateur",
        "- Taux de promotion interne",
        "- Taux de réussite aux formations",
        "- Niveau de compétence des collaborateurs",
        "- Coût de la formation par collaborateur",
        "Performance RH globale :",
        "- Chiffre d'affaires par collaborateur",
        "- Productivité moyenne",
        "- Évolution de la masse salariale",
        "- Taux de satisfaction et évolution des entretiens annuels",
        "- Taux d'atteinte des objectifs fixés",
        "Sociodémographiques :",
        "- Âge moyen et pyramide des âges",
        "- Répartition par genre et statut des salariés",
        "- Répartition par types de contrats",
        "- Volume d'heures supplémentaires",
        "- Nombre et intensité de conflits déclarés",
        "- Taux d'absentéisme",
      ],
    },
  ];

  const openModal = (competence) => {
    setSelectedCompetence(competence);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="experience"
      className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-200 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mon Expertise RH
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            20 ans d'expérience transformés en solutions sur mesure pour vos
            défis RH
          </p>
        </motion.div>

        {/* Interactive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {competences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, scale: 1.05 }}
                onClick={() => openModal(item)}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${item.color}`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-center font-medium text-gray-800">
                  {item.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Animated callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Une approche humaine et stratégique
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Je combine expertise technique et intelligence émotionnelle pour
              transformer vos défis RH en opportunités de croissance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm flex items-center gap-2"
              >
                <ClipboardCheck className="w-5 h-5" />
                <span>Conformité</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm flex items-center gap-2"
              >
                <ChartBar className="w-5 h-5" />
                <span>Performance</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                <span>Engagement</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3D Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCompetence && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 200,
                }}
                className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <div className="absolute top-4 right-4">
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                <div className="p-8">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${selectedCompetence.color}`}
                  >
                    <selectedCompetence.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    {selectedCompetence.name}
                  </h3>

                  <div className="space-y-4">
                    {selectedCompetence.details.map((detail, index) => {
                      if (detail.endsWith(":")) {
                        // C'est un titre de section (comme "Coaching :")
                        return (
                          <motion.h4
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 + 0.3 }}
                            className="font-semibold text-gray-700 mt-4"
                          >
                            {detail}
                          </motion.h4>
                        );
                      } else if (detail.startsWith("-")) {
                        // C'est un élément de liste à puces
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 + 0.3 }}
                            className="flex items-start ml-6"
                          >
                            <span className="mr-2 text-gray-500">•</span>
                            <span className="text-gray-600">
                              {detail.substring(1).trim()}
                            </span>
                          </motion.div>
                        );
                      } else {
                        // C'est un paragraphe normal
                        return (
                          <motion.p
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 + 0.3 }}
                            className="text-gray-600"
                          >
                            {detail}
                          </motion.p>
                        );
                      }
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
