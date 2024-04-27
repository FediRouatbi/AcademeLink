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
    "\n  query getCurrentUser {\n    getCurrentUser {\n      createdAt\n      first_name\n      last_name\n      updatedAt\n      role\n      user_id\n      user_name\n    }\n  }\n": types.GetCurrentUserDocument,
    "\n  mutation Login($data: LoginInput!) {\n    login(data: $data) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.LoginDocument,
    "\n  query GetClassroom($getClassrommId: Int!) {\n    getClassroom(id: $getClassrommId) {\n      classroom_id\n      classroom_name\n      createdAt\n      student {\n        student_id\n        user {\n          createdAt\n          email\n          first_name\n          last_name\n          updatedAt\n          user_id\n          user_name\n        }\n      }\n    }\n  }\n": types.GetClassroomDocument,
    "\n  query GetClassrooms {\n    getClassrooms {\n      classroom_id\n      classroom_name\n      createdAt\n      student {\n        student_id\n      }\n      teacher {\n        teacher_id\n      }\n    }\n  }\n": types.GetClassroomsDocument,
    "\n  mutation CreatClassroom(\n    $classroom: String!\n    $teachersId: [Int!]!\n    $studentsId: [Int!]!\n  ) {\n    creatClassroom(\n      classroom: $classroom\n      teachersId: $teachersId\n      studentsId: $studentsId\n    ) {\n      classroom_id\n    }\n  }\n": types.CreatClassroomDocument,
    "\n  mutation DeleteClassroom($classroomId: Float!) {\n    deleteClassroom(classroomId: $classroomId) {\n      classroom_id\n    }\n  }\n": types.DeleteClassroomDocument,
    "\n  query GetStudent($getStudentId: Int!) {\n    getStudent(id: $getStudentId) {\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      student_id\n      user {\n        createdAt\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n": types.GetStudentDocument,
    "\n  query GetStudents {\n    GetStudents {\n      student_id\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      user {\n        user_id\n        createdAt\n        first_name\n        last_name\n        updatedAt\n        user_name\n        email\n      }\n    }\n  }\n": types.GetStudentsDocument,
    "\n  mutation CreateStudent($createStudent: CreateStudent!) {\n    CreateStudent(createStudent: $createStudent) {\n      student_id\n    }\n  }\n": types.CreateStudentDocument,
    "\n  mutation DeleteStudent($studentId: Float!) {\n    deleteStudent(studentId: $studentId) {\n      student_id\n    }\n  }\n": types.DeleteStudentDocument,
    "\n  query GetSubject($getSubjectId: Int!) {\n    getSubject(id: $getSubjectId) {\n      id\n      name\n    }\n  }\n": types.GetSubjectDocument,
    "\n  query GetSubjects {\n    getSubjects {\n      id\n      name\n    }\n  }\n": types.GetSubjectsDocument,
    "\n  mutation CreateSubject($createSubject: CreateSubjectInput!) {\n    createSubject(createSubject: $createSubject) {\n      id\n      name\n    }\n  }\n": types.CreateSubjectDocument,
    "\n  mutation DeleteSubject($deleteSubjectId: Int!) {\n    deleteSubject(id: $deleteSubjectId) {\n      id\n    }\n  }\n": types.DeleteSubjectDocument,
    "\n  query GetTeacher($getTeacherId: Int!) {\n    GetTeacher(id: $getTeacherId) {\n      teacher_id\n      user {\n        createdAt\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n": types.GetTeacherDocument,
    "\n  query GetTeachers {\n    GetTeachers {\n      teacher_id\n      user {\n        createdAt\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n": types.GetTeachersDocument,
    "\n  mutation CreateTeacher($createTeacher: CreateTeacher!) {\n    CreateTeacher(createTeacher: $createTeacher) {\n      teacher_id\n    }\n  }\n": types.CreateTeacherDocument,
    "\n  mutation CreateTopic($createTopic: CreateTopic!) {\n    CreateTopic(createTopic: $createTopic) {\n      content\n    }\n  }\n": types.CreateTopicDocument,
    "\n  query getTopicsByAuthor {\n    getTopicsByAuthor {\n      content\n    }\n  }\n": types.GetTopicsByAuthorDocument,
    "\n  mutation EditTopic($editTopic: UpdateTopic!, $topicId: Int!) {\n    EditTopic(editTopic: $editTopic, topicId: $topicId) {\n      content\n    }\n  }\n": types.EditTopicDocument,
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
export function graphql(source: "\n  query getCurrentUser {\n    getCurrentUser {\n      createdAt\n      first_name\n      last_name\n      updatedAt\n      role\n      user_id\n      user_name\n    }\n  }\n"): (typeof documents)["\n  query getCurrentUser {\n    getCurrentUser {\n      createdAt\n      first_name\n      last_name\n      updatedAt\n      role\n      user_id\n      user_name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($data: LoginInput!) {\n    login(data: $data) {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation Login($data: LoginInput!) {\n    login(data: $data) {\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetClassroom($getClassrommId: Int!) {\n    getClassroom(id: $getClassrommId) {\n      classroom_id\n      classroom_name\n      createdAt\n      student {\n        student_id\n        user {\n          createdAt\n          email\n          first_name\n          last_name\n          updatedAt\n          user_id\n          user_name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetClassroom($getClassrommId: Int!) {\n    getClassroom(id: $getClassrommId) {\n      classroom_id\n      classroom_name\n      createdAt\n      student {\n        student_id\n        user {\n          createdAt\n          email\n          first_name\n          last_name\n          updatedAt\n          user_id\n          user_name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetClassrooms {\n    getClassrooms {\n      classroom_id\n      classroom_name\n      createdAt\n      student {\n        student_id\n      }\n      teacher {\n        teacher_id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetClassrooms {\n    getClassrooms {\n      classroom_id\n      classroom_name\n      createdAt\n      student {\n        student_id\n      }\n      teacher {\n        teacher_id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatClassroom(\n    $classroom: String!\n    $teachersId: [Int!]!\n    $studentsId: [Int!]!\n  ) {\n    creatClassroom(\n      classroom: $classroom\n      teachersId: $teachersId\n      studentsId: $studentsId\n    ) {\n      classroom_id\n    }\n  }\n"): (typeof documents)["\n  mutation CreatClassroom(\n    $classroom: String!\n    $teachersId: [Int!]!\n    $studentsId: [Int!]!\n  ) {\n    creatClassroom(\n      classroom: $classroom\n      teachersId: $teachersId\n      studentsId: $studentsId\n    ) {\n      classroom_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteClassroom($classroomId: Float!) {\n    deleteClassroom(classroomId: $classroomId) {\n      classroom_id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteClassroom($classroomId: Float!) {\n    deleteClassroom(classroomId: $classroomId) {\n      classroom_id\n    }\n  }\n"];
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
export function graphql(source: "\n  mutation CreateStudent($createStudent: CreateStudent!) {\n    CreateStudent(createStudent: $createStudent) {\n      student_id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateStudent($createStudent: CreateStudent!) {\n    CreateStudent(createStudent: $createStudent) {\n      student_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteStudent($studentId: Float!) {\n    deleteStudent(studentId: $studentId) {\n      student_id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteStudent($studentId: Float!) {\n    deleteStudent(studentId: $studentId) {\n      student_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSubject($getSubjectId: Int!) {\n    getSubject(id: $getSubjectId) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetSubject($getSubjectId: Int!) {\n    getSubject(id: $getSubjectId) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSubjects {\n    getSubjects {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetSubjects {\n    getSubjects {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSubject($createSubject: CreateSubjectInput!) {\n    createSubject(createSubject: $createSubject) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSubject($createSubject: CreateSubjectInput!) {\n    createSubject(createSubject: $createSubject) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteSubject($deleteSubjectId: Int!) {\n    deleteSubject(id: $deleteSubjectId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteSubject($deleteSubjectId: Int!) {\n    deleteSubject(id: $deleteSubjectId) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTeacher($getTeacherId: Int!) {\n    GetTeacher(id: $getTeacherId) {\n      teacher_id\n      user {\n        createdAt\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTeacher($getTeacherId: Int!) {\n    GetTeacher(id: $getTeacherId) {\n      teacher_id\n      user {\n        createdAt\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTeachers {\n    GetTeachers {\n      teacher_id\n      user {\n        createdAt\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTeachers {\n    GetTeachers {\n      teacher_id\n      user {\n        createdAt\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTeacher($createTeacher: CreateTeacher!) {\n    CreateTeacher(createTeacher: $createTeacher) {\n      teacher_id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTeacher($createTeacher: CreateTeacher!) {\n    CreateTeacher(createTeacher: $createTeacher) {\n      teacher_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTopic($createTopic: CreateTopic!) {\n    CreateTopic(createTopic: $createTopic) {\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTopic($createTopic: CreateTopic!) {\n    CreateTopic(createTopic: $createTopic) {\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTopicsByAuthor {\n    getTopicsByAuthor {\n      content\n    }\n  }\n"): (typeof documents)["\n  query getTopicsByAuthor {\n    getTopicsByAuthor {\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditTopic($editTopic: UpdateTopic!, $topicId: Int!) {\n    EditTopic(editTopic: $editTopic, topicId: $topicId) {\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation EditTopic($editTopic: UpdateTopic!, $topicId: Int!) {\n    EditTopic(editTopic: $editTopic, topicId: $topicId) {\n      content\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;