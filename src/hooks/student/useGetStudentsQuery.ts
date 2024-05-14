import { useQuery } from '@tanstack/react-query';
import { getStudents } from '@/services/student';

const useGetStudentsQuery = ({
  hasClassroom,
  search,
}: {
  hasClassroom?: boolean;
  search?: string;
}) => {
  const query = useQuery({
    queryKey: ['students', hasClassroom, search],
    queryFn: () => getStudents(hasClassroom, search),
  });
  return query;
};

export { useGetStudentsQuery };
