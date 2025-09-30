// app/src/components/ExploreSection.tsx
"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  duration: string;
  thumbnail: string;
  description: string;
  isPro: boolean;
}

const ExploreSection = ({title, bold_title}: {title: string, bold_title: string}) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    "All",
    "AI Assistant",
    "Image Generation",
    "Video Generation",
    "Voice Generation",
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: "Eleven Labs AI Tool",
      instructor: "Hames John",
      rating: 4.9,
      duration: "14hr",
      thumbnail: "/video-cards/elevenlabs1.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      isPro: true,
    },
    {
      id: 2,
      title: "Eleven Labs AI Tool",
      instructor: "Hames John",
      rating: 4.7,
      duration: "14hr",
      thumbnail: "/video-cards/elevenlabs2.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      isPro: true,
    },
    {
      id: 3,
      title: "Eleven Labs AI Tool",
      instructor: "Hames John",
      rating: 4.7,
      duration: "14hr",
      thumbnail: "/video-cards/elevenlabs3.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      isPro: true,
    },
    {
      id: 4,
      title: "Eleven Labs AI Tool",
      instructor: "Hames John",
      rating: 4.7,
      duration: "14hr",
      thumbnail: "/video-cards/elevenlabs1.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      isPro: true,
    },
  ];

  return (
    <div className="w-full py-10 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center mb-10">
          <h2 className="text-3xl md:text-4xl text-foreground">
            {title} <span className="font-bold">{bold_title}</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-12 pb-2">
          <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-2 px-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 cursor-pointer rounded-full whitespace-nowrap font-medium transition-all duration-300 min-w-max ${
                  activeCategory === index
                    ? "bg-[#DEF2F1] border-2 text-[#2B7A78] border-[#5CC5BD]"
                    : "bg-[rgba(205,212,227,0.1)] text-[#677577] border-white border-2 hover:border-[#5CC5BD]"
                }`}
              >
                <img
                  src={
                    activeCategory === index
                      ? "/magic-icon.svg"
                      : "/magic-icon-dark.svg"
                  }
                  alt="magic-icon"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
                <span className="text-xs md:text-sm lg:text-base">{category}</span>
              </button>
            ))}
          </div>

          <button className="hidden md:flex cursor-pointer items-center gap-2 text-[#2B7A78] underline underline-offset-4 hover:gap-3 transition-all duration-300 font-medium whitespace-nowrap">
            See more Categories
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail with Play Button */}
              <div className="relative overflow-hidden h-90 md:h-100 lg:h-100 lg:w-full">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
