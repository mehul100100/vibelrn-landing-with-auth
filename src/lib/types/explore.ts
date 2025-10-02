export type Course = {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  duration: string;
  thumbnail: string;
  description: string;
  isPro: boolean;
  category?: string;
};

export type CategoryFilterProps = {
  categories: string[];
  activeCategory: number;
  onCategoryChange: (index: number) => void;
};

export type CourseCardProps = {
  course: Course;
  priority?: boolean;
};

export type CourseGridProps = {
  courses: Course[];
};

export type ExploreSectionProps = {
  title: string;
  boldTitle: string;
  categories?: string[];
  courses?: Course[];
};
