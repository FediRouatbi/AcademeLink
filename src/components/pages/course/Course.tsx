'use client';
import Editor from '@/components/Editor';
import { SortableList } from '@/components/common/SortableList';
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { Loader2 } from 'lucide-react';
import AddTopic from './addTopic/AddTopic';
import { useGetCourseQuery } from '@/hooks/courses';

const Course = ({ id }: { id: number }) => {
  const { data: topics, isLoading } = useGetCourseQuery({ id });
  const [items, setItems] = useState<{ id: number; content: string }[]>([]);
  useEffect(() => {
    if (topics)
      setItems(
        topics?.getCourse?.topic
          ? topics?.getCourse?.topic
              .map((el, i) => ({ ...el, id: i }))
              .reverse()
          : []
      );
  }, [topics]);

  if (!topics && isLoading)
    return (
      <div className="min-h-52 flex justify-center items-center">
        <Loader2 className="size-14  animate-spin" />
      </div>
    );
  const classroom_id = topics?.getCourse?.classroom?.classroom_id;
  const teacher_id = topics?.getCourse?.teacher?.teacher_id;
  const subject_id = topics?.getCourse?.subject?.id;
  return (
    <>
      <AddTopic
        classroom_id={classroom_id}
        teacher_id={teacher_id}
        subject_id={subject_id}
      />
      <div className="prose  lg:prose-xl px-10 max-w-full">
        {items.map((topic, i) => (
          <div key={i}>{parse(topic.content)}</div>
        ))}
      </div>
    </>
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