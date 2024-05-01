import { Subject } from '@/gql/graphql';
import { atom, useAtom } from 'jotai';

type classroomType = {
  classroomId: number;
  subjectId: number;
}[];
const classrooms = atom<classroomType>([]);

const onClickEdit = atom(
  (get) => get(classrooms),
  (get, set, update: classroomType) => {
    set(classrooms, update);
  }
);

export function useClassroomsAtom() {
  return useAtom(onClickEdit);
}
