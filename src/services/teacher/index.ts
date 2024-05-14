import { graphQLClient } from '@/constants/utils';
import { graphql } from '@/gql/gql';
import {
  CreateTeacher as CreateTeacherType,
  Teacher,
  UpdateTeacher,
} from '@/gql/graphql';

const GetTeacher = graphql(`
  query GetTeacher($getTeacherId: Int!) {
    GetTeacher(id: $getTeacherId) {
      teacher_id
      user {
        createdAt
        email
        image_url
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
  query GetTeachers($search: String) {
    GetTeachers(search: $search) {
      teacher_id
      user {
        createdAt
        email
        image_url
        email
        first_name
        last_name
        updatedAt
        user_id
        user_name
      }
      course {
        classroom_id
        subject_id
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
const EditTeacher = graphql(`
  mutation EditTeacher($editTeacher: UpdateTeacher!) {
    EditTeacher(editTeacher: $editTeacher) {
      teacher_id
    }
  }
`);
const DeleteTeacher = graphql(`
  mutation DeleteTeacher($teacherId: Float!) {
    deleteTeacher(teacherId: $teacherId) {
      teacher_id
    }
  }
`);

const getTeachers = (search?: string) =>
  graphQLClient?.request(GetTeachers, { search });

const getTeacher = (id: number) =>
  graphQLClient?.request(GetTeacher, { getTeacherId: id });

const createTeacher = (teacher: CreateTeacherType) =>
  graphQLClient?.request(CreateTeacher, { createTeacher: teacher });

const editTeacher = (teacher: UpdateTeacher) =>
  graphQLClient?.request(EditTeacher, { editTeacher: teacher });

const deleteTeacher = (teacherId: number) =>
  graphQLClient?.request(DeleteTeacher, { teacherId });

export { getTeachers, getTeacher, createTeacher, editTeacher, deleteTeacher };
