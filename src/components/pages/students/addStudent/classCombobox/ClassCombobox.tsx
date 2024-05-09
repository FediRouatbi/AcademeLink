'use client';

import { useEffect, useState } from 'react';

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
import { useController, useFormContext } from 'react-hook-form';
import { useEditStudentAtom } from '@/hooks/student/useEditStudentAtom';

export function ClassCombobox() {
  const { data } = useGetClassroomsQuery();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const classromms = data?.getClassrooms;
  const [student] = useEditStudentAtom();

  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name: 'classroomId',
    control,
  });

  useEffect(() => {
    if (student?.action === 'EDIT') {
      setValue(student?.classroom?.classroom_name || '');
    }
  }, [student?.action]);
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
            : 'choose classroom'}
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
                    
                    field.onChange({ classroom_id: classromm?.classroom_id });
                  }}
                >
                  {`${classromm.classroom_name} (${classromm?.student?.length})`}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
