import { GraphQLError } from 'graphql';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import {
  EditUserMutation,
  UpdateCourseInput,
  UpdateStudent,
  UpdateUser,
} from '@/gql/graphql';
import { editUser } from '@/services/user';

type Props = {
  onSuccess?: (data: EditUserMutation) => void;
  onError?: (error: GraphQLError) => void;
};

const useEditUserMutation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const mutation = useMutation({
    mutationFn: (user: UpdateUser) => editUser(user, accessToken || ''),
    onSuccess(data, variables, context) {
      onSuccess?.(data);
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useEditUserMutation };
