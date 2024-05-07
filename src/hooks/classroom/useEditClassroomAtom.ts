import { ClassroomType } from '@/components/pages/classrooms/classCard/ClassCard';
import { atom, useAtom } from 'jotai';

type Classroom = ClassroomType & { action: 'EDIT' | 'DELETE' };
const classroom = atom<Classroom | null>(null);

const onClickEdit = atom(
  (get) => get(classroom),
  (get, set, update: Classroom | null) => {
    set(classroom, update);
  }
);

export function useEditClassroomAtom() {
  return useAtom(onClickEdit);
}
