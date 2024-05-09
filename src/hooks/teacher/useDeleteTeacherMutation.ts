import { useMutation } from '@tanstack/react-query';
import { deleteTeacher } from '@/services/teacher';

type Props = {
  onSuccess?: () => void;
};

const useDeleteTeacherMutation = ({ onSuccess }: Props) => {
  const mutation = useMutation({
    mutationFn: (id: number) => deleteTeacher(id),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
  });
  return mutation;
};

export { useDeleteTeacherMutation };
