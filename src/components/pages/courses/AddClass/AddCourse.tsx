'use client';
import React, { useEffect, useState } from 'react';
import { BadgePlus } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import {
  useCreateClassroomMutation,
  useEditClassroomMutation,
} from '@/hooks/classroom';
import { queryClient } from '@/providers/react-query-provider';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { useEditClassroomAtom } from '@/hooks/classroom/useEditClassroomAtom';
import { useTranslations } from 'next-intl';
import Boxes from './teachers/Item/comboBox';
import { CreateClassroom } from '@/gql/graphql';
import { useCreateCourseMudation } from '@/hooks/courses';

const createClassroomSchema = z.object({
  teacherId: z.number(),
  subjectId: z.number(),
  classroomId: z.number(),
});

type createClassroomType = z.infer<typeof createClassroomSchema>;

type StudentsIds = CreateClassroom['studentsIds'];

const AddCourse = () => {
  const t = useTranslations('Courses.Form');

  const [studentsIds] = useState<StudentsIds>([]);
  const [classroom, setClassroom] = useEditClassroomAtom();
  const { mutate: editClassroom, isPending: editIsPending } =
    useEditClassroomMutation({
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['classrooms'] });
        queryClient.invalidateQueries({ queryKey: ['students'] });
        toast?.success('Course Edited Successfully');
        setOpen(false);
        setClassroom(null);
        methods?.reset();
      },
      onError(error) {
        toast?.error(error?.message.split(':')[0]);
      },
    });
  const mode = classroom?.action === 'EDIT' ? 'EDIT' : 'ADD';

  const { mutate: createCourse, isPending: createIsPending } =
    useCreateCourseMudation({
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['courses'] });
        toast?.success('Course add Successfully');
        setClassroom(null);
        setOpen(false);
        methods?.reset();
      },
      onError(error) {
        toast?.error(error?.message.split(':')[0]);
      },
    });
  const methods = useForm<createClassroomType>({
    resolver: zodResolver(createClassroomSchema),
  });

  const onSubmit = (data: createClassroomType) => {
    console.log(data);
    createCourse({
      classroom_id: data?.classroomId,
      subject_id: data?.subjectId,
      teacher_id: data?.teacherId,
    });
  };

  const onError = (error: any) => {
    console.log(error);
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end">
      <Sheet
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          setClassroom(null);
        }}
      >
        <SheetTrigger asChild>
          <Button variant="outline">
            <BadgePlus className="mr-2 h-4 w-4" />
            {t('addCourse')}
          </Button>
        </SheetTrigger>
        <SheetContent className="!max-w-fit min-w-[25%]">
          <SheetHeader>
            <SheetTitle>
              {mode === 'ADD' ? t('addCourse') : t('editCourse')}
            </SheetTitle>
            <SheetDescription>{t('addCourseDescription')}</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
                <div className="flex flex-col space-y-2">
                  <Boxes />
                </div>

                <SheetFooter className="pt-10">
                  <Button
                    disabled={editIsPending || createIsPending}
                    type="submit"
                  >
                    {mode === 'ADD' ? t('create') : t('save')}
                  </Button>
                </SheetFooter>
              </form>
            </FormProvider>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AddCourse;
