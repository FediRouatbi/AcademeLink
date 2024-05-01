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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: { input: any; output: any; }
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['JWT']['output'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT']['output'];
};

export type Classroom = {
  __typename?: 'Classroom';
  classroom_id: Scalars['String']['output'];
  classroom_name: Scalars['String']['output'];
  course?: Maybe<Array<Course>>;
  createdAt: Scalars['String']['output'];
  student?: Maybe<Array<Student>>;
};

export type ClassroomInput = {
  classroom_id: Scalars['Float']['input'];
  subject_id: Scalars['Float']['input'];
};

export type ClassroomTest = {
  __typename?: 'ClassroomTest';
  classroom_id: Scalars['Float']['output'];
  classroom_name: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
};

export type Course = {
  __typename?: 'Course';
  classroom: Classroom;
  subject: Subject;
  teacher: Teacher;
};

export type CreateCourseInput = {
  /** Example field (placeholder) */
  classroom_id: Scalars['Int']['input'];
  /** Example field (placeholder) */
  subject_id: Scalars['Int']['input'];
  /** Example field (placeholder) */
  teacher_id: Scalars['Int']['input'];
};

export type CreateStudent = {
  classroom_id?: InputMaybe<Scalars['Float']['input']>;
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  user_name: Scalars['String']['input'];
};

export type CreateSubjectInput = {
  /** Example field (placeholder) */
  name: Scalars['String']['input'];
};

export type CreateTeacher = {
  classrooms?: InputMaybe<Array<ClassroomInput>>;
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  user_name: Scalars['String']['input'];
};

export type CreateTopic = {
  content: Scalars['String']['input'];
};

export type CurrentUser = {
  __typename?: 'CurrentUser';
  createdAt: Scalars['DateTime']['output'];
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  role: RoleCodeEnum;
  updatedAt: Scalars['DateTime']['output'];
  user_id: Scalars['Int']['output'];
  user_name: Scalars['String']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateStudent: Student;
  CreateTeacher: Teacher;
  CreateTopic: Topic;
  EditStudent: Student;
  EditTeacher: Teacher;
  EditTopic: Topic;
  creatClassroom: Classroom;
  createCourse: Course;
  createSubject: Subject;
  deleteClassroom: Classroom;
  deleteCourse: Course;
  deleteStudent: Student;
  deleteSubject: Subject;
  deleteTeacher: Teacher;
  deleteTopic: Topic;
  editClassromm: Classroom;
  editCourse: Course;
  editSubject: Subject;
  login: Auth;
  refreshToken: Token;
  signup: Auth;
};


export type MutationCreateStudentArgs = {
  createStudent: CreateStudent;
};


export type MutationCreateTeacherArgs = {
  createTeacher: CreateTeacher;
};


export type MutationCreateTopicArgs = {
  createTopic: CreateTopic;
};


export type MutationEditStudentArgs = {
  editStudent: UpdateStudent;
  id: Scalars['Int']['input'];
};


export type MutationEditTeacherArgs = {
  editTeacher: UpdateTeacher;
  id: Scalars['Int']['input'];
};


export type MutationEditTopicArgs = {
  editTopic: UpdateTopic;
  topicId: Scalars['Int']['input'];
};


export type MutationCreatClassroomArgs = {
  classroom: Scalars['String']['input'];
  studentsId?: Array<Scalars['Int']['input']>;
  teachersId?: Array<Scalars['Int']['input']>;
};


export type MutationCreateCourseArgs = {
  createCourseInput: CreateCourseInput;
};


export type MutationCreateSubjectArgs = {
  createSubject: CreateSubjectInput;
};


