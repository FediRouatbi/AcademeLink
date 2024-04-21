import { useQuery } from "@tanstack/react-query";
import { getTeacher } from "@/services/teacher";

const useGetTeacherQuery = ({ id }: { id: number }) => {
  const query = useQuery({
    queryKey: ["teachers", id],
    queryFn: () => getTeacher(id),
  });
  return query;
};

export { useGetTeacherQuery };
