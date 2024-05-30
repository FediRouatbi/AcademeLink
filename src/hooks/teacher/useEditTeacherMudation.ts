import { GraphQLError } from 'graphql';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UpdateTeacher } from '@/gql/graphql';
import { editTeacher } from '@/services/teacher';

type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useEditTeacherMudation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const mutation = useMutation({
    mutationFn: (teacher: UpdateTeacher) => editTeacher(teacher),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useEditTeacherMudation };
