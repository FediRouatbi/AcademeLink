'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const LoginUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});

type LoginSchemaType = z.infer<typeof LoginUpSchema>;

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginUpSchema),
    defaultValues: { email: '', password: '' },
  });
  const onSubmit = async (data: LoginSchemaType) => {
    setIsLoading(true);
    const { email, password } = data;

    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (!response?.ok) throw new Error('error');

      toast.success('Registration Successful');
      push('/fr/');
    } catch (error: any) {
      toast.error('Incorrrect Email or Password ');
    }
    setIsLoading(false);
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-4" onSubmit={methods?.handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="m@example.com" type="text" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link className="ml-auto inline-block text-sm underline" href="#">
              Forgot your password?
            </Link>
          </div>
          <Input name="password" type="password" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="remember-me" />
          <Label className="text-sm" htmlFor="remember-me">
            Remember me
          </Label>
        </div>
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? <Loader2 className="size-5  animate-spin" /> : 'Login'}
        </Button>
      </form>
    </FormProvider>
  );
};

export default Form;
