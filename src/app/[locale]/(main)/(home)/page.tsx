import React from 'react';

import AddArticle from './components/dialog';
import Topcis from './components/topics';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getTopicsByAuthor } from '@/services/topic';

const Page = async () => {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();
  const accessToken = session?.token?.accessToken;

  await queryClient.prefetchQuery({
    queryKey: ['topics'],
    queryFn: () => getTopicsByAuthor(accessToken || ''),
    staleTime: 500,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex justify-end">
        <AddArticle />
      </div>
      <Topcis />
    </HydrationBoundary>
  );
};
export default Page;
