import { GraphQLError } from 'graphql';
import { creatClassroom } from '@/services/classroom';
import { CreateClassroom } from '@/types/classroom';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useCreateClassroomMutation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const mutation = useMutation({
    mutationFn: (classroom: CreateClassroom) =>
      creatClassroom({ ...classroom, accessToken: accessToken || '' }),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useCreateClassroomMutation };
