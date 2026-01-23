import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './../../assets/prime-nest-logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex justify-center sticky top-5 mt-5 z-50">
      <div className="w-[80%] md:w-[80%] lg:w-[70%] relative">
        <nav className="bg-light-200 rounded-3xl">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="h-10 md:h-12 lg:h-14 w-auto" />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-8">
                <Link to="/" className="text-dark">Features</Link>
                <Link to="/properties" className="text-dark">Pricing</Link>
                <Link to="/about" className="text-dark">Company</Link>
                <Link to="/contact" className="text-dark">Contacts</Link>
              </div>

              {/* Desktop Auth */}
              <div className="hidden lg:flex items-center gap-4">
                <button className="bg-dark text-light hover:text-brand px-6 py-3 rounded-xl transition-colors duration-300">
                  Create Account
                </button>
              </div>

              {/* Mobile Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden text-dark transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Absolute, below navbar */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-light-200 rounded-3xl shadow-md">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-dark py-2" onClick={toggleMenu}>Features</Link>
                <Link to="/properties" className="text-dark py-2" onClick={toggleMenu}>Pricing</Link>
                <Link to="/about" className="text-dark py-2" onClick={toggleMenu}>Company</Link>
                <Link to="/contact" className="text-dark py-2" onClick={toggleMenu}>Contacts</Link>
                
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-300">
                  <button className="bg-dark text-light hover:text-brand px-6 py-3 rounded-2xl transition-colors duration-300">
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;