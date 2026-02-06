import Testimonials from '../components/common/Testimonials';
import ContactSection from './sections/Contact';
import FAQSection from './sections/Faq';
import FeaturedProperties from './sections/FeaturedProperties';
import HeroSection from './sections/HeroSection';
import LogoMarquee from './sections/LogoMarquee';
import WhyChooseUs from './sections/WhyChooseUs';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <LogoMarquee />
      <WhyChooseUs />
      <FeaturedProperties />
      <Testimonials />
      <FAQSection />
      <ContactSection/>
    </div>
  );
}

export default HomePage;