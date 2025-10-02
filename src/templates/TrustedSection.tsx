import Image from 'next/image';
import { logos } from '@/lib/constants/trustedsections';

const TrustedSection = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="mx-auto px-6 lg:container">
        <div className="relative mb-12 overflow-hidden">
          <div className="animate-marquee flex gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div key={index} className="flex h-6 flex-shrink-0 items-center">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={100}
                  height={100}
                  className="opacity-60 grayscale"
                />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex h-6 flex-shrink-0 items-center"
              >
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={100}
                  height={100}
                  className="opacity-60 grayscale"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-center">
          <p className="text-sm text-gray-500">Trusted by over</p>
          <h3 className="text-foreground text-3xl font-semibold">
            10K+ Learners
          </h3>
          <div className="flex items-center justify-center gap-1">
            {[...Array.from({ length: 5 })].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5"
                viewBox="0 0 20 20"
                style={{
                  filter:
                    'drop-shadow(0 0 2px rgba(92, 197, 189, 0.2)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))',
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
                      style={{ stopColor: '#6FD9D0', stopOpacity: 1 }}
                    />
                    <stop
                      offset="50%"
                      style={{ stopColor: '#5CC5BD', stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: '#4AA9A1', stopOpacity: 1 }}
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
