import React from 'react';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getTeachers } from '@/services/teacher';
import { AddTeacher, TeachersTabel } from '@/components/pages/teachers';

const page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['teachers'],
    queryFn: getTeachers,
    staleTime: 500,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AddTeacher className="flex justify-end" />

      <TeachersTabel />
    </HydrationBoundary>
  );
};

export default page;
