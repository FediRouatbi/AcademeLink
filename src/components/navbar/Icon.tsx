'use client';
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import useGetMyProfile from '@/hooks/useGetMyProfile';

const Icon = () => {
  const { data: queryData, isSuccess } = useGetMyProfile();

  return (
    <>
      <Image
        alt="Avatar"
        className="rounded-full"
        height="32"
        src={queryData?.getCurrentUser?.image_url || '/user.svg'}
        style={{
          aspectRatio: '32/32',
          objectFit: 'cover',
        }}
        width="32"
      />
      <span className="sr-only">Toggle user menu</span>
    </>
  );
};

export default Icon;
