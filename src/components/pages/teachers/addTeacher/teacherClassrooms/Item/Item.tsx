import React, { useState } from 'react';
import { useGetSubjectsQuery } from '@/hooks/subject';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { ClassCombobox } from '../../classCombobox/ClassCombobox';
import { useTeachersAtom } from '@/hooks/teacher/useTeacherAtom';
import { Button } from '@/components/ui/button';
import { useController, useFormContext } from 'react-hook-form';
import { PlusIcon, Trash2 } from 'lucide-react';
import { GetClassroomsQuery, GetSubjectsQuery } from '@/gql/graphql';
const animatedComponents = makeAnimated();

type Props = {
  allClassrooms?: GetClassroomsQuery;
  subjects?: GetSubjectsQuery;
  index: number;
  setItems: React.Dispatch<React.SetStateAction<number[]>>;
};

const Item = ({ allClassrooms, subjects, index, setItems }: Props) => {
  const [selectedClassroom, setSelectedClassroom] = useState<number>(0);

  const classroomData = allClassrooms?.getClassrooms?.find(
    (el) => +el?.classroom_id === selectedClassroom
  );
  const classroomSubjects = classroomData?.course?.map((el) => el?.subject?.id);

  const options = subjects?.getSubjects?.map((subject) => {
    const subjectTaked = classroomSubjects?.includes(subject?.id);
    const course = classroomData?.course?.find(
      (el) => el?.subject?.id === subject?.id
    );
    const teacherName = course?.teacher?.user?.user_name;
    return {
      value: subject?.id,
      label: subjectTaked ? `${subject?.name} (${teacherName})` : subject?.name,
      disabled: subjectTaked,
    };
  });
  const [classrooms, setClassrooms] = useTeachersAtom();

  const onChange = (newValue: { value: string; label: string }[]) => {
    if (!selectedClassroom) return;
    const oldList = classrooms.filter(
      (classroom) => classroom?.classroom_id !== selectedClassroom
    );

    const newList = newValue?.map((val) => ({
      classroom_id: selectedClassroom,
      subject_id: +val.value,
    }));

    const data = [...oldList, ...newList];
    setClassrooms(data);
  };
  const onClickDelete = () => {
    setClassrooms(
      classrooms.filter(
        (classroom) => classroom.classroom_id !== selectedClassroom
      )
    );
    setItems((prev) => prev?.filter((el) => el !== index));
  };
  return (
    <div className="space-y-2 ">
      <div className="flex gap-5">
        <ClassCombobox
          allClassrooms={allClassrooms}
          setSelectedClassroom={setSelectedClassroom}
        />

        {index !== 1 && (
          <Button
            className="ml-auto"
            size="icon"
            type="button"
            variant="outline"
            onClick={onClickDelete}
          >
            <Trash2 className="h-4 w-4 flex-shrink-0" />
            <span className="sr-only">delete classroom</span>
          </Button>
        )}
      </div>
      <Select
        //@ts-ignore
        isOptionDisabled={(option) => option.disabled}
        isDisabled={!selectedClassroom}
        className="flex-1"
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        //@ts-ignore
        onChange={onChange}
      />
    </div>
  );
};

export default Item;
