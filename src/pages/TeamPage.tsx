import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { useEffect } from 'react';
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'aya el hannach',
    role: 'Responsable Stratégie Digitale',
    bio: 'Aya dirige la stratégie digitale avec créativité et vision pour propulser votre marque.',
    image: 'AYA.jpg',
    email: 'aya@d2elegance.com',
    linkedin: 'https://linkedin.com/in/ayaelhannach',
  },
  {
    id: 2,
    name: 'wissal loukili',
    role: 'Directrice Générale',
    bio: 'Wissal supervise l\'agence avec passion, alliant leadership et expertise digitale.',
    image: 'ME1.jpg',
    email: 'wissal@d2elegance.com',
    linkedin: 'https://linkedin.com/in/wissalloukili',
  },
  {
    id: 3,
    name: 'douae choukri',
    role: 'Communication & Relation Clientèle',
    bio: 'Douae assure une communication fluide et un excellent suivi client pour D2 Elegance.',
    image: 'RASAN.jpg',
    email: 'douae@d2elegance.com',
    linkedin: 'https://linkedin.com/in/douaechoukri',
  },
  {
    id: 4,
    name: 'ibtissam el joumi',
    role: 'Responsable Administrative et Finance',
    bio: 'Ibtissam gère les aspects administratifs et financiers avec rigueur et efficacité.',
    image: 'IBTISSAM.jpg',
    email: 'ibtissam@d2elegance.com',
    linkedin: 'https://linkedin.com/in/ibtissameljoumi',
  },
];


const TeamPage = () => {
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
      {/* Team Header */}
      <section className="pt-32 pb-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre Équipe</h1>
            <p className="text-xl text-gray-200">
              Découvrez les talents passionnés qui font de D2 ELEGANCE une agence d\'exception. Notre équipe combine créativité, expertise technique et sens aigu du détail pour vous offrir un service d\'excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card scroll-animation"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-accent-400 font-medium">{member.role}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-primary-600 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-primary-600 transition-colors"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center scroll-animation">
            <h2 className="section-title mb-12 pb-4">Rejoignez Notre Équipe</h2>
            <p className="text-lg text-600 mb-8">
              Vous êtes passionné par le digital et la créativité ? Vous souhaitez rejoindre une équipe dynamique et contribuer à des projets innovants ? Explorez nos opportunités de carrière.
            </p>
            <a href="mailto:careers@d2elegance.com" className="btn-primary">
              Voir nos offres d\'emploi
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;