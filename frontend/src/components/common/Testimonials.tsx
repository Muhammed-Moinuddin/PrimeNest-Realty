import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import 'swiper/css';

const testimonials = [
  {
    name: "Anaa Ruth.",
    role: "Apartment Buyer",
    location: "Downtown Dubai",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    message:
      "PrimeNest made buying in Downtown Dubai effortless. Transparent process and excellent support.",
  },
  {
    name: "Sarah M.",
    role: "Villa Owner",
    location: "New York City",
    rating: 5,
    image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    message:
      "Their understanding of NYC luxury real estate helped us secure a villa within weeks.",
  },
  {
    name: "James K.",
    role: "Investor",
    location: "UK",
    rating: 4,
    image: "https://images.unsplash.com/photo-1583692331507-fc0bd348695d?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    message:
      "Verified listings and smooth documentation. Very reliable real estate partner.",
  },
  {
    name: "Jordan Hamilton A.",
    role: "First-time Buyer",
    location: "Dubai",
    rating: 5,
    image: "https://plus.unsplash.com/premium_photo-1708275672423-837db6d3d700?q=80&w=735&auto=format&fit=crop",
    message:
      "Professional agents and fast response time. Highly recommended.",
  },
];


function Testimonials() {
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
            What Our Clients Say
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-dark-100 max-w-2xl mx-auto"
          >
            Trusted by homeowners and investors worldwide
          </motion.p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light-200 rounded-2xl p-6 md:p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative mb-8"
              >
                {/* Quote Icon */}
                <Quote
                  className="absolute top-6 right-6 text-brand opacity-10"
                  size={48}
                />

                {/* Stars */}
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < item.rating
                          ? "text-brand fill-brand"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-dark-100 text-sm md:text-base leading-relaxed mb-6">
                  “{item.message}”
                </p>

                {/* Client */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-dark">{item.name}</p>
                    <p className="text-sm text-dark-100">
                      {item.role} · {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
