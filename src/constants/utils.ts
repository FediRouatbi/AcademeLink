import { GraphQLClient } from 'graphql-request';

export const api_url = process.env.NEXT_PUBLIC_API_URL || '';

export const graphQLClient = new GraphQLClient(api_url, {
  mode: `cors`,
  credentials: 'include',
});
