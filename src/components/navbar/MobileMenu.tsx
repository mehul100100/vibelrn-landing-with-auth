'use client';
import type { MobileMenuProps } from '@/lib/types/navbar';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  items,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="bg-background/80 fixed inset-0 z-40 backdrop-blur-sm lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="bg-background border-border fixed inset-y-0 right-0 z-50 w-full max-w-xs border-l lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex h-full flex-col">
          <div className="border-border flex items-center justify-between border-b p-4">
            <span className="text-lg font-semibold">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {items?.map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      item.active
                        ? 'bg-primary/10 text-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                    }`}
                    onClick={onClose}
                    aria-current={item.active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-border border-t p-4">
            <Button
              variant="mentorOutline"
              size="default"
              className="w-full rounded-full"
              asChild
            >
              <Link href="/#">Become Mentor</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
