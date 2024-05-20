import React from 'react';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getStudents } from '@/services/student';
import { AddStudent, StudentsTabel } from '@/components/pages/students';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth';

const page = async () => {
  const session = await getServerSession(authOptions);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['students', ''],
    queryFn: () => getStudents(true, ''),
  });
  const role = session?.user.role;
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {role === 'ADMIN' && <AddStudent className="flex justify-end" />}

      <StudentsTabel role={role} />
    </HydrationBoundary>
  );
};

export default page;
