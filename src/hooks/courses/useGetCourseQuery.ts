import { useQuery } from '@tanstack/react-query';
import { getStudent } from '@/services/student';
import { getCourse } from '@/services/courses';
import { useSession } from 'next-auth/react';

const useGetCourseQuery = ({ id }: { id: number }) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const query = useQuery({
    queryKey: ['courses', id],
    queryFn: () => getCourse(id, accessToken || ''),
  });
  return query;
};

export { useGetCourseQuery };
