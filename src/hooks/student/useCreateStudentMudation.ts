import { GraphQLError } from 'graphql';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { createStudent } from '@/services/student';
import { CreateStudent } from '@/gql/graphql';

type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useCreateStudentMutation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const mutation = useMutation({
    mutationFn: (student: CreateStudent) => createStudent(student),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useCreateStudentMutation };
