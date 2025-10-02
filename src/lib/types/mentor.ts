export type MentorHeaderProps = {
  badge: string;
  heading: string;
  description: string;
};

export type MentorCTAProps = {
  ctaText: string;
  ctaLink: string;
};

export type MentorVisualProps = {
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
};

export type MentorSectionProps = {
  badge?: string;
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
};
