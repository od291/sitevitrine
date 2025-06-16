import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, FileText, Compass, Target, BookOpen, Wallet, 
  User, Lightbulb, ChartBar, ClipboardCheck, Heart, 
  Handshake, DollarSign, TrendingUp, Scale, UserPlus, Users
} from 'lucide-react';

const Experience = () => {
  const competences = [
    { name: 'Recrutement & Acquisition', icon: UserPlus, color: 'bg-blue-100 text-blue-600' },
    { name: 'Intégration & Engagement', icon: Compass, color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Administration du personnel', icon: FileText, color: 'bg-purple-100 text-purple-600' },
    { name: 'Gestion de paie', icon: Wallet, color: 'bg-pink-100 text-pink-600' },
    { name: 'Formation & Apprentissage', icon: BookOpen, color: 'bg-rose-100 text-rose-600' },
    { name: 'Gestion des performances', icon: Target, color: 'bg-emerald-100 text-emerald-600' },
    { name: 'Conformité & Risques', icon: Scale, color: 'bg-teal-100 text-teal-600' },
    { name: 'Analyse données (HRIS)', icon: ChartBar, color: 'bg-sky-100 text-sky-600' },
    { name: 'Coaching & Mentorat', icon: Users, color: 'bg-amber-100 text-amber-600' },
    { name: 'Audits RH', icon: ClipboardCheck, color: 'bg-lime-100 text-lime-600' },
    { name: 'Projets RH', icon: Lightbulb, color: 'bg-orange-100 text-orange-600' },
    { name: 'Bien-être employés', icon: Heart, color: 'bg-red-100 text-red-600' },
    { name: 'Dialogue sociale', icon: Handshake, color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Budget RH', icon: DollarSign, color: 'bg-green-100 text-green-600' },
    { name: 'KPIs RH', icon: TrendingUp, color: 'bg-teal-100 text-teal-600' }
  ];

  return (
    <section id="experience" className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
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
            20 ans d'expérience transformés en solutions sur mesure pour vos défis RH
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
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${item.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-center font-medium text-gray-800">{item.name}</h3>
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Une approche humaine et stratégique</h3>
            <p className="text-lg mb-6 opacity-90">
              Je combine expertise technique et intelligence émotionnelle pour transformer vos défis RH en opportunités de croissance.
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
    </section>
  );
};

export default Experience;