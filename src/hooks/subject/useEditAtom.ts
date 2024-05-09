import { Subject } from '@/gql/graphql';
import { atom, useAtom } from 'jotai';

const subjectEdit = atom<Subject | null>(null);

const onClickEdit = atom(
  (get) => get(subjectEdit),
  (get, set, update: Subject | null) => {
    set(subjectEdit, update);
  }
);

export function useEditSubject() {
  return useAtom(onClickEdit);
}
