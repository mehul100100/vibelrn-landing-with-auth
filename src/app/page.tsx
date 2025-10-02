import CommunitySection from '@/templates/CommunitySection';
import ExploreSection from '@/templates/ExploreSection';
import Footer from '@/templates/Footer';
import HeroSection from '@/templates/HeroSection';
import MasterclassSection from '@/templates/MasterclassSection';
import MentorSection from '@/templates/MentorSection';
import Navbar from '@/templates/Navbar';
import TestimonialsSection from '@/templates/TestimonialsSection';
import TrustedSection from '@/templates/TrustedSection';

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <ExploreSection title="Explore and Learn" boldTitle="AI Tools" />
      <ExploreSection title="Trending Now:" boldTitle="Top AI Tools" />
      <MasterclassSection />
      <CommunitySection />
      <TestimonialsSection />
      <MentorSection />
      <Footer />
    </>
  );
};

export default Index;
