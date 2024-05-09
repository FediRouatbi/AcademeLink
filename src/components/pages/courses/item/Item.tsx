import { GetCoursesQuery } from '@/gql/graphql';
import React from 'react';
type Course = GetCoursesQuery['getCourses'][0];
const Item = ({ course }: { course: Course }) => {
  return (
    <div className="relative rounded-lg overflow-hidden group">
      <img
        alt="Web Development Course"
        className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
        height="300"
        src="/placeholder.svg"
        style={{
          aspectRatio: '400/300',
          objectFit: 'cover',
        }}
        width="400"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 flex flex-col justify-end">
        <h3 className="text-white text-lg font-semibold mb-1">
          {course?.subject?.name}
        </h3>
        <p className="text-gray-300 text-sm">
          {course.teacher?.user?.user_name}
        </p>
        <p className="text-gray-400 text-sm">
          {course?.classroom?.student?.length || 0} students
        </p>
      </div>
    </div>
  );
};

export default Item;
