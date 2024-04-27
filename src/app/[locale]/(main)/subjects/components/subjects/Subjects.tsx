'use client';
import React, { useState } from 'react';
import Subject from './subject/Subject';
import { useDeleteSubjectMutation, useGetSubjectsQuery } from '@/hooks/subject';
import { type Subject as SubjectType } from '@/gql/graphql';
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
import { queryClient } from '@/providers/react-query-provider';
import { toast } from 'sonner';

const Subjects = () => {
  const [open, setOpen] = useState(false);
  const { mutate } = useDeleteSubjectMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['subjects'] });
      toast?.success(`Subject ${subject?.name} deleted Successfully`);
      setSubject(null);
    },
    onError(error) {
      toast?.error(`failed deleting ${subject?.name}`);
      setSubject(null);
    },
  });
  const [subject, setSubject] = useState<SubjectType | null>(null);
  const { data } = useGetSubjectsQuery();

  const onClickDelete = (subject: SubjectType) => {
    setSubject(subject);
    setOpen(true);
  };
  const onClickConfirm = () => {
    if (!subject?.id) return;
    mutate(subject?.id);
    setOpen(false);
  };
  return (
    <>
      <div className="text-center grid gap-5 ">
        {data?.getSubjects.map((subject) => (
          <Subject
            key={subject?.id}
            subject={subject}
            onClickDelete={onClickDelete}
          />
        ))}
      </div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete{' '}
              {subject?.name} subject
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

export default Subjects;
