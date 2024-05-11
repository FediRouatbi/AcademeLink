'use client';

import React, { useEffect } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FormProvider, useForm } from 'react-hook-form';
import useGetMyProfile from '@/hooks/useGetMyProfile';
import { z } from 'zod';
import { useEditUserMutation } from '@/hooks/user/useEditUserMutation';
import { queryClient } from '@/providers/react-query-provider';
import { toast } from 'sonner';

const userSchema = z.object({
  first_name: z.string().min(3),
  last_name: z.string().min(3),
  user_name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6).optional(),
});

type userSchemaType = z.infer<typeof userSchema>;
export const Settings = () => {
  const { data: queryData, isSuccess } = useGetMyProfile();
  const { mutate, isPending } = useEditUserMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['GetCurrentUser'] });
      toast?.success('Edit profile Successfully');
    },
  });

  const methods = useForm({
    defaultValues: {
      first_name: queryData?.getCurrentUser.first_name || '',
      last_name: queryData?.getCurrentUser.last_name || '',
      user_name: queryData?.getCurrentUser.user_name || '',
      email: queryData?.getCurrentUser.email || '',
      password: '',
    },
  });

  const onSubmit = (data: userSchemaType) => {
    const password = data?.password ? { password: data?.password } : {};
    mutate({
      email: data?.email,
      first_name: data?.first_name,
      last_name: data?.last_name,
      user_name: data?.user_name,
      user_id: queryData?.getCurrentUser?.user_id || 0,
      ...password,
    });
  };

  useEffect(() => {
    methods?.reset({
      first_name: queryData?.getCurrentUser.first_name || '',
      last_name: queryData?.getCurrentUser.last_name || '',
      user_name: queryData?.getCurrentUser.user_name || '',
      email: queryData?.getCurrentUser.email || '',
      password: '',
    });
  }, [isSuccess]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Personal information </CardTitle>
            <CardDescription>
              Lipsum dolor sit amet, consectetur adipiscing elit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="text" className="w-full" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="first_name">First name</Label>
                <Input
                  id="first_name"
                  name="first_name"
                  type="text"
                  className="w-full"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="last_name">Last name</Label>
                <Input
                  name="last_name"
                  id="last_name"
                  type="text"
                  className="w-full"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="user_name">User name</Label>
                <Input
                  name="user_name"
                  id="user_name"
                  type="text"
                  className="w-full"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  id="password"
                  type="text"
                  className="w-full"
                  placeholder="*********"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea name="aa" id="description" className="min-h-32" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button disabled={isPending} type="submit">
              Save
            </Button>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
};
