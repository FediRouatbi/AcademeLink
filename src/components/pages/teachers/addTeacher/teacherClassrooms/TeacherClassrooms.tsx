import React, { useEffect, useState } from 'react';

import Item from './Item/Item';
import { useTeachersAtom } from '@/hooks/teacher/useTeacherAtom';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { useGetSubjectsQuery } from '@/hooks/subject';
import { useGetClassroomsQuery } from '@/hooks/classroom';

const TeacherClassrooms = () => {
  const { data: subjects } = useGetSubjectsQuery();
  const { data: allClassrooms } = useGetClassroomsQuery();

  const [classromms, setClassrooms] = useTeachersAtom();
  const [items, setItems] = useState([1]);

  useEffect(() => {
    return () => setClassrooms([]);
  }, []);
  const numberOfClasses = new Set(classromms.map((el) => el?.classroom_id))
    .size;
  const addDisabled = numberOfClasses !== items.length;
  return (
    <div className="space-y-2 pt-5">
      <div className="flex justify-between">
        <Label className="block">Classrooms</Label>
        <Button
          disabled={addDisabled}
          className="ml-auto"
          size="icon"
          type="button"
          variant="outline"
          onClick={() => {
            setItems((prev) => {
              const lastNumber = prev[0];
              return [lastNumber + 1, ...prev];
            });
          }}
        >
          <PlusIcon className="h-4 w-4 flex-shrink-0" />
          <span className="sr-only">Add classroom</span>
        </Button>
      </div>
      <div className="flex  gap-10 flex-col">
        {items.map((el, i) => {
          return (
            <Item
              key={el}
              index={el}
              setItems={setItems}
              subjects={subjects}
              allClassrooms={allClassrooms}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeacherClassrooms;
