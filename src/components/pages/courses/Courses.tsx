'use client';
import { Alert } from '@/components/common/Alert';
import Course from '@/components/common/course/Course';
import { Course as CourseType } from '@/gql/graphql';
import { useDeleteCourseMutation, useGetCoursesQuery } from '@/hooks/courses';
import { useSeachAtom } from '@/hooks/useSeachAtom';
import { queryClient } from '@/providers/react-query-provider';
import { SplitCoursesByClassroom } from '@/utils/splitArrayByid';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Courses() {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState<number | null>(null);
  const [debouncedValue] = useSeachAtom();

  const { data } = useGetCoursesQuery({ search: debouncedValue });
  const { mutate: deleteCourse } = useDeleteCourseMutation({
    onSuccess() {
      console.log("*************");
      
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      toast?.success(`Course  deleted Successfully`);
      setCourse(null);
    },
  });
  const classrooms = SplitCoursesByClassroom(data);
  const onClickDelete = (courseID: number) => {
    setCourse(courseID);
    setOpen(true);
  };

  const onClickCancel = () => {
    setOpen(false);
    setCourse(null);
  };
  const onClickConfirm = () => {
    if (!course) return;
    deleteCourse(course);
    setOpen(false);
  };
  return (
    <>
      {classrooms?.map((classroom) => {
        return (
          <section key={classroom?.at(0)?.classroom?.classroom_id}>
            <h1 className="text-4xl">
              {classroom?.at(0)?.classroom?.classroom_name}
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 md:p-6">
              {classroom.map((el) => {
                return (
                  <Course
                    id={el?.id}
                    key={el?.id}
                    createdAt={el?.createdAt}
                    subject_name={el?.subject?.name}
                    user_name={el?.teacher?.user?.user_name}
                    image_url={el?.teacher?.user?.image_url || ''}
                    onClickDelete={onClickDelete}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
      <Alert
        open={open}
        title={'Delete Course'}
        description={<p>Are u sure u want to delete this course?</p>}
        onClickCancel={onClickCancel}
        onClickConfirm={onClickConfirm}
      />
    </>
  );
}
