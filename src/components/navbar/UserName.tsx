'use client';
import useGetMyProfile from '@/hooks/useGetMyProfile';
import React from 'react';

const UserName = () => {
  const { data: queryData, isSuccess } = useGetMyProfile();

  return <div>{queryData?.getCurrentUser?.user_name}</div>;
};

export default UserName;
