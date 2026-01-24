import HeroSection from './sections/HeroSection';
import LogoMarquee from './sections/LogoMarquee';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <LogoMarquee />
      {/* Future sections will go here */}
      {/* <FeaturedProperties /> */}
      {/* <StatsSection /> */}
      {/* <TestimonialsSection /> */}
    </div>
  );
}

export default HomePage;