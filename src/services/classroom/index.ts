import { graphQLClient } from '@/constants/utils';
import { graphql } from '@/gql/gql';
import { CreateClassroom } from '@/gql/graphql';
import { GraphQLClient } from 'graphql-request';

const GetClassroom = graphql(`
  query GetClassroom($getClassrommId: Int!) {
    getClassroom(id: $getClassrommId) {
      classroom_id
      classroom_name
      createdAt
      student {
        student_id
        user {
          createdAt
          email
          first_name
          last_name
          updatedAt
          user_id
          user_name
        }
      }
    }
  }
`);

const GetClassrooms = graphql(`
  query GetClassrooms {
    getClassrooms {
      classroom_id
      classroom_name
      createdAt
      student {
        student_id
      }
      course {
        subject {
          name
          id
        }
        teacher {
          teacher_id
          user {
            createdAt
            email
            first_name
            last_name
            updatedAt
            user_id
            user_name
          }
        }
      }
    }
  }
`);

const CreatClassroom = graphql(`
  mutation Mutation($createClassromm: CreateClassroom!) {
    creatClassroom(createClassromm: $createClassromm) {
      classroom_id
    }
  }
`);

const DeleteClassroom = graphql(`
  mutation DeleteClassroom($classroomId: Float!) {
    deleteClassroom(classroomId: $classroomId) {
      classroom_id
    }
  }
`);

const getClassrooms = (accessToken: string) =>
  graphQLClient?.request(GetClassrooms, undefined, {
    Authorization: `Bearer ${accessToken}`,
  });

const creatClassroom = ({
  accessToken,
  classroom_name,
  studentsIds,
  teachersIds,
}: CreateClassroom & { accessToken: string }) => {
  return graphQLClient?.request(
    CreatClassroom,
    {
      createClassromm: { classroom_name, studentsIds, teachersIds },
    },
    { Authorization: `Bearer ${accessToken}` }
  );
};

const deleteClassroom = (classroomId: number, accessToken: string) =>
  graphQLClient?.request(
    DeleteClassroom,
    { classroomId },
    { Authorization: `Bearer ${accessToken}` }
  );

export { getClassrooms, creatClassroom, deleteClassroom };
