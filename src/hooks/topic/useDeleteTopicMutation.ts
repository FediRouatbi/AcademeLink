'use client';
import { GraphQLError } from 'graphql';
import { useMutation } from '@tanstack/react-query';
import { createTopic, deleteTopic, editTopic } from '@/services/topic';
import { useSession } from 'next-auth/react';

type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useDeleteTopicMutation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;

  const mutation = useMutation({
    mutationFn: (topicId: number) => deleteTopic(topicId, accessToken || ''),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useDeleteTopicMutation };
