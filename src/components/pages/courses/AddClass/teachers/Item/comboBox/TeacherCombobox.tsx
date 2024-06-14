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
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { GetTeachersQuery } from '@/gql/graphql';
import { useClassroomsAtom } from '@/hooks/classroom/useClassroomsAtom';
import { useTranslations } from 'next-intl';
import { useGetSubjectsQuery } from '@/hooks/subject';
import { useGetTeachersQuery } from '@/hooks/teacher';
import { useFormContext } from 'react-hook-form';

export function TeacherCombobox() {
  const { data } = useGetTeachersQuery({ search: '' });
  const { setValue: setFormValue } = useFormContext();

  const t = useTranslations('Courses.Form');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const teachers = data?.GetTeachers;

  //console.log(teachersExist);

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
            : t('teacherName')}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={t('searchTeacher')} className="h-9" />
          <CommandList>
            <CommandEmpty>{t('emptyTeacherList')}</CommandEmpty>
            <CommandGroup>
              {teachers?.map((teacher) => (
                <CommandItem
                  key={teacher.teacher_id}
                  value={teacher.user?.user_name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setFormValue(
                      'teacherId',
                      currentValue === value ? 0 : teacher.teacher_id
                    );
                    setOpen(false);
                  }}
                >
                  <Avatar className="size-5 mr-2">
                    <AvatarImage
                      alt="User Avatar"
                      src={teacher.user?.image_url || '/teacher.png'}
                    />{' '}
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
