import { TeacherCourses } from '@/gql/graphql';

export const splitArrayById = (
  array: TeacherCourses[]
): TeacherCourses[][] => {
  const groupedData: Record<number, TeacherCourses[]> = {}; // Use Record for typed object

  for (const item of array) {
    const classroomId = item.classroom_id; // Access teacherId property
    groupedData[classroomId] = groupedData[classroomId] || [];
    groupedData[classroomId].push(item); // No need for find and spread operator
  }

  const result = Object.values(groupedData);
  return result;
};
