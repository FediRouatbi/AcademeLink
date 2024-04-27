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
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { ComboboxDemo } from '../input/Input';

const createClassroomSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  teacheremail: z.string().optional(),
  subject: z.string().optional(),
  studentemail: z.string().email().optional(),
});

type createClassroomType = z.infer<typeof createClassroomSchema>;
const AddClass = () => {
  const { mutate } = useCreateClassroomMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['classrooms'] });
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
    mutate({ classroom: data.name });
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
      <SheetContent className="!max-w-fit overflow-y-auto">
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
                <Label htmlFor="name">Name</Label>
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
              <div className="space-y-2">
                <Label>Teachers</Label>
                <div className="flex flex-col space-y-2">
                  <div className="flex gap-2  w-full items-center">
                    <Image
                      alt="Avatar"
                      className="rounded-full"
                      height="32"
                      src="/placeholder-user.jpg"
                      style={{
                        aspectRatio: '32/32',
                        objectFit: 'cover',
                      }}
                      width="32"
                    />

                    <ComboboxDemo />
                    <Input
                      className="w-[200px]"
                      placeholder="Subject"
                      type="text"
                      hideError
                      name="subject"
                    />

                    <Button
                      className="ml-auto"
                      size="icon"
                      type="button"
                      variant="outline"
                    >
                      <PlusIcon className="h-4 w-4 flex-shrink-0" />
                      <span className="sr-only">Add teacher</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Students</Label>
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2 items-center">
                    <Image
                      alt="Avatar"
                      className="rounded-full"
                      height="32"
                      src="/placeholder-user.jpg"
                      style={{
                        aspectRatio: '32/32',
                        objectFit: 'cover',
                      }}
                      width="32"
                    />
                    <Input
                      placeholder="Email"
                      type="email"
                      hideError
                      name="studentemail"
                    />
                    <Button
                      className="ml-auto"
                      size="icon"
                      variant="outline"
                      type="button"
                    >
                      <PlusIcon className="h-4 w-4" />
                      <span className="sr-only">Add student</span>
                    </Button>
                  </div>
                </div>
              </div>
              <SheetFooter>
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
