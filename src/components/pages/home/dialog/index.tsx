'use client';
import React, { useEffect, useState } from 'react';
import Editor from '@/components/Editor';
import { useCreateTopicMutation } from '@/hooks/topic/useCreateTopicMutation';
import { BadgePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useTopicAtom } from '@/hooks/topic/useTopicAtom';
import { useEditTopicMutation } from '@/hooks/topic';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';

const AddArticle = () => {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useTopicAtom();
  const t = useTranslations('Home');

  const queryClient = useQueryClient();
  const { isPending: createIsPending, mutate: createTopic } =
    useCreateTopicMutation({
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['topics'] });
        setOpen(false);
        toast?.success('Topic Add Successfully');
      },
    });

  const { mutate: editTopic, isPending: editIsPending } = useEditTopicMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['topics'] });
      toast?.success('Topic editied Successfully');
      setOpen(false);
      setTopic(null);
    },
    onError(error) {
      toast?.error(error?.message.split(':')[0]);
    },
  });
  const mode = topic?.action === 'EDIT' ? 'EDIT' : 'ADD';

  const onSubmit = (content: string) => {
    if (topic?.action === 'EDIT') {
      editTopic({ content, topicId: topic?.topic_id });
      return;
    }

    createTopic({
      content,
    });
  };

  useEffect(() => {
    if (topic?.action === 'EDIT') setOpen(true);
  }, [topic?.action]);

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

            {t('addTopic')}
          </Button>
        </SheetTrigger>
        <SheetContent className="!max-w-[700px] min-w-[25%] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              {mode === 'ADD' ? t('addTopic') : t('editTopic')}
            </SheetTitle>
            <SheetDescription>
              Fill in the details to
              {mode === 'ADD' ? t('createTopic') : t('editTopic')}
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Editor
              content={topic?.content || ''}
              editable={true}
              hideButton
              showAddButton
              actionButtonDisabled={createIsPending || editIsPending}
              actionText={mode === 'ADD' ? t('publish') : t('save')}
              onClickActionText={onSubmit}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AddArticle;
