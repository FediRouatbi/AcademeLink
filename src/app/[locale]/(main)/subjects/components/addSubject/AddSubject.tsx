'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  useCreateSubjectMutation,
  useEditSubjectMutation,
} from '@/hooks/subject';
import { useEditSubject } from '@/hooks/subject/useEditAtom';
import { queryClient } from '@/providers/react-query-provider';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const addSubjectSchema = z.object({
  subject: z
    .string()
    .min(3, { message: 'Subject name must contain at least 3 character(s)' }),
});
const AddSubject = () => {
  const [editedSubject, setEditSubject] = useEditSubject();

  const mode = editedSubject ? 'EDIT' : 'ADD';

  const { mutate: createSubjet, isPending: createIsPending } =
    useCreateSubjectMutation({
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['subjects'] });
        toast?.success('Subject add Successfully');
        methods.reset({ subject: '' });
      },
      onError(error) {
        toast?.error(error?.message.split(':')[0]);
      },
    });
  const { mutate: editSubject, isPending: editIsPending } =
    useEditSubjectMutation({
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['subjects'] });
        setEditSubject(null);
        toast?.success('Subject edited Successfully');
        methods.reset({ subject: '' });
      },
      onError(error) {
        toast?.error(error?.message.split(':')[0]);
      },
    });

  const methods = useForm<{ subject: string }>({
    resolver: zodResolver(addSubjectSchema),
    defaultValues: { subject: '' },
  });

  useEffect(() => {
    if (!editedSubject?.name) return;

    methods?.setValue('subject', editedSubject?.name);
    methods?.clearErrors('subject');
  }, [editedSubject?.name]);

  const onSubmit = ({ subject }: { subject: string }) => {
    if (mode === 'ADD') createSubjet(subject);

    if (mode === 'EDIT' && editedSubject) {
      editSubject({
        id: editedSubject?.id,
        name: subject,
      });
    }
  };
  return (
    <FormProvider {...methods}>
      <div className="flex justify-center">
        <form
          onSubmit={methods?.handleSubmit(onSubmit)}
          className=" w-full max-w-3xl items-start space-x-2 flex  relative"
        >
          <div className="flex-1">
            <Input
              name="subject"
              type="text"
              placeholder="subject"
              className="w-full flex-1"
            />
          </div>
          <Button
            type="submit"
            isPending={editIsPending || createIsPending}
            className="min-w-16"
          >
            {mode === 'ADD' ? 'Add' : 'Edit'}
          </Button>
          {mode === 'EDIT' && (
            <div className="absolute right-0  translate-x-[110%]">
              <Button
                type="button"
                className="min-w-16"
                variant="outline"
                onClick={() => {
                  methods?.reset({ subject: '' });
                  setEditSubject(null);
                }}
              >
                Cancel
              </Button>
            </div>
          )}
        </form>
      </div>
    </FormProvider>
  );
};

export default AddSubject;
