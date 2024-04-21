import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getTeachers } from "@/services/teacher";
import TeachersTabel from "./components/Table";

const page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
    staleTime: 500,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TeachersTabel />
    </HydrationBoundary>
  );
};

export default page;
