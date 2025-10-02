import { ReactNode } from "react";

export interface Feature {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FeatureItemProps {
  feature: Feature;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export interface MasterclassHeaderProps {
  badge: string;
  heading: string;
  description: string;
}

export interface FeatureAccordionProps {
  features: Feature[];
  expandedIndex: number;
  onToggle: (index: number) => void;
}
