import { api_url, graphQLClient } from '@/constants/utils';
import { graphql } from '@/gql/gql';
import {
  CreateStudent as CreateStudentInput,
  UpdateStudent,
} from '@/gql/graphql';
import { GraphQLClient } from 'graphql-request';

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
        image_url
        description
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
  query GetStudents($search: String, $hasClassroom: Boolean) {
    GetStudents(search: $search, hasClassroom: $hasClassroom) {
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
        image_url
        description
        last_name
        updatedAt
        user_name
        email
      }
    }
  }
`);

const CreateStudent = graphql(`
  mutation CreateStudent($createStudent: CreateStudent!) {
    CreateStudent(createStudent: $createStudent) {
      student_id
    }
  }
`);
const EditStudent = graphql(`
  mutation EditStudent($editStudent: UpdateStudent!) {
    EditStudent(editStudent: $editStudent) {
      student_id
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
const getStudents = (hasClassroom?: boolean, search?: string) => {
    
  return graphQLClient?.request(GetStudents, { hasClassroom, search });
};

const getStudent = (id: number) =>
  graphQLClient?.request(GetStudent, { getStudentId: id });
const createStudent = (student: CreateStudentInput) =>
  graphQLClient?.request(CreateStudent, { createStudent: student });
const editStudent = (student: UpdateStudent) =>
  graphQLClient?.request(EditStudent, {
    editStudent: student,
  });

const deleteStudent = (id: number) =>
  graphQLClient?.request(DeleteStudent, { studentId: id });

export { getStudents, getStudent, deleteStudent, createStudent, editStudent };
