import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'andriandislala@gmail.com',
      description: 'Réponse sous 24h',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+261 34 05 158 61',
      description: 'Lun-Ven 9h-18h',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+261 32 40 124 55',
      description: 'Lun-Ven 9h-18h',
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'David Andriandislala',
      description: 'Connectez-vous avec moi',
      color: 'bg-blue-100 text-blue-600',
      link: 'https://www.linkedin.com/in/david-yjioletan-andriandislala-715b10129/'
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Background decorative elements */}
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
            Travaillons ensemble
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discutons de vos besoins en RH et trouvons des solutions sur mesure pour votre organisation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-xl ${method.color} flex items-center justify-center flex-shrink-0`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                      {method.link ? (
                        <a 
                          href={method.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 font-medium mb-1 hover:underline block"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-medium mb-1">{method.value}</p>
                      )}
                      <p className="text-gray-500 text-sm">{method.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <h3 className="text-2xl font-bold">Envoyez-moi un message</h3>
                <p className="opacity-90">Je vous répondrai dans les plus brefs délais</p>
              </div>
              
              <div className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Nom complet *
                      </label>
                      <Input 
                        placeholder="Votre nom"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email *
                      </label>
                      <Input 
                        type="email"
                        placeholder="votre@email.com"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Téléphone
                    </label>
                    <Input 
                      type="tel"
                      placeholder="+261 XX XXX XX"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Décrivez votre besoin RH ou posez-moi vos questions..."
                      rows={5}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer votre message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;