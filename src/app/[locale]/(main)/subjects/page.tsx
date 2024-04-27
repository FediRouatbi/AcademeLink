import React from 'react';
import AddSubject from './components/addSubject/AddSubject';
import Subjects from './components/subjects/Subjects';

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
