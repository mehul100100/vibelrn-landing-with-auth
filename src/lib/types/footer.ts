export interface NewsletterFormProps {
    onSubmit?: (email: string) => Promise<void>;
  }
  
  export interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
  }
  
  export interface FooterNavigationProps {
    links: FooterLink[];
  }
  
  export interface FooterLogoProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }
  
  export interface FooterCopyrightProps {
    companyName: string;
    year?: number;
  }
  