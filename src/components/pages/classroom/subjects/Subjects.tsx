import { Teacher } from '@/assets/svg';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { GetClassroomQuery } from '@/gql/graphql';
import dayjs from 'dayjs';
import { CalendarIcon, Library } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
type Courses = GetClassroomQuery['getClassroom']['course'];
const Subjects = ({ courses }: { courses: Courses }) => {
  return (
    <div className="py-10">
      <h2 className="text-lg">Subjects :</h2>

      <div className="grid grid-cols-4 pt-8 gap-10">
        {courses?.map((course) => (
          <Link
            href={`/fr/courses/${course?.id}`}
            key={course?.id}
            className="flex flex-col cursor-pointer  border-gradient text-white p-5  rounded-lg  overflow-hidden aspect-video   hover:scale-105 transition-all"
          >
            <div className="flex justify-between">
              <div className="flex  items-center text-3xl">
                {course?.subject?.name}
              </div>
              <div className="flex  items-center">
                <CalendarIcon className="mr-2 h-4 w-4 " />

                {dayjs(course?.createdAt).format('DD MMMM YYYY')}
              </div>
            </div>
            <div className="mt-auto flex justify-between">
              <div className="  flex gap-2  items-center text-xl">
                <Avatar className="h-7 w-7">
                  <AvatarImage
                    alt="User Avatar"
                    src="/teacher.png"
                    className=""
                  />
                </Avatar>
                {course?.teacher?.user?.user_name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
