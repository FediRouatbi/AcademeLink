'use client';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { DropdownMenuItem } from './ui/dropdown-menu';
import * as NProgress from 'nprogress';

const LogoutButton = () => {
  const { push } = useRouter();
  useEffect(() => {
    NProgress.done();
  }, []);
  return (
    <DropdownMenuItem asChild>
      <button
        className="w-full"
        onClick={async () => {
          await signOut({ redirect: false });
          NProgress.start();
          push('/fr/login');
        }}
      >
        Logout
      </button>
    </DropdownMenuItem>
  );
};

export default LogoutButton;
