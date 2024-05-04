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
import { useTeachersAtom } from '@/hooks/teacher/useTeacherAtom';
import { GetClassroomsQuery } from '@/gql/graphql';

type Props = {
  setSelectedClassroom: React.Dispatch<React.SetStateAction<number>>;
  allClassrooms?: GetClassroomsQuery;
};

export function ClassCombobox({ allClassrooms, setSelectedClassroom }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const classromms = allClassrooms?.getClassrooms;
  const [classrooms, setClassrooms] = useTeachersAtom();
  const ids = classrooms?.map((item) => item?.classroom_id);

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
                  disabled={ids?.includes(+classromm?.classroom_id)}
                  key={classromm.classroom_id}
                  value={classromm.classroom_name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                    const oldId = classromms?.find(
                      (classromm) => classromm.classroom_name === value
                    )?.classroom_id;

                    const newArray = classrooms.map((classroom) => {
                      if (oldId && classroom.classroom_id === +oldId)
                        return {
                          ...classroom,
                          classroom_id: +classromm.classroom_id,
                        };
                      return classroom;
                    });
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
