import { AddSubject, Subjects } from '@/components/pages/subjects';
import React from 'react';

const page = () => {
  return (
    <>
      <h1 className="text-center text-7xl">Subjects</h1>

      <AddSubject />

      <Subjects />
    </>
  );
};

export default page;
