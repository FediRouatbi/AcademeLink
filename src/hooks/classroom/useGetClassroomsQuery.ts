import { getClassrooms } from '@/services/classroom';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const useGetClassroomsQuery = ({ search }: { search?: string }) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const query = useQuery({
    queryKey: ['classrooms', search],
    queryFn: () => getClassrooms(search, accessToken || ''),
  });
  return query;
};

export { useGetClassroomsQuery };
