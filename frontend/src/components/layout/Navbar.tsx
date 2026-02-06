import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Logo from './../../assets/prime-nest-logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 60], [1, 0.85]);
  const blur = useTransform(scrollY, [0, 60], ['blur(0px)', 'blur(8px)']);

  return (
    <motion.div
    initial={{ opacity: 0, y: -24, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
    className="w-full flex justify-center sticky top-5 mt-5 z-50"
    >
      <motion.div className="w-[80%] md:w-[80%] lg:w-[70%] relative" style={{ backdropFilter: blur }}>

        {/* NAVBAR */}
        <motion.nav className="bg-light-200 rounded-3xl" style={{ opacity: bgOpacity }}>
          <div className="px-4 py-3">
            <div className="flex items-center justify-between h-16">

              {/* LOGO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
              >
                <Link to="/" className="flex items-center">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="h-10 md:h-12 lg:h-14 w-auto"
                  />
                </Link>
              </motion.div>

              {/* DESKTOP LINKS */}
              <div className="hidden lg:flex items-center gap-8">
                {['New Launches', 'Developments', 'Progress', 'Company'].map((item) => (
                  <Link
                    key={item}
                    to="/"
                    className="relative text-dark font-medium group"
                  >
                    {item}
                    {/* underline */}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>

              {/* DESKTOP CTA */}
              <div className="hidden lg:flex">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-dark text-light hover:text-brand px-6 py-3 rounded-xl transition-colors duration-300"
                >
                  Get in Touch
                </motion.button>
              </div>

              {/* MOBILE BUTTON */}
             <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative w-8 h-8 flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ opacity: bgOpacity, backdropFilter: blur }}
              className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-light-200 rounded-3xl shadow-md"
            >
              <div className="px-4 py-6">
                <div className="flex flex-col gap-4">
                  {['New Launches', 'Developments', 'Progress', 'Company'].map((item) => (
                    <Link
                      key={item}
                      to="/"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-dark py-2 font-medium"
                    >
                      {item}
                    </Link>
                  ))}

                  <div className="pt-4 border-t border-gray-300">
                    <button className="w-full bg-dark text-light hover:text-brand px-6 py-3 rounded-xl transition-colors duration-300">
                      Get in Touch
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </motion.div>
  );
}

export default Navbar;
