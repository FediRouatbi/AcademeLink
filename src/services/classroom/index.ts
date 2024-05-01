import { Classroom, CreatClassroomMutation } from './../../../gql/graphql';
import { graphQLClient } from '@/constants/utils';
import { graphql } from '@/gql/gql';
import { CreateClassroom } from '@/types/classroom';
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
  mutation CreatClassroom(
    $classroom: String!
    $teachersId: [Int!]!
    $studentsId: [Int!]!
  ) {
    creatClassroom(
      classroom: $classroom
      teachersId: $teachersId
      studentsId: $studentsId
    ) {
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
  classroom,
  studentsId = [],
  teachersId = [],
  accessToken,
}: CreateClassroom & { accessToken: string }) => {
  return graphQLClient?.request(
    CreatClassroom,
    {
      classroom,
      studentsId,
      teachersId,
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
