import type { CategoryFilterProps } from '@/lib/types/explore';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { EXPLORE_STYLES, ICON_PATHS } from '@/lib/constants/explore';

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className={EXPLORE_STYLES.filterWrapper}>
      <div
        className={EXPLORE_STYLES.filterScroll}
        role="tablist"
        aria-label="Course category filters"
      >
        {categories.map((category, index) => {
          const isActive = activeCategory === index;
          return (
            <button
              key={`${category}-${index}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`courses-panel-${index}`}
              id={`category-tab-${index}`}
              onClick={() => onCategoryChange(index)}
              className={`${EXPLORE_STYLES.categoryButton.base} ${
                isActive
                  ? EXPLORE_STYLES.categoryButton.active
                  : EXPLORE_STYLES.categoryButton.inactive
              }`}
            >
              <Image
                src={isActive ? ICON_PATHS.active : ICON_PATHS.inactive}
                alt=""
                width={20}
                height={20}
                className="h-4 w-4 md:h-5 md:w-5"
                aria-hidden="true"
              />
              <span className="text-xs md:text-sm lg:text-base">{category}</span>
            </button>
          );
        })}
      </div>

      <button
        className={EXPLORE_STYLES.seeMore}
        aria-label="View all categories"
      >
        See more Categories
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};
