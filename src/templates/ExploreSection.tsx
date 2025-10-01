"use client";
import { useState, useMemo } from "react";
import { CategoryFilter } from "@/components/explore/CategoryFilter";
import { CourseGrid } from "@/components/explore/CourseGrid";
import {
  EXPLORE_STYLES,
  DEFAULT_CATEGORIES,
  SAMPLE_COURSES,
} from "@/lib/constants/explore";
import type { ExploreSectionProps } from "@/lib/types/explore";

const ExploreSection: React.FC<ExploreSectionProps> = ({
  title,
  boldTitle,
  categories = DEFAULT_CATEGORIES,
  courses = SAMPLE_COURSES,
}) => {
  const [activeCategory, setActiveCategory] = useState(0);

  // Filter courses based on active category
  const filteredCourses = useMemo(() => {
    if (activeCategory === 0) return courses; // "All" category
    
    const selectedCategory = categories[activeCategory];
    return courses.filter((course) => course.category === selectedCategory);
  }, [activeCategory, courses, categories]);

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
  };

  return (
    <section
      className={EXPLORE_STYLES.wrapper}
      aria-labelledby="explore-section-heading"
    >
      <div className={EXPLORE_STYLES.container}>
        <header className={EXPLORE_STYLES.header}>
          <h2 id="explore-section-heading" className={EXPLORE_STYLES.heading}>
            {title} <span className="font-bold">{boldTitle}</span>
          </h2>
        </header>
        <CategoryFilter
          categories={categories as string[]}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        <div
          role="tabpanel"
          id={`courses-panel-${activeCategory}`}
          aria-labelledby={`category-tab-${activeCategory}`}
        >
          <CourseGrid courses={filteredCourses} />
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
