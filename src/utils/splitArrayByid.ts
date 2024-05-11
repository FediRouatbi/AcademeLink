import {
  GetClassroomsQuery,
  GetCoursesQuery,
  TeacherCourses,
} from '@/gql/graphql';

export const splitArrayById = (array: TeacherCourses[]): TeacherCourses[][] => {
  const groupedData: Record<number, TeacherCourses[]> = {}; // Use Record for typed object

  for (const item of array) {
    const classroomId = item.classroom_id; // Access teacherId property
    groupedData[classroomId] = groupedData[classroomId] || [];
    groupedData[classroomId].push(item); // No need for find and spread operator
  }

  const result = Object.values(groupedData);
  return result;
};

type Subjects = GetClassroomsQuery['getClassrooms'][0]['course'];
export function accumulateSubjects(subjects: Subjects) {
  const accumulated: { [teacherId: number]: number[] } = {};

  subjects?.forEach((subject) => {
    const teacherId = subject?.teacher?.teacher_id;
    const subjectId = subject?.subject?.id;

    if (accumulated.hasOwnProperty(teacherId)) {
      accumulated[teacherId].push(subjectId);
    } else {
      accumulated[teacherId] = [subjectId];
    }
  });

  return accumulated;
}
type Data = GetCoursesQuery['getCourses'][0];
export const SplitCoursesByClassroom = (data?: GetCoursesQuery) => {
  const groupedByClassroomId: { [classroomId: number]: Data[] } = {};
  data?.getCourses.forEach((obj) => {
    const classroomId = obj.classroom.classroom_id;
    if (!groupedByClassroomId[classroomId]) {
      groupedByClassroomId[classroomId] = [];
    }
    groupedByClassroomId[classroomId].push(obj);
  });

  // Converting the object to an array of arrays
  const arrayOfArrays = Object.values(groupedByClassroomId);

  return arrayOfArrays;
};
