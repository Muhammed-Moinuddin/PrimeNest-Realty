import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from './../../assets/primenest-white-logo.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
    ],
    properties: [
      { name: 'Buy Property', path: '/properties' },
      { name: 'Rent Property', path: '/rent' },
      { name: 'Sell Property', path: '/sell' },
      { name: 'Featured Listings', path: '/featured' },
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Market Insights', path: '/insights' },
      { name: 'Property Guides', path: '/guides' },
      { name: 'FAQs', path: '/faqs' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Disclaimer', path: '/disclaimer' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com', name: 'Facebook' },
    { icon: Twitter, url: 'https://twitter.com', name: 'Twitter' },
    { icon: Instagram, url: 'https://instagram.com', name: 'Instagram' },
    { icon: Linkedin, url: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: Youtube, url: 'https://youtube.com', name: 'YouTube' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <footer className="bg-dark text-light">
      <div className="container-custom">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="pt-16 pb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            
            {/* Brand Section - Takes 2 columns on large screens */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  src={Logo}
                  alt="PrimeNest Logo"
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-light/70 mb-6 leading-relaxed">
                Your trusted partner in finding the perfect property. We make your dream home a reality with expert guidance and premium listings.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <motion.a
                  whileHover={{ x: 4 }}
                  href="tel:+971123456789"
                  className="flex items-center gap-3 text-light/70 hover:text-brand transition-colors"
                >
                  <Phone size={18} />
                  <span>+971 12 345 6789</span>
                </motion.a>
                <motion.a
                  whileHover={{ x: 4 }}
                  href="mailto:info@primenest.com"
                  className="flex items-center gap-3 text-light/70 hover:text-brand transition-colors"
                >
                  <Mail size={18} />
                  <span>info@primenest.com</span>
                </motion.a>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 text-light/70"
                >
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>Business Bay, Dubai, UAE</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold font-heading mb-4 text-brand">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-light/70 hover:text-light hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Properties Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold font-heading mb-4 text-brand">Properties</h3>
              <ul className="space-y-3">
                {footerLinks.properties.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-light/70 hover:text-light hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold font-heading mb-4 text-brand">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-light/70 hover:text-light hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold font-heading mb-4 text-brand">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-light/70 hover:text-light hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-light/10"
          >
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold font-heading mb-2">Stay Updated</h3>
              <p className="text-light/70 mb-4">
                Subscribe to our newsletter for the latest property listings and market insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-light/5 border border-light/10 rounded-xl text-light placeholder:text-light/40 focus:outline-none focus:border-brand transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 bg-brand hover:bg-brand-400 text-dark font-semibold rounded-xl transition-colors whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <span className="text-light/70 mr-2">Follow us:</span>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center bg-light/5 hover:bg-brand border border-light/10 hover:border-brand rounded-full text-light hover:text-dark transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="py-6 border-t border-light/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-light/50">
            <p>© {currentYear} PrimeNest Realty. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/sitemap" className="hover:text-light transition-colors">
                Sitemap
              </Link>
              <Link to="/accessibility" className="hover:text-light transition-colors">
                Accessibility
              </Link>
              <span>Made with ❤️ by M.Moinuddin</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;