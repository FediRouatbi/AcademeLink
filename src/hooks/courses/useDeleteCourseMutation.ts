import { useMutation } from '@tanstack/react-query';
import { deleteCourse } from '@/services/courses';
import { useSession } from 'next-auth/react';

type Props = {
  onSuccess?: () => void;
};

const useDeleteCourseMutation = ({ onSuccess }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const mutation = useMutation({
    mutationFn: (id: number) => deleteCourse(id, accessToken || ''),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
  });
  return mutation;
};

export { useDeleteCourseMutation };
