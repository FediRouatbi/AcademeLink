import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import Courses from '@/components/pages/courses/Courses';
import { getCourses } from '@/services/courses';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getServerSession } from 'next-auth';
import React from 'react';

const page = async () => {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['courses', ''],
    queryFn: () => getCourses('', session?.token?.accessToken || ''),
    staleTime: 500,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Courses />
    </HydrationBoundary>
  );
};

export default page;
