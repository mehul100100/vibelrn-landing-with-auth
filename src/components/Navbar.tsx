"use client";
import { Button } from "@/components/ui/button";
import { ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#", active: true },
    { label: "Master Classes", href: "#" },
    { label: "Corporate Training", href: "#" },
    { label: "News Feed", href: "#" },
  ];

  // Only navbar container animation
  const navbarVariants: any = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border/50"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <img src="/silicon_academy_logo.svg" alt="" />
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  item.active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
                {item.active && (
                  <span className="absolute -bottom-1 left-1/2 w-1/4 h-0.5 bg-[var(--dark-accent)] transform -translate-x-1/2" />
                )}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button
              variant="mentorOutline"
              size="default"
              className="hidden rounded-full sm:flex"
            >
              Become Mentor
              <img src="/right_icon_dark.svg" className="" alt="right-icon" />
            </Button>

            <ClerkLoading>
              {/* Skeleton with same dimensions as the signup button */}
              <div className="sm:w-[98px] sm:h-[40px] rounded-full bg-gray-200 animate-pulse" />
            </ClerkLoading>

            <SignedOut>
              <Link href="/sign-up">
                <Button
                  variant="dark"
                  size="default"
                  className="rounded-full px-6"
                >
                  Signup
                </Button>
              </Link>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
