import { Student, TeachersIds } from '@/gql/graphql';
import { atom, useAtom } from 'jotai';

type StudentType = Student & { action: 'EDIT' | 'DELETE' };
const student = atom<StudentType | null>(null);

const onClickEdit = atom(
  (get) => get(student),
  (get, set, update: StudentType | null) => {
    set(student, update);
  }
);

export function useEditStudentAtom() {
  return useAtom(onClickEdit);
}
