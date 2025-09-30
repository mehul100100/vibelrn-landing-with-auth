// app/src/page.tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToolCard from "@/components/ToolCard";
import TrustedSection from "@/components/TrustedSection";
import ExploreSection from "@/components/ExploreSection";
import MasterclassSection from "@/components/MasterclassSection";
import CommunitySection from "@/components/CommunitySection";

const SvgRender = ({ svg }: { svg: string }) => {
  return (
    <div className="w-full h-85 flex items-center justify-center">
      <img
        src={svg}
        alt="tool-icon"
        className="w-full h-full object-contain w-full"
      />
    </div>
  );
};

const Index = () => {
  const tools = [
    { 
      name: "Google Veo 3", 
      bgColor: "#E8F1FF", 
      logoColor: "#4285F4",
      svgPath: "/veo3-card.svg"
    },
    { 
      name: "Chatgpt 4.1", 
      bgColor: "#D4EDE4", 
      logoColor: "#10A37F",
      svgPath: "/chatgpt-card.svg"
    },
    { 
      name: "runway", 
      bgColor: "#E8E3F3", 
      logoColor: "#8B7AB8",
      svgPath: "/runway-card.svg"
    },
    { 
      name: "Elevenlabs", 
      bgColor: "#FFF4D6", 
      logoColor: "#FFB800",
      svgPath: "/elevenlabs-card.svg"
    },
    { 
      name: "Adobe Firefly", 
      bgColor: "#FFE8E8", 
      logoColor: "#FF0000",
      svgPath: "/firefly-card.svg"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <main className="container mx-auto px-6 mt-18 mb-10 pb-20 pt-10 w-full rounded-[24px]
      bg-[linear-gradient(to_bottom,_#f4f4f4_0%25,_#ffffff_60%25,_#f4f4f4_100%25)]">
        <HeroSection />

        {/* Tool Cards Marquee */}
        <div className="mt-24 relative overflow-hidden">
          <div className="flex animate-marquee pb-[10px]">
            {/* First set of cards */}
            {tools.map((tool, index) => (
              <div key={`tool-1-${index}`} className="flex-shrink-0 w-80">
                <ToolCard
                  svg={<SvgRender svg={tool.svgPath} />}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {tools.map((tool, index) => (
              <div key={`tool-2-${index}`} className="flex-shrink-0 w-80">
                <ToolCard
                  svg={<SvgRender svg={tool.svgPath} />}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Trusted Section */}
      <TrustedSection />

      {/* Explore Section */}
      <ExploreSection title="Explore and Learn" bold_title="AI Tools" />
      <ExploreSection title="Trending Now:" bold_title="Top AI Tools" />

      {/* Masterclass Section */}
      <MasterclassSection />

      {/* Community Section */}
      <CommunitySection />
    </div>
  );
};

export default Index;
