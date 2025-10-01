import { Button } from "@/components/ui/button";

const MentorSection = () => {
  return (
    <div className="w-full bg-light sm:mt-[-40] relative overflow-hidden">
      <div
        className="lg:container mx-auto px-6 mb-10 pb-0 pt-10 w-full rounded-[24px]
      bg-[linear-gradient(to_bottom,_#f4f4f4_0%25,_#ffffff_60%25,_#f4f4f4_100%25)]"
      >
        <div className="container mx-auto px-6 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center sm:px-15 px-5 py-3 bg-transparent rounded-full border border-gray-200">
              <span className="text-sm text-gray-700 font-medium">
              Learn from people who have done it
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hire a 1:1 Mentor
            </h2>
          </div>

          {/* Description */}
          <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          Stuck or just getting started? Talk to someone who is already figured it out.
            <br className="hidden md:block" />
            Book a session, get real answers, skip the guessing.
          </p>

          {/* Primary CTA Button */}
          <div className="flex justify-center mb-16">
            <Button
              variant="dark"
              size="default"
              className="rounded-full px-6 py-6"
            >
              Book Your Mentor Now
              <img src="/right_icon.svg" className="" alt="right-icon" />
            </Button>
          </div>

          {/* Content Card with Two Columns */}
          <div className="max-w-6xl mx-auto">
            <img
              src="/calandar.svg"
              alt="Select Date & Time"
              className="w-full h-100 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSection;
