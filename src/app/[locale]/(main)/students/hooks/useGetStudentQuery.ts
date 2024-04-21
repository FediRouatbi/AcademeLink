import { api_url } from "@/constants/utils";
import { graphql } from "@/gql/gql";
import React from "react";
import { GraphQLClient } from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const GetStudent = graphql(`
  query GetStudent($getStudentId: Int!) {
    getStudent(id: $getStudentId) {
      classroom {
        classroom_id
        classroom_name
        createdAt
      }
      student_id
      user {
        createdAt
        email
        first_name
        last_name
        updatedAt
        user_id
        user_name
      }
    }
  }
`);
const graphQLClient = new GraphQLClient(api_url, {
  mode: `cors`,
  credentials: "include",
});
export const getServerStudent = (id: number) =>
  graphQLClient?.request(GetStudent, { getStudentId: id });

const useGetStudentQuery = ({ id }: { id: number }) => {
  const query = useQuery({
    queryKey: ["students", id],
    queryFn: () => {
      return graphQLClient?.request(GetStudent, { getStudentId: id });
    },
  });
  return query;
};

export default useGetStudentQuery;
