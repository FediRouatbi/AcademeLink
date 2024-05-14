import { useQuery } from '@tanstack/react-query';
import { getCourses } from '@/services/courses';
import { useSession } from 'next-auth/react';

const useGetCoursesQuery = ({ search }: { search?: string }) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const query = useQuery({
    queryKey: ['courses', search],
    queryFn: () => getCourses(search, accessToken || ''),
  });
  return query;
};

export { useGetCoursesQuery };
