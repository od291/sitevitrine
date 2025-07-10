import React from "react";
import {
  Award,
  Users,
  Shield,
  CheckCircle,
  Lock,
  Heart,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { icon: Award, value: "20+", label: "Années d'expérience" },
    { icon: Users, value: "100+", label: "Clients accompagnés" },
    { icon: CheckCircle, value: "50+", label: "Projets RH réussis" },
    { icon: Heart, value: "100%", label: "Engagement client" },
  ];

  const values = [
    { icon: Shield, title: "Respect", desc: "De la dignité humaine" },
    { icon: CheckCircle, title: "Intégrité", desc: "Transparence totale" },
    { icon: Lock, title: "Confidentialité", desc: "Données protégées" },
    { icon: Users, title: "Redevabilité", desc: "Engagement mutuel" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-white relative"
    >
      {/* Élément d'attrait visuel discret */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 rounded-full filter blur-3xl opacity-10 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Partie texte */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-yellow-400 w-5 h-5" />
                <span className="text-sm font-medium text-blue-600">
                  EXPERT RH CERTIFIÉ
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Expertise RH{" "}
                <span className="text-blue-600 relative">
                  Sur Mesure
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 opacity-40"></span>
                </span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Consultant RH indépendant avec{" "}
                  <strong className="text-blue-600">20 ans d'expérience</strong>{" "}
                  dans l'accompagnement stratégique des entreprises.
                </p>

                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                  }}
                  className="mt-8 p-6 bg-white rounded-lg shadow-md border border-blue-100 relative overflow-hidden"
                >
                  <div className="absolute -right-6 -top-6 w-20 h-20 bg-blue-100 rounded-full opacity-10"></div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 relative">
                    <Users className="text-blue-500" /> Ma mission :
                  </h3>
                  <p>
                    Résoudre vos défis RH et améliorer durablement les
                    performances de votre organisation.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Valeurs */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.1)",
                  }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-sm border border-blue-50 flex items-start gap-3"
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="p-2 bg-blue-100 rounded-full text-blue-600"
                  >
                    <value.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Statistiques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 w-full"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="bg-white p-4 rounded-xl shadow-md border border-blue-100 text-center h-full relative overflow-hidden"
                >
                  <div className="absolute -right-4 -bottom-4 opacity-10">
                    <stat.icon className="w-16 h-16 text-blue-200" />
                  </div>
                  <div className="relative">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-xs">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Partie visuelle */}
          <div className="space-y-8 sticky top-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full max-w-md mx-auto group"
            >
              <div className="absolute -inset-4 bg-blue-200 rounded-2xl opacity-20 transform rotate-1 -z-10 group-hover:rotate-2 transition-all duration-500"></div>
              <div className="absolute -inset-2 bg-blue-100 rounded-2xl opacity-30 transform -rotate-1 -z-10 group-hover:-rotate-2 transition-all duration-500"></div>

              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl border-4 border-white transform rotate-0 group-hover:rotate-1 transition-all duration-500">
                <img
                  src="/david-rh-consultant.jpg"
                  alt="David Andriandislala - Consultant RH"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  style={{
                    width: "calc(100% + 65px)",
                    height: "calc(100% + 65px)",
                    margin: "-4px",
                    objectPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg border-2 border-white/50"
              >
                <div className="text-lg font-bold">20+ ans</div>
                <div className="text-xs">d'expertise</div>
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-2xl text-white text-center shadow-lg max-w-md mx-auto relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full"></div>
              <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-white/5 rounded-full"></div>

              <h3 className="text-xl font-semibold mb-3 relative z-10">
                Un projet RH ?
              </h3>
              <p className="mb-4 text-sm opacity-90 relative z-10">
                Contactez-moi pour une consultation personnalisée
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-white text-blue-600 px-5 py-1.5 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors relative z-10"
              >
                Discutons-en
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
