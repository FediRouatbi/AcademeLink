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
  query getTopicsByAuthor {
    getTopicsByAuthor {
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

const getTopicsByAuthor = (accessToken: string) =>
  graphQLClient?.request(GetTopicsByAuthor, undefined, {
    Authorization: `Bearer ${accessToken}`,
  });

const createTopic = (content: string, accessToken: string) =>
  graphQLClient?.request(
    CreateTopic,
    { createTopic: { content } },
    { Authorization: `Bearer ${accessToken}` }
  );

const editTopic = (content: string, topicId: number) =>
  graphQLClient?.request(EditTopic, { editTopic: { content }, topicId });

export { createTopic, getTopicsByAuthor, editTopic };
