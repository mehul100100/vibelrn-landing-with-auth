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

export interface NavItem {
  label: string;
  href: string;
  active: boolean;
}
