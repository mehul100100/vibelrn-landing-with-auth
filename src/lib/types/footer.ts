export type NewsletterFormProps = {
  onSubmit?: (email: string) => Promise<void>;
};

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterNavigationProps = {
  links: FooterLink[];
};

export type FooterLogoProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type FooterCopyrightProps = {
  companyName: string;
  year?: number;
};
