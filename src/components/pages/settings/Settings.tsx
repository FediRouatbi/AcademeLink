'use client';

import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

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
import { SingleImageDropzone } from '@/components/common/singleImageDropzone/SingleImageDropzone ';
import { useUploadThing } from '@/utils/uploadthing';

const userSchema = z.object({
  first_name: z.string().min(3),
  last_name: z.string().min(3),
  user_name: z.string().min(3),
  email: z.string().email(),
  description: z.string().optional(),
  password: z.string().min(6).optional(),
});

type userSchemaType = z.infer<typeof userSchema>;

export const Settings = () => {
  const { startUpload, permittedFileInfo, isUploading } = useUploadThing(
    'imageUploader',
    {
      onClientUploadComplete: () => {},
      onUploadError: () => {},
      onUploadBegin: () => {},
    }
  );
  const [file, setFile] = useState<File | string>('');
  const { data: queryData, isSuccess } = useGetMyProfile();
  const { mutate, isPending } = useEditUserMutation({
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ['GetCurrentUser'] });
      toast?.success('Edit profile Successfully');
      methods.setValue('password', '');
    },
  });

  const methods = useForm({
    defaultValues: {
      first_name: queryData?.getCurrentUser.first_name || '',
      last_name: queryData?.getCurrentUser.last_name || '',
      user_name: queryData?.getCurrentUser.user_name || '',
      email: queryData?.getCurrentUser.email || '',
      description: queryData?.getCurrentUser.description || '',
      password: '',
    },
  });

  const onSubmit = async (data: userSchemaType) => {
    const password = data?.password ? { password: data?.password } : {};

    if (file instanceof File) {
      const uploadedFile = await startUpload([file]);
      const fileUrl = uploadedFile?.at(0)?.url;
      mutate({
        email: data?.email,
        first_name: data?.first_name,
        last_name: data?.last_name,
        user_name: data?.user_name,
        description: data?.description,
        user_id: queryData?.getCurrentUser?.user_id || 0,
        image_url: fileUrl,
        ...password,
      });
      setFile(fileUrl||"");
    } else {
      mutate({
        email: data?.email,
        first_name: data?.first_name,
        last_name: data?.last_name,
        user_name: data?.user_name,
        description: data?.description,
        user_id: queryData?.getCurrentUser?.user_id || 0,
        ...password,
      });
    }
  };

  useEffect(() => {
    methods?.reset({
      first_name: queryData?.getCurrentUser.first_name || '',
      last_name: queryData?.getCurrentUser.last_name || '',
      user_name: queryData?.getCurrentUser.user_name || '',
      email: queryData?.getCurrentUser.email || '',
      description: queryData?.getCurrentUser.description || '',
      password: '',
    });

    setFile(queryData?.getCurrentUser?.image_url || '');
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
            <div className="flex">
              <div className="w-1/3 flex flex-col  px-10">
                <SingleImageDropzone
                  width={200}
                  height={200}
                  value={file}
                  onChange={(file) => {
                    setFile(file || '');
                  }}
                  className="mx-auto"
                />

                <div className="text-center flex flex-col gap-1 py-5 text-xl font-bold">
                  <div> @{queryData?.getCurrentUser.first_name}</div>
                  <div>{queryData?.getCurrentUser.user_name}</div>

                  <div className="font-normal w-fit pt-7">
                    {parse(queryData?.getCurrentUser?.description || '')}
                  </div>
                </div>
              </div>
              <div className="grid gap-6 w-2/3">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    className="w-full"
                  />
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
                    type="password"
                    className="w-full"
                    placeholder="*********"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    name="description"
                    id="description"
                    className="min-h-32"
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4 justify-end">
            <Button isPending={isPending || isUploading} type="submit">
              Save
            </Button>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
};
