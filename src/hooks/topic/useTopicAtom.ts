import { Student, TeachersIds, Topic } from '@/gql/graphql';
import { atom, useAtom } from 'jotai';

type TopicType = Topic & { action: 'EDIT' | 'DELETE' };
const student = atom<TopicType | null>(null);

const onClickEdit = atom(
  (get) => get(student),
  (get, set, update: TopicType | null) => {
    set(student, update);
  }
);

export function useTopicAtom() {
  return useAtom(onClickEdit);
}
