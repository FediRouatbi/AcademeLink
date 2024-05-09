import { getTopicsByAuthor, getTopicsByCourseId } from '@/services/topic';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const useGetTopicsByCourse = (courseId: number) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;

  const query = useQuery({
    queryKey: ['topics', courseId],
    queryFn: () => getTopicsByCourseId(courseId, accessToken || ''),
  });
  return query;
};

export { useGetTopicsByCourse };
