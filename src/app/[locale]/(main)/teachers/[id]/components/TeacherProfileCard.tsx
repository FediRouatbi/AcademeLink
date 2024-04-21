"use client"

import React from "react";
import ProfileCard from "@/app/[locale]/(main)/components/ProfileCard";
import { useGetTeacherQuery } from "@/hooks/teacher";
import { useRouter } from "next/navigation";
const TeacherProfileCard = ({ teacherId }: { teacherId: number }) => {
  const { data } = useGetTeacherQuery({ id: teacherId });
  const { push } = useRouter();
  const student = data?.GetTeacher;

  if (!student) return null;

  return <ProfileCard {...student?.user} role="Teacher" />;
};

export default TeacherProfileCard;
