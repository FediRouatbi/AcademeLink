'use client';
import Course from '@/components/common/course/Course';
import { useGetCoursesQuery } from '@/hooks/courses';
import { SplitCoursesByClassroom } from '@/utils/splitArrayByid';

export default function Courses() {
  const { data } = useGetCoursesQuery();

  const classrooms = SplitCoursesByClassroom(data);

  return (
    <>
      {classrooms?.map((classroom) => {
        return (
          <>
            <h1 className="text-4xl">
              {classroom?.at(0)?.classroom?.classroom_name}
            </h1>
            <section
              key={classroom?.at(0)?.classroom?.classroom_id}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 md:p-6"
            >
              {classroom.map((el) => {
                return (
                  <Course
                    id={el?.id}
                    key={el?.id}
                    createdAt={el?.createdAt}
                    subject_name={el?.subject?.name}
                    user_name={el?.teacher?.user?.user_name}
                  />
                );
              })}
            </section>
          </>
        );
      })}
    </>
  );
}
