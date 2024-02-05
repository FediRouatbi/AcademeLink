import { api_url, auth } from "@/constants/utils";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "../../gql";
const getProfile = graphql(`
  query Hello {
    Hello
  }
`);

const useGetMyProfile = () => {
  const query = useQuery({
    queryKey: ["getProfile"],
    queryFn: async () => request(api_url, getProfile, undefined, auth),
  });
  return query;
};

export default useGetMyProfile;
