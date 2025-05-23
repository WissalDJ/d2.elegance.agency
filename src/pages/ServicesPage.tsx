import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Monitor, Briefcase, FileText, Image, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
interface Service {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 'web',
    title: 'Création de Sites Web',
    icon: <Monitor className="w-10 h-10 text-primary-600" />,
    description: 'Sites vitrines élégants, boutiques e-commerce performantes ou solutions web sur-mesure adaptées à vos besoins spécifiques.',
    features: [
      'Sites vitrines professionnels',
      'Boutiques e-commerce',
      'Applications web sur-mesure',
      'Design responsive sur tous appareils',
      'Optimisation SEO',
      'Performance et vitesse de chargement'
    ],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'cartes',
    title: 'Cartes de Visite',
    icon: <Briefcase className="w-10 h-10 text-primary-600" />,
    description: 'Cartes professionnelles élégantes et mémorables qui reflètent l\'identité de votre marque et font une première impression percutante.',
    features: [
      'Cartes de visite classiques',
      'Formats pliés et originaux',
      'Cartes de visite digitales',
      'Designs personnalisés',
      'Impression haute qualité',
      'Options de finition premium'
    ],
    image: 'https://images.pexels.com/photos/6120392/pexels-photo-6120392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'flyers',
    title: 'Flyers',
    icon: <FileText className="w-10 h-10 text-primary-600" />,
    description: 'Flyers impactants pour vos lancements, événements ou campagnes d\'information, conçus pour capter l\'attention et transmettre votre message efficacement.',
    features: [
      'Flyers promotionnels',
      'Dépliants informatifs',
      'Flyers événementiels',
      'Formats standard et personnalisés',
      'Design accrocheur',
      'Impression de qualité professionnelle'
    ],
    image: 'https://images.pexels.com/photos/6224/hands-product-design-office.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rollups',
    title: 'Roll-ups Personnalisés',
    icon: <Image className="w-10 h-10 text-primary-600" />,
    description: 'Roll-ups élégants et durables pour vos salons, conférences et événements professionnels, offrant une visibilité maximale à votre marque.',
    features: [
      'Roll-ups standard et premium',
      'Formats adaptés à vos espaces',
      'Design impactant',
      'Structure robuste et durable',
      'Sac de transport inclus',
      'Installation facile et rapide'
    ],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const ServicesPage = () => {
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
  return (
    <>
      {/* Services Header */}
      {/* <section className="pt-32 pb-16 bg-blue-700 text-white"> */}

      <section className="pt-32 pb-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl text-gray-200">
              Des solutions digitales complètes pour répondre à tous vos besoins en communication visuelle et présence en ligne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="scroll-animation"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                  <div className="w-full lg:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h2 className="text-3xl font-bold ml-3">{service.title}</h2>
                    </div>
                    <p className="text-lg text-white-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary">
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
            <h2 className="section-title mb-12 pb-4">Notre Processus</h2>
            <p className="text-lg text-gray-600">
              Une approche méthodique et collaborative pour transformer vos idées en solutions concrètes et efficaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center scroll-animation">
              <div className="relative">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-600">
                Nous prenons le temps de comprendre votre entreprise, vos objectifs et vos besoins spécifiques.
              </p>
            </div>

            <div className="text-center scroll-animation">
              <div className="relative">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Conception</h3>
              <p className="text-gray-600">
                Nous élaborons des concepts créatifs et des stratégies adaptées à votre marque et à votre audience.
              </p>
            </div>

            <div className="text-center scroll-animation">
              <div className="relative">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Création</h3>
              <p className="text-gray-600">
                Notre équipe réalise votre projet avec soin, en accordant une attention particulière aux détails.
              </p>
            </div>

            <div className="text-center scroll-animation">
              <div className="relative">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Livraison</h3>
              <p className="text-gray-600">
                Nous finalisons et livrons votre projet dans les délais convenus, avec un suivi personnalisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-500 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto scroll-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl mb-8">
              Contactez-nous dès aujourd\'hui pour discuter de vos besoins et obtenir un devis personnalisé sans engagement.
            </p>
            <Link to="/contact" className="bg-white text-accent-700 hover:bg-gray-100 px-6 py-3 font-medium rounded-md shadow-md transition-all duration-300">
              Contactez-nous maintenant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;