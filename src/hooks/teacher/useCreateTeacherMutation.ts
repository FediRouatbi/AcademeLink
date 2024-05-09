import { GraphQLError } from 'graphql';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { createTeacher } from '@/services/teacher';
import { CreateTeacher } from '@/gql/graphql';

type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useCreateTeacherMutation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const mutation = useMutation({
    mutationFn: (teacher: CreateTeacher) => createTeacher(teacher),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useCreateTeacherMutation };
