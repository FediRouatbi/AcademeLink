import Course from '@/components/pages/course/Course';
import React from 'react';
type Props = { params: { local: 'fr' | 'en'; id: string } };

const page = ({ params: { id } }: Props) => {
  return (
    <div>
      <Course id={+id} />
    </div>
  );
};

export default page;
