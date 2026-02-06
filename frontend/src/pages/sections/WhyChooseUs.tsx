import { Award, Gem, ShieldCheck, Users, Zap, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: 'Trusted Since 2010',
      description: 'Over 15 years of excellence in real estate services',
    },
    {
      icon: Gem,
      title: 'Premium Properties',
      description: 'Curated collection of verified luxury listings',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Verified',
      description: '100% verified property documentation and legal support',
    },
    {
      icon: Users,
      title: 'Expert Agents',
      description: '50+ certified real estate professionals at your service',
    },
    {
      icon: Zap,
      title: 'Quick Process',
      description: '24-hour response time with digital documentation',
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Always available for your queries and assistance',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="bg-light py-16 md:py-24">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark font-heading mb-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
              className="w-3 h-3 bg-brand rounded-full inline-block mr-2"
            />
            Why Choose PrimeNest?
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-dark-100 max-w-2xl mx-auto"
          >
            Your trusted partner in finding dream homes
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-light-200 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="bg-brand rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6"
                >
                  <Icon className="text-dark" size={28} strokeWidth={2.5} />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-dark font-heading mb-2 md:mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-dark-100 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;