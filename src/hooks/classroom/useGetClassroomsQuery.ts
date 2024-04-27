import { getClassrooms } from '@/services/classroom';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const useGetClassroomsQuery = () => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const query = useQuery({
    queryKey: ['classrooms'],
    queryFn: () => getClassrooms(accessToken||""),
  });
  return query;
};

export { useGetClassroomsQuery };
