import { GraphQLError } from 'graphql';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { deleteSubject } from '@/services/subject';
type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useDeleteSubjectMutation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const mutation = useMutation({
    mutationFn: (id: number) => deleteSubject(id, accessToken || ''),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useDeleteSubjectMutation };
