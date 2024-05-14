import { getClassrooms } from '@/services/classroom';
import { getSubjects } from '@/services/subject';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const useGetSubjectsQuery = ({ search }: { search?: string }) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const query = useQuery({
    queryKey: ['subjects', search],
    queryFn: () => getSubjects(search, accessToken || ''),
  });
  return query;
};

export { useGetSubjectsQuery };
