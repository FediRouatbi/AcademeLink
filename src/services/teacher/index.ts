import { graphQLClient } from '@/constants/utils';
import { graphql } from '@/gql/gql';
import { CreateTeacher as CreateTeacherType, Teacher } from '@/gql/graphql';

const GetTeacher = graphql(`
  query GetTeacher($getTeacherId: Int!) {
    GetTeacher(id: $getTeacherId) {
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
`);

const GetTeachers = graphql(`
  query GetTeachers {
    GetTeachers {
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
`);

const CreateTeacher = graphql(`
  mutation CreateTeacher($createTeacher: CreateTeacher!) {
    CreateTeacher(createTeacher: $createTeacher) {
      teacher_id
    }
  }
`);

const getTeachers = () => graphQLClient?.request(GetTeachers);

const getTeacher = (id: number) =>
  graphQLClient?.request(GetTeacher, { getTeacherId: id });

const createTeacher = (teacher: CreateTeacherType) =>
  graphQLClient?.request(CreateTeacher, { createTeacher: teacher });

export { getTeachers, getTeacher, createTeacher };
