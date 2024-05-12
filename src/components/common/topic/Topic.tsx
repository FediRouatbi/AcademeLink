import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Pencil, Trash2 } from 'lucide-react';
import React from 'react';
import parse from 'html-react-parser';
import { useTopicAtom } from '@/hooks/topic/useTopicAtom';
import { Topic as TopicType } from '@/gql/graphql';

type Props = {
  canEditTopic: boolean;
  onClickDelete: () => void;
  topic: TopicType;
};
const Topic = ({ canEditTopic, onClickDelete, topic }: Props) => {
  const [currentTopic, setTopic] = useTopicAtom();

  return (
    <div
      className={cn(
        'pt-10 group relative  px-5 pb-5 rounded-md',
        canEditTopic && 'hover:outline',
        currentTopic?.action === 'DELETE' &&
          currentTopic?.topic_id === topic?.topic_id &&
          'outline dark:outline-white'
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
            onClickDelete();
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
      <div className=" dark:text-white topic">{parse(topic?.content)}</div>
    </div>
  );
};

export default Topic;
