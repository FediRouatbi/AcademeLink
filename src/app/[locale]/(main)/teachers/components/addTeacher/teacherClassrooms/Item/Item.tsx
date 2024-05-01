import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { useGetSubjectsQuery } from '@/hooks/subject';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { ClassCombobox } from '../../classCombobox/ClassCombobox';
import { useClassroomsAtom } from '@/hooks/teacher/useClassroomsAtom';
import { useController, useFormContext } from 'react-hook-form';
const animatedComponents = makeAnimated();

const Item = () => {
  const [selectedClassroom, setSelectedClassroom] = useState<number>(0);
  const { data } = useGetSubjectsQuery();
  const options = data?.getSubjects?.map((subject) => ({
    value: subject?.id,
    label: subject?.name,
  }));

  const [classrooms, setClassrooms] = useClassroomsAtom();

  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name: 'classrooms',
    control,
  });
  const onChange = (newValue: { value: string; label: string }[]) => {
    if (!selectedClassroom) return;
    const oldList = classrooms.filter(
      (classroom) => classroom?.classroomId !== selectedClassroom
    );

    const newList = newValue?.map((val) => ({
      classroomId: selectedClassroom,
      subjectId: +val.value,
    }));
    const data = [...oldList, ...newList];
    field.onChange(data);
    setClassrooms(data);
  };

  return (
    <div className="space-y-2 ">
      <Label htmlFor="password" className="block">
        Classrooms
      </Label>

      <ClassCombobox setSelectedClassroom={setSelectedClassroom} />
      {!!selectedClassroom && (
        <Select
          className="flex-1"
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={options}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Item;
