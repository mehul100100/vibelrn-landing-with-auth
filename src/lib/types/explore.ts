export interface Course {
    id: number;
    title: string;
    instructor: string;
    rating: number;
    duration: string;
    thumbnail: string;
    description: string;
    isPro: boolean;
    category?: string;
  }
  
  export interface CategoryFilterProps {
    categories: string[];
    activeCategory: number;
    onCategoryChange: (index: number) => void;
  }
  
  export interface CourseCardProps {
    course: Course;
    priority?: boolean;
  }
  
  export interface CourseGridProps {
    courses: Course[];
  }
  
  export interface ExploreSectionProps {
    title: string;
    boldTitle: string;
    categories?: string[];
    courses?: Course[];
  }
  