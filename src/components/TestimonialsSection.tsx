// app/src/components/TestimonialsSection.tsx
"use client";

const TestimonialsSection = () => {
  // Create array of testimonial cards for the marquee
  const testimonials = Array(6).fill({
    svgPath: "/testimonial1.svg",
  });

  return (
    <div className="w-full py-10 bg-light">
      <div className="container mx-auto px-6 mb-10 pb-20 pt-10 w-full rounded-[24px]
      bg-[linear-gradient(to_bottom,_#f4f4f4_0%25,_#ffffff_60%25,_#f4f4f4_100%25)]">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center sm:px-15 px-5 py-3 bg-transparent rounded-full border border-gray-200">
            <span className="text-sm text-gray-700 font-medium">
            What people are actually saying
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          This stuff just works
          </h2>
        </div>

        {/* Description */}
        <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
        We’re not making this up - real users, real wins. Whether it’s saving hours or launching projects,
          <br className="hidden md:block" />
          people are getting results.
        </p>

        {/* Testimonials Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee mb-8">
            {testimonials.map((testimonial, index) => (
              <div key={`testimonial-2-${index}`} className="flex-shrink-0 w-[400px] px-4">
                <img
                  src={testimonial.svgPath}
                  alt="Testimonial"
                  className="w-full h-auto shadow-xl rounded-3xl"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`testimonial-2-dup-${index}`} className="flex-shrink-0 w-[400px] px-4">
                <img
                  src={testimonial.svgPath}
                  alt="Testimonial"
                  className="w-full h-auto shadow-xl rounded-3xl"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
