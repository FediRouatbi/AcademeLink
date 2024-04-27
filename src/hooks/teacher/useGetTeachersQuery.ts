import { api_url } from "@/constants/utils";
import { graphql } from "@/gql/gql";
import React from "react";
import { GraphQLClient } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { getTeachers } from "@/services/teacher";

const useGetTeachersQuery = () => {
  const query = useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
  });
  return query;
};

export { useGetTeachersQuery };
