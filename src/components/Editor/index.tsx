'use client';
import './styles.scss';
import React, { useState } from 'react';
import MenuBar from './MenuBar';
import { EditorContent, EditorProvider, useEditor } from '@tiptap/react';
import { Button } from '../ui/button';
import { Pencil, Save } from 'lucide-react';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import { cn } from '@/lib/utils';

type Props = {
  content: string;
  editable?: boolean;
  hideButton?: boolean;
};
const Editor = ({ content, editable = false, hideButton = false }: Props) => {
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
    content: content,
  });
  const [edit, seEdit] = useState(editable);

  const onClickEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    seEdit((prev) => {
      editor?.setEditable(!prev);
      return !prev;
    });
  };
  const editStyles = cn(
    'group prose tiptap lg:prose-xl  w-full max-w-full relative outline rounded-sm outline-[#fff] transition-[outline] ',
    edit && 'outline-emerald-600 hover:outline-emerald-600',
    edit && 'max-h-full'
  );
  return (
    <div className={editStyles}>
      {!hideButton && (
        <Button
          onClick={onClickEdit}
          variant="ghost"
          size="icon"
          className="active:scale-95   absolute z-20 group-hover:opacity-100 transition-all opacity-0 top-5 right-5"
        >
          {edit ? <Save className="size-4" /> : <Pencil className="size-4" />}

          <span className="sr-only">Delete {edit ? 'Delete' : 'Save'}</span>
        </Button>
      )}
      <div className={cn('min-h-16 ', !hideButton && 'max-w-[90%]')}>
        <MenuBar editor={editor} />
      </div>
      <div
        className={cn(
          'max-h-[400px] overflow-auto',
          edit && !hideButton && 'max-h-full'
        )}
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;
