import type { ReactNode } from 'react';

export type Feature = {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
};

export type FeatureItemProps = {
  feature: Feature;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
};

export type MasterclassHeaderProps = {
  badge: string;
  heading: string;
  description: string;
};

export type FeatureAccordionProps = {
  features: Feature[];
  expandedIndex: number;
  onToggle: (index: number) => void;
};
