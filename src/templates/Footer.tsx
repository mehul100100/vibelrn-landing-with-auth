'use client';
import { FooterCopyright } from '@/components/footer/FooterCopyright';
import { FooterLogo } from '@/components/footer/FooterLogo';
import { FooterNavigation } from '@/components/footer/FooterNavigation';
import { NewsletterForm } from '@/components/footer/NewsletterForm';
import { FOOTER_CONTENT, FOOTER_LINKS, FOOTER_STYLES } from '@/lib/constants/footer';

const Footer = () => {
  const handleNewsletterSubmit = async () => {
    console.warn('Newsletter subscription not implemented');
  };

  return (
    <footer className={FOOTER_STYLES.wrapper} role="contentinfo">
      <div className={FOOTER_STYLES.container}>
        <div className={FOOTER_STYLES.innerContainer}>
          <NewsletterForm onSubmit={handleNewsletterSubmit} />
          <hr className={FOOTER_STYLES.divider} aria-hidden="true" />
          <div className={FOOTER_STYLES.navigation.wrapper}>
            <FooterLogo
              src={FOOTER_CONTENT.logo.src}
              alt={FOOTER_CONTENT.logo.alt}
            />
            <FooterNavigation links={FOOTER_LINKS} />
          </div>
          <FooterCopyright
            companyName={FOOTER_CONTENT.copyright.companyName}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
