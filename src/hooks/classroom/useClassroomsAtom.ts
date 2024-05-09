import { TeachersIds } from '@/gql/graphql';
import { atom, useAtom } from 'jotai';

const classrooms = atom<TeachersIds[]>([]);

const onClickEdit = atom(
  (get) => get(classrooms),
  (get, set, update: TeachersIds[]) => {
    set(classrooms, update);
  }
);

export function useClassroomsAtom() {
  return useAtom(onClickEdit);
}
