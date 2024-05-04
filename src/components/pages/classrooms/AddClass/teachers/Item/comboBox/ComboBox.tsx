'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
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
import { useGetTeachersQuery } from '@/hooks/teacher';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { GetTeachersQuery } from '@/gql/graphql';
import { useClassroomsAtom } from '@/hooks/classroom/useClassroomsAtom';
type Props = {
  dataTeachers?: GetTeachersQuery;
  setSelectedTeacher: React.Dispatch<React.SetStateAction<number>>;
};
export function Combobox({ dataTeachers, setSelectedTeacher }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const [teachersAtom, setTeachers] = useClassroomsAtom();

  const ids = teachersAtom?.map((item) => item?.teacher_id);

  const teachers = dataTeachers?.GetTeachers;
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
            ? teachers?.find((teacher) => teacher.user?.user_name === value)
                ?.user?.user_name
            : 'Teacher name'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Search framework..."
            className="h-9"
            name="ee"
          />
          <CommandList>
            <CommandEmpty>No teacher found.</CommandEmpty>
            <CommandGroup>
              {teachers?.map((teacher) => (
                <CommandItem
                  disabled={ids?.includes(+teacher?.teacher_id)}
                  key={teacher.user?.user_name}
                  value={teacher.user?.user_name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);

                    const oldId = teachers?.find(
                      (teacher) => teacher.user?.user_name === value
                    )?.teacher_id;

                    const newArray = teachersAtom.map((teacher) => {
                      if (oldId && teacher.teacher_id === +oldId)
                        return {
                          ...teacher,
                          teacher_id: +teacher.teacher_id,
                        };
                      return teacher;
                    });
                    setTeachers(newArray);

                    setSelectedTeacher(+teacher.teacher_id);
                  }}
                >
                  <Avatar className="size-5 mr-2">
                    <AvatarImage alt="User Avatar" src="/teacher.png" />{' '}
                  </Avatar>
                  {teacher.user?.user_name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
