'use client';
import { useGetClassroomsQuery } from '@/hooks/classroom/useGetClassroomsQuery';
import React, { useState } from 'react';
import { useDeleteClassroomMutation } from '@/hooks/classroom';
import { queryClient } from '@/providers/react-query-provider';
import { toast } from 'sonner';
import ClassCard, { ClassroomType } from './classCard/ClassCard';
import { useEditClassroomAtom } from '@/hooks/classroom/useEditClassroomAtom';
import { useSeachAtom } from '@/hooks/useSeachAtom';
import { Alert } from '@/components/common/Alert';
import { useTranslations } from 'next-intl';
const Classrooms = () => {
  const t = useTranslations('Classrooms.Alert');

  const [debouncedValue] = useSeachAtom();
  const { data } = useGetClassroomsQuery({ search: debouncedValue });

  const { mutate } = useDeleteClassroomMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['classrooms'] });
      queryClient.invalidateQueries({ queryKey: ['students'] });
      toast?.success(
        `Classroom ${classroom?.classroom_name} deleted Successfully`
      );
      setClassroom(null);
    },
    onError(error) {
      toast?.error(`failed deleting ${classroom?.classroom_name}`);
      setClassroom(null);
    },
  });

  const [open, setOpen] = useState(false);
  const [classroom, setClassroom] = useEditClassroomAtom();
  const classrooms = data?.getClassrooms;

  const onClickDelete = (classroom: ClassroomType) => {
    setClassroom({ ...classroom, action: 'DELETE' });
    setOpen(true);
  };
  const onClickCancel = () => {
    setOpen(false);
    setClassroom(null);
  };
  const onClickEdit = (classroom: ClassroomType) => {
    setClassroom({ ...classroom, action: 'EDIT' });
  };
  const onClickConfirm = () => {
    if (!classroom?.classroom_id) return;
    mutate(+classroom?.classroom_id);
    setOpen(false);
  };
  return (
    <div className="grid md:grid-cols-4 gap-4 xl:gap-8">
      {classrooms?.map((classroom) => (
        <ClassCard
          classroom={classroom}
          key={classroom?.classroom_id}
          onClickDelete={onClickDelete}
          onClickEdit={onClickEdit}
        />
      ))}

      <Alert
        open={open}
        title={t('title')}
        description={
          <p>
            {t('description')} <strong> {classroom?.classroom_name}</strong>
          </p>
        }
        onClickCancel={onClickCancel}
        onClickConfirm={onClickConfirm}
      />
    </div>
  );
};

export default Classrooms;
