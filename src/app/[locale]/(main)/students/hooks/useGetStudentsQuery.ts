import { api_url } from "@/constants/utils";
import { graphql } from "@/gql/gql";
import React from "react";
import { GraphQLClient } from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const GetStudents = graphql(`
  query GetStudents {
    GetStudents {
      student_id
      classroom {
        classroom_id
        classroom_name
        createdAt
      }
      user {
        user_id
        createdAt
        first_name
        last_name
        updatedAt
        user_name
        email
      }
    }
  }
`);
const graphQLClient = new GraphQLClient(api_url, {
  mode: `cors`,
  credentials: "include",
});
export const getServerStudents = graphQLClient?.request(GetStudents);
const useGetStudentsQuery = () => {
  const query = useQuery({
    queryKey: ["students"],
    queryFn: () => {
      return graphQLClient?.request(GetStudents);
    },
  });
  return query;
};

export default useGetStudentsQuery;
