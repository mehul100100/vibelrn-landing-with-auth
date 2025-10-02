import type { FooterNavigationProps } from '@/lib/types/footer';
import Link from 'next/link';
import { FOOTER_STYLES } from '@/lib/constants/footer';

export const FooterNavigation: React.FC<FooterNavigationProps> = ({ links }) => {
  return (
    <nav
      className={FOOTER_STYLES.navigation.navWrapper}
      aria-label="Footer navigation"
    >
      {links.map((link, index) => (
        <Link
          key={`${link.href}-${index}`}
          href={link.href}
          className={FOOTER_STYLES.navigation.link}
          {...(link.external && {
            target: '_blank',
            rel: 'noopener noreferrer',
          })}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
