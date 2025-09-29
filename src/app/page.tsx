import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";

const Index = () => {
  const tools = [
    { name: "Google Veo 3", bgColor: "#E8F1FF", logoColor: "#4285F4" },
    { name: "Chatgpt 4.1", bgColor: "#D4EDE4", logoColor: "#10A37F" },
    { name: "runway", bgColor: "#E8E3F3", logoColor: "#8B7AB8" },
    { name: "Elevenlabs", bgColor: "#FFF4D6", logoColor: "#FFB800" },
    { name: "Adobe Firefly", bgColor: "#FFE8E8", logoColor: "#FF0000" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading with underline */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl text-foreground leading-tight">
              Master AI Tools In{" "}
              <span className="relative inline-block font-bold">
                Minutes
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 10C50 5 100 2 150 2C200 2 250 5 298 10"
                    stroke="var(--primary)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>

          {/* Tools Count */}
          <p className="text-sm font-medium text-foreground">
            999 + AI Tools & Learning Series with top Tutors
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 bg-card rounded-full shadow-lg p-2 pr-2">
              <div className="flex items-center flex-1 px-4">
                <Search className="w-5 h-5 text-muted-foreground mr-3" />
                <Input
                  type="text"
                  placeholder="Search Series, To..."
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base placeholder:text-muted-foreground/60"
                />
              </div>
              <Button className="rounded-full px-8 h-12 gap-2">
                Search
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Tool Cards Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool) => (
            <ToolCard
              key={tool.name}
              name={tool.name}
              bgColor={tool.bgColor}
              logoColor={tool.logoColor}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
