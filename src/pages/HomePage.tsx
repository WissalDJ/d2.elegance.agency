import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, Award, Palette, Monitor, FileText, Image } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const HomePage = () => {
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
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center text-white">
        <video
          className="video-background"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        >
          <source
            src="https://player.vimeo.com/external/446766811.sd.mp4?s=5cd239c99d60220d88d722df8b9f0f397fa75e55&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="container mx-auto px-4 md:px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Votre vision, <span className="text-accent-400">notre expertise</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Créons ensemble l'identité digitale qui fera briller votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/services" className="btn-primary">
                Découvrir nos services
              </Link>
              <Link to="/contact" className="btn-secondary">
                Demander un devis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
            <h2 className="section-title mb-12 pb-4">À propos de D2 ELEGANCE</h2>
            <p className="text-lg text-gray-600 mb-6">
              D2 ELEGANCE est une agence digitale créative dédiée à l'excellence et à l'innovation. Notre mission est de transformer vos idées en solutions digitales élégantes et efficaces.
            </p>
            <p className="text-lg text-gray-600">
              Avec plus de 5 ans d'expérience dans le domaine, notre équipe de professionnels passionnés est prête à relever tous vos défis créatifs et techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center scroll-animation">
              <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col items-center">
                <Briefcase className="w-16 h-16 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Notre Mission</h3>
                <p className="text-gray-600">
                  Créer des solutions digitales sur mesure qui vous aident à atteindre vos objectifs commerciaux tout en reflétant l'essence de votre marque.
                </p>
              </div>
            </div>

            <div className="text-center scroll-animation">
              <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col items-center">
                <Users className="w-16 h-16 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Notre Équipe</h3>
                <p className="text-gray-600">
                  Des professionnels talentueux et passionnés qui combinent créativité, expertise technique et sens aigu du détail pour des résultats exceptionnels.
                </p>
              </div>
            </div>

            <div className="text-center scroll-animation">
              <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col items-center">
                <Award className="w-16 h-16 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Nos Valeurs</h3>
                <p className="text-gray-600">
                  Excellence, innovation, intégrité et collaboration sont les piliers qui guident notre travail et notre relation avec chaque client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
            <h2 className="section-title mb-12 pb-4">Nos Services</h2>
            <p className="text-lg text-gray-600">
              Explorez notre gamme de services digitaux conçus pour répondre à tous vos besoins en matière de communication visuelle et de présence en ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card scroll-animation">
              <div className="p-6">
                <Monitor className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sites Web</h3>
                <p className="text-gray-600 mb-4">
                  Création de sites vitrines, e-commerce et solutions sur-mesure adaptés à vos besoins spécifiques.
                </p>
                <Link to="/services" className="text-primary-600 font-medium inline-flex items-center">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="card scroll-animation">
              <div className="p-6">
                <Briefcase className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cartes de Visite</h3>
                <p className="text-gray-600 mb-4">
                  Cartes professionnelles classiques, pliées, digitales ou carrées pour une première impression mémorable.
                </p>
                <Link to="/services" className="text-primary-600 font-medium inline-flex items-center">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="card scroll-animation">
              <div className="p-6">
                <FileText className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Flyers</h3>
                <p className="text-gray-600 mb-4">
                  Flyers de lancement, événementiels ou informatifs conçus pour captiver votre audience cible.
                </p>
                <Link to="/services" className="text-primary-600 font-medium inline-flex items-center">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="card scroll-animation">
              <div className="p-6">
                <Image className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Roll-ups</h3>
                <p className="text-gray-600 mb-4">
                  Roll-ups personnalisés pour vos événements, salons et présentations commerciales.
                </p>
                <Link to="/services" className="text-primary-600 font-medium inline-flex items-center">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 scroll-animation">
            <Link to="/services" className="btn-primary">
              Tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto scroll-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à donner vie à votre projet ?</h2>
            <p className="text-xl mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <Link to="/contact" className="btn-secondary">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;