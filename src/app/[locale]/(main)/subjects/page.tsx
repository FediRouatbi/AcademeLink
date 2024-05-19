import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { AddSubject, Subjects } from '@/components/pages/subjects';
import { getSubjects } from '@/services/subject';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
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
    redirect('/fr');
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h1 className="text-center text-7xl">Subjects</h1>

      <AddSubject />

      <Subjects />
    </HydrationBoundary>
  );
};

export default page;
