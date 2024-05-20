import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { Form, Header } from '@/components/pages/login';
import { redirect } from '@/navigation';
import { getServerSession } from 'next-auth';
import React, { Suspense } from 'react';
const Login = async () => {

  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }
  

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto w-[350px] space-y-6">
        <Header />
        <Suspense fallback={'...'}>
          <Form />
        </Suspense>
      </div>
    </div>
  );
};

export default Login;
