import { Student, TeachersIds } from '@/gql/graphql';
import { atom, useAtom } from 'jotai';

type StudentType = Student & { action: 'EDIT' | 'DELETE' };
const userId = atom<StudentType | null>(null);

const onClickEdit = atom(
  (get) => get(userId),
  (get, set, update: StudentType | null) => {
    set(userId, update);
  }
);

export function useEditStudentAtom() {
  return useAtom(onClickEdit);
}
