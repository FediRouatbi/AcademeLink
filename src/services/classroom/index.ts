import { graphQLClient } from '@/constants/utils';
import { graphql } from '@/gql/gql';
import { CreateClassroom, UpdateClassroom } from '@/gql/graphql';

const GetClassroom = graphql(`
  query GetClassroom($getClassrommId: Int!) {
    getClassroom(id: $getClassrommId) {
      classroom_id
      classroom_name
      description
      createdAt
      student {
        student_id
        user {
          image_url
          description
          createdAt
          email
          first_name
          last_name
          updatedAt
          user_id
          user_name
        }
      }
      course {
        id
        createdAt
        subject {
          name
          id
        }
        teacher {
          teacher_id
          user {
            image_url
            description
            createdAt
            email
            first_name
            last_name
            updatedAt
            user_id
            user_name
          }
        }
        updatedAt
      }
    }
  }
`);

const GetClassrooms = graphql(`
  query GetClassrooms($search: String) {
    getClassrooms(search: $search) {
      classroom_id
      classroom_name
      description
      createdAt
      student {
        student_id
        user {
          user_name
        }
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
            image_url
            description
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
const EditClassromm = graphql(`
  mutation EditClassromm($editClassromm: UpdateClassroom!) {
    editClassromm(editClassromm: $editClassromm) {
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

const getClassrooms = (search: string | undefined, accessToken: string) =>
  graphQLClient?.request(
    GetClassrooms,
    { search },
    {
      Authorization: `Bearer ${accessToken}`,
    }
  );
const getClassroom = (getClassrommId: number, accessToken: string) =>
  graphQLClient?.request(
    GetClassroom,
    { getClassrommId },
    {
      Authorization: `Bearer ${accessToken}`,
    }
  );

const creatClassroom = ({
  accessToken,
  classroom_name,
  studentsIds,
  teachersIds,
  description,
}: CreateClassroom & { accessToken: string }) => {
  return graphQLClient?.request(
    CreatClassroom,
    {
      createClassromm: {
        classroom_name,
        studentsIds,
        teachersIds,
        description,
      },
    },
    { Authorization: `Bearer ${accessToken}` }
  );
};

const editClassroom = (classroom: UpdateClassroom, accessToken: string) =>
  graphQLClient?.request(
    EditClassromm,
    {
      editClassromm: {
        classroom_id: classroom?.classroom_id,
        classroom_name: classroom?.classroom_name,
        description: classroom?.description,
      },
    },
    { Authorization: `Bearer ${accessToken}` }
  );
const deleteClassroom = (classroomId: number, accessToken: string) =>
  graphQLClient?.request(
    DeleteClassroom,
    { classroomId },
    { Authorization: `Bearer ${accessToken}` }
  );

export {
  getClassrooms,
  getClassroom,
  creatClassroom,
  editClassroom,
  deleteClassroom,
};
