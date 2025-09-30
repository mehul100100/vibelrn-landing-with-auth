// app/src/components/CommunitySection.tsx
import { Heart, MessageCircle, Share2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CommunitySection = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-b from-white to-[#E0F7F7]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-transparent rounded-full border-[1px] border-[#DDDDDD]">
              <span className="text-sm text-gray-700 font-medium">
                Built for creators, devs & curious minds
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl text-gray-900 leading-tight">
                Step Into the AI
                <br />
                <span className="font-bold">Community</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Connect with people who are actually building cool stuff with AI.
              Ask questions, share ideas, or just vibe - no gatekeeping.
            </p>

            {/* CTA Button */}
            <Button
              variant="dark"
              size="default"
              className="rounded-full px-6 py-6"
            >
              Join the Community
              <img src="/right_icon.svg" className="" alt="right-icon" />
            </Button>
          </div>

          {/* Right Column - SVG Image */}
          <div className="relative flex items-center border-[6px] rounded-[35px] border-[#ffffff5e] shadow-xl justify-center">
            <img
              src="/community-testimonial.svg"
              alt="Community Testimonials"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
