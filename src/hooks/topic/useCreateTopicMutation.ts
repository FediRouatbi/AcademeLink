'use client';
import { GraphQLError } from 'graphql';
import { useMutation } from '@tanstack/react-query';
import { createTopic } from '@/services/topic';
import { useSession } from 'next-auth/react';
import { CourseId } from '@/gql/graphql';

type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useCreateTopicMutation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;

  const mutation = useMutation({
    mutationFn: ({
      content,
      courseId,
    }: {
      content: string;
      courseId: CourseId;
    }) => createTopic(content, accessToken || '', courseId),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useCreateTopicMutation };
