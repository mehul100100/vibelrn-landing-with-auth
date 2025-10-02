import type { Variants } from 'framer-motion';

export type HeroHeadingProps = {
  title: string;
  highlightedWord: string;
  description: string;
};

export type HeroSearchBarProps = {
  placeholder?: string;
};

export type ToolsCountProps = {
  count: number;
};

export type HeroVariants = {
  container: Variants;
  fadeUp: Variants;
  underline: Variants;
  searchBar: Variants;
};
