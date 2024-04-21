import { graphQLClient } from "@/constants/utils";
import { graphql } from "@/gql/gql";

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

const getTeachers = () => graphQLClient?.request(GetTeachers);

const getTeacher = (id: number) =>
  graphQLClient?.request(GetTeacher, { getTeacherId: id });

export { getTeachers, getTeacher };
