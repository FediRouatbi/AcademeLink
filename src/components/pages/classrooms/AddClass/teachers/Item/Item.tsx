import React, { useState } from 'react';
import { Combobox } from './comboBox/ComboBox';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { GetSubjectsQuery, GetTeachersQuery } from '@/gql/graphql';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { useClassroomsAtom } from '@/hooks/classroom/useClassroomsAtom';

const animatedComponents = makeAnimated();
type Props = {
  dataSubjects?: GetSubjectsQuery;
  dataTeachers?: GetTeachersQuery;
  index: number;
  setItems: React.Dispatch<React.SetStateAction<number[]>>;
};

const Item = ({ dataSubjects, dataTeachers, index, setItems }: Props) => {
  const [selectedTeacher, setSelectedTeacher] = useState<number>(0);

  const [teachers, setTeachers] = useClassroomsAtom();
  const takedSubjects = teachers?.map((el) => el?.subject_id);
  const subjects = dataSubjects?.getSubjects?.map((subject) => {
    const isTaked = takedSubjects?.includes(subject?.id);

    return { value: subject?.id, label: subject?.name, disabled: isTaked };
  });

  const onChange = (newValue: { value: string; label: string }[]) => {
    if (!selectedTeacher) return;
    const oldList = teachers.filter(
      (teacher) => teacher?.teacher_id !== selectedTeacher
    );

    const newList = newValue?.map((val) => ({
      teacher_id: selectedTeacher,
      subject_id: +val.value,
    }));

    const data = [...oldList, ...newList];
    setTeachers(data);
  };
  const onClickDelete = () => {
    setTeachers(
      teachers.filter((teachers) => teachers.teacher_id !== selectedTeacher)
    );
    setItems((prev) => prev?.filter((el) => el !== index));
  };
  return (
    <div className="space-y-2">
      <div className="flex gap-5">
        <Combobox
          dataTeachers={dataTeachers}
          setSelectedTeacher={setSelectedTeacher}
        />
        {teachers?.length > 1 && (
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
        isDisabled={!selectedTeacher}
        //@ts-ignore
        isOptionDisabled={(option) => option.disabled}
        //@ts-ignore
        onChange={onChange}
        className="flex-1"
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={subjects}
      />
    </div>
  );
};

export default Item;
