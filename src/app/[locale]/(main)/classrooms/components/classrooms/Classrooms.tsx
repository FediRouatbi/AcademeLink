'use client';
import { useGetClassroomsQuery } from '@/hooks/classroom/useGetClassroomsQuery';
import React, { useState } from 'react';
import ClassCard from '../classCard';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ClassroomType } from '../classCard/ClassCard';
import { useDeleteClassroomMutation } from '@/hooks/classroom';
import { queryClient } from '@/providers/react-query-provider';
import { toast } from 'sonner';
const Classrooms = () => {
  const { mutate } = useDeleteClassroomMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['classrooms'] });
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
  const [classroom, setClassroom] = useState<ClassroomType | null>(null);
  const { data } = useGetClassroomsQuery();
  const classrooms = data?.getClassrooms;

  const onClickDelete = (classroom: ClassroomType) => {
    setClassroom(classroom);
    setOpen(true);
  };
  const onClickConfirm = () => {
    if (!classroom?.classroom_id) return;
    mutate(+classroom?.classroom_id);
    setOpen(false);
  };
  return (
    <>
      <div>
        <div className="flex gap-4  flex-wrap">
          {classrooms?.map((classroom) => (
            <ClassCard
              classroom={classroom}
              key={classroom?.classroom_id}
              onClickDelete={onClickDelete}
            />
          ))}
        </div>
      </div>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete{' '}
              {classroom?.classroom_name} classroom
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <Button onClick={onClickConfirm} variant="destructive">
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Classrooms;
