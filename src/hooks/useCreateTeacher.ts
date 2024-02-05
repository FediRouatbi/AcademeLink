import { useMutation } from "@tanstack/react-query";
import { graphql } from "../../gql";
import { request } from "graphql-request";
import { api_url, auth } from "@/constants/utils";

const createTeacher = graphql(`
  mutation TestEndPoint($createTeacher: CreateTeacher!) {
    TestEndPoint(createTeacher: $createTeacher) {
      first_name
      last_name
      user_id
      user_name
    }
  }
`);

const useCreateTeacher = () => {
  const mutation = useMutation({
    mutationFn: () => {
      return request(
        api_url,
        createTeacher,
        {
          createTeacher: {
            first_name: "sqqsdqsdd",
            last_name: "ffdsf",
            email: "sfsdffqsd",
            password: "fsdkjflkdsjf",
            user_name: "fdslkfdqsddl",
          },
        },
        auth
      );
    },
  });

  return mutation;
};

export default useCreateTeacher;
