'use client';
import React, { useState } from 'react';
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
import { useCreateClassroomMutation } from '@/hooks/classroom';
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
const animatedComponents = makeAnimated();

const createClassroomSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  teacheremail: z.string().optional(),
  subject: z.string().optional(),
  studentemail: z.string().email().optional(),
});

type createClassroomType = z.infer<typeof createClassroomSchema>;

type StudentsIds = CreateClassroom['studentsIds'];

const AddClass = () => {
  const [teachers, setTeachers] = useClassroomsAtom();

  const [studentsIds, setStudentsIds] = useState<StudentsIds>([]);
  const { data } = useGetStudentsQuery(false);

  const studentsWithoutClass = data?.GetStudents?.map((student) => ({
    value: student?.student_id,
    label: student?.user?.user_name,
  }));

  const { mutate } = useCreateClassroomMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['classrooms'] });
      queryClient.invalidateQueries({ queryKey: ['students'] });
      toast?.success('Classroom add Successfully');

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
    mutate({
      classroom_name: data?.name,
      studentsIds: studentsIds,
      teachersIds: teachers,
    });
  };
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <BadgePlus className="mr-2 h-4 w-4" />
          Add Class
        </Button>
      </SheetTrigger>
      <SheetContent className="!max-w-fit min-w-[25%]">
        <SheetHeader>
          <SheetTitle> Add Class</SheetTitle>
          <SheetDescription>
            Fill in the details to create a new class.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="space-y-2 ">
                <Label htmlFor="name">Name*</Label>
                <Input id="name" placeholder="Name" name="name" />
              </div>
              <div className="space-y-2 ">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Description"
                  name="description"
                />
              </div>
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
              <SheetFooter className="pt-10">
                <Button type="submit">ADD</Button>
              </SheetFooter>
            </form>
          </FormProvider>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddClass;
