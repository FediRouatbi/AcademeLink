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
import { Input, PasswordInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { queryClient } from '@/providers/react-query-provider';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import {
  useCreateTeacherMutation,
  useEditTeacherMudation,
} from '@/hooks/teacher';
import TeacherClassrooms from './teacherClassrooms/TeacherClassrooms';
import { useTeachersAtom } from '@/hooks/teacher/useTeacherAtom';
import { useEditTeacherAtom } from '@/hooks/teacher/useEditTeacherAtom';
import { splitArrayById } from '@/utils/splitArrayByid';
import { useTranslations } from 'next-intl';

const createTeacherSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  userName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});
const defaultValues = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  userName: '',
  classrooms: [],
};
export type createTeachermType = z.infer<typeof createTeacherSchema>;

const AddTeacher = ({ className }: { className?: string }) => {
  const t = useTranslations('Teachers.Form');

  const [teacher, setTeacher] = useEditTeacherAtom();

  const { mutate, isPending } = useCreateTeacherMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['teachers'] });
      setOpen(false);
      toast?.success('Teacher add Successfully');
    },
    onError(error) {
      toast?.error(error?.message.split(':')[0]);
    },
  });
  const mode = teacher?.action === 'EDIT' ? 'EDIT' : 'ADD';
  const { mutate: editTeacher, isPending: editIsPending } =
    useEditTeacherMudation({
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['teachers'] });
        setOpen(false);
        setTeacher(null);
        toast?.success('Teacher edited Successfully');
      },
      onError(error) {
        toast?.error(error?.message.split(':')[0]);
      },
    });
  const methods = useForm<createTeachermType>({
    resolver: zodResolver(createTeacherSchema),
    defaultValues,
  });

  const [classrooms, setClassrooms] = useTeachersAtom();
  const onSubmit = (data: createTeachermType) => {
    if (mode === 'ADD')
      mutate({
        email: data?.email,
        first_name: data?.firstName,
        last_name: data?.lastName,
        password: data?.password,
        user_name: data?.userName,
        classrooms: classrooms?.flat(),
      });
    if (mode === 'EDIT' && teacher?.teacher_id) {
      editTeacher({
        teacher_id: teacher?.teacher_id,
        classrooms: classrooms?.flat(),
        email: data?.email,
        first_name: data?.firstName,
        last_name: data?.lastName,
        password: data?.password,
        user_name: data?.userName,
      });
    }
  };
  const onError = (error: any) => {
    console.log(error);
  };

  useEffect(() => {
    if (teacher?.action === 'EDIT') {
      setOpen(true);
      methods?.reset({
        email: teacher?.user?.email,
        firstName: teacher?.user?.first_name,
        lastName: teacher?.user?.last_name,
        password: '',
        userName: teacher?.user?.user_name,
      });
      const data = splitArrayById(teacher?.course);
      const classes = data?.length ? data : [[]];
      setClassrooms(classes);
    }
  }, [teacher?.action]);

  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <Sheet
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          methods?.reset(defaultValues);
          setTeacher(null);
          setClassrooms([[]]);
        }}
      >
        <SheetTrigger asChild>
          <Button variant="outline">
            <BadgePlus className="mr-2 h-4 w-4" />
            {t('addTeacher')}
          </Button>
        </SheetTrigger>
        <SheetContent className="min-w-[25%] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              {' '}
              {mode === 'ADD' ? t('addTeacher') : t('editTeacher')}
            </SheetTitle>
            <SheetDescription>
              {mode === 'ADD' ? t('addDescription') : t('editDescription')}
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
                <div className="space-y-2 ">
                  <Label htmlFor="firstName">{t('firstName')}*</Label>
                  <Input id="firstName" name="firstName" />
                </div>
                <div className="space-y-2 ">
                  <Label htmlFor="lastName">{t('lastName')}*</Label>
                  <Input id="lastName" name="lastName" />
                </div>
                <div className="space-y-2 ">
                  <Label htmlFor="userName">{t('userName')}*</Label>
                  <Input id="userName" name="userName" />
                </div>
                <div className="space-y-2 ">
                  <Label htmlFor="email">{t('email')}*</Label>
                  <Input id="email" name="email" />
                </div>
                <div className="space-y-2 ">
                  <Label htmlFor="password">{t('password')}*</Label>
                  <PasswordInput id="password" name="password" />
                </div>
                <TeacherClassrooms />
                <SheetFooter className="pt-10">
                  <Button
                    type="submit"
                    className="min-w-16"
                    isPending={isPending || editIsPending}
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

export default AddTeacher;
