import { GraphQLError } from 'graphql';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { editStudent } from '@/services/student';
import { UpdateCourseInput, UpdateStudent } from '@/gql/graphql';
import { editCourse } from '@/services/courses';

type Props = {
  onSuccess?: () => void;
  onError?: (error: GraphQLError) => void;
};

const useEditCourseMutation = ({ onSuccess, onError }: Props) => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const mutation = useMutation({
    mutationFn: (course: UpdateCourseInput) =>
      editCourse(course, accessToken || ''),
    onSuccess(data, variables, context) {
      onSuccess?.();
    },
    onError(error, variables, context) {
      onError?.(error as GraphQLError);
    },
  });
  return mutation;
};

export { useEditCourseMutation };
