import { CourseCard } from "./CourseCard";
import { EXPLORE_STYLES } from "@/lib/constants/explore";
import type { CourseGridProps } from "@/lib/types/explore";

export const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No courses available in this category.
        </p>
      </div>
    );
  }

  return (
    <ul
      className={EXPLORE_STYLES.grid}
      role="list"
      aria-label="Course list"
    >
      {courses.map((course, index) => (
        <li key={course.id}>
          <CourseCard
            course={course}
            priority={index < 4} // Prioritize first 4 images
          />
        </li>
      ))}
    </ul>
  );
};
