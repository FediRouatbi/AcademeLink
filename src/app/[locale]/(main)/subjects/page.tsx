import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { AddSubject, Subjects } from '@/components/pages/subjects';
import { redirect } from '@/navigation';
import { getSubjects } from '@/services/subject';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getServerSession } from 'next-auth';
import React from 'react';

const page = async () => {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['subjects', ''],
    queryFn: () => getSubjects('', session?.token?.accessToken || ''),
    staleTime: 500,
  });

  if (role !== 'ADMIN') {
    redirect('/');
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>

      <AddSubject />

      <Subjects />
    </HydrationBoundary>
  );
};

export default page;
