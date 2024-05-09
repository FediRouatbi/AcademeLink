import { ClassroomInput, Subject } from '@/gql/graphql';
import { atom, useAtom } from 'jotai';

const classrooms = atom<ClassroomInput[][]>([[]]);

const onClickEdit = atom(
  (get) => get(classrooms),
  (get, set, update: ClassroomInput[][]) => {
    set(classrooms, update);
  }
);

export function useTeachersAtom() {
  return useAtom(onClickEdit);
}
