import { useQuery } from "@tanstack/react-query";
import { getStudents } from "@/services/student";

const useGetStudentsQuery = () => {
  const query = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });
  return query;
};

export { useGetStudentsQuery };
