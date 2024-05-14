'use client';

import React, { useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { SearchIcon } from '@/assets/svg';
import { useSearchDebounce } from '@/hooks/useSearchDebounce';
import { useParams } from 'next/navigation';
import { useSeachAtom } from '@/hooks/useSeachAtom';

const Search = () => {
  const [, setDebouncedValue] = useSeachAtom();
  const pathname = useParams();
  const methods = useForm({ defaultValues: { search: '' } });
  const watch = useWatch({ name: 'search', control: methods?.control });
  const _ = useSearchDebounce(watch);

  useEffect(() => {
    setDebouncedValue('');
    methods?.reset({ search: '' });
  }, [pathname]);

  return (
    <FormProvider {...methods}>
      <form>
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            name="search"
            hideError
            className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
            placeholder="Search..."
            type="search"
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default Search;
