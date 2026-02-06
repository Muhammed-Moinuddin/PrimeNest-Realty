import { MapPin, Bed, Bath, Maximize, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextMarquee from '../../components/common/TextMarquee';
import { motion } from 'framer-motion';

function FeaturedProperties() {
    const properties = [
        {
            id: 1,
            type: 'landscape',
            name: 'Luxury Villa',
            price: '8.5M $',
            location: 'Palm Enclave, NY',
            bedrooms: 5,
            bathrooms: 6,
            area: 4500,
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=675&fit=crop',
        },
        {
            id: 2,
            type: 'regular',
            name: 'Modern Downtown Apartment',
            price: '1.4M $',
            location: 'Skyline Heights, NY',
            bedrooms: 2,
            bathrooms: 2,
            area: 1200,
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        },
        {
            id: 3,
            type: 'regular',
            name: 'Elegant Marina Penthouse',
            price: 'AED 5.2M',
            location: 'Dubai Marina',
            bedrooms: 3,
            bathrooms: 3,
            area: 2100,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        },
        {
            id: 4,
            type: 'regular',
            name: 'Contemporary Family Home',
            price: 'AED 3.8M',
            location: 'Arabian Ranches',
            bedrooms: 4,
            bathrooms: 4,
            area: 3200,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        },
        {
            id: 5,
            type: 'regular',
            name: 'Stylish Studio Apartment',
            price: 'AED 850K',
            location: 'Business Bay',
            bedrooms: 1,
            bathrooms: 1,
            area: 650,
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        },
        {
            id: 6,
            type: 'landscape',
            name: 'Exclusive Golf Course Villa',
            price: 'AED 12M',
            location: 'Emirates Hills',
            bedrooms: 6,
            bathrooms: 7,
            area: 8500,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=675&fit=crop',
        },
    ];

    // Separate properties by type
    const landscapeTop = properties.find((p) => p.id === 1);
    const regularRow1 = properties.filter((p) => p.id === 2 || p.id === 3);
    const regularRow2 = properties.filter((p) => p.id === 4 || p.id === 5);
    const landscapeBottom = properties.find((p) => p.id === 6);

    const PropertyCard = ({ property, index }: { property: typeof properties[0], index: number }) => {
        const isLandscape = property.type === 'landscape';

        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            >
                <Link
                    to={`/property/${property.id}`}
                    className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 block ${
                        isLandscape ? 'aspect-[16/7]' : 'aspect-[3/4] md:aspect-[3/2]'
                    }`}
                >
                    {/* Property Image */}
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    {/* Location Badge (Always Visible) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                        className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-dark/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-xl flex items-center gap-1.5 md:gap-2 z-20"
                    >
                        <MapPin className="text-brand" size={14} />
                        <span className="text-white text-xs md:text-sm font-medium">{property.location}</span>
                    </motion.div>

                    {/* Hover Overlay */}
                    <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 pb-16 md:pb-20">
                        {/* Property Name */}
                        <h3 className="text-white text-base md:text-xl lg:text-2xl font-bold font-heading mb-1 md:mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {property.name}
                        </h3>

                        {/* Price */}
                        <p className="text-brand text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                            {property.price}
                        </p>

                        {/* Property Details */}
                        <div className="flex items-center gap-2 md:gap-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                            <div className="flex items-center gap-1">
                                <Bed size={16} className="md:w-[18px] md:h-[18px]" />
                                <span className="text-xs md:text-sm">{property.bedrooms} Beds</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Bath size={16} className="md:w-[18px] md:h-[18px]" />
                                <span className="text-xs md:text-sm">{property.bathrooms} Baths</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Maximize size={16} className="md:w-[18px] md:h-[18px]" />
                                <span className="text-xs md:text-sm">{property.area} sqft</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        );
    };

    return (
        <section className="bg-dark py-0">
            {/* Top Text Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <TextMarquee direction="left" />
            </motion.div>

            <div className="container-custom">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center my-16 md:my-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light font-heading mb-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
                            className="w-3 h-3 bg-brand rounded-full inline-block mr-2"
                        />
                        Featured Properties
                    </h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg text-light max-w-2xl mx-auto"
                    >
                        Discover our handpicked selection of premium properties
                    </motion.p>
                </motion.div>

                {/* Properties Grid */}
                <div className="flex flex-col gap-4 md:gap-6">
                    {/* Row 1: Landscape */}
                    {landscapeTop && (
                        <PropertyCard property={landscapeTop} index={0} />
                    )}

                    {/* Row 2: Two Regular Side by Side */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {regularRow1.map((property, idx) => (
                            <PropertyCard key={property.id} property={property} index={1 + idx} />
                        ))}
                    </div>

                    {/* Row 3: Two Regular Side by Side */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {regularRow2.map((property, idx) => (
                            <PropertyCard key={property.id} property={property} index={3 + idx} />
                        ))}
                    </div>

                    {/* Row 4: Landscape */}
                    {landscapeBottom && (
                        <PropertyCard property={landscapeBottom} index={5} />
                    )}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center my-16 md:my-20"
                >
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Link
                            to="/properties"
                            className="bg-brand hover:bg-brand-400 text-dark font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                        >
                            View More Properties
                            <MoveRight size={16} className="md:w-[24px] md:h-[24px]" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Text Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <TextMarquee direction="right" />
            </motion.div>
        </section>
    );
}

export default FeaturedProperties;