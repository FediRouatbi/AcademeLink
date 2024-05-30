'use client';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { getCurrentUser } from '@/services/user';

const useGetMyProfile = () => {
  const session = useSession();
  const accessToken = session.data?.token?.accessToken;
  const query = useQuery({
    queryKey: ['GetCurrentUser'],
    queryFn: () => getCurrentUser(accessToken || ''),
    enabled: !!accessToken,
  });
  return query;
};

export default useGetMyProfile;
