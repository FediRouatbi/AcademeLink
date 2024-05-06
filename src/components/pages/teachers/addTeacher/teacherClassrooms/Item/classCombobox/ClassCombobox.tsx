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
  allClassrooms?: GetClassroomsQuery;
  setClassroomId: React.Dispatch<React.SetStateAction<number>>;
  classroomId: number;
};

export function ClassCombobox({
  allClassrooms,
  setClassroomId,
  classroomId,
}: Props) {
  const [open, setOpen] = useState(false);
  const classromms = allClassrooms?.getClassrooms;
  const [classrooms, setClassrooms] = useTeachersAtom();
  const ids = classrooms?.flat().map((el) => el?.classroom_id);
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {classromms?.find(
            (classromm) => classromm.classroom_id === classroomId
          )?.classroom_name || 'Classroom'}
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
                    if (currentValue) setClassroomId(+classromm.classroom_id);

                    setOpen(false);

                    const index = classrooms?.findIndex(
                      (el) => el?.[0]?.classroom_id === classroomId
                    );
                    if (index === -1) return;
                    const newClassrooms = [...classrooms];

                    newClassrooms[index] = newClassrooms[index]?.map((el) => ({
                      ...el,
                      classroom_id: +classromm.classroom_id,
                    }));
                    setClassrooms(newClassrooms);
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