export type MutationDeleteClassroomArgs = {
  classroomId: Scalars['Float']['input'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteStudentArgs = {
  studentId: Scalars['Float']['input'];
};


export type MutationDeleteSubjectArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTeacherArgs = {
  teacherId: Scalars['Float']['input'];
};


export type MutationDeleteTopicArgs = {
  topicId: Scalars['Float']['input'];
};


export type MutationEditClassrommArgs = {
  editClassromm: UpdateClassroom;
  id: Scalars['Int']['input'];
};


export type MutationEditCourseArgs = {
  updateCourseInput: UpdateCourseInput;
};


export type MutationEditSubjectArgs = {
  editSubject: UpdateSubjectInput;
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['JWT']['input'];
};


export type MutationSignupArgs = {
  data: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  GetStudents: Array<Student>;
  GetTeacher: Teacher;
  GetTeachers: Array<Teacher>;
  GetTopics: Array<Topic>;
  getClassroom: Classroom;
  getClassrooms: Array<Classroom>;
  getCourse: Course;
  getCourses: Array<Course>;
  getCurrentUser: CurrentUser;
  getStudent: Student;
  getSubject: Subject;
  getSubjects: Array<Subject>;
  getTopicsByAuthor: Array<Topic>;
};


export type QueryGetTeacherArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetClassroomArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetCourseArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetStudentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetSubjectArgs = {
  id: Scalars['Int']['input'];
};

export enum RoleCodeEnum {
  Admin = 'ADMIN',
  Student = 'STUDENT',
  Teacher = 'TEACHER'
}

export type SignupInput = {
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  role: RoleCodeEnum;
  user_name: Scalars['String']['input'];
};

export type Student = {
  __typename?: 'Student';
  classroom?: Maybe<ClassroomTest>;
  student_id: Scalars['Float']['output'];
  user: User;
};

export type Subject = {
  __typename?: 'Subject';
  /** Example field (placeholder) */
  id: Scalars['Int']['output'];
  /** Example field (placeholder) */
  name: Scalars['String']['output'];
};

export type Teacher = {
  __typename?: 'Teacher';
  teacher_id: Scalars['Int']['output'];
  user: User;
};

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['JWT']['output'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT']['output'];
};

export type Topic = {
  __typename?: 'Topic';
  content: Scalars['String']['output'];
};

export type UpdateClassroom = {
  classroom_name?: InputMaybe<Scalars['String']['input']>;
  students?: InputMaybe<Array<Scalars['String']['input']>>;
  subjects?: InputMaybe<Array<Scalars['String']['input']>>;
  teachers?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateCourseInput = {
  /** Example field (placeholder) */
  classroom_id?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  /** Example field (placeholder) */
  subject_id?: InputMaybe<Scalars['Int']['input']>;
  /** Example field (placeholder) */
  teacher_id?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateStudent = {
  classroom_id?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSubjectInput = {
  /** Example field (placeholder) */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTeacher = {
  classrooms?: InputMaybe<Array<ClassroomInput>>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTopic = {
  content?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user_id: Scalars['Int']['output'];
  user_name: Scalars['String']['output'];
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser: { __typename?: 'CurrentUser', createdAt: any, first_name: string, last_name: string, updatedAt: any, role: RoleCodeEnum, user_id: number, user_name: string } };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', accessToken: any, refreshToken: any } };

export type GetClassroomQueryVariables = Exact<{
  getClassrommId: Scalars['Int']['input'];
}>;


export type GetClassroomQuery = { __typename?: 'Query', getClassroom: { __typename?: 'Classroom', classroom_id: string, classroom_name: string, createdAt: string, student?: Array<{ __typename?: 'Student', student_id: number, user: { __typename?: 'User', createdAt: any, email: string, first_name: string, last_name: string, updatedAt: any, user_id: number, user_name: string } }> | null } };

export type GetClassroomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClassroomsQuery = { __typename?: 'Query', getClassrooms: Array<{ __typename?: 'Classroom', classroom_id: string, classroom_name: string, createdAt: string, student?: Array<{ __typename?: 'Student', student_id: number }> | null, course?: Array<{ __typename?: 'Course', subject: { __typename?: 'Subject', name: string, id: number }, teacher: { __typename?: 'Teacher', teacher_id: number, user: { __typename?: 'User', createdAt: any, email: string, first_name: string, last_name: string, updatedAt: any, user_id: number, user_name: string } } }> | null }> };

export type CreatClassroomMutationVariables = Exact<{
  classroom: Scalars['String']['input'];
  teachersId: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
  studentsId: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type CreatClassroomMutation = { __typename?: 'Mutation', creatClassroom: { __typename?: 'Classroom', classroom_id: string } };

export type DeleteClassroomMutationVariables = Exact<{
  classroomId: Scalars['Float']['input'];
}>;


export type DeleteClassroomMutation = { __typename?: 'Mutation', deleteClassroom: { __typename?: 'Classroom', classroom_id: string } };

export type GetStudentQueryVariables = Exact<{
  getStudentId: Scalars['Int']['input'];
}>;


export type GetStudentQuery = { __typename?: 'Query', getStudent: { __typename?: 'Student', student_id: number, classroom?: { __typename?: 'ClassroomTest', classroom_id: number, classroom_name: string, createdAt: any } | null, user: { __typename?: 'User', createdAt: any, email: string, first_name: string, last_name: string, updatedAt: any, user_id: number, user_name: string } } };

export type GetStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentsQuery = { __typename?: 'Query', GetStudents: Array<{ __typename?: 'Student', student_id: number, classroom?: { __typename?: 'ClassroomTest', classroom_id: number, classroom_name: string, createdAt: any } | null, user: { __typename?: 'User', user_id: number, createdAt: any, first_name: string, last_name: string, updatedAt: any, user_name: string, email: string } }> };

export type CreateStudentMutationVariables = Exact<{
  createStudent: CreateStudent;
}>;


export type CreateStudentMutation = { __typename?: 'Mutation', CreateStudent: { __typename?: 'Student', student_id: number } };

export type DeleteStudentMutationVariables = Exact<{
  studentId: Scalars['Float']['input'];
}>;


export type DeleteStudentMutation = { __typename?: 'Mutation', deleteStudent: { __typename?: 'Student', student_id: number } };

export type GetSubjectQueryVariables = Exact<{
  getSubjectId: Scalars['Int']['input'];
}>;


export type GetSubjectQuery = { __typename?: 'Query', getSubject: { __typename?: 'Subject', id: number, name: string } };

export type GetSubjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubjectsQuery = { __typename?: 'Query', getSubjects: Array<{ __typename?: 'Subject', id: number, name: string }> };

export type CreateSubjectMutationVariables = Exact<{
  createSubject: CreateSubjectInput;
}>;


export type CreateSubjectMutation = { __typename?: 'Mutation', createSubject: { __typename?: 'Subject', id: number, name: string } };

export type EditSubjectMutationVariables = Exact<{
  editSubjectId: Scalars['Int']['input'];
  editSubject: UpdateSubjectInput;
}>;


export type EditSubjectMutation = { __typename?: 'Mutation', editSubject: { __typename?: 'Subject', id: number } };

export type DeleteSubjectMutationVariables = Exact<{
  deleteSubjectId: Scalars['Int']['input'];
}>;


export type DeleteSubjectMutation = { __typename?: 'Mutation', deleteSubject: { __typename?: 'Subject', id: number } };

export type GetTeacherQueryVariables = Exact<{
  getTeacherId: Scalars['Int']['input'];
}>;


export type GetTeacherQuery = { __typename?: 'Query', GetTeacher: { __typename?: 'Teacher', teacher_id: number, user: { __typename?: 'User', createdAt: any, email: string, first_name: string, last_name: string, updatedAt: any, user_id: number, user_name: string } } };

export type GetTeachersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeachersQuery = { __typename?: 'Query', GetTeachers: Array<{ __typename?: 'Teacher', teacher_id: number, user: { __typename?: 'User', createdAt: any, email: string, first_name: string, last_name: string, updatedAt: any, user_id: number, user_name: string } }> };

export type CreateTeacherMutationVariables = Exact<{
  createTeacher: CreateTeacher;
}>;


export type CreateTeacherMutation = { __typename?: 'Mutation', CreateTeacher: { __typename?: 'Teacher', teacher_id: number } };

export type CreateTopicMutationVariables = Exact<{
  createTopic: CreateTopic;
}>;


export type CreateTopicMutation = { __typename?: 'Mutation', CreateTopic: { __typename?: 'Topic', content: string } };

export type GetTopicsByAuthorQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTopicsByAuthorQuery = { __typename?: 'Query', getTopicsByAuthor: Array<{ __typename?: 'Topic', content: string }> };

export type EditTopicMutationVariables = Exact<{
  editTopic: UpdateTopic;
  topicId: Scalars['Int']['input'];
}>;


export type EditTopicMutation = { __typename?: 'Mutation', EditTopic: { __typename?: 'Topic', content: string } };


export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const GetClassroomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClassroom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getClassrommId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClassroom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getClassrommId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}},{"kind":"Field","name":{"kind":"Name","value":"classroom_name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClassroomQuery, GetClassroomQueryVariables>;
export const GetClassroomsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClassrooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClassrooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}},{"kind":"Field","name":{"kind":"Name","value":"classroom_name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClassroomsQuery, GetClassroomsQueryVariables>;
export const CreatClassroomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatClassroom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"classroom"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teachersId"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentsId"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creatClassroom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"classroom"},"value":{"kind":"Variable","name":{"kind":"Name","value":"classroom"}}},{"kind":"Argument","name":{"kind":"Name","value":"teachersId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teachersId"}}},{"kind":"Argument","name":{"kind":"Name","value":"studentsId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentsId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}}]}}]}}]} as unknown as DocumentNode<CreatClassroomMutation, CreatClassroomMutationVariables>;
export const DeleteClassroomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteClassroom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"classroomId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClassroom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"classroomId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"classroomId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}}]}}]}}]} as unknown as DocumentNode<DeleteClassroomMutation, DeleteClassroomMutationVariables>;
export const GetStudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getStudentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStudent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getStudentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}},{"kind":"Field","name":{"kind":"Name","value":"classroom_name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"student_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetStudentQuery, GetStudentQueryVariables>;
export const GetStudentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetStudents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student_id"}},{"kind":"Field","name":{"kind":"Name","value":"classroom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}},{"kind":"Field","name":{"kind":"Name","value":"classroom_name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<GetStudentsQuery, GetStudentsQueryVariables>;
export const CreateStudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStudent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createStudent"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStudent"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateStudent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createStudent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createStudent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student_id"}}]}}]}}]} as unknown as DocumentNode<CreateStudentMutation, CreateStudentMutationVariables>;
export const DeleteStudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteStudent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteStudent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student_id"}}]}}]}}]} as unknown as DocumentNode<DeleteStudentMutation, DeleteStudentMutationVariables>;
export const GetSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getSubjectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getSubjectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetSubjectQuery, GetSubjectQueryVariables>;
export const GetSubjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSubjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetSubjectsQuery, GetSubjectsQueryVariables>;
export const CreateSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSubject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSubjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSubject"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSubject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateSubjectMutation, CreateSubjectMutationVariables>;
export const EditSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editSubjectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editSubject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSubjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editSubjectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"editSubject"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editSubject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<EditSubjectMutation, EditSubjectMutationVariables>;
export const DeleteSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSubjectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSubjectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteSubjectMutation, DeleteSubjectMutationVariables>;
export const GetTeacherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeacher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getTeacherId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetTeacher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getTeacherId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeacherQuery, GetTeacherQueryVariables>;
export const GetTeachersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetTeachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeachersQuery, GetTeachersQueryVariables>;
export const CreateTeacherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeacher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTeacher"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTeacher"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateTeacher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTeacher"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTeacher"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher_id"}}]}}]}}]} as unknown as DocumentNode<CreateTeacherMutation, CreateTeacherMutationVariables>;
export const CreateTopicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTopic"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTopic"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTopic"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateTopic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTopic"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTopic"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<CreateTopicMutation, CreateTopicMutationVariables>;
export const GetTopicsByAuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTopicsByAuthor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTopicsByAuthor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetTopicsByAuthorQuery, GetTopicsByAuthorQueryVariables>;
export const EditTopicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditTopic"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editTopic"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTopic"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topicId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditTopic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editTopic"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editTopic"}}},{"kind":"Argument","name":{"kind":"Name","value":"topicId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topicId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<EditTopicMutation, EditTopicMutationVariables>;