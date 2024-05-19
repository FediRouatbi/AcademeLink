import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react';
import Item from './Item/Item';
import { useGetTeachersQuery } from '@/hooks/teacher';
import { useGetSubjectsQuery } from '@/hooks/subject';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { useClassroomsAtom } from '@/hooks/classroom/useClassroomsAtom';
import { useTranslations } from 'next-intl';

const Teachers = () => {
  const t = useTranslations('Classrooms.Form');

  const { data: dataTeachers } = useGetTeachersQuery({ search: '' });
  const { data: dataSubjects } = useGetSubjectsQuery({});
  const [items, setItems] = useState([1]);
  const [teachers, setTeachers] = useClassroomsAtom();

  useEffect(() => {
    return () => setTeachers([]);
  }, []);

  const numberOfTeachers = new Set(teachers.map((el) => el?.teacher_id)).size;
  const addDisabled = numberOfTeachers !== items.length;
  return (
    <div className="space-y-2 pt-5">
      <div className="flex justify-between items-center">
        <Label>{t('teachers')}</Label>
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
          <span className="sr-only">Add Teacher</span>
        </Button>
      </div>
      <div className="flex flex-col space-y-2">
        {items?.map((item) => (
          <Item
            index={item}
            setItems={setItems}
            dataTeachers={dataTeachers}
            dataSubjects={dataSubjects}
            key={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Teachers;
