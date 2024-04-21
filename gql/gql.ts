/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation Login($data: LoginInput!) {\n    login(data: $data) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.LoginDocument,
    "\n  query GetStudent($getStudentId: Int!) {\n    getStudent(id: $getStudentId) {\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      student_id\n      user {\n        createdAt\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n": types.GetStudentDocument,
    "\n  query GetStudents {\n    GetStudents {\n      student_id\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      user {\n        user_id\n        createdAt\n        first_name\n        last_name\n        updatedAt\n        user_name\n        email\n      }\n    }\n  }\n": types.GetStudentsDocument,
    "\n  query getCurrentUser {\n    getCurrentUser {\n      createdAt\n      first_name\n      last_name\n      updatedAt\n      role\n      user_id\n      user_name\n    }\n  }\n": types.GetCurrentUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($data: LoginInput!) {\n    login(data: $data) {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation Login($data: LoginInput!) {\n    login(data: $data) {\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStudent($getStudentId: Int!) {\n    getStudent(id: $getStudentId) {\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      student_id\n      user {\n        createdAt\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStudent($getStudentId: Int!) {\n    getStudent(id: $getStudentId) {\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      student_id\n      user {\n        createdAt\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStudents {\n    GetStudents {\n      student_id\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      user {\n        user_id\n        createdAt\n        first_name\n        last_name\n        updatedAt\n        user_name\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStudents {\n    GetStudents {\n      student_id\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      user {\n        user_id\n        createdAt\n        first_name\n        last_name\n        updatedAt\n        user_name\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCurrentUser {\n    getCurrentUser {\n      createdAt\n      first_name\n      last_name\n      updatedAt\n      role\n      user_id\n      user_name\n    }\n  }\n"): (typeof documents)["\n  query getCurrentUser {\n    getCurrentUser {\n      createdAt\n      first_name\n      last_name\n      updatedAt\n      role\n      user_id\n      user_name\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;