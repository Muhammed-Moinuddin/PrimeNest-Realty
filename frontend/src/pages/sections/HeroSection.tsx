import { Search, MapPin, Home, DollarSign, MousePointer2 } from 'lucide-react';
import PropertyImage from '../../assets/primenest-property-image-1.png';
import { animate, motion } from 'framer-motion';
import type { Variants } from "framer-motion";


function HeroSection() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
  };

  const priceTagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="bg-light py-14 md:py-24 sm:overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-24 lg:gap-16 items-center">

          {/* LEFT SIDE - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >

            {/* Badge - Happy Clients */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-light-200 rounded-2xl px-6 py-3 shadow-sm"
            >
              {/* Overlapping Avatar Images */}
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop',
                  'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1583692331507-fc0bd348695d?fm=jpg&q=60&w=3000&auto=format&fit=crop',
                  'https://plus.unsplash.com/premium_photo-1708275672423-837db6d3d700?q=80&w=735&auto=format&fit=crop',
                ].map((src, index) => (
                  <motion.img
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.1,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src={src}
                    alt=""
                  />
                ))}
              </div>
              {/* Text */}
              <span className="text-dark font-medium">
                <span className="font-bold">26k+</span> Happy Clients
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark font-heading leading-tight"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  type: 'spring',
                  stiffness: 200,
                }}
                className="w-3 h-3 bg-brand rounded-full inline-block mr-2"
              />
              Find Your Perfect{' '}
              <motion.span
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1,
                  ease: 'easeOut',
                }}
                className="inline-block text-light bg-dark px-4 py-2 my-2 rounded-2xl"
              >
                Dream Home
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-dark-100 leading-relaxed"
            >
              Browse through our curated collection of premium properties in prime locations.
              Your perfect home is just a search away.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              variants={itemVariants}
              className="bg-light-200 rounded-2xl p-4 flex flex-col md:flex-row gap-2"
            >

              {/* Location Input */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                className="flex items-center gap-2 flex-1 px-4 py-3 bg-light rounded-xl"
              >
                <MapPin className="text-dark-100 flex-shrink-0" size={20} />
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-transparent outline-none text-dark w-full"
                />
              </motion.div>

              {/* Property Type Select */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 flex-1 px-4 py-3 bg-light rounded-xl"
              >
                <Home className="text-dark-100 flex-shrink-0" size={20} />
                <select className="bg-transparent outline-none text-dark w-full cursor-pointer">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="villa">Villa</option>
                </select>
              </motion.div>

              {/* Price Range Select */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 flex-1 px-4 py-3 bg-light rounded-xl"
              >
                <DollarSign className="text-dark-100 flex-shrink-0" size={20} />
                <select className="bg-transparent outline-none text-dark w-full cursor-pointer">
                  <option value="">Price Range</option>
                  <option value="0-200k">$0 - $200k</option>
                  <option value="200k-400k">$200k - $400k</option>
                  <option value="400k-600k">$400k - $600k</option>
                  <option value="600k+">$600k+</option>
                </select>
              </motion.div>

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-dark hover:text-brand text-light px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300"
              >
                <Search size={20} />
                <span className="hidden md:inline">Search</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Image */}
          <div className="relative">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.05, overflow: 'none' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                src={PropertyImage}
                alt="Dream Home"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Price Tags - Desktop (2xl) */}
            <motion.div
              variants={priceTagVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
              className="hidden 2xl:flex absolute top-20 -left-28 cursor-pointer"
            >
              <motion.div
                animate={{
                  x: [0, 12, 0, -12, 0],
                  y: [-12, 0, 12, 0, -12],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative flex items-center"
              >
                <div className="bg-dark rounded-xl px-6 py-2 shadow-lg">
                  <span className="text-light">Starting from AED 2.4M</span>
                </div>

                {/* Pointer (fixed relative position) */}
                <div className="absolute -right-6 -bottom-8">
                  <MousePointer2
                    className="scale-x-[-1] mb-16"
                    fill="currentColor"
                    stroke="currentColor"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={priceTagVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
              className="hidden 2xl:flex absolute bottom-40 -right-16 items-center justify-center cursor-pointer"
            >
              <motion.div
                animate={{
                  x: [0, 12, 0, -12, 0],
                  y: [-12, 0, 12, 0, -12],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative flex items-center"
              >
              {/* Pointer (fixed relative position) */}
              <div className="absolute">
                <MousePointer2
                  className="scale-y-[-1] mt-14 -ml-4"
                  fill="currentColor"
                  stroke="currentColor"
                />
              </div>
              <div className="bg-dark rounded-xl px-6 py-2 shadow-lg">
                <span className="text-light">Starting from $6M</span>
              </div>
              </motion.div>
            </motion.div>

            {/* Price Tags - Mobile/Tablet (below 2xl) */}
            <motion.div
              variants={priceTagVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.1 }}
              className="2xl:hidden flex absolute left-4 items-center justify-center cursor-pointer"
            >
              <motion.div
                animate={{
                  x: [0, -3, 0],
                  y: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className='absolute'>
                  <MousePointer2 className="scale-x-[-1] -mt-6 ml-44" fill="currentColor" stroke="currentColor" />
                </div>
                <div className="bg-dark rounded-xl px-6 py-2 shadow-lg">
                  <span className="text-light">Starting from $6M</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={priceTagVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
              whileHover={{ scale: 1.1 }}
              className="2xl:hidden flex absolute -top-16 right-0 items-center justify-center cursor-pointer"
            >
              <motion.div
                animate={{
                  x: [0, 3, 0],
                  y: [0, -1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
              <div className='absolute'>
                <MousePointer2 className="scale-y-[-1] mt-10 -ml-4" fill="currentColor" stroke="currentColor" />
              </div>
              <div className="bg-dark rounded-xl px-6 py-2 shadow-lg">
                <span className="text-light">Starting from AED 2.4M</span>
              </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;