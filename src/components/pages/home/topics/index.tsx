'use client';
import { useGetTopicsByAuthor } from '@/hooks/topic/useGetTopicsByAuthor';
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Topic from '@/components/common/topic/Topic';
import { Alert } from '@/components/common/Alert';
import { useDeleteTopicMutation } from '@/hooks/topic';
import { queryClient } from '@/providers/react-query-provider';
import { toast } from 'sonner';
import { useTopicAtom } from '@/hooks/topic/useTopicAtom';
import { useTranslations } from 'next-intl';

const Topcis = () => {
  const t = useTranslations('Home');

  const { data: session } = useSession();
  const { data: topics, isLoading } = useGetTopicsByAuthor(1);
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useTopicAtom();

  const { mutate: deleteTopic, isPending: deletePending } =
    useDeleteTopicMutation({
      onSuccess() {
        setOpen(false);
        queryClient.invalidateQueries({
          queryKey: ['topics'],
        });
        toast?.success('Topic deleted Successfully');
      },
      onError(error) {
        setOpen(false);
        toast?.error(error?.message.split(':')[0]);
      },
    });

  if (!topics && isLoading)
    return (
      <div className="min-h-52 flex justify-center items-center">
        <Loader2 className="size-14  animate-spin" />
      </div>
    );

  const canEditTopic = session?.user?.role === 'ADMIN';

  const onClickCancel = () => {
    setOpen(false);
    setTopic(null);
  };
  const onClickConfirm = () => {
    if (!topic?.topic_id) {
      setOpen(false);
      return;
    }

    deleteTopic(topic?.topic_id);
  };
  const onClickDelete = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="prose  lg:prose-xl max-w-full">
        {topics?.getTopicsByAuthor.map((topic, i) => (
          <Topic
            onClickDelete={onClickDelete}
            topic={topic}
            canEditTopic={canEditTopic}
            key={topic?.content}
          />
        ))}
      </div>
      <Alert
        open={open}
        title={t('deleteAlertTitle')}
        description={<p>{t('deleteAlertDescription')}</p>}
        onClickCancel={onClickCancel}
        onClickConfirm={onClickConfirm}
      />
    </>
  );
};

export default Topcis;
