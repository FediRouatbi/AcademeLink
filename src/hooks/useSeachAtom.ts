import { atom, useAtom } from 'jotai';

const search = atom('');

const onClickEdit = atom(
  (get) => get(search),
  (get, set, update: string) => {
    set(search, update);
  }
);

export function useSeachAtom() {
  return useAtom(onClickEdit);
}
