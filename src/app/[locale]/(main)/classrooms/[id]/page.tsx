import Classroom from '@/components/pages/classroom/Classroom';
import React from 'react';
type Props = { params: { local: 'fr' | 'en'; id: string } };
const page = ({ params: { id } }: Props) => {
  return <>{<Classroom classroomId={+id} />}</>;
};

export default page;
