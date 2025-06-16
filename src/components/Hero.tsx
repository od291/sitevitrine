import React from "react";
import {
  ArrowRight,
  Star,
  Users,
  Search,
  FileText,
  Target,
  MessageSquare,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const services = [
    {
      icon: <Search size={20} />,
      name: "Recrutement",
      desc: "Recherche et sélection de talents",
    },
    {
      icon: <Users size={20} />,
      name: "Externalisation",
      desc: "Gestion RH externalisée",
    },
    {
      icon: <FileText size={20} />,
      name: "Audit RH",
      desc: "Évaluation de vos processus",
    },
    {
      icon: <Target size={20} />,
      name: "Team Building",
      desc: "Renforcement d'équipe",
    },
    {
      icon: <MessageSquare size={20} />,
      name: "Coaching",
      desc: "Développement professionnel",
    },
    {
      icon: <BookOpen size={20} />,
      name: "Formation",
      desc: "Programmes sur mesure",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16 px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Partie texte - Version améliorée */}
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full w-max shadow-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-600 font-medium">
                Consultant RH Senior
              </span>
            </div>

            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
              <span className="relative inline-block">
                <span className="relative z-10">Excellence en </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100/70 z-0"></span>
              </span><span> </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-text-shimmer bg-[length:200%_100%]">
                Gestion des RH
              </span>
            </h1>

            <p className="text-xl text-gray-600 relative pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-blue-400 to-cyan-400 before:rounded-full">
              <span className="relative">
                20 ans d'expérience dans l'optimisation des stratégies
                ressources humaines pour les entreprises.
              </span>
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Recrutement",
                "Formation",
                "Conformité",
                "Paie",
                "Performance",
                "Bien-être",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="inline-block bg-gradient-to-br from-white to-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-sm border border-blue-100 hover:border-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Partie visuelle (conservée identique) */}
          <div className="lg:w-1/2 relative h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Cercles concentriques animés */}
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 m-auto rounded-full border-2 border-blue-900 opacity-70"
                    style={{
                      width: `${100 - i * 30}%`,
                      height: `${100 - i * 30}%`,
                      animation: `pulse ${6 + i * 2}s infinite ${i * 0.5}s`,
                    }}
                  />
                ))}

                {/* Centre */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-6 rounded-full shadow-xl z-10">
                  <Users className="w-10 h-10 text-white" />
                </div>

                {/* Connexions et icônes de service */}
                <div className="absolute inset-0">
                  {services.map((service, i) => {
                    const angle = i * 60 * (Math.PI / 180);
                    const x = 120 * Math.cos(angle);
                    const y = 120 * Math.sin(angle);

                    return (
                      <React.Fragment key={i}>
                        {/* Ligne de connexion individualisée */}
                        <svg
                          className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none"
                          style={{
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                          }}
                        >
                          <line
                            x1="50%"
                            y1="50%"
                            x2={`${50 + x / 3}%`}
                            y2={`${50 + y / 3}%`}
                            stroke="rgba(59, 130, 246, 0.3)"
                            strokeWidth="2"
                            strokeDasharray="100"
                            strokeDashoffset="100"
                            style={{
                              animation: `dash 0.8s ${i * 0.1}s forwards`,
                            }}
                          />
                        </svg>

                        {/* Point de service */}
                        <div
                          className={`absolute bg-white p-3 rounded-full shadow-lg flex flex-col items-center justify-center border-2 border-blue-100 transition-all hover:shadow-xl hover:border-blue-300 hover:scale-110 z-20`}
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: "translate(-50%, -50%)",
                            animation: `fadeInUp 0.5s ${i * 0.2 + 0.3}s both`,
                          }}
                        >
                          <div className="text-blue-600 mb-1">
                            {service.icon}
                          </div>
                          <span className="text-xs font-semibold text-gray-700">
                            {service.name}
                          </span>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles d'animation */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.4;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, -40%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
        @keyframes text-shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-text-shimmer {
          animation: text-shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
