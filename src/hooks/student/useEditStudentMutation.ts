import { GraphQLError } from 'graphql';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { editStudent } from '@/services/student';
import { UpdateStudent } from '@/gql/graphql';

type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useEditStudentMutation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const mutation = useMutation({
    mutationFn: (student: UpdateStudent) => editStudent(student),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useEditStudentMutation };
