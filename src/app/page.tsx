import Navbar from "@/templates/Navbar";
import HeroSection from "@/templates/HeroSection";
import TrustedSection from "@/templates/TrustedSection";
import ExploreSection from "@/templates/ExploreSection";
import MasterclassSection from "@/templates/MasterclassSection";
import CommunitySection from "@/templates/CommunitySection";
import TestimonialsSection from "@/templates/TestimonialsSection";
import MentorSection from "@/templates/MentorSection";
import Footer from "@/templates/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <ExploreSection title="Explore and Learn" bold_title="AI Tools" />
      <ExploreSection title="Trending Now:" bold_title="Top AI Tools" />
      <MasterclassSection />
      <CommunitySection />
      <TestimonialsSection />
      <MentorSection />
      <Footer />
    </>
  );
};

export default Index;
