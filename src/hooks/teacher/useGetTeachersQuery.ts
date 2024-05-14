import { useQuery } from '@tanstack/react-query';
import { getTeachers } from '@/services/teacher';

const useGetTeachersQuery = ({ search }: { search?: string }) => {
  const query = useQuery({
    queryKey: ['teachers', search],
    queryFn: () => getTeachers(search),
  });
  return query;
};

export { useGetTeachersQuery };
