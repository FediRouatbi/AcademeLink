import Course from '@/components/common/course/Course';

import { GetClassroomQuery } from '@/gql/graphql';

import React from 'react';
type Courses = GetClassroomQuery['getClassroom']['course'];
const Subjects = ({ courses }: { courses: Courses }) => {
  return (
    <div className="py-10">
      <h2 className="text-lg">Subjects :</h2>

      <div className="grid grid-cols-4 pt-8 gap-10">
        {courses?.map((course) => (
          <Course
        
            id={course?.id}
            key={course?.id}
            createdAt={course?.createdAt}
            subject_name={course?.subject?.name}
            user_name={course?.teacher?.user?.user_name}
            image_url={course.teacher?.user?.image_url||""}
          />
        ))}
      </div>
    </div>
  );
};

export default Subjects;
