import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  client: string;
  description: string;
  year: string;
}


const projects: Project[] = [
  {
    id: 1,
    title: "Site E-commerce Luxior",
    category: "web",
    image: "https://images.pexels.com/photos/914931/pexels-photo-914931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    client: "Luxior Bijouterie",
    description: "Création d'une boutique en ligne élégante pour une marque de bijoux haut de gamme, avec une expérience d'achat intuitive et sécurisée.",
    year: "2024"
  },
  {
    id: 2,
    title: "Identité visuelle Natura",
    category: "print",
    image: "https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    client: "Natura Cosmétiques",
    description: "Conception de l'identité visuelle complète pour une marque de cosmétiques naturels, incluant logo, cartes de visite et packaging.",
    year: "2023"
  },
  {
    id: 3,
    title: "Application mobile FitTrack",
    category: "web",
    image: "https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    client: "FitTrack",
    description: "Développement d'une application mobile de suivi fitness intuitive et performante, avec tableau de bord personnalisé et intégration de capteurs.",
    year: "2024"
  },
  {
    id: 4,
    title: "Flyers évènement culturel",
    category: "print",
    image: "https://images.pexels.com/photos/5765828/pexels-photo-5765828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    client: "Festival Arts & Culture",
    description: "Création de flyers attractifs pour un festival culturel, captant l'essence de l'événement avec un design dynamique et coloré.",
    year: "2023"
  },
  {
    id: 5,
    title: "Site vitrine cabinet juridique",
    category: "web",
    image: "https://images.pexels.com/photos/8112111/pexels-photo-8112111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    client: "Cabinet Martin & Associés",
    description: "Conception d'un site vitrine professionnel et élégant pour un cabinet d'avocats, mettant en avant leur expertise et leurs services.",
    year: "2023"
  },
  {
    id: 6,
    title: "Roll-ups salon professionnel",
    category: "print",
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    client: "TechInnovate",
    description: "Création de roll-ups impactants pour un salon technologique, avec un design moderne et informatif qui attire l'attention des visiteurs.",
    year: "2024"
  },
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("all");
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
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <>
      {/* Portfolio Header */}
      <section className="pt-32 pb-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Réalisations</h1>
            <p className="text-xl text-gray-200">
              Découvrez notre portfolio de projets réalisés avec passion et précision pour nos clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === "all"
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Tous les projets
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === "web"
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter("print")}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === "print"
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Print
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="font-light">Client: {project.client}</p>
                      <p className="font-light">Année: {project.year}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="mt-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.category === 'web' 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'bg-accent-100 text-accent-700'
                    }`}>
                      {project.category === 'web' ? 'Web' : 'Print'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
            <h2 className="section-title mb-12 pb-4">Ce que disent nos clients</h2>
            <p className="text-lg text-gray-600">
              La satisfaction de nos clients est notre plus grande récompense. Voici ce qu'ils pensent de notre collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md scroll-animation">
              <div className="flex items-center text-accent-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "D2 ELEGANCE a parfaitement saisi l'essence de notre marque et l'a traduite en un site web élégant et performant. Une équipe professionnelle et créative avec qui c'est un plaisir de travailler."
              </p>
              <div>
                <p className="font-bold">Marie Dupont</p>
                <p className="text-sm text-gray-500">Directrice, Luxior Bijouterie</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md scroll-animation">
              <div className="flex items-center text-accent-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Les flyers conçus par D2 ELEGANCE ont été un élément clé du succès de notre festival. Le design accrocheur a attiré l'attention et a parfaitement communiqué l'esprit de notre événement."
              </p>
              <div>
                <p className="font-bold">Pierre Laurent</p>
                <p className="text-sm text-gray-500">Organisateur, Festival Arts & Culture</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md scroll-animation">
              <div className="flex items-center text-accent-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Je recommande vivement D2 ELEGANCE pour leur professionnalisme et leur capacité à transformer nos idées en solutions digitales efficaces. Les roll-ups qu'ils ont créés pour notre salon ont été remarqués par tous."
              </p>
              <div>
                <p className="font-bold">Sarah Martin</p>
                <p className="text-sm text-gray-500">Responsable Marketing, TechInnovate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto scroll-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à donner vie à votre projet ?</h2>
            <p className="text-xl mb-8">
              Contactez-nous dès aujourd'hui pour transformer vos idées en réalisations exceptionnelles.
            </p>
            <a href="/contact" className="btn-secondary">
              Discutons de votre projet
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;