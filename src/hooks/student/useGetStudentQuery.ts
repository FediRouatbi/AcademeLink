import { useQuery } from "@tanstack/react-query";
import { getStudent } from "@/services/student";

const useGetStudentQuery = ({ id }: { id: number }) => {
  const query = useQuery({
    queryKey: ["students", id],
    queryFn: () => getStudent(id),
  });
  return query;
};

export { useGetStudentQuery };
