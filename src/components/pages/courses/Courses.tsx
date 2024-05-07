'use client';
import Item from './item/Item';
import { useGetCoursesQuery } from '@/hooks/courses';

export default function Courses() {
  const { data } = useGetCoursesQuery();
  
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 md:p-6">
      {data?.getCourses?.map((course, i) => (
        <Item key={i} course={course} />
      ))}
    </section>
  );
}
