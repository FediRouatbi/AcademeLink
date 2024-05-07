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
  classroom_id: Scalars['Float']['output'];
  classroom_name: Scalars['String']['output'];
  course?: Maybe<Array<Course>>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
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
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Float']['output'];
  subject: Subject;
  teacher: Teacher;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateClassroom = {
  classroom_name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  studentsIds?: InputMaybe<Array<StudentsIds>>;
  teachersIds?: InputMaybe<Array<TeachersIds>>;
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
};


export type MutationEditTeacherArgs = {
  editTeacher: UpdateTeacher;
};


export type MutationEditTopicArgs = {
  editTopic: UpdateTopic;
  topicId: Scalars['Int']['input'];
};


export type MutationCreatClassroomArgs = {
  createClassromm: CreateClassroom;
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
  getTopicsByCourseId: Array<Topic>;
};


export type QueryGetStudentsArgs = {
  hasClassroom?: InputMaybe<Scalars['Boolean']['input']>;
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


export type QueryGetTopicsByAuthorArgs = {
  authorID: Scalars['Int']['input'];
};


export type QueryGetTopicsByCourseIdArgs = {
  courseID: Scalars['Int']['input'];
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
  user?: Maybe<User>;
};

export type StudentsIds = {
  student_id: Scalars['Float']['input'];
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
  course: Array<TeacherCourses>;
  teacher_id: Scalars['Int']['output'];
  user: User;
};

export type TeacherCourses = {
  __typename?: 'TeacherCourses';
  classroom_id: Scalars['Float']['output'];
  subject_id: Scalars['Float']['output'];
};

export type TeachersIds = {
  subject_id: Scalars['Float']['input'];
  teacher_id: Scalars['Float']['input'];
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
  classroom_id: Scalars['Float']['input'];
  classroom_name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  studentsIds?: InputMaybe<Array<StudentsIds>>;
  teachersIds?: InputMaybe<Array<TeachersIds>>;
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
  student_id: Scalars['Float']['input'];
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
  teacher_id: Scalars['Float']['input'];
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


export type GetClassroomQuery = { __typename?: 'Query', getClassroom: { __typename?: 'Classroom', classroom_id: number, classroom_name: string, description: string, createdAt: any, student?: Array<{ __typename?: 'Student', student_id: number, user?: { __typename?: 'User', createdAt: any, email: string, first_name: string, last_name: string, updatedAt: any, user_id: number, user_name: string } | null }> | null, course?: Array<{ __typename?: 'Course', id: number, createdAt?: any | null, updatedAt?: any | null, subject: { __typename?: 'Subject', name: string, id: number }, teacher: { __typename?: 'Teacher', teacher_id: number, user: { __typename?: 'User', createdAt: any, email: string, first_name: string, last_name: string, updatedAt: any, user_id: number, user_name: string } } }> | null } };

export type GetClassroomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClassroomsQuery = { __typename?: 'Query', getClassrooms: Array<{ __typename?: 'Classroom', classroom_id: number, classroom_name: string, description: string, createdAt: any, student?: Array<{ __typename?: 'Student', student_id: number, user?: { __typename?: 'User', user_name: string } | null }> | null, course?: Array<{ __typename?: 'Course', subject: { __typename?: 'Subject', name: string, id: number }, teacher: { __typename?: 'Teacher', teacher_id: number, user: { __typename?: 'User', createdAt: any, email: string, first_name: string, last_name: string, updatedAt: any, user_id: number, user_name: string } } }> | null }> };

export type MutationMutationVariables = Exact<{
  createClassromm: CreateClassroom;
}>;


export type MutationMutation = { __typename?: 'Mutation', creatClassroom: { __typename?: 'Classroom', classroom_id: number } };

export type EditClassrommMutationVariables = Exact<{
  editClassromm: UpdateClassroom;
}>;


export type EditClassrommMutation = { __typename?: 'Mutation', editClassromm: { __typename?: 'Classroom', classroom_id: number } };

export type DeleteClassroomMutationVariables = Exact<{
  classroomId: Scalars['Float']['input'];
}>;


export type DeleteClassroomMutation = { __typename?: 'Mutation', deleteClassroom: { __typename?: 'Classroom', classroom_id: number } };

export type GetCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoursesQuery = { __typename?: 'Query', getCourses: Array<{ __typename?: 'Course', createdAt?: any | null, updatedAt?: any | null, classroom: { __typename?: 'Classroom', classroom_id: number, classroom_name: string, createdAt: any, student?: Array<{ __typename?: 'Student', student_id: number }> | null }, subject: { __typename?: 'Subject', id: number, name: string }, teacher: { __typename?: 'Teacher', teacher_id: number, user: { __typename?: 'User', createdAt: any, email: string, user_id: number, updatedAt: any, user_name: string, last_name: string, first_name: string } } }> };

export type GetCourseQueryVariables = Exact<{
  getCourseId: Scalars['Int']['input'];
}>;


export type GetCourseQuery = { __typename?: 'Query', getCourse: { __typename?: 'Course', createdAt?: any | null, updatedAt?: any | null, classroom: { __typename?: 'Classroom', classroom_id: number, classroom_name: string, createdAt: any, student?: Array<{ __typename?: 'Student', student_id: number }> | null }, subject: { __typename?: 'Subject', id: number, name: string }, teacher: { __typename?: 'Teacher', teacher_id: number, user: { __typename?: 'User', createdAt: any, email: string, first_name: string, last_name: string, updatedAt: any, user_id: number, user_name: string } } } };

export type CreateCourseMutationVariables = Exact<{
  createCourseInput: CreateCourseInput;
}>;


export type CreateCourseMutation = { __typename?: 'Mutation', createCourse: { __typename?: 'Course', classroom: { __typename?: 'Classroom', classroom_id: number } } };

export type EditCourseMutationVariables = Exact<{
  updateCourseInput: UpdateCourseInput;
}>;


export type EditCourseMutation = { __typename?: 'Mutation', editCourse: { __typename?: 'Course', classroom: { __typename?: 'Classroom', classroom_id: number } } };

export type DeleteCourseMutationVariables = Exact<{
  deleteCourseId: Scalars['Int']['input'];
}>;


export type DeleteCourseMutation = { __typename?: 'Mutation', deleteCourse: { __typename?: 'Course', classroom: { __typename?: 'Classroom', classroom_id: number } } };

export type GetStudentQueryVariables = Exact<{
  getStudentId: Scalars['Int']['input'];
}>;


export type GetStudentQuery = { __typename?: 'Query', getStudent: { __typename?: 'Student', student_id: number, classroom?: { __typename?: 'ClassroomTest', classroom_id: number, classroom_name: string, createdAt: any } | null, user?: { __typename?: 'User', createdAt: any, email: string, first_name: string, last_name: string, updatedAt: any, user_id: number, user_name: string } | null } };

export type GetStudentsQueryVariables = Exact<{
  hasClassroom?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetStudentsQuery = { __typename?: 'Query', GetStudents: Array<{ __typename?: 'Student', student_id: number, classroom?: { __typename?: 'ClassroomTest', classroom_id: number, classroom_name: string, createdAt: any } | null, user?: { __typename?: 'User', user_id: number, createdAt: any, first_name: string, last_name: string, updatedAt: any, user_name: string, email: string } | null }> };

export type CreateStudentMutationVariables = Exact<{
  createStudent: CreateStudent;
}>;


export type CreateStudentMutation = { __typename?: 'Mutation', CreateStudent: { __typename?: 'Student', student_id: number } };

export type EditStudentMutationVariables = Exact<{
  editStudent: UpdateStudent;
}>;


export type EditStudentMutation = { __typename?: 'Mutation', EditStudent: { __typename?: 'Student', student_id: number } };

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


export type GetTeachersQuery = { __typename?: 'Query', GetTeachers: Array<{ __typename?: 'Teacher', teacher_id: number, user: { __typename?: 'User', createdAt: any, email: string, first_name: string, last_name: string, updatedAt: any, user_id: number, user_name: string }, course: Array<{ __typename?: 'TeacherCourses', classroom_id: number, subject_id: number }> }> };

export type CreateTeacherMutationVariables = Exact<{
  createTeacher: CreateTeacher;
}>;


export type CreateTeacherMutation = { __typename?: 'Mutation', CreateTeacher: { __typename?: 'Teacher', teacher_id: number } };

export type EditTeacherMutationVariables = Exact<{
  editTeacher: UpdateTeacher;
}>;


export type EditTeacherMutation = { __typename?: 'Mutation', EditTeacher: { __typename?: 'Teacher', teacher_id: number } };

export type DeleteTeacherMutationVariables = Exact<{
  teacherId: Scalars['Float']['input'];
}>;


export type DeleteTeacherMutation = { __typename?: 'Mutation', deleteTeacher: { __typename?: 'Teacher', teacher_id: number } };

export type CreateTopicMutationVariables = Exact<{
  createTopic: CreateTopic;
}>;


export type CreateTopicMutation = { __typename?: 'Mutation', CreateTopic: { __typename?: 'Topic', content: string } };

export type GetTopicsByAuthorQueryVariables = Exact<{
  authorId: Scalars['Int']['input'];
}>;


export type GetTopicsByAuthorQuery = { __typename?: 'Query', getTopicsByAuthor: Array<{ __typename?: 'Topic', content: string }> };

export type GetTopicsByCourseIdQueryVariables = Exact<{
  courseId: Scalars['Int']['input'];
}>;


export type GetTopicsByCourseIdQuery = { __typename?: 'Query', getTopicsByCourseId: Array<{ __typename?: 'Topic', content: string }> };

export type EditTopicMutationVariables = Exact<{
  editTopic: UpdateTopic;
  topicId: Scalars['Int']['input'];
}>;


export type EditTopicMutation = { __typename?: 'Mutation', EditTopic: { __typename?: 'Topic', content: string } };


export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const GetClassroomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClassroom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getClassrommId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClassroom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getClassrommId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}},{"kind":"Field","name":{"kind":"Name","value":"classroom_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetClassroomQuery, GetClassroomQueryVariables>;
export const GetClassroomsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClassrooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClassrooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}},{"kind":"Field","name":{"kind":"Name","value":"classroom_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClassroomsQuery, GetClassroomsQueryVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createClassromm"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClassroom"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creatClassroom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createClassromm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createClassromm"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const EditClassrommDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditClassromm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editClassromm"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClassroom"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editClassromm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editClassromm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editClassromm"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}}]}}]}}]} as unknown as DocumentNode<EditClassrommMutation, EditClassrommMutationVariables>;
export const DeleteClassroomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteClassroom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"classroomId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClassroom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"classroomId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"classroomId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}}]}}]}}]} as unknown as DocumentNode<DeleteClassroomMutation, DeleteClassroomMutationVariables>;
export const GetCoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCourses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCourses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"classroom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}},{"kind":"Field","name":{"kind":"Name","value":"classroom_name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCoursesQuery, GetCoursesQueryVariables>;
export const GetCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getCourseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getCourseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"classroom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}},{"kind":"Field","name":{"kind":"Name","value":"classroom_name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCourseQuery, GetCourseQueryVariables>;
export const CreateCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createCourseInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCourseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCourseInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createCourseInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCourseMutation, CreateCourseMutationVariables>;
export const EditCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCourseInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCourseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCourseInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCourseInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}}]}}]}}]}}]} as unknown as DocumentNode<EditCourseMutation, EditCourseMutationVariables>;
export const DeleteCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteCourseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteCourseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCourseMutation, DeleteCourseMutationVariables>;
export const GetStudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getStudentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStudent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getStudentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}},{"kind":"Field","name":{"kind":"Name","value":"classroom_name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"student_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetStudentQuery, GetStudentQueryVariables>;
export const GetStudentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hasClassroom"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetStudents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hasClassroom"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hasClassroom"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student_id"}},{"kind":"Field","name":{"kind":"Name","value":"classroom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}},{"kind":"Field","name":{"kind":"Name","value":"classroom_name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<GetStudentsQuery, GetStudentsQueryVariables>;
export const CreateStudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStudent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createStudent"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStudent"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateStudent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createStudent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createStudent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student_id"}}]}}]}}]} as unknown as DocumentNode<CreateStudentMutation, CreateStudentMutationVariables>;
export const EditStudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditStudent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editStudent"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateStudent"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditStudent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editStudent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editStudent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student_id"}}]}}]}}]} as unknown as DocumentNode<EditStudentMutation, EditStudentMutationVariables>;
export const DeleteStudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteStudent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteStudent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student_id"}}]}}]}}]} as unknown as DocumentNode<DeleteStudentMutation, DeleteStudentMutationVariables>;
export const GetSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getSubjectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getSubjectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetSubjectQuery, GetSubjectQueryVariables>;
export const GetSubjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSubjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetSubjectsQuery, GetSubjectsQueryVariables>;
export const CreateSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSubject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSubjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSubject"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSubject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateSubjectMutation, CreateSubjectMutationVariables>;
export const EditSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editSubjectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editSubject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSubjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editSubjectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"editSubject"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editSubject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<EditSubjectMutation, EditSubjectMutationVariables>;
export const DeleteSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSubjectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSubjectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteSubjectMutation, DeleteSubjectMutationVariables>;
export const GetTeacherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeacher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getTeacherId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetTeacher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getTeacherId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeacherQuery, GetTeacherQueryVariables>;
export const GetTeachersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetTeachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classroom_id"}},{"kind":"Field","name":{"kind":"Name","value":"subject_id"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeachersQuery, GetTeachersQueryVariables>;
export const CreateTeacherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeacher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTeacher"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTeacher"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateTeacher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTeacher"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTeacher"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher_id"}}]}}]}}]} as unknown as DocumentNode<CreateTeacherMutation, CreateTeacherMutationVariables>;
export const EditTeacherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditTeacher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editTeacher"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTeacher"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditTeacher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editTeacher"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editTeacher"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher_id"}}]}}]}}]} as unknown as DocumentNode<EditTeacherMutation, EditTeacherMutationVariables>;
export const DeleteTeacherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTeacher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teacherId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTeacher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teacherId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teacherId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher_id"}}]}}]}}]} as unknown as DocumentNode<DeleteTeacherMutation, DeleteTeacherMutationVariables>;
export const CreateTopicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTopic"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTopic"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTopic"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateTopic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTopic"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTopic"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<CreateTopicMutation, CreateTopicMutationVariables>;
export const GetTopicsByAuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopicsByAuthor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTopicsByAuthor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authorID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetTopicsByAuthorQuery, GetTopicsByAuthorQueryVariables>;
export const GetTopicsByCourseIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopicsByCourseId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTopicsByCourseId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"courseID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetTopicsByCourseIdQuery, GetTopicsByCourseIdQueryVariables>;
export const EditTopicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditTopic"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editTopic"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTopic"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topicId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditTopic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editTopic"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editTopic"}}},{"kind":"Argument","name":{"kind":"Name","value":"topicId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topicId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<EditTopicMutation, EditTopicMutationVariables>;