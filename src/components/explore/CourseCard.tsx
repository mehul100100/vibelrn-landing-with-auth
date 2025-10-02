import type { CourseCardProps } from '@/lib/types/explore';
import Image from 'next/image';
import { EXPLORE_STYLES } from '@/lib/constants/explore';

export const CourseCard: React.FC<CourseCardProps> = ({ course, priority = false }) => {
  return (
    <article
      className={EXPLORE_STYLES.card.wrapper}
      aria-labelledby={`course-title-${course.id}`}
    >
      <a href={`/courses/${course.id}`} className="block h-full">
        <Image
          src={course.thumbnail}
          alt={`${course.title} course thumbnail`}
          width={400} // This is the max width
          height={400}
          className={EXPLORE_STYLES.card.image}
          priority={priority}
        />
        <div className="hidden p-4">
          <h3
            id={`course-title-${course.id}`}
            className="text-foreground mb-2 line-clamp-2 text-lg font-semibold"
          >
            {course.title}
          </h3>
          <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
            {course.description}
          </p>
          <div className="text-muted-foreground flex items-center justify-between text-xs">
            <span>{course.instructor}</span>
            <span className="flex items-center gap-1">
              ⭐
              {' '}
              {course.rating}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
};
