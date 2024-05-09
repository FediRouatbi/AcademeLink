'use client';
import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useGetClassroomQuery } from '@/hooks/classroom';
import Students from './students/Students';
import Subjects from './subjects/Subjects';
import Teachers from './teachers/Teachers';

const Classroom = ({ classroomId }: { classroomId: number }) => {
  const { data } = useGetClassroomQuery({ classroomId });

  const students = data?.getClassroom?.student;
  const courses = data?.getClassroom?.course;
  const teachers = courses
    ?.filter((course, index, self) => {
      return (
        index ===
        self.findIndex(
          (c) => c.teacher?.teacher_id === course?.teacher?.teacher_id
        )
      );
    })
    .map((course) => course.teacher);

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>{data?.getClassroom?.classroom_name}</CardTitle>
        <CardDescription className="max-w-lg">
          {data?.getClassroom?.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Students students={students} />
        <Teachers teachers={teachers} />
        <Subjects courses={data?.getClassroom?.course} />
      </CardContent>
    </Card>
  );
};
export default Classroom;
