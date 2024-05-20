import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { ClassCombobox } from './classCombobox/ClassCombobox';
import { useTeachersAtom } from '@/hooks/teacher/useTeacherAtom';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { GetClassroomsQuery, GetSubjectsQuery } from '@/gql/graphql';
import { useEditTeacherAtom } from '@/hooks/teacher/useEditTeacherAtom';
import { useTranslations } from 'next-intl';
const animatedComponents = makeAnimated();

type Props = {
  allClassrooms?: GetClassroomsQuery;
  subjects?: GetSubjectsQuery;
  index: number;
};

const Item = ({ allClassrooms, subjects, index }: Props) => {
  const t = useTranslations('Teachers.Form');

  const [teacher] = useEditTeacherAtom();

  const [classrooms, setClassrooms] = useTeachersAtom();

  const [classroomId, setClassroomId] = useState(
    classrooms?.[index]?.[0]?.classroom_id || 0
  );

  const defaultValue =
    index !== -1
      ? classrooms[index].map((el) => {
          const subject = subjects?.getSubjects?.find(
            (sub) => sub.id === el.subject_id
          );

          return { label: subject?.name, value: el?.subject_id };
        })
      : [];

  const classroomData = allClassrooms?.getClassrooms?.find(
    (el) => +el?.classroom_id === classroomId
  );
  const classroomSubjects = classroomData?.course?.map((el) => el?.subject?.id);
  const currentTeacherSubjects = teacher?.course
    ?.filter((el) => el?.classroom_id === classroomId)
    .map((el) => el?.subject_id);
  const filterMySubjects = classroomSubjects?.filter(
    (el) => !currentTeacherSubjects?.includes(el)
  );

  const options = subjects?.getSubjects?.map((subject) => {
    const subjectTaked = filterMySubjects?.includes(subject?.id);

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

  const onChange = (newValue: { value: string; label: string }[]) => {
    if (!classroomId) return;
    const newArray = [...classrooms];

    const newData = newValue?.map((val) => ({
      classroom_id: classroomId,
      subject_id: +val.value,
    }));

    newArray[index] = newData;

    setClassrooms(newArray);
  };

  const onClickDelete = () => {
    const newArray = [...classrooms];
    newArray.splice(index, 1);

    setClassrooms(newArray);
  };
  return (
    <div className="space-y-2 ">
      <div className="flex gap-5">
        <ClassCombobox
          allClassrooms={allClassrooms}
          setClassroomId={setClassroomId}
          classroomId={classroomId}
        />

        {classrooms?.length > 1 && (
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
        isDisabled={!classroomId}
        className="flex-1"
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        defaultValue={defaultValue}
        options={options}
        placeholder={t('selectSubjects')}
        //@ts-ignore
        onChange={onChange}
      />
    </div>
  );
};

export default Item;
