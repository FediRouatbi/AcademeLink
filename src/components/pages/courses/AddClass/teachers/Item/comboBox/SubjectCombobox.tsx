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
import { GetTeachersQuery } from '@/gql/graphql';
import { useClassroomsAtom } from '@/hooks/classroom/useClassroomsAtom';
import { useTranslations } from 'next-intl';
import { useGetSubjectsQuery } from '@/hooks/subject';
import { useGetClassroomsQuery } from '@/hooks/classroom';
import { useFormContext } from 'react-hook-form';
type Props = {
  selectedclassroomId?: number;
};
export function SubjectCombobox({ selectedclassroomId }: Props) {
  const { data } = useGetSubjectsQuery({});
  const { data: classrooms } = useGetClassroomsQuery({ search: '' });
  const { setValue: setFormValue } = useFormContext();

  const t = useTranslations('Courses.Form');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const subjects = data?.getSubjects;
  const subjectsExist = classrooms?.getClassrooms
    ?.find((classroom) => classroom.classroom_id === selectedclassroomId)
    ?.course?.map((el) => el.subject?.id);

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
            ? subjects?.find((subject) => subject.name === value)?.name
            : t('subjectName')}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={t('searchSubject')} className="h-9" />
          <CommandList>
            <CommandEmpty>{t('emptySubjectList')}</CommandEmpty>
            <CommandGroup>
              {subjects?.map((subject) => (
                <CommandItem
                  disabled={subjectsExist?.includes(subject?.id)}
                  key={subject.id}
                  value={subject.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setFormValue(
                      'subjectId',
                      currentValue === value ? 0 : subject.id
                    );
                    setOpen(false);
                  }}
                >
                  {subject.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
