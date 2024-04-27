import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { type Subject } from '@/gql/graphql';
import { Trash2 } from 'lucide-react';
import React from 'react';

type Props = {
  subject: Subject;
  onClickDelete: (subject: Subject) => void;
};
const Subject = ({ subject, onClickDelete }: Props) => {
  return (
    <Card className="max-w-sm mx-auto h-20 w-full flex items-center justify-between px-5">
      <div>{subject?.name}</div>
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
    </Card>
  );
};

export default Subject;
