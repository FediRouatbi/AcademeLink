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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  useCreateClassroomMutation,
  useEditClassroomMutation,
} from '@/hooks/classroom';
import { queryClient } from '@/providers/react-query-provider';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { useGetStudentsQuery } from '@/hooks/student';
import Select from 'react-select';
import { CreateClassroom } from '@/gql/graphql';
import Teachers from './teachers/Teachers';
import makeAnimated from 'react-select/animated';
import { useClassroomsAtom } from '@/hooks/classroom/useClassroomsAtom';
import { useEditClassroomAtom } from '@/hooks/classroom/useEditClassroomAtom';
import { Textarea } from '@/components/ui/textarea';
import { useSession } from 'next-auth/react';
const animatedComponents = makeAnimated();

const createClassroomSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
});

type createClassroomType = z.infer<typeof createClassroomSchema>;

type StudentsIds = CreateClassroom['studentsIds'];

const AddClass = () => {
  const { data: session } = useSession();

  const [teachers, setTeachers] = useClassroomsAtom();

  const [studentsIds, setStudentsIds] = useState<StudentsIds>([]);
  const { data } = useGetStudentsQuery(false);
  const [classroom, setClassroom] = useEditClassroomAtom();
  const { mutate: editClassroom, isPending: editIsPending } =
    useEditClassroomMutation({
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['classrooms'] });
        queryClient.invalidateQueries({ queryKey: ['students'] });
        toast?.success('Classroom Edited Successfully');
        setOpen(false);
        setClassroom(null);
        methods?.reset();
      },
      onError(error) {
        toast?.error(error?.message.split(':')[0]);
      },
    });
  const mode = classroom?.action === 'EDIT' ? 'EDIT' : 'ADD';
  const studentsWithoutClass = data?.GetStudents?.map((student) => ({
    value: student?.student_id,
    label: student?.user?.user_name,
  }));

  const { mutate: createClassroom, isPending: createIsPending } =
    useCreateClassroomMutation({
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['classrooms'] });
        queryClient.invalidateQueries({ queryKey: ['students'] });
        toast?.success('Classroom add Successfully');
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
    if (classroom?.action === 'EDIT') {
      editClassroom({
        classroom_id: classroom?.classroom_id,
        classroom_name: data?.name,
        description: data?.description,
      });
      return;
    }

    createClassroom({
      classroom_name: data?.name,
      studentsIds: studentsIds,
      teachersIds: teachers,
      description: data?.description || '',
    });
  };
  const onError = (error: any) => {
    console.log(error);
  };

  useEffect(() => {
    if (classroom?.action === 'EDIT') {
      setOpen(true);
      methods?.reset({
        description: classroom?.description,
        name: classroom?.classroom_name,
      });
    }
  }, [classroom?.action]);

  const [open, setOpen] = useState(false);

  const role = session?.user?.role;

  if (role !== 'ADMIN') return null;

  return (
    <Sheet
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        methods?.reset({ description: '', name: '' });
        setClassroom(null);
      }}
    >
      <SheetTrigger asChild>
        <Button variant="outline">
          <BadgePlus className="mr-2 h-4 w-4" />
          Add Classroom
        </Button>
      </SheetTrigger>
      <SheetContent className="!max-w-fit min-w-[25%]">
        <SheetHeader>
          <SheetTitle>
            {mode === 'ADD' ? 'Add Classroom' : 'Edit Classroom'}
          </SheetTitle>
          <SheetDescription>
            Fill in the details to{' '}
            {mode === 'ADD' ? 'create a new classroom.' : 'Edit Classroom'}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
              <div className="space-y-2 ">
                <Label htmlFor="name">Name*</Label>
                <Input id="name" placeholder="Name" name="name" />
              </div>
              <div className="space-y-2 ">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  name="description"
                  id="description"
                  placeholder="Description"
                />
              </div>
              {mode !== 'EDIT' && open && (
                <>
                  <Teachers />
                  <div className="space-y-2 pt-5">
                    <Label>Students</Label>
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-2 items-center">
                        <Select
                          className="flex-1"
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          onChange={(choice) => {
                            setStudentsIds(
                              //@ts-ignore
                              choice?.map((el) => ({ student_id: el?.value }))
                            );
                          }}
                          options={studentsWithoutClass}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              <SheetFooter className="pt-10">
                <Button
                  disabled={editIsPending || createIsPending}
                  type="submit"
                >
                  {mode === 'ADD' ? 'Add' : 'Edit'}
                </Button>
              </SheetFooter>
            </form>
          </FormProvider>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddClass;
