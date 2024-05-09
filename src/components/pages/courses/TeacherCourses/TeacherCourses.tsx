'use client';
import Course from '@/components/common/course/Course';
import { useGetCoursesQuery } from '@/hooks/courses';

export default function Courses() {
  const { data } = useGetCoursesQuery();

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 md:p-6">
      {data?.getCourses?.map((course, i) => (
        <Course
          id={course?.id}
          key={course?.id}
          createdAt={course?.createdAt}
          subject_name={course?.subject?.name}
          user_name={course?.teacher?.user?.user_name}
        />
      ))}
    </section>
  );
}
