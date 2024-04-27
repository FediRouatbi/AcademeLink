import { useMutation } from "@tanstack/react-query";
import { deleteStudent } from "@/services/student";

type Props = {
  onSuccess?: () => void;
};

const useDeleteStudentMutation = ({ onSuccess }: Props) => {
  const mutation = useMutation({
    mutationFn: (id: number) => deleteStudent(id),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
  });
  return mutation;
};

export { useDeleteStudentMutation };
