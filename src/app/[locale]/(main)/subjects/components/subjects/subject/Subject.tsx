import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { type Subject } from '@/gql/graphql';
import { useEditSubject } from '@/hooks/subject/useEditAtom';
import { cn } from '@/lib/utils';
import { Edit2, Trash2 } from 'lucide-react';
import React from 'react';

type Props = {
  subject: Subject;
  onClickDelete: (subject: Subject) => void;
};
const Subject = ({ subject, onClickDelete }: Props) => {
  const [editedSubject, onClickEdit] = useEditSubject();
  const currentEdit = editedSubject?.id === subject?.id;
  return (
    <Card
      className={cn(
        'max-w-sm mx-auto h-20 w-full flex items-center justify-between px-5',
        currentEdit && 'bg-slate-100'
      )}
    >
      <div>{subject?.name}</div>
      <div>
        <Button
          onClick={() => {
            onClickEdit(subject);
          }}
          variant="ghost"
          size="icon"
          className="active:scale-95    z-20  transition-all  top-5 right-5"
        >
          <Edit2 className="size-4" />

          <span className="sr-only">Edit </span>
        </Button>
        <Button
          onClick={() => {
            onClickDelete(subject);
          }}
          variant="ghost"
          size="icon"
          className="active:scale-95    z-20  transition-all  top-5 right-5"
        >
          <Trash2 className="size-4" />

          <span className="sr-only">Delete </span>
        </Button>
      </div>
    </Card>
  );
};

export default Subject;
