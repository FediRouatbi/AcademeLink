"use client"
import { api_url, auth } from "@/constants/utils";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "../../gql";
const GetCurrentUser = graphql(`
  query getCurrentUser {
    getCurrentUser {
      createdAt
      first_name
      last_name
      updatedAt
      role
      user_id
      user_name
    }
  }
`);

const useGetMyProfile = () => {
  const query = useQuery({
    queryKey: ["GetCurrentUser"],
    queryFn: async () => request(api_url, GetCurrentUser, undefined, auth),
  });
  return query;
};

export default useGetMyProfile;
