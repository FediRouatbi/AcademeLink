'use client';
import React, { useState } from 'react';
import { BadgePlus, Loader2 } from 'lucide-react';

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
import { queryClient } from '@/providers/react-query-provider';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { useCreateStudentMutation } from '@/hooks/student/useCreateStudentMudation';

const createStudentSchema = z.object({
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
};
type createStudentmType = z.infer<typeof createStudentSchema>;
const AddStudent = ({ className }: { className?: string }) => {
  const { mutate, isPending } = useCreateStudentMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      setOpen(false);
      toast?.success('Student add Successfully');
    },
    onError(error) {
      toast?.error(error?.message.split(':')[0]);
    },
  });
  const methods = useForm<createStudentmType>({
    resolver: zodResolver(createStudentSchema),
    defaultValues,
  });

  const onSubmit = (data: createStudentmType) => {
    mutate({
      email: data?.email,
      first_name: data?.firstName,
      last_name: data?.lastName,
      password: data?.password,
      user_name: data?.userName,
    });
  };
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <Sheet
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          methods?.reset(defaultValues);
        }}
      >
        <SheetTrigger asChild>
          <Button variant="outline">
            <BadgePlus className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        </SheetTrigger>
        <SheetContent className="min-w-[25%] overflow-y-auto">
          <SheetHeader>
            <SheetTitle> Add Student</SheetTitle>
            <SheetDescription>
              Fill in the details to create a new Student.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="space-y-2 ">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" name="firstName" />
                </div>
                <div className="space-y-2 ">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" name="lastName" />
                </div>
                <div className="space-y-2 ">
                  <Label htmlFor="userName">User name</Label>
                  <Input id="userName" name="userName" />
                </div>
                <div className="space-y-2 ">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" />
                </div>
                <div className="space-y-2 ">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" />
                </div>

                <SheetFooter>
                  <Button
                    type="submit"
                    className="min-w-16"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <Loader2 className="size-5  animate-spin" />
                    ) : (
                      'ADD'
                    )}
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

export default AddStudent;
