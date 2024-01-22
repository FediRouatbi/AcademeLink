import { api_url, auth } from "@/constants/utils";
import { graphql } from "@/gql";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
const getProfile = graphql(`
  query getMyProfile {
    getMyProfile {
      user_id
      user_name
      first_name
      last_name
      force_reset_password
      two_factor_auth
    }
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
