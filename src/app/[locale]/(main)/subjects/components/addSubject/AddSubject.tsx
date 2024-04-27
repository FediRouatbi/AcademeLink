'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCreateSubjectMutation } from '@/hooks/subject';
import { queryClient } from '@/providers/react-query-provider';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const AddSubject = () => {
  const { mutate } = useCreateSubjectMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['subjects'] });
      toast?.success('Subject add Successfully');
      methods.reset({ subject: '' });
    },
    onError(error) {
      toast?.error(error?.message.split(':')[0]);
    },
  });
  const methods = useForm<{ subject: string }>({
    defaultValues: { subject: '' },
  });
  const onSubmit = ({ subject }: { subject: string }) => {
    mutate(subject);
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods?.handleSubmit(onSubmit)}
        className=" w-full max-w-3xl items-center space-x-2 flex mx-auto "
      >
        <div className="flex-1">
          <Input
            name="subject"
            type="text"
            placeholder="subject"
            hideError
            className="w-full flex-1"
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
    </FormProvider>
  );
};

export default AddSubject;
