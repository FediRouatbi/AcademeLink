/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateTeacher = {
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  user_name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  TestEndPoint: Teacher;
};


export type MutationTestEndPointArgs = {
  createTeacher: CreateTeacher;
};

export type Query = {
  __typename?: 'Query';
  Hello: Scalars['String']['output'];
};

export type Teacher = {
  __typename?: 'Teacher';
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  user_id: Scalars['Int']['output'];
  user_name: Scalars['String']['output'];
};

export type TestEndPointMutationVariables = Exact<{
  createTeacher: CreateTeacher;
}>;


export type TestEndPointMutation = { __typename?: 'Mutation', TestEndPoint: { __typename?: 'Teacher', first_name: string, last_name: string, user_id: number, user_name: string } };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', Hello: string };


export const TestEndPointDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestEndPoint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTeacher"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTeacher"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TestEndPoint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTeacher"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTeacher"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}}]} as unknown as DocumentNode<TestEndPointMutation, TestEndPointMutationVariables>;
export const HelloDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Hello"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Hello"}}]}}]} as unknown as DocumentNode<HelloQuery, HelloQueryVariables>;