import { GraphQLError } from 'graphql';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { createSubject } from '@/services/subject';

type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useCreateSubjectMutation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const mutation = useMutation({
    mutationFn: (name: string) => createSubject(name, accessToken || ''),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useCreateSubjectMutation };
