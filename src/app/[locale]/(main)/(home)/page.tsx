import React from 'react';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getTopicsByAuthor } from '@/services/topic';
import { AddArticle, Topcis } from '@/components/pages/home';
import { decode } from 'next-auth/jwt';

const Page = async () => {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();
  const accessToken = session?.token?.accessToken;

  
  await queryClient.prefetchQuery({
    queryKey: ['topics'],
    queryFn: () => getTopicsByAuthor(1, accessToken || ''),
    staleTime: 500,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex justify-end">
        {session?.user.role === 'ADMIN' && <AddArticle />}
      </div>
      <Topcis />
    </HydrationBoundary>
  );
};
export default Page;
