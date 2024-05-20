import React, { useEffect, useState } from 'react';

import Item from './Item/Item';
import { useTeachersAtom } from '@/hooks/teacher/useTeacherAtom';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { useGetSubjectsQuery } from '@/hooks/subject';
import { useGetClassroomsQuery } from '@/hooks/classroom';
import { useTranslations } from 'next-intl';

const TeacherClassrooms = () => {
  const t = useTranslations('Teachers.Form');

  const { data: subjects, isPending: subjectsPending } = useGetSubjectsQuery(
    {}
  );
  const { data: allClassrooms, isPending: classroomsPending } =
    useGetClassroomsQuery({ search: '' });

  const [classromms, setClassrooms] = useTeachersAtom();

  const addDisabled = Boolean(classromms?.at(0)?.length);
  return (
    <div className="space-y-2 pt-5">
      <div className="flex justify-between">
        <Label className="block">{t('classrooms')}</Label>
        <Button
          disabled={!addDisabled}
          className="ml-auto"
          size="icon"
          type="button"
          variant="outline"
          onClick={() => {
            const newArray = [[], ...classromms];
            setClassrooms(newArray);
          }}
        >
          <PlusIcon className="h-4 w-4 flex-shrink-0" />
          <span className="sr-only">{t('addClassroom')}</span>
        </Button>
      </div>
      {subjectsPending || classroomsPending ? (
        <></>
      ) : (
        <div className="flex  gap-10 flex-col">
          {classromms.map((el, i) => {
            return (
              <Item
                index={i}
                key={el?.[0]?.classroom_id || 0}
                subjects={subjects}
                allClassrooms={allClassrooms}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TeacherClassrooms;
