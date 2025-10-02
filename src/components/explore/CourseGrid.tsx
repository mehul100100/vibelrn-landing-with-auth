import type { CourseGridProps } from '@/lib/types/explore';
import { EXPLORE_STYLES } from '@/lib/constants/explore';
import { CourseCard } from './CourseCard';

export const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
  if (!courses || courses.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground text-lg">
          No courses available in this category.
        </p>
      </div>
    );
  }

  return (
    <ul
      className={EXPLORE_STYLES.flex}
      aria-label="Course list"
    >
      {courses.map((course, index) => (
        <li key={course.id} className="md:min-w-[300px]">
          <CourseCard
            course={course}
            priority={index < 4}
          />
        </li>
      ))}
    </ul>
  );
};
