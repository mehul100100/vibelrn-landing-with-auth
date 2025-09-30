// app/src/components/Footer.tsx
import { Info } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const footerLinks = [
    "Master Classes",
    "Corporate Training",
    "News Feed",
    "Privacy Policy",
    "Terms of Service",
  ];

  return (
    <footer className="w-full bg-light">
      {/* Newsletter Section */}
      <div
        className="container mx-auto px-6 mb-10 pb-10 pt-10 w-full rounded-[24px]
      bg-[linear-gradient(to_bottom,_#f4f4f4_0%25,_#ffffff_60%25,_#f4f4f4_100%25)]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Newsletter Subscription */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
            {/* Left - Heading and Description */}
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4">
                Silicon Academy News Weekly
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Stay up to date on releases and business tips by joining our
                newsletter. By subscribing, you agree to our Privacy Policy.
              </p>
            </div>

            {/* Right - Email Input and Subscribe Button */}
            <div className="w-full lg:w-auto">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-3 bg-white border border-gray-300 rounded-4xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent w-full sm:w-80"
                  />
                  <Button
                    variant="dark"
                    size="default"
                    className="rounded-full px-6 py-6"
                    >
                    Subscribe
                    </Button>
                </div>
                {/* Privacy Notice */}
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Info className="w-4 h-4 flex-shrink-0" />
                  
                  <span>
                    Your email is safe with us.{" "}
                    <a
                      href="/#"
                      className="underline hover:text-gray-600"
                    >
                      privacy policy
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 mb-12"></div>

          {/* Logo and Navigation */}
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <div className="flex justify-center">
              <img
                src="/silicon_academy_logo.svg"
                alt="Silicon Academy"
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                //   href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Copyright */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Silicon Academy All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
