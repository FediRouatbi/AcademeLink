'use client';
import { GraphQLError } from 'graphql';
import { useMutation } from '@tanstack/react-query';
import { createTopic, editTopic } from '@/services/topic';
import { useSession } from 'next-auth/react';

type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useEditTopicMutation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;

  const mutation = useMutation({
    mutationFn: ({ content, topicId }: { content: string; topicId: number }) =>
      editTopic(content, topicId),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useEditTopicMutation };
