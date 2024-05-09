import { getClassroom, getClassrooms } from '@/services/classroom';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const useGetClassroomQuery = ({ classroomId }: { classroomId: number }) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const query = useQuery({
    queryKey: ['classrooms', classroomId],
    queryFn: () => getClassroom(classroomId, accessToken || ''),
  });
  return query;
};

export { useGetClassroomQuery };
