import { logos } from "@/lib/constants/trustedsections";
import Image from "next/image";

const TrustedSection = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="lg:container mx-auto px-6">
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-marquee gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div key={index} className="h-6 flex-shrink-0 flex items-center">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={100}
                  height={100}
                  className="grayscale opacity-60"
                />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="h-6 flex-shrink-0 flex items-center"
              >
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={100}
                  height={100}
                  className="grayscale opacity-60"
                />
              </div>
            ))}
          </div>
        </div>

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
