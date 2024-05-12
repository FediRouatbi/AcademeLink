
import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { Form } from '@/components/pages/login';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';
const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/fr');
  }
  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto w-[350px] space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400 text-left">
            Enter your email below to login to your account
          </p>
        </div>
        <Suspense fallback={'...'}>
          <Form />
        </Suspense>
      </div>
    </div>
  );
};

export default Login;
