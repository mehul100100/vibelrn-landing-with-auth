const TrustedSection = () => {
    const logos = [
      { name: "testRigor", url: "/logos/testrigor.svg" },
      { name: "SNAPPT", url: "/logos/snappt.svg" },
      { name: "betterworks", url: "/logos/betterworks.svg" },
      { name: "sumo logic", url: "/logos/sumologic.svg" },
      { name: "Elements", url: "/logos/elements.svg" },
      { name: "SANTA CRUZ", url: "/logos/ucsantacruz.svg" },
      { name: "COMPLY 365", url: "/logos/comply.svg" },
      { name: "kiln", url: "/logos/kiln.svg" },
    ];
  
    return (
      <div className="w-full py-16 bg-white">
        <div className="lg:container mx-auto px-6">
          {/* Partner Logos */}
          <div className="relative overflow-hidden mb-12">
            <div className="flex animate-marquee gap-8 md:gap-12">
              {logos.map((logo, index) => (
                <div key={index} className="h-6 flex-shrink-0 flex items-center">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-full w-auto grayscale opacity-60"
                  />
                </div>
              ))}
              {/* Duplicate logos for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="h-6 flex-shrink-0 flex items-center"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-full w-auto grayscale opacity-60"
                  />
                </div>
              ))}
            </div>
          </div>
  
          {/* Trust Badge */}
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-500">Trusted by over</p>
            <h3 className="text-3xl font-semibold text-foreground">
              10K+ Learners
            </h3>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  style={{
                    filter:
                      "drop-shadow(0 0 2px rgba(92, 197, 189, 0.2)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))",
                  }}
                >
                  <defs>
                    <linearGradient
                      id={`starGradient-${i}`}
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#6FD9D0", stopOpacity: 1 }}
                      />
                      <stop
                        offset="50%"
                        style={{ stopColor: "#5CC5BD", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#4AA9A1", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                    fill={`url(#starGradient-${i})`}
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TrustedSection;
  