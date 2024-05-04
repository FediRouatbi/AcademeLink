import { useQuery } from '@tanstack/react-query';
import { getStudents } from '@/services/student';

const useGetStudentsQuery = (hasClassroom?: boolean) => {
  const query = useQuery({
    queryKey: ['students', hasClassroom],
    queryFn: () => getStudents(hasClassroom),
  });
  return query;
};

export { useGetStudentsQuery };
