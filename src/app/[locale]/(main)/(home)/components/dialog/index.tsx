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

const AddArticle = () => {
  const [edit, setEdit] = useState(false);
  const queryClient = useQueryClient();

  const { isPending, mutate } = useCreateTopicMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['topics'] });
    },
  });

  const onClickActionText = (content: string) => {
    mutate({ content });
    setEdit(false);
  };
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline" >
          <BadgePlus className="mr-2 h-4 w-4" />
          Add New Article
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] md:max-w-[50%] max-h-[80%]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
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
