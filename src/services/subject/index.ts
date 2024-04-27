import { graphQLClient } from '@/constants/utils';
import { graphql } from '@/gql/gql';

const GetSubject = graphql(`
  query GetSubject($getSubjectId: Int!) {
    getSubject(id: $getSubjectId) {
      id
      name
    }
  }
`);

const GetSubjects = graphql(`
  query GetSubjects {
    getSubjects {
      id
      name
    }
  }
`);

const CreateSubject = graphql(`
  mutation CreateSubject($createSubject: CreateSubjectInput!) {
    createSubject(createSubject: $createSubject) {
      id
      name
    }
  }
`);

const DeleteSubject = graphql(`
  mutation DeleteSubject($deleteSubjectId: Int!) {
    deleteSubject(id: $deleteSubjectId) {
      id
    }
  }
`);

const createSubject = (name: string, accessToken: string) =>
  graphQLClient?.request(
    CreateSubject,
    { createSubject: { name } },
    {
      Authorization: `Bearer ${accessToken}`,
    }
  );
const getSubjects = (accessToken: string) =>
  graphQLClient?.request(GetSubjects, undefined, {
    Authorization: `Bearer ${accessToken}`,
  });

const getSubject = (getSubjectId: number, accessToken: string) => {
  return graphQLClient?.request(
    GetSubject,
    {
      getSubjectId,
    },
    { Authorization: `Bearer ${accessToken}` }
  );
};

const deleteSubject = (deleteSubjectId: number, accessToken: string) =>
  graphQLClient?.request(
    DeleteSubject,
    { deleteSubjectId },
    { Authorization: `Bearer ${accessToken}` }
  );

export { deleteSubject, getSubject, getSubjects, createSubject };
