import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-8">
      {/* Main Heading with underline */}
      <div className="space-y-4">
        <h1 className="text-6xl md:text-7xl text-foreground leading-tight">
          Master AI Tools In{" "}
          <span className="relative inline-block font-bold">
            Minutes
            <img
              src="/underline.34eea7c8.svg"
              alt=""
              className="absolute -bottom-5 left-0 w-full h-5"
              style={{
                filter:
                  "drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.25)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15))",
              }}
            />
          </span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Suspendisse varius enim in eros elementum tristique.
        </p>
      </div>

      {/* Tools Count */}
      <p className="text-sm font-medium text-foreground">
        <span className="font-bold">999 + AI Tools</span> & Learning Series
        with top Tutors
      </p>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center px-5 py-3 rounded-full w-full border-6 border-[#ffffff5e] backdrop-blur-[7.6px] bg-[linear-gradient(194.34deg,rgba(222,242,241,0.8)_-76.63%,#F0F0F0_50.8%,rgba(222,242,241,0.8)_186.6%)] shadow-[ -137.118px_343.674px_147.666px_rgba(0,0,0,0.01), -77.3487px_193.372px_124.813px_rgba(0,0,0,0.03), -34.2795px_86.1383px_92.2911px_rgba(0,0,0,0.05), -8.78963px_21.0951px_50.9798px_rgba(0,0,0,0.05)]">
          {/* Search Icon */}
          <div className="pl-2 pr-2 flex items-center flex-shrink-0">
            <Search className="w-5 h-5 text-black" />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search Series, Tools..."
            className="flex-1 min-w-0 py-2 md:py-3 bg-transparent placeholder-gray-400 text-gray-600 ml-2 focus:outline-none text-sm md:text-base border-0"
          />

          {/* Search Button */}
          <button
            className="cursor-pointer relative flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-medium text-white shadow-md text-sm md:text-base overflow-hidden border border-gray-300 bg-gradient-to-br from-[#62BEBA] to-[#3F7E7F]"
            style={{
              boxShadow:
                "0 0 8px rgba(98, 190, 186, 0.6), 0 0 4px rgba(63, 126, 127, 0.4)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
      radial-gradient(circle at center, rgba(255,255,255,0.2) 1px, transparent 1px)
    `,
                backgroundSize: "6px 6px",
                maskImage: "linear-gradient(to right, transparent, black)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black)",
                opacity: 1,
              }}
            />

            <span className="relative">Search</span>
            <img src="/right_icon.svg" alt="right-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
