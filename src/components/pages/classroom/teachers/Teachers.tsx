import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { GetClassroomQuery } from '@/gql/graphql';
import React from 'react';
type Teachers = {
  teachers?: NonNullable<
    GetClassroomQuery['getClassroom']['course']
  >[0]['teacher'][];
};

const Teachers = ({ teachers }: Teachers) => {
  const items = teachers?.map((teacher) => ({
    id: teacher?.teacher_id,
    name: teacher?.user?.user_name,
    designation: teacher?.user?.email,
    image: teacher?.user?.image_url || '/teacher.png',
  }));
  return (
    <div className="py-16 flex flex-col gap-10">
      <h2 className="text-lg">Teachers :</h2>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={items || []} />
      </div>
    </div>
  );
};

export default Teachers;
