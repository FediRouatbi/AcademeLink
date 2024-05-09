import React from 'react';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getStudents } from '@/services/student';
import { AddStudent, StudentsTabel } from '@/components/pages/students';

const page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['students'],
    queryFn: () => getStudents(),
    staleTime: 500,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AddStudent className="flex justify-end" />
      <StudentsTabel />
    </HydrationBoundary>
  );
};

export default page;
