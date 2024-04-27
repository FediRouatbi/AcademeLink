"use client";
import { useMutation } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { api_url } from "@/constants/utils";
import { graphql } from "@/gql/gql";
import { LoginMutation } from "@/gql/graphql";

type Props = {
  onSuccess?: (data: LoginMutation) => void;
  onError?: (error: Error) => void;
};

const Login = graphql(`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      accessToken
      refreshToken
    }
  }
`);
const graphQLClient = new GraphQLClient(api_url, {
  mode: `cors`,
  credentials: "include",
});

const useLogin = ({ onSuccess, onError }: Props) => {
  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return graphQLClient.request(Login, {
        data: { email, password },
      });
    },
    onSuccess(data) {
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return mutation;
};

export default useLogin;
