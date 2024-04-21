import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getServerStudents } from "./hooks/useGetStudentsQuery";
import StudentsTabel from "./components/Table";

const page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["students"],
    queryFn: () => getServerStudents,
    staleTime: 500,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StudentsTabel />
    </HydrationBoundary>
  );
};

export default page;
