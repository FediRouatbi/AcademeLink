'use client';
import './styles.scss';
import React, { useEffect, useState } from 'react';
import MenuBar from './MenuBar';
import { EditorContent, EditorProvider, useEditor } from '@tiptap/react';
import { Button } from '../ui/button';
import { Pencil, Save } from 'lucide-react';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import { cn } from '@/lib/utils';
import { DialogClose } from '../ui/dialog';

type Props = {
  content: string;
  editable?: boolean;
  hideButton?: boolean;
  actionText?: string;
  onClickActionText?: (content: string) => void;
  actionButtonDisabled?: boolean;
  showAddButton?: boolean;
};
const Editor = ({
  content,
  editable = false,
  hideButton = false,
  actionText,
  onClickActionText,
  actionButtonDisabled,
  showAddButton = false,
}: Props) => {
  const editor = useEditor({
    editable: editable,

    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ HTMLAttributes: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    onCreate(props) {
      props?.editor?.commands.focus();
    },
    autofocus: 'start',
    content: content,
  });

  useEffect(() => {}, []);
  const editStyles = cn(
    'group prose tiptap lg:prose-xl  w-full max-w-full relative  rounded-sm   '
  );

  return (
    <div className="flex flex-col gap-9 w-full">
      <div className={editStyles}>
        <div className={cn('min-h-16 ', !hideButton && 'max-w-[90%]')}>
          <MenuBar editor={editor} />
        </div>
        <div
          className={cn(
            'max-h-[400px] overflow-auto outline rounded-md my-5 dark:text-white'
          )}
        >
          <EditorContent editor={editor} />
        </div>
      </div>

      {showAddButton && (
        <DialogClose asChild>
          <Button
            type="submit"
            className="self-end"
            onClick={() => {
              onClickActionText?.(editor?.getHTML() || '');
            }}
            disabled={actionButtonDisabled}
          >
            {actionText}
          </Button>
        </DialogClose>
      )}
    </div>
  );
};

export default Editor;
