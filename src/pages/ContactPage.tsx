import { useState ,useEffect} from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Pour n’animer qu’une fois
      }
    });
  }, {
    threshold: 0.1, // Déclenche quand 10% de l’élément est visible
  });

  const elements = document.querySelectorAll('.scroll-animation');
  elements.forEach(el => observer.observe(el));

  return () => {
    elements.forEach(el => observer.unobserve(el));
  };
}, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be replaced with actual form submission logic
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt.',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      {/* Contact Header */}
      <section className="pt-32 pb-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl text-gray-200">
              Vous avez un projet en tête ? Discutons-en ensemble et voyons comment nous pouvons vous aider à le concrétiser.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 py-20 text-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 scroll-animation">
              <div>
                <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
                <p className="text-gray-600 mb-8">
                  N'hésitez pas à nous contacter par téléphone, email ou en remplissant le formulaire. Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">Adresse</h3>
                    <p className="text-gray-600">123 Rue de l'Élégance, 75000 Paris, France</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">contact@d2elegance.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">Horaires d'ouverture</h3>
                    <p className="text-gray-600">Lundi - Vendredi : 9h00 - 18h00</p>
                    <p className="text-gray-600">Samedi : Sur rendez-vous</p>
                    <p className="text-gray-600">Dimanche : Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-md rounded-lg p-8 scroll-animation">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              
              {formStatus && (
                <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-success-50 text-success-700' : 'bg-error-50 text-error-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="information">Demande d'information</option>
                      <option value="collaboration">Proposition de collaboration</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none transition-colors"
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="scroll-animation">
            <h2 className="text-2xl font-bold mb-6 text-center">Notre emplacement</h2>
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                title="D2 ELEGANCE location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457554022!2d2.2768486193425374!3d48.85893658426715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1632930104789!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;