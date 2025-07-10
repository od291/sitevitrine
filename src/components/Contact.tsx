import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Linkedin,
  Paperclip,
  XCircle,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "andriandislala@gmail.com",
      description: "Réponse sous 24h",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+261 34 05 158 61",
      description: "Lun-Ven 9h-18h",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+261 32 40 124 55",
      description: "Lun-Ven 9h-18h",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "David Andriandislala",
      description: "Connectez-vous avec moi",
      color: "bg-blue-100 text-blue-600",
      link: "https://www.linkedin.com/in/david-yjioletan-andriandislala-715b10129/",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);
      if (file) {
        formDataToSend.append("file", file);
      }

      const response = await fetch("https://backdavy.onrender.com/api/send-email", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Message envoyé!</span>
            </div>
          ),
          description: "Votre message a été envoyé avec succès.",
          variant: "default",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setFile(null);
      } else {
        toast({
          title: (
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              <span>Erreur</span>
            </div>
          ),
          description:
            data.message ||
            "Une erreur s'est produite lors de l'envoi du message.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: (
          <div className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-500" />
            <span>Erreur</span>
          </div>
        ),
        description: "Une erreur s'est produite lors de l'envoi du message.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden"
    >
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
            Discutons de vos besoins en RH et trouvons des solutions sur mesure
            pour votre organisation.
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
                    <div
                      className={`w-14 h-14 rounded-xl ${method.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {method.title}
                      </h3>
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
                        <p className="text-gray-800 font-medium mb-1">
                          {method.value}
                        </p>
                      )}
                      <p className="text-gray-500 text-sm">
                        {method.description}
                      </p>
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
                <p className="opacity-90">
                  Je vous répondrai dans les plus brefs délais
                </p>
              </div>

              <div className="p-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Nom complet *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Objet *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Objet de votre message"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre besoin RH ou posez-moi vos questions..."
                      rows={5}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 mb-2"
                      required
                    />

                    {/* Champ fichier */}
                    <div className="flex items-center">
                      <label className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer">
                        <Paperclip className="w-5 h-5 mr-2 text-gray-500" />
                        {file ? file.name : "Joindre un fichier"}
                        <input
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                      {file && (
                        <button
                          type="button"
                          onClick={() => setFile(null)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          Supprimer
                        </button>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-6"
                  >
                    {isLoading ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer votre message
                      </>
                    )}
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
