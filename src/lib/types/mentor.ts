export interface MentorHeaderProps {
    badge: string;
    heading: string;
    description: string;
  }
  
  export interface MentorCTAProps {
    ctaText: string;
    ctaLink: string;
  }
  
  export interface MentorVisualProps {
    imageSrc: string;
    imageAlt: string;
    imageWidth?: number;
    imageHeight?: number;
  }
  
  export interface MentorSectionProps {
    badge?: string;
    heading?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    imageSrc?: string;
    imageAlt?: string;
  }
  