'use client';

import React from 'react';
import ProfileCard from '@/components/common/ProfileCard';
import { useGetStudentQuery } from '@/hooks/student';
const StudentProfileCard = ({ studentId }: { studentId: number }) => {
  const { data } = useGetStudentQuery({ id: studentId });
  const student = data?.getStudent;

  if (!student) return null;

  return <ProfileCard {...student?.user} role="Student" />;
};

export default StudentProfileCard;
