import { GraphQLError } from 'graphql';
import { deleteClassroom } from '@/services/classroom';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useDeleteClassroomMutation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const mutation = useMutation({
    mutationFn: (classroomId: number) =>
      deleteClassroom(classroomId, accessToken || ''),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useDeleteClassroomMutation };
