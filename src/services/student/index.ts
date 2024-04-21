import { api_url, graphQLClient } from "@/constants/utils";
import { graphql } from "@/gql/gql";
import { GraphQLClient } from "graphql-request";

const GetStudent = graphql(`
  query GetStudent($getStudentId: Int!) {
    getStudent(id: $getStudentId) {
      classroom {
        classroom_id
        classroom_name
        createdAt
      }
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
`);

const GetStudents = graphql(`
  query GetStudents {
    GetStudents {
      student_id
      classroom {
        classroom_id
        classroom_name
        createdAt
      }
      user {
        user_id
        createdAt
        first_name
        last_name
        updatedAt
        user_name
        email
      }
    }
  }
`);

const DeleteStudent = graphql(`
  mutation DeleteStudent($studentId: Float!) {
    deleteStudent(studentId: $studentId) {
      student_id
    }
  }
`);
const getStudents = () => graphQLClient?.request(GetStudents);

const getStudent = (id: number) =>
  graphQLClient?.request(GetStudent, { getStudentId: id });

const deleteStudent = (id: number) =>
  graphQLClient?.request(DeleteStudent, { studentId: id });

export { getStudents, getStudent, deleteStudent };
