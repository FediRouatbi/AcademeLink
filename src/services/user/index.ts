import { graphQLClient } from '@/constants/utils';
import { graphql } from '@/gql/gql';
import { CourseId, UpdateUser } from '@/gql/graphql';

const GetCurrentUser = graphql(`
  query GetCurrentUser {
    getCurrentUser {
      email
      createdAt
      first_name
      last_name
      role
      updatedAt
      user_id
      user_name
    }
  }
`);
const EditUser = graphql(`
  mutation EditUser($data: UpdateUser!) {
    editUser(data: $data) {
      user_id
    }
  }
`);

const getCurrentUser = (accessToken: string) =>
  graphQLClient?.request(GetCurrentUser, undefined, {
    Authorization: `Bearer ${accessToken}`,
  });
const editUser = (user: UpdateUser, accessToken: string) =>
  graphQLClient?.request(
    EditUser,
    { data: user },
    {
      Authorization: `Bearer ${accessToken}`,
    }
  );
export { getCurrentUser, editUser };
