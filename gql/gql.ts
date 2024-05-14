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
    "\n  query GetClassroom($getClassrommId: Int!) {\n    getClassroom(id: $getClassrommId) {\n      classroom_id\n      classroom_name\n      description\n      createdAt\n      student {\n        student_id\n        user {\n          image_url\n          description\n          createdAt\n          email\n          first_name\n          last_name\n          updatedAt\n          user_id\n          user_name\n        }\n      }\n      course {\n        id\n        createdAt\n        subject {\n          name\n          id\n        }\n        teacher {\n          teacher_id\n          user {\n            image_url\n            description\n            createdAt\n            email\n            first_name\n            last_name\n            updatedAt\n            user_id\n            user_name\n          }\n        }\n        updatedAt\n      }\n    }\n  }\n": types.GetClassroomDocument,
    "\n  query GetClassrooms($search: String) {\n    getClassrooms(search: $search) {\n      classroom_id\n      classroom_name\n      description\n      createdAt\n      student {\n        student_id\n        user {\n          user_name\n        }\n      }\n      course {\n        subject {\n          name\n          id\n        }\n        teacher {\n          teacher_id\n          user {\n            createdAt\n            image_url\n            description\n            email\n            first_name\n            last_name\n            updatedAt\n            user_id\n            user_name\n          }\n        }\n      }\n    }\n  }\n": types.GetClassroomsDocument,
    "\n  mutation Mutation($createClassromm: CreateClassroom!) {\n    creatClassroom(createClassromm: $createClassromm) {\n      classroom_id\n    }\n  }\n": types.MutationDocument,
    "\n  mutation EditClassromm($editClassromm: UpdateClassroom!) {\n    editClassromm(editClassromm: $editClassromm) {\n      classroom_id\n    }\n  }\n": types.EditClassrommDocument,
    "\n  mutation DeleteClassroom($classroomId: Float!) {\n    deleteClassroom(classroomId: $classroomId) {\n      classroom_id\n    }\n  }\n": types.DeleteClassroomDocument,
    "\n  query GetCourses($search: String) {\n    getCourses(search: $search) {\n      id\n      createdAt\n      updatedAt\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n        student {\n          student_id\n        }\n      }\n      subject {\n        id\n        name\n      }\n      teacher {\n        teacher_id\n        user {\n          createdAt\n          email\n          image_url\n          description\n          user_id\n          updatedAt\n          user_name\n          last_name\n          first_name\n        }\n      }\n    }\n  }\n": types.GetCoursesDocument,
    "\n  query getCourse($getCourseId: Int!) {\n    getCourse(id: $getCourseId) {\n      createdAt\n      updatedAt\n      topic {\n        topic_id\n        content\n      }\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n        student {\n          student_id\n        }\n      }\n      subject {\n        id\n        name\n      }\n      teacher {\n        teacher_id\n        user {\n          createdAt\n          email\n          image_url\n          description\n          first_name\n          last_name\n          updatedAt\n          user_id\n          user_name\n        }\n      }\n    }\n  }\n": types.GetCourseDocument,
    "\n  mutation CreateCourse($createCourseInput: CreateCourseInput!) {\n    createCourse(createCourseInput: $createCourseInput) {\n      classroom {\n        classroom_id\n      }\n    }\n  }\n": types.CreateCourseDocument,
    "\n  mutation EditCourse($updateCourseInput: UpdateCourseInput!) {\n    editCourse(updateCourseInput: $updateCourseInput) {\n      classroom {\n        classroom_id\n      }\n    }\n  }\n": types.EditCourseDocument,
    "\n  mutation DeleteCourse($deleteCourseId: Int!) {\n    deleteCourse(id: $deleteCourseId) {\n      classroom {\n        classroom_id\n      }\n    }\n  }\n": types.DeleteCourseDocument,
    "\n  query GetStudent($getStudentId: Int!) {\n    getStudent(id: $getStudentId) {\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      student_id\n      user {\n        createdAt\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n": types.GetStudentDocument,
    "\n  query GetStudents($search: String, $hasClassroom: Boolean) {\n    GetStudents(search: $search, hasClassroom: $hasClassroom) {\n      student_id\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      user {\n        user_id\n        createdAt\n        first_name\n        last_name\n        updatedAt\n        user_name\n        email\n      }\n    }\n  }\n": types.GetStudentsDocument,
    "\n  mutation CreateStudent($createStudent: CreateStudent!) {\n    CreateStudent(createStudent: $createStudent) {\n      student_id\n    }\n  }\n": types.CreateStudentDocument,
    "\n  mutation EditStudent($editStudent: UpdateStudent!) {\n    EditStudent(editStudent: $editStudent) {\n      student_id\n    }\n  }\n": types.EditStudentDocument,
    "\n  mutation DeleteStudent($studentId: Float!) {\n    deleteStudent(studentId: $studentId) {\n      student_id\n    }\n  }\n": types.DeleteStudentDocument,
    "\n  query GetSubject($getSubjectId: Int!) {\n    getSubject(id: $getSubjectId) {\n      id\n      name\n    }\n  }\n": types.GetSubjectDocument,
    "\n  query GetSubjects($search: String) {\n    getSubjects(search: $search) {\n      id\n      name\n    }\n  }\n": types.GetSubjectsDocument,
    "\n  mutation CreateSubject($createSubject: CreateSubjectInput!) {\n    createSubject(createSubject: $createSubject) {\n      id\n      name\n    }\n  }\n": types.CreateSubjectDocument,
    "\n  mutation editSubject(\n    $editSubjectId: Int!\n    $editSubject: UpdateSubjectInput!\n  ) {\n    editSubject(id: $editSubjectId, editSubject: $editSubject) {\n      id\n    }\n  }\n": types.EditSubjectDocument,
    "\n  mutation DeleteSubject($deleteSubjectId: Int!) {\n    deleteSubject(id: $deleteSubjectId) {\n      id\n    }\n  }\n": types.DeleteSubjectDocument,
    "\n  query GetTeacher($getTeacherId: Int!) {\n    GetTeacher(id: $getTeacherId) {\n      teacher_id\n      user {\n        createdAt\n        email\n        image_url\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n": types.GetTeacherDocument,
    "\n  query GetTeachers($search: String) {\n    GetTeachers(search: $search) {\n      teacher_id\n      user {\n        createdAt\n        email\n        image_url\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n      course {\n        classroom_id\n        subject_id\n      }\n    }\n  }\n": types.GetTeachersDocument,
    "\n  mutation CreateTeacher($createTeacher: CreateTeacher!) {\n    CreateTeacher(createTeacher: $createTeacher) {\n      teacher_id\n    }\n  }\n": types.CreateTeacherDocument,
    "\n  mutation EditTeacher($editTeacher: UpdateTeacher!) {\n    EditTeacher(editTeacher: $editTeacher) {\n      teacher_id\n    }\n  }\n": types.EditTeacherDocument,
    "\n  mutation DeleteTeacher($teacherId: Float!) {\n    deleteTeacher(teacherId: $teacherId) {\n      teacher_id\n    }\n  }\n": types.DeleteTeacherDocument,
    "\n  mutation CreateTopic($createTopic: CreateTopic!, $courseId: CourseId) {\n    CreateTopic(createTopic: $createTopic, courseId: $courseId) {\n      content\n    }\n  }\n": types.CreateTopicDocument,
    "\n  query GetTopicsByAuthor($authorId: Int!) {\n    getTopicsByAuthor(authorID: $authorId) {\n      topic_id\n      content\n    }\n  }\n": types.GetTopicsByAuthorDocument,
    "\n  query GetTopicsByCourseId($courseId: Int!) {\n    getTopicsByCourseId(courseID: $courseId) {\n      user_id\n      topic_id\n      content\n    }\n  }\n": types.GetTopicsByCourseIdDocument,
    "\n  mutation EditTopic($editTopic: UpdateTopic!, $topicId: Int!) {\n    EditTopic(editTopic: $editTopic, topicId: $topicId) {\n      content\n    }\n  }\n": types.EditTopicDocument,
    "\n  mutation deleteTopic($topicId: Float!) {\n    deleteTopic(topicId: $topicId) {\n      content\n    }\n  }\n": types.DeleteTopicDocument,
    "\n  query GetCurrentUser {\n    getCurrentUser {\n      email\n      createdAt\n      image_url\n      description\n      first_name\n      last_name\n      role\n      updatedAt\n      user_id\n      user_name\n    }\n  }\n": types.GetCurrentUserDocument,
    "\n  mutation EditUser($data: UpdateUser!) {\n    editUser(data: $data) {\n      user_id\n    }\n  }\n": types.EditUserDocument,
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
export function graphql(source: "\n  query GetClassroom($getClassrommId: Int!) {\n    getClassroom(id: $getClassrommId) {\n      classroom_id\n      classroom_name\n      description\n      createdAt\n      student {\n        student_id\n        user {\n          image_url\n          description\n          createdAt\n          email\n          first_name\n          last_name\n          updatedAt\n          user_id\n          user_name\n        }\n      }\n      course {\n        id\n        createdAt\n        subject {\n          name\n          id\n        }\n        teacher {\n          teacher_id\n          user {\n            image_url\n            description\n            createdAt\n            email\n            first_name\n            last_name\n            updatedAt\n            user_id\n            user_name\n          }\n        }\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetClassroom($getClassrommId: Int!) {\n    getClassroom(id: $getClassrommId) {\n      classroom_id\n      classroom_name\n      description\n      createdAt\n      student {\n        student_id\n        user {\n          image_url\n          description\n          createdAt\n          email\n          first_name\n          last_name\n          updatedAt\n          user_id\n          user_name\n        }\n      }\n      course {\n        id\n        createdAt\n        subject {\n          name\n          id\n        }\n        teacher {\n          teacher_id\n          user {\n            image_url\n            description\n            createdAt\n            email\n            first_name\n            last_name\n            updatedAt\n            user_id\n            user_name\n          }\n        }\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetClassrooms($search: String) {\n    getClassrooms(search: $search) {\n      classroom_id\n      classroom_name\n      description\n      createdAt\n      student {\n        student_id\n        user {\n          user_name\n        }\n      }\n      course {\n        subject {\n          name\n          id\n        }\n        teacher {\n          teacher_id\n          user {\n            createdAt\n            image_url\n            description\n            email\n            first_name\n            last_name\n            updatedAt\n            user_id\n            user_name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetClassrooms($search: String) {\n    getClassrooms(search: $search) {\n      classroom_id\n      classroom_name\n      description\n      createdAt\n      student {\n        student_id\n        user {\n          user_name\n        }\n      }\n      course {\n        subject {\n          name\n          id\n        }\n        teacher {\n          teacher_id\n          user {\n            createdAt\n            image_url\n            description\n            email\n            first_name\n            last_name\n            updatedAt\n            user_id\n            user_name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Mutation($createClassromm: CreateClassroom!) {\n    creatClassroom(createClassromm: $createClassromm) {\n      classroom_id\n    }\n  }\n"): (typeof documents)["\n  mutation Mutation($createClassromm: CreateClassroom!) {\n    creatClassroom(createClassromm: $createClassromm) {\n      classroom_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditClassromm($editClassromm: UpdateClassroom!) {\n    editClassromm(editClassromm: $editClassromm) {\n      classroom_id\n    }\n  }\n"): (typeof documents)["\n  mutation EditClassromm($editClassromm: UpdateClassroom!) {\n    editClassromm(editClassromm: $editClassromm) {\n      classroom_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteClassroom($classroomId: Float!) {\n    deleteClassroom(classroomId: $classroomId) {\n      classroom_id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteClassroom($classroomId: Float!) {\n    deleteClassroom(classroomId: $classroomId) {\n      classroom_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCourses($search: String) {\n    getCourses(search: $search) {\n      id\n      createdAt\n      updatedAt\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n        student {\n          student_id\n        }\n      }\n      subject {\n        id\n        name\n      }\n      teacher {\n        teacher_id\n        user {\n          createdAt\n          email\n          image_url\n          description\n          user_id\n          updatedAt\n          user_name\n          last_name\n          first_name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCourses($search: String) {\n    getCourses(search: $search) {\n      id\n      createdAt\n      updatedAt\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n        student {\n          student_id\n        }\n      }\n      subject {\n        id\n        name\n      }\n      teacher {\n        teacher_id\n        user {\n          createdAt\n          email\n          image_url\n          description\n          user_id\n          updatedAt\n          user_name\n          last_name\n          first_name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCourse($getCourseId: Int!) {\n    getCourse(id: $getCourseId) {\n      createdAt\n      updatedAt\n      topic {\n        topic_id\n        content\n      }\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n        student {\n          student_id\n        }\n      }\n      subject {\n        id\n        name\n      }\n      teacher {\n        teacher_id\n        user {\n          createdAt\n          email\n          image_url\n          description\n          first_name\n          last_name\n          updatedAt\n          user_id\n          user_name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCourse($getCourseId: Int!) {\n    getCourse(id: $getCourseId) {\n      createdAt\n      updatedAt\n      topic {\n        topic_id\n        content\n      }\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n        student {\n          student_id\n        }\n      }\n      subject {\n        id\n        name\n      }\n      teacher {\n        teacher_id\n        user {\n          createdAt\n          email\n          image_url\n          description\n          first_name\n          last_name\n          updatedAt\n          user_id\n          user_name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateCourse($createCourseInput: CreateCourseInput!) {\n    createCourse(createCourseInput: $createCourseInput) {\n      classroom {\n        classroom_id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCourse($createCourseInput: CreateCourseInput!) {\n    createCourse(createCourseInput: $createCourseInput) {\n      classroom {\n        classroom_id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditCourse($updateCourseInput: UpdateCourseInput!) {\n    editCourse(updateCourseInput: $updateCourseInput) {\n      classroom {\n        classroom_id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation EditCourse($updateCourseInput: UpdateCourseInput!) {\n    editCourse(updateCourseInput: $updateCourseInput) {\n      classroom {\n        classroom_id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteCourse($deleteCourseId: Int!) {\n    deleteCourse(id: $deleteCourseId) {\n      classroom {\n        classroom_id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteCourse($deleteCourseId: Int!) {\n    deleteCourse(id: $deleteCourseId) {\n      classroom {\n        classroom_id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStudent($getStudentId: Int!) {\n    getStudent(id: $getStudentId) {\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      student_id\n      user {\n        createdAt\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStudent($getStudentId: Int!) {\n    getStudent(id: $getStudentId) {\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      student_id\n      user {\n        createdAt\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStudents($search: String, $hasClassroom: Boolean) {\n    GetStudents(search: $search, hasClassroom: $hasClassroom) {\n      student_id\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      user {\n        user_id\n        createdAt\n        first_name\n        last_name\n        updatedAt\n        user_name\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStudents($search: String, $hasClassroom: Boolean) {\n    GetStudents(search: $search, hasClassroom: $hasClassroom) {\n      student_id\n      classroom {\n        classroom_id\n        classroom_name\n        createdAt\n      }\n      user {\n        user_id\n        createdAt\n        first_name\n        last_name\n        updatedAt\n        user_name\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateStudent($createStudent: CreateStudent!) {\n    CreateStudent(createStudent: $createStudent) {\n      student_id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateStudent($createStudent: CreateStudent!) {\n    CreateStudent(createStudent: $createStudent) {\n      student_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditStudent($editStudent: UpdateStudent!) {\n    EditStudent(editStudent: $editStudent) {\n      student_id\n    }\n  }\n"): (typeof documents)["\n  mutation EditStudent($editStudent: UpdateStudent!) {\n    EditStudent(editStudent: $editStudent) {\n      student_id\n    }\n  }\n"];
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
export function graphql(source: "\n  query GetSubjects($search: String) {\n    getSubjects(search: $search) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetSubjects($search: String) {\n    getSubjects(search: $search) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSubject($createSubject: CreateSubjectInput!) {\n    createSubject(createSubject: $createSubject) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSubject($createSubject: CreateSubjectInput!) {\n    createSubject(createSubject: $createSubject) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation editSubject(\n    $editSubjectId: Int!\n    $editSubject: UpdateSubjectInput!\n  ) {\n    editSubject(id: $editSubjectId, editSubject: $editSubject) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation editSubject(\n    $editSubjectId: Int!\n    $editSubject: UpdateSubjectInput!\n  ) {\n    editSubject(id: $editSubjectId, editSubject: $editSubject) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteSubject($deleteSubjectId: Int!) {\n    deleteSubject(id: $deleteSubjectId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteSubject($deleteSubjectId: Int!) {\n    deleteSubject(id: $deleteSubjectId) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTeacher($getTeacherId: Int!) {\n    GetTeacher(id: $getTeacherId) {\n      teacher_id\n      user {\n        createdAt\n        email\n        image_url\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTeacher($getTeacherId: Int!) {\n    GetTeacher(id: $getTeacherId) {\n      teacher_id\n      user {\n        createdAt\n        email\n        image_url\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTeachers($search: String) {\n    GetTeachers(search: $search) {\n      teacher_id\n      user {\n        createdAt\n        email\n        image_url\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n      course {\n        classroom_id\n        subject_id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTeachers($search: String) {\n    GetTeachers(search: $search) {\n      teacher_id\n      user {\n        createdAt\n        email\n        image_url\n        email\n        first_name\n        last_name\n        updatedAt\n        user_id\n        user_name\n      }\n      course {\n        classroom_id\n        subject_id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTeacher($createTeacher: CreateTeacher!) {\n    CreateTeacher(createTeacher: $createTeacher) {\n      teacher_id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTeacher($createTeacher: CreateTeacher!) {\n    CreateTeacher(createTeacher: $createTeacher) {\n      teacher_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditTeacher($editTeacher: UpdateTeacher!) {\n    EditTeacher(editTeacher: $editTeacher) {\n      teacher_id\n    }\n  }\n"): (typeof documents)["\n  mutation EditTeacher($editTeacher: UpdateTeacher!) {\n    EditTeacher(editTeacher: $editTeacher) {\n      teacher_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteTeacher($teacherId: Float!) {\n    deleteTeacher(teacherId: $teacherId) {\n      teacher_id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteTeacher($teacherId: Float!) {\n    deleteTeacher(teacherId: $teacherId) {\n      teacher_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTopic($createTopic: CreateTopic!, $courseId: CourseId) {\n    CreateTopic(createTopic: $createTopic, courseId: $courseId) {\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTopic($createTopic: CreateTopic!, $courseId: CourseId) {\n    CreateTopic(createTopic: $createTopic, courseId: $courseId) {\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTopicsByAuthor($authorId: Int!) {\n    getTopicsByAuthor(authorID: $authorId) {\n      topic_id\n      content\n    }\n  }\n"): (typeof documents)["\n  query GetTopicsByAuthor($authorId: Int!) {\n    getTopicsByAuthor(authorID: $authorId) {\n      topic_id\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTopicsByCourseId($courseId: Int!) {\n    getTopicsByCourseId(courseID: $courseId) {\n      user_id\n      topic_id\n      content\n    }\n  }\n"): (typeof documents)["\n  query GetTopicsByCourseId($courseId: Int!) {\n    getTopicsByCourseId(courseID: $courseId) {\n      user_id\n      topic_id\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditTopic($editTopic: UpdateTopic!, $topicId: Int!) {\n    EditTopic(editTopic: $editTopic, topicId: $topicId) {\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation EditTopic($editTopic: UpdateTopic!, $topicId: Int!) {\n    EditTopic(editTopic: $editTopic, topicId: $topicId) {\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteTopic($topicId: Float!) {\n    deleteTopic(topicId: $topicId) {\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation deleteTopic($topicId: Float!) {\n    deleteTopic(topicId: $topicId) {\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCurrentUser {\n    getCurrentUser {\n      email\n      createdAt\n      image_url\n      description\n      first_name\n      last_name\n      role\n      updatedAt\n      user_id\n      user_name\n    }\n  }\n"): (typeof documents)["\n  query GetCurrentUser {\n    getCurrentUser {\n      email\n      createdAt\n      image_url\n      description\n      first_name\n      last_name\n      role\n      updatedAt\n      user_id\n      user_name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditUser($data: UpdateUser!) {\n    editUser(data: $data) {\n      user_id\n    }\n  }\n"): (typeof documents)["\n  mutation EditUser($data: UpdateUser!) {\n    editUser(data: $data) {\n      user_id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;