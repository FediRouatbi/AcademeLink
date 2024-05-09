import { graphQLClient } from '@/constants/utils';
import { graphql } from '@/gql/gql';
import { Subject } from '@/gql/graphql';

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
const EditSubject = graphql(`
  mutation editSubject(
    $editSubjectId: Int!
    $editSubject: UpdateSubjectInput!
  ) {
    editSubject(id: $editSubjectId, editSubject: $editSubject) {
      id
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
const editSubject = (subject: Subject, accessToken: string) =>
  graphQLClient?.request(
    EditSubject,
    { editSubject: { name: subject?.name }, editSubjectId: subject?.id },
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

export { deleteSubject, getSubject, getSubjects, createSubject, editSubject };
