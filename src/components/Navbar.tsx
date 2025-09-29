import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#", active: true },
    { label: "Master Classes", href: "#" },
    { label: "Corporate Training", href: "#" },
    { label: "News Feed", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground tracking-tight">
              silicon<span className="text-primary">.</span>
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
              ACADEMY
            </span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
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
              className="hidden sm:flex"
            >
              Become Mentor
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="dark" size="default" className="rounded-full px-6">
              Signup
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
