import { useEffect } from 'react';
import { useSeachAtom } from './useSeachAtom';

export const useSearchDebounce = (value: string) => {

  const [debouncedValue, setDebouncedValue] = useSeachAtom();


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 400);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};
