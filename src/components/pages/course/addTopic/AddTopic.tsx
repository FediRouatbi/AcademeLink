'use client';
import React, { useEffect, useState } from 'react';
import { BadgePlus } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { toast } from 'sonner';
import { useSession } from 'next-auth/react';
import { useCreateTopicMutation } from '@/hooks/topic/useCreateTopicMutation';
import { useEditTopicMutation } from '@/hooks/topic';
import Editor from '@/components/Editor';
import { queryClient } from '@/providers/react-query-provider';
import { useTopicAtom } from '@/hooks/topic/useTopicAtom';

type Props = {
  classroom_id?: number;
  teacher_id?: number;
  subject_id?: number;
  courseId: number;
};
const AddTopic = ({
  classroom_id,
  subject_id,
  teacher_id,
  courseId,
}: Props) => {
  const { data: session } = useSession();
  const [topic, setTopic] = useTopicAtom();

  const { mutate: createTopic, isPending: createIsPending } =
    useCreateTopicMutation({
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['topics', courseId] });
        toast?.success('Topic Add Successfully');
        setOpen(false);
      },
      onError(error) {
        toast?.error(error?.message.split(':')[0]);
      },
    });
  const mode = topic?.action === 'EDIT' ? 'EDIT' : 'ADD';

  const { mutate: editTopic, isPending: editIsPending } = useEditTopicMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['topics', courseId] });
      toast?.success('Topic Edited Successfully');
      setOpen(false);
      setTopic(null);
    },
    onError(error) {
      toast?.error(error?.message.split(':')[0]);
    },
  });

  const onSubmit = (content: string) => {
    if (topic?.action === 'EDIT') {
      editTopic({ content, topicId: topic?.topic_id });
      return;
    }

    createTopic({
      content,
      courseId: { classroom_id, subject_id, teacher_id },
    });
  };
  const onError = (error: any) => {
    console.log(error);
  };
  useEffect(() => {
    if (topic?.action === 'EDIT') setOpen(true);
  }, [topic?.action]);

  const [open, setOpen] = useState(false);

  const role = session?.user?.role;

  if (role !== 'TEACHER') return null;

  return (
    <div className="flex justify-end">
      <Sheet
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          setTopic(null);
        }}
      >
        <SheetTrigger asChild>
          <Button variant="default">
            <BadgePlus className="mr-2 h-4 w-4" />
            Add Topic
          </Button>
        </SheetTrigger>
        <SheetContent className="!max-w-[700px] min-w-[25%]">
          <SheetHeader>
            <SheetTitle>
              {mode === 'ADD' ? 'Add Topic' : 'Edit Topic'}
            </SheetTitle>
            <SheetDescription>
              Fill in the details to{' '}
              {mode === 'ADD' ? 'create a new Topic.' : 'Edit Topic'}
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Editor
              content={topic?.content || ''}
              editable={true}
              hideButton
              showAddButton
              actionButtonDisabled={createIsPending || editIsPending}
              actionText={mode === 'ADD' ? 'Publish' : 'Edit'}
              onClickActionText={onSubmit}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AddTopic;
