import { graphQLClient } from '@/constants/utils';
import { graphql } from '@/gql/gql';

const CreateTopic = graphql(`
  mutation CreateTopic($createTopic: CreateTopic!) {
    CreateTopic(createTopic: $createTopic) {
      content
    }
  }
`);
const GetTopicsByAuthor = graphql(`
  query GetTopicsByAuthor($authorId: Int!) {
    getTopicsByAuthor(authorID: $authorId) {
      content
    }
  }
`);
const GetTopicsByCourseId = graphql(`
  query GetTopicsByCourseId($courseId: Int!) {
    getTopicsByCourseId(courseID: $courseId) {
      content
    }
  }
`);
const EditTopic = graphql(`
  mutation EditTopic($editTopic: UpdateTopic!, $topicId: Int!) {
    EditTopic(editTopic: $editTopic, topicId: $topicId) {
      content
    }
  }
`);

const getTopicsByAuthor = (authorId: number, accessToken: string) =>
  graphQLClient?.request(
    GetTopicsByAuthor,
    { authorId },
    {
      Authorization: `Bearer ${accessToken}`,
    }
  );
const getTopicsByCourseId = (courseId: number, accessToken: string) =>
  graphQLClient?.request(
    GetTopicsByCourseId,
    { courseId },
    {
      Authorization: `Bearer ${accessToken}`,
    }
  );

const createTopic = (content: string, accessToken: string) =>
  graphQLClient?.request(
    CreateTopic,
    { createTopic: { content } },
    { Authorization: `Bearer ${accessToken}` }
  );

const editTopic = (content: string, topicId: number) =>
  graphQLClient?.request(EditTopic, { editTopic: { content }, topicId });

export { getTopicsByAuthor, getTopicsByCourseId, createTopic, editTopic };
