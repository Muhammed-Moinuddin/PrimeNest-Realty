import { motion } from 'framer-motion';

function LogoMarquee() {
  const logos = [
    { name: 'Dubai Properties', src: '/logos/2.png' },
    { name: 'Nakheel', src: '/logos/2.png' },
    { name: 'Damac Properties', src: '/logos/3.png' },
    { name: 'Aldar Properties', src: '/logos/4.png' },
    { name: 'Meraas', src: '/logos/5.png' },
    { name: 'Sobha Realty', src: '/logos/6.png' },
    { name: 'Azizi Developments', src: '/logos/7.png' },
    { name: 'Azizi Developments', src: '/logos/8.png' },
    { name: 'Azizi Developments', src: '/logos/9.png' },
  ];

  return (
    <section className="bg-light py-20 lg:py-12">
      <div className="container-custom">
        {/* Heading with lime green accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-dark font-heading">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
              className="w-2 h-2 bg-brand rounded-full inline-block mr-2"
            />
            Trusted by Leading Developers
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-dark-100 mt-2"
          >
            Partnering with the best in real estate
          </motion.p>
        </motion.div>

        {/* Marquee Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative overflow-hidden"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-r from-light to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-l from-light to-transparent z-10"></div>

          {/* Scrolling Logos */}
          <div className="flex animate-scroll hover:pause-animation">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center h-12 md:h-16 px-3 md:px-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center h-12 md:h-16 px-3 md:px-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="h-8 md:h-12 w-auto object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LogoMarquee;