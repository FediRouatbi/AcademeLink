'use client';
import Editor from '@/components/Editor';
import { SortableList } from '@/components/common/SortableList';
import { useGetTopicsByAuthor } from '@/hooks/topic/useGetTopicsByAuthor';
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { Loader2 } from 'lucide-react';
import { useGetTopicsByCourse } from '@/hooks/topic';

const Course = ({ id }: { id: number }) => {
  const { data: topics, isLoading } = useGetTopicsByCourse(id);
  const [items, setItems] = useState<{ id: number; content: string }[]>([]);
  useEffect(() => {
    if (topics)
      setItems(
        topics?.getTopicsByCourseId?.map((el, i) => ({ ...el, id: i })).reverse()
      );
  }, [topics]);

  if (!topics && isLoading)
    return (
      <div className="min-h-52 flex justify-center items-center">
        <Loader2 className="size-14  animate-spin" />
      </div>
    );

  return (
    <div className="prose  lg:prose-xl px-10 max-w-full">
      {topics?.getTopicsByCourseId
        .map((topic, i) => <div key={i}>{parse(topic.content)}</div>)
        .reverse()}
    </div>
  );

  return (
    <div>
      <SortableList
        items={items}
        onChange={setItems}
        renderItem={(item) => (
          <SortableList.Item id={item.id}>
            <SortableList.DragHandle />
            <Editor content={item?.content} />
          </SortableList.Item>
        )}
      />
    </div>
  );
};

export default Course;
