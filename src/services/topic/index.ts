import { graphQLClient } from '@/constants/utils';
import { graphql } from '@/gql/gql';
import { CourseId } from '@/gql/graphql';

const CreateTopic = graphql(`
  mutation CreateTopic($createTopic: CreateTopic!, $courseId: CourseId) {
    CreateTopic(createTopic: $createTopic, courseId: $courseId) {
      content
    }
  }
`);
const GetTopicsByAuthor = graphql(`
  query GetTopicsByAuthor($authorId: Int!) {
    getTopicsByAuthor(authorID: $authorId) {
      topic_id
      content
    }
  }
`);
const GetTopicsByCourseId = graphql(`
  query GetTopicsByCourseId($courseId: Int!) {
    getTopicsByCourseId(courseID: $courseId) {
      user_id
      topic_id
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
const DeleteTopic = graphql(`
  mutation deleteTopic($topicId: Float!) {
    deleteTopic(topicId: $topicId) {
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

const createTopic = (
  content: string,
  accessToken: string,
  courseId?: CourseId
) =>
  graphQLClient?.request(
    CreateTopic,
    {
      createTopic: { content },
      courseId,
    },
    { Authorization: `Bearer ${accessToken}` }
  );

const editTopic = (content: string, topicId: number) =>
  graphQLClient?.request(EditTopic, { editTopic: { content }, topicId });

const deleteTopic = (topicId: number, accessToken: string) =>
  graphQLClient?.request(
    DeleteTopic,
    { topicId },
    {
      Authorization: `Bearer ${accessToken}`,
    }
  );

export {
  getTopicsByAuthor,
  getTopicsByCourseId,
  createTopic,
  editTopic,
  deleteTopic,
};
