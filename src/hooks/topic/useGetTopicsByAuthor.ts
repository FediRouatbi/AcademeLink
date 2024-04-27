import { getTopicsByAuthor } from '@/services/topic';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const useGetTopicsByAuthor = () => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;

  const query = useQuery({
    queryKey: ['topics'],
    queryFn: () => getTopicsByAuthor(accessToken || ''),
  });
  return query;
};

export { useGetTopicsByAuthor };
