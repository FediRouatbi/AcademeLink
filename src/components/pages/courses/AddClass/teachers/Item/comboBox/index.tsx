import React from 'react';
import { ClassroomCombobox } from './ClassroomCombobox';
import { TeacherCombobox } from './TeacherCombobox';
import { SubjectCombobox } from './SubjectCombobox';

const Boxes = () => {
  const [classroomId, setClassroomId] = React.useState<number>(0);

  const onClickClassroom = (id: number) => {
    setClassroomId(id);
  };

  return (
    <>
      <ClassroomCombobox onClickClassroom={onClickClassroom} />
      <TeacherCombobox  />
      <SubjectCombobox selectedclassroomId={classroomId} />
    </>
  );
};

export default Boxes;
