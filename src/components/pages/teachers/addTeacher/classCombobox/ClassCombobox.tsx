'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useGetClassroomsQuery } from '@/hooks/classroom';
import { useClassroomsAtom } from '@/hooks/teacher/useClassroomsAtom';
import { useController, useFormContext } from 'react-hook-form';

export function ClassCombobox({
  setSelectedClassroom,
}: {
  setSelectedClassroom: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { data } = useGetClassroomsQuery();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const classromms = data?.getClassrooms;
  const [classrooms, setClassrooms] = useClassroomsAtom();

  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name: 'classrooms',
    control,
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? classromms?.find(
                (classromm) => classromm.classroom_name === value
              )?.classroom_name
            : 'Classroom'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search classroom..." className="h-9" />
          <CommandList>
            <CommandEmpty>No Classroom found.</CommandEmpty>
            <CommandGroup>
              {classromms?.map((classromm) => (
                <CommandItem
                  key={classromm.classroom_id}
                  value={classromm.classroom_name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                    const oldId = classromms?.find(
                      (classromm) => classromm.classroom_name === value
                    )?.classroom_id;

                    const newArray = classrooms.map((classroom) => {
                      if (oldId && classroom.classroomId === +oldId)
                        return {
                          ...classroom,
                          classroomId: +classromm.classroom_id,
                        };

                      return classroom;
                    });
                    field.onChange(newArray);
                    setClassrooms(newArray);
                    setSelectedClassroom(+classromm.classroom_id);
                  }}
                >
                  {classromm.classroom_name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
