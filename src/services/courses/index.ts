import { graphQLClient } from '@/constants/utils';
import { graphql } from '@/gql/gql';
import { CreateCourseInput, UpdateCourseInput } from '@/gql/graphql';

const GetCourses = graphql(`
  query getCourses {
    getCourses {
      id
      createdAt
      updatedAt
      classroom {
        classroom_id
        classroom_name
        createdAt
        student {
          student_id
        }
      }
      subject {
        id
        name
      }
      teacher {
        teacher_id
        user {
          createdAt
          email
          user_id
          updatedAt
          user_name
          last_name
          first_name
        }
      }
    }
  }
`);

const GetCourse = graphql(`
  query getCourse($getCourseId: Int!) {
    getCourse(id: $getCourseId) {
      createdAt
      updatedAt
      topic {
        topic_id
        content
      }
      classroom {
        classroom_id
        classroom_name
        createdAt
        student {
          student_id
        }
      }
      subject {
        id
        name
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
`);

const CreateCourse = graphql(`
  mutation CreateCourse($createCourseInput: CreateCourseInput!) {
    createCourse(createCourseInput: $createCourseInput) {
      classroom {
        classroom_id
      }
    }
  }
`);
const EditCourse = graphql(`
  mutation EditCourse($updateCourseInput: UpdateCourseInput!) {
    editCourse(updateCourseInput: $updateCourseInput) {
      classroom {
        classroom_id
      }
    }
  }
`);

const DeleteCourse = graphql(`
  mutation DeleteCourse($deleteCourseId: Int!) {
    deleteCourse(id: $deleteCourseId) {
      classroom {
        classroom_id
      }
    }
  }
`);

const getCourses = (accessToken: string) =>
  graphQLClient?.request(GetCourses, undefined, {
    Authorization: `Bearer ${accessToken}`,
  });
const getCourse = (getCourseId: number, accessToken: string) =>
  graphQLClient?.request(
    GetCourse,
    { getCourseId },
    {
      Authorization: `Bearer ${accessToken}`,
    }
  );

const createCourse = ({
  accessToken,
  classroom_id,
  subject_id,
  teacher_id,
}: CreateCourseInput & { accessToken: string }) => {
  return graphQLClient?.request(
    CreateCourse,
    {
      createCourseInput: {
        classroom_id,
        subject_id,
        teacher_id,
      },
    },
    { Authorization: `Bearer ${accessToken}` }
  );
};

const editCourse = (course: UpdateCourseInput, accessToken: string) =>
  graphQLClient?.request(
    EditCourse,
    {
      updateCourseInput: course,
    },
    { Authorization: `Bearer ${accessToken}` }
  );
const deleteCourse = (deleteCourseId: number, accessToken: string) =>
  graphQLClient?.request(
    DeleteCourse,
    { deleteCourseId },
    { Authorization: `Bearer ${accessToken}` }
  );
export { getCourses, getCourse, createCourse, editCourse, deleteCourse };
