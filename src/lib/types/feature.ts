import { ReactNode } from "react";

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
