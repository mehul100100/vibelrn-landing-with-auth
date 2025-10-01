"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import type { MobileMenuProps } from "@/lib/types/navbar";
import { useEffect } from "react";

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  items,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-background border-l border-border z-50 lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-border">
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
              {items?.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      item.active
                        ? "bg-primary/10 text-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                    onClick={onClose}
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-border">
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
