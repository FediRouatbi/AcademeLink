import React from 'react';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getTeachers } from '@/services/teacher';
import { AddTeacher, TeachersTabel } from '@/components/pages/teachers';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth';

const page = async () => {
  const session = await getServerSession(authOptions);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['teachers', ''],
    queryFn: () => getTeachers(''),
    staleTime: 500,
  });
  const role = session?.user.role;

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {role === 'ADMIN' && <AddTeacher className="flex justify-end" />}

      <TeachersTabel role={role} />
    </HydrationBoundary>
  );
};

export default page;
