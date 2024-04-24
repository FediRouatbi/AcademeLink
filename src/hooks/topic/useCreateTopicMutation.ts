'use client';
import { useMutation } from '@tanstack/react-query';
import { createTopic } from '@/services/topic';
import { useSession } from 'next-auth/react';

type Props = {
  onSuccess?: () => void;
};

const useCreateTopicMutation = ({ onSuccess }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;

  const mutation = useMutation({
    mutationFn: ({ content }: { content: string }) =>
      createTopic(content, accessToken || ''),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
  });
  return mutation;
};

export { useCreateTopicMutation };
