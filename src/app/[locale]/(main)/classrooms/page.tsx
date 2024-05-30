import React from 'react';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getClassrooms } from '@/services/classroom';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { AddClass, Classrooms } from '@/components/pages/classrooms';

const page = async () => {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();
  const accessToken = session?.token?.accessToken;

  await queryClient.prefetchQuery({
    queryKey: ['classrooms', ''],
    queryFn: () => getClassrooms('', accessToken || ''),
    staleTime: 500,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex justify-end">
        {session?.user?.role === 'ADMIN' && <AddClass />}
      </div>
      <Classrooms />
    </HydrationBoundary>
  );
};

export default page;
