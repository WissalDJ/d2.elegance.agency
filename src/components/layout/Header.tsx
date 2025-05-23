import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white text-gray-800 shadow-md py-3'
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center">
          <NavLink 
            to="/" 
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
          <img 
            src="logoagency.png" 
            className={`w-8 h-8 ${isScrolled ? 'text-primary-600' : 'text-accent-400'}`} 
            alt="Logo" 
          />
            <span className="font-bold text-xl md:text-2xl">D2 ELEGANCE</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium hover:text-accent-500 transition-colors ${
                  isActive ? 'text-accent-500' : ''
                }`
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/equipe"
              className={({ isActive }) =>
                `font-medium hover:text-accent-500 transition-colors ${
                  isActive ? 'text-accent-500' : ''
                }`
              }
            >
              Équipe
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `font-medium hover:text-accent-500 transition-colors ${
                  isActive ? 'text-accent-500' : ''
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/realisations"
              className={({ isActive }) =>
                `font-medium hover:text-accent-500 transition-colors ${
                  isActive ? 'text-accent-500' : ''
                }`
              }
            >
              Réalisations
            </NavLink>
            <NavLink
              to="/contact"
              className="btn-primary"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-md py-4 px-4 text-gray-800 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-medium py-2 hover:text-accent-500 transition-colors ${
                    isActive ? 'text-accent-500' : ''
                  }`
                }
                onClick={closeMenu}
              >
                Accueil
              </NavLink>
              <NavLink
                to="/equipe"
                className={({ isActive }) =>
                  `font-medium py-2 hover:text-accent-500 transition-colors ${
                    isActive ? 'text-accent-500' : ''
                  }`
                }
                onClick={closeMenu}
              >
                Équipe
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `font-medium py-2 hover:text-accent-500 transition-colors ${
                    isActive ? 'text-accent-500' : ''
                  }`
                }
                onClick={closeMenu}
              >
                Services
              </NavLink>
              <NavLink
                to="/realisations"
                className={({ isActive }) =>
                  `font-medium py-2 hover:text-accent-500 transition-colors ${
                    isActive ? 'text-accent-500' : ''
                  }`
                }
                onClick={closeMenu}
              >
                Réalisations
              </NavLink>
              <NavLink
                to="/contact"
                className="btn-primary text-center"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;