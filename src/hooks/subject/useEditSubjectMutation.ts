import { GraphQLError } from 'graphql';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { createSubject, editSubject } from '@/services/subject';
import { Subject } from '@/gql/graphql';

type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useEditSubjectMutation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const mutation = useMutation({
    mutationFn: (subject: Subject) => editSubject(subject, accessToken || ''),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useEditSubjectMutation };
