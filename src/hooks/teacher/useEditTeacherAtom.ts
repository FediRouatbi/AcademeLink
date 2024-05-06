import { Teacher } from '@/gql/graphql';
import { atom, useAtom } from 'jotai';

type TeacherType = Teacher & { action: 'EDIT' | 'DELETE' };
const teacher = atom<TeacherType | null>(null);

const onClickEdit = atom(
  (get) => get(teacher),
  (get, set, update: TeacherType | null) => {
    set(teacher, update);
  }
);

export function useEditTeacherAtom() {
  return useAtom(onClickEdit);
}
