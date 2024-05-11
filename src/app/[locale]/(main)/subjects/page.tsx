import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { AddSubject, Subjects } from '@/components/pages/subjects';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;

  if (role !== 'ADMIN') {
    redirect('/fr');
  }

  return (
    <>
      <h1 className="text-center text-7xl">Subjects</h1>

      <AddSubject />

      <Subjects />
    </>
  );
};

export default page;
