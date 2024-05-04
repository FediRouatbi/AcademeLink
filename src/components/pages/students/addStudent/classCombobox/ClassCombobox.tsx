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
import { useGetClassroomsQuery } from '@/hooks/classroom';
import { useController, useFormContext } from 'react-hook-form';

export function ClassCombobox() {
  const { data } = useGetClassroomsQuery();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const classromms = data?.getClassrooms;

  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name: 'classroomId',
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
            : 'Email'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
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
                    field.onChange(classromm?.classroom_id);
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
