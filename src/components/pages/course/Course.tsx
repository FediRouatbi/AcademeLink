'use client';
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { Loader2, Pencil, Trash2 } from 'lucide-react';
import AddTopic from './addTopic/AddTopic';
import { useGetCourseQuery } from '@/hooks/courses';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/common/Alert';
import { useDeleteTopicMutation } from '@/hooks/topic';
import { useTopicAtom } from '@/hooks/topic/useTopicAtom';
import { queryClient } from '@/providers/react-query-provider';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';

const Course = ({ id }: { id: number }) => {
  const { data: session } = useSession();

  const { mutate: deleteTopic, isPending: deletePending } =
    useDeleteTopicMutation({
      onSuccess() {
        setOpen(false);
        queryClient.invalidateQueries({
          queryKey: ['courses', id],
        });
        toast?.success('Topic deleted Successfully');
      },
      onError(error) {
        setOpen(false);
        toast?.error(error?.message.split(':')[0]);
      },
    });
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useTopicAtom();

  const { data: topics, isLoading } = useGetCourseQuery({ id });

  const onClickCancel = () => {
    setOpen(false);
  };
  const onClickConfirm = () => {
    if (!topic?.topic_id) {
      setOpen(false);
      return;
    }

    deleteTopic(topic?.topic_id);
  };
  if (!topics && isLoading)
    return (
      <div className="min-h-52 flex justify-center items-center">
        <Loader2 className="size-14  animate-spin" />
      </div>
    );

  const classroom_id = topics?.getCourse?.classroom?.classroom_id;
  const teacher_id = topics?.getCourse?.teacher?.teacher_id;
  const subject_id = topics?.getCourse?.subject?.id;
  const canEditTopic =
    session?.user?.user_id === topics?.getCourse?.teacher?.user?.user_id;
  return (
    <>
      <AddTopic
        classroom_id={classroom_id}
        teacher_id={teacher_id}
        subject_id={subject_id}
      />
      <div className="prose  lg:prose-xl px-5 max-w-full pt-10">
        {topics?.getCourse?.topic?.map((topic, i) => (
          <div
            key={i}
            className={cn(
              'pt-10 group relative  px-5 pb-5 rounded-md',
              canEditTopic && 'hover:outline'
            )}
          >
            <div
              className={cn(
                'hidden gap-2 absolute top-5 right-5',
                canEditTopic && 'flex'
              )}
            >
              <Button
                onClick={() => {
                  setTopic({
                    content: topic?.content,
                    topic_id: topic?.topic_id,
                    action: 'EDIT',
                  });
                }}
                variant="ghost"
                size="icon"
                className="active:scale-95    z-20 group-hover:opacity-100 transition-all opacity-0 "
              >
                <Pencil className="size-4" />

                <span className="sr-only">Edit</span>
              </Button>
              <Button
                onClick={() => {
                  setOpen(true);
                  setTopic({
                    content: topic?.content,
                    topic_id: topic?.topic_id,
                    action: 'DELETE',
                  });
                }}
                variant="ghost"
                size="icon"
                className="active:scale-95    z-20 group-hover:opacity-100 transition-all opacity-0 "
              >
                <Trash2 className="size-4" />

                <span className="sr-only">Delete</span>
              </Button>
            </div>
            {parse(topic.content)}
          </div>
        ))}
      </div>
      <Alert
        open={open}
        title="Are you absolutely sure?"
        description={
          <p>
            This action cannot be undone. This will permanently delete this
            topic
          </p>
        }
        onClickCancel={onClickCancel}
        onClickConfirm={onClickConfirm}
      />
    </>
  );
};

export default Course;
