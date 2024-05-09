import { GraphQLError } from 'graphql';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { createStudent } from '@/services/student';
import { CreateCourseInput, CreateStudent } from '@/gql/graphql';
import { createCourse } from '@/services/courses';

type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useCreateCourseMudation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const mutation = useMutation({
    mutationFn: (course: CreateCourseInput) =>
      createCourse({ ...course, accessToken: accessToken || '' }),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useCreateCourseMudation };
