'use client';
import React, { useState } from 'react';
import Editor from '@/components/Editor';
import { useCreateTopicMutation } from '@/hooks/topic/useCreateTopicMutation';
import { BadgePlus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const AddArticle = () => {
  const { data } = useSession();
  const [edit, setEdit] = useState(false);
  const queryClient = useQueryClient();
  const role = data?.user?.role;
  const { isPending, mutate } = useCreateTopicMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['topics'] });
    },
  });

  const onClickActionText = (content: string) => {
    // mutate({ content: content, });
    setEdit(false);
  };
  
  if (role !== 'ADMIN') return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <BadgePlus className="mr-2 h-4 w-4" />
          Add New Article
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] md:max-w-[50%] max-h-[80%]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&#39;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Editor
            content=""
            editable={true}
            hideButton
            showAddButton
            actionButtonDisabled={isPending}
            actionText="Publish"
            onClickActionText={onClickActionText}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddArticle;
