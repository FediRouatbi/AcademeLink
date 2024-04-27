import { GraphQLClient } from 'graphql-request';

export const api_url = 'http://127.0.0.1:3000/graphql';

export const graphQLClient = new GraphQLClient(api_url, {
  mode: `cors`,
  credentials: 'include',
});
