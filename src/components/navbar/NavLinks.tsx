import Link from "next/link";
import { NAVBAR_STYLES } from "@/lib/constants/navbar";
import type { NavLinksProps } from "@/lib/types/navbar";

export const NavLinks: React.FC<NavLinksProps> = ({ items }) => {
  if (!items?.length) return null;

  return (
    <nav
      className="hidden lg:flex items-center gap-8"
      aria-label="Main navigation"
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`${NAVBAR_STYLES.navLink} ${
            item.active ? "text-foreground" : "text-muted-foreground"
          }`}
          aria-current={item.active ? "page" : undefined}
        >
          {item.label}
          {item.active && (
            <span className={NAVBAR_STYLES.activeIndicator} aria-hidden="true" />
          )}
        </Link>
      ))}
    </nav>
  );
};
