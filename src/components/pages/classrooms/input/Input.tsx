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

export function TeachersCombobox() {
  const { data } = useGetTeachersQuery({});
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const teachers = data?.GetTeachers;
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
            : 'Email'}
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
              {teachers?.map((teachers) => (
                <CommandItem
                  key={teachers.user?.user_name}
                  value={teachers.user?.user_name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Avatar className="size-5 mr-2">
                    <AvatarImage alt="User Avatar" src="/teacher.png" />{' '}
                  </Avatar>
                  {teachers.user?.user_name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
