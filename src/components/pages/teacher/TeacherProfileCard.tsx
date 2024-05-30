'use client';

import React from 'react';
import ProfileCard from '@/components/common/ProfileCard';
import { useGetTeacherQuery } from '@/hooks/teacher';
const TeacherProfileCard = ({ teacherId }: { teacherId: number }) => {
  const { data } = useGetTeacherQuery({ id: teacherId });
  const student = data?.GetTeacher;

  if (!student) return null;

  return <ProfileCard {...student?.user} role="Teacher" />;
};

export default TeacherProfileCard;
