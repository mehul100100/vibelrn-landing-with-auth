import { ReactNode } from "react";

export interface Tool {
  name: string;
  bgColor: string;
  logoColor: string;
  svgPath: string;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  duration: string;
  thumbnail: string;
  description: string;
  isPro: boolean;
}

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FeatureItemProps {
  feature: Feature;
  isExpanded: boolean;
  onClick: () => void;
}

export interface NavItem {
  label: string;
  href: string;
  active: boolean;
}
