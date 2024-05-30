import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import Course from '@/components/pages/course/Course';
import { getServerSession } from 'next-auth';
import React from 'react';
type Props = { params: { local: 'fr' | 'en'; id: string } };

const page = async ({ params: { id } }: Props) => {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  return <Course id={+id} role={role} />;
};

export default page;
