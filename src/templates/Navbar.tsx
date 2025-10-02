'use client';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AuthSection } from '@/components/navbar/AuthSection';
import { MobileMenu } from '@/components/navbar/MobileMenu';
import { NavLinks } from '@/components/navbar/NavLinks';
import { Button } from '@/components/ui/button';
import { NAVBAR_STYLES, navbarVariants, navItems } from '@/lib/constants/navbar';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="bg-background/95 border-border/50 supports-[backdrop-filter]:bg-background/60 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md"
        initial={false}
        variants={navbarVariants}
      >
        <div className={NAVBAR_STYLES.container}>
          <div className={NAVBAR_STYLES.content}>
            <Link href="/" aria-label="Go to Silicon Academy homepage">
              <div className="flex items-center gap-2">
                <Image
                  src="/silicon_academy_logo.svg"
                  alt="Silicon Academy Logo"
                  width={35}
                  height={35}
                  priority
                  className="w-auto"
                />
              </div>
            </Link>

            <NavLinks items={navItems} />

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={handleMenuToggle}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="h-5 w-5" />
              </Button>

              <AuthSection />
            </div>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMenuClose}
        items={navItems}
      />
    </>
  );
};

export default Navbar;
