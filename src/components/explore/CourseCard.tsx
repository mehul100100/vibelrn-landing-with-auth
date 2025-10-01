import Image from "next/image";
import { EXPLORE_STYLES } from "@/lib/constants/explore";
import type { CourseCardProps } from "@/lib/types/explore";

export const CourseCard: React.FC<CourseCardProps> = ({ course, priority = false }) => {
  return (
    <article
      className={EXPLORE_STYLES.card.wrapper}
      aria-labelledby={`course-title-${course.id}`}
    >
      <a href={`/courses/${course.id}`} className="block h-full">
        <div className={EXPLORE_STYLES.card.thumbnail}>
          <Image
            src={course.thumbnail}
            alt={`${course.title} course thumbnail`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={EXPLORE_STYLES.card.image}
            priority={priority}
          />
        </div>
        <div className="p-4 hidden">
          <h3
            id={`course-title-${course.id}`}
            className="text-lg font-semibold text-foreground line-clamp-2 mb-2"
          >
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {course.description}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{course.instructor}</span>
            <span className="flex items-center gap-1">
              ⭐ {course.rating}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
};
