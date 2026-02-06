import { motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import type { Variants } from 'framer-motion';

export default function ContactSection() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="bg-light text-dark py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-semibold leading-tight mb-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
              className="w-3 h-3 bg-brand rounded-full inline-block mr-2"
            />
            Let's Find Your <br /> Perfect Property
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-dark text-lg max-w-lg mb-8"
          >
            Whether you're buying, selling, or investing — our experts are ready
            to guide you every step of the way.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 mt-8"
          >
            {[
              'Trusted by 500+ clients',
              'Local market experts',
              'Fast response time',
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <motion.span
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-brand"
                >
                  <Check className="h-4 w-4 text-black" />
                </motion.span>
                <p className="text-md text-dark/80">{text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8"
          >
            <p className="text-dark/60 text-sm">Call us directly</p>
            <motion.p
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-lg font-medium cursor-pointer inline-block"
            >
              +1 (306) 1234567
            </motion.p>
          </motion.div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-light-200 backdrop-blur rounded-2xl p-8"
        >
          <form className="space-y-6">
            <motion.input
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Your Name"
              className="w-full bg-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
            />

            <motion.input
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Email Address"
              className="w-full bg-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
            />

            <motion.textarea
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileFocus={{ scale: 1.02 }}
              rows={4}
              placeholder="Tell us what you're looking for"
              className="w-full bg-light rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
            />

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-dark hover:text-brand text-light px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300"
            >
              <Send size={20} />
              <span className="md:inline">Send Message</span>
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="text-xs text-dark text-center"
            >
              We usually respond within 24 hours
            </motion.p>
          </form>
        </motion.div>

      </div>
    </section>
  );
}