import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="w-8 h-8 text-accent-400" />
              <span className="font-bold text-xl">D2 ELEGANCE</span>
            </div>
            <p className="text-gray-400 mb-4">
              Agence digitale spécialisée en création de sites web, cartes de visite, flyers et roll-ups personnalisés.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-accent-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-accent-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="linkedin.com/in/d2-elegance-digital57" className="text-gray-400 hover:text-accent-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/equipe" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Équipe
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/realisations" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Réalisations
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-accent-400 transition-colors">
                Cartes de visite
              </li>
              <li className="text-gray-400 hover:text-accent-400 transition-colors">
                Flyers
              </li>
              <li className="text-gray-400 hover:text-accent-400 transition-colors">
                Roll-ups personnalisés
              </li>
              <li className="text-gray-400 hover:text-accent-400 transition-colors">
                Création de sites web
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              
              <li className="flex items-center">
                <Phone className="mr-2 text-accent-400 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-400">+212 7 71 88 74 12</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-accent-400 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-400">d2.elegance.agency@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} D2 ELEGANCE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;