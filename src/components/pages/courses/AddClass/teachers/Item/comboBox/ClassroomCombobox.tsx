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
import { useClassroomsAtom } from '@/hooks/classroom/useClassroomsAtom';
import { useTranslations } from 'next-intl';
import { useGetClassroomsQuery } from '@/hooks/classroom';
import { useFormContext } from 'react-hook-form';
type Props = {
  onClickClassroom: (id: number) => void;
};
export function ClassroomCombobox({ onClickClassroom }: Props) {
  const { data } = useGetClassroomsQuery({ search: '' });
  const { setValue: setFormValue } = useFormContext();

  const t = useTranslations('Courses.Form');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const [teachersAtom, setTeachers] = useClassroomsAtom();

  const ids = teachersAtom?.map((item) => item?.teacher_id);
  const classrooms = data?.getClassrooms;
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
            ? classrooms?.find(
                (classroom) => classroom.classroom_name === value
              )?.classroom_name
            : t('classroomName')}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={t('searchClassroom')} className="h-9" />
          <CommandList>
            <CommandEmpty>{t('emptyClassroomList')}</CommandEmpty>
            <CommandGroup>
              {classrooms?.map((classroom) => (
                <CommandItem
                  key={classroom.classroom_id}
                  value={classroom.classroom_name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setFormValue(
                      'classroomId',
                      currentValue === value ? 0 : classroom.classroom_id
                    );
                    setOpen(false);
                    onClickClassroom(classroom.classroom_id);
                  }}
                >
                  {classroom.classroom_name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
