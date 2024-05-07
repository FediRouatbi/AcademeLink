import { useQuery } from '@tanstack/react-query';
import { getCourses } from '@/services/courses';
import { useSession } from 'next-auth/react';

const useGetCoursesQuery = () => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const query = useQuery({
    queryKey: ['courses'],
    queryFn: () => getCourses(accessToken || ''),
  });
  return query;
};

export { useGetCoursesQuery };
