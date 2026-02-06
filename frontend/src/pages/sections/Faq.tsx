import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Home, FileText, ShieldCheck, DollarSign, Zap, Phone } from 'lucide-react';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqs = [
    {
      icon: Home,
      question: 'How do I schedule a property viewing?',
      answer: 'Simply click on any property listing and select "Schedule Viewing" button. You can also contact our team directly via phone or WhatsApp. Our agents respond within 24 hours and will arrange a convenient time for you to visit the property.',
    },
    {
      icon: FileText,
      question: 'What documents do I need to buy property in Dubai?',
      answer: 'You will need: valid passport, Emirates ID (for residents), visa copy, proof of income, bank statements for the last 6 months, and a No Objection Certificate (NOC) if applicable. Our team will guide you through the entire documentation process.',
    },
    {
      icon: ShieldCheck,
      question: 'Are all properties verified and legal?',
      answer: '100% yes! All our properties are verified and legally compliant. We conduct thorough background checks, verify ownership documents, and ensure all properties meet Dubai Land Department regulations. Your investment is completely secure with us.',
    },
    {
      icon: DollarSign,
      question: 'What are the payment options available?',
      answer: 'We offer flexible payment plans including: cash payment, bank financing (up to 80% LTV), developer payment plans, and cryptocurrency options. Our financial advisors will help you choose the best option based on your situation.',
    },
    {
      icon: Zap,
      question: 'How long does the buying process take?',
      answer: 'Typically, the entire process takes 2-4 weeks from offer acceptance to property handover. This includes: initial offer (1-2 days), documentation (1 week), mortgage approval if needed (1-2 weeks), and final registration with Dubai Land Department (2-3 days).',
    },
    {
      icon: Phone,
      question: 'Do you provide after-sales support and property management?',
      answer: 'Absolutely! We offer comprehensive after-sales services including property management, maintenance coordination, tenant finding, rental collection, and legal assistance. Our relationship doesn\'t end at purchase—we\'re your long-term partner.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
            Frequently Asked Questions
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-dark-100 max-w-2xl mx-auto"
          >
            Everything you need to know about finding your perfect property
          </motion.p>
        </motion.div>

        {/* FAQ Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01, y: -2 }}
                className={`bg-light-200 rounded-2xl hover:shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
                  isOpen ? 'shadow-lg ring-2 ring-brand/20' : ''
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {/* Question Header */}
                <div className="p-6 md:p-8 flex items-center gap-4">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: isOpen ? [1, 1.2, 1] : 1,
                      rotate: isOpen ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-brand rounded-full flex items-center justify-center"
                  >
                    <Icon className="text-dark" size={24} strokeWidth={2.5} />
                  </motion.div>

                  {/* Question Text */}
                  <div className="flex-1">
                    <h3 className="text-md md:text-xl font-bold text-dark font-heading pr-8">
                      {faq.question}
                    </h3>
                    
                    {/* Animated Underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isOpen ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                      className="h-0.5 bg-brand mt-3"
                    />
                  </div>

                  {/* Plus/Minus Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <Plus className="text-dark" size={24} strokeWidth={2.5} />
                  </motion.div>
                </div>

                {/* Answer (Animated) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pl-20 md:pl-24">
                        <p className="text-sm md:text-lg text-dark-100 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-dark-100 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-dark hover:text-brand text-light px-6 md:px-8 py-3 md:py-4 rounded-xl transition-colors duration-300">
            <Phone size={20} />
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQSection;