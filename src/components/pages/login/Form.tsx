'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input, PasswordInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { Loader2 } from 'lucide-react';
import * as NProgress from 'nprogress';
import { useLocale, useTranslations } from 'next-intl';
import { Link, redirect, usePathname, useRouter } from '@/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import LangSelector from '@/components/common/langSelector/LangSelector';

const LoginUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});

type LoginSchemaType = z.infer<typeof LoginUpSchema>;

const Form = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations('Login');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    NProgress.done();
  }, []);

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
      NProgress.start();
      router.push('/');
    } catch (error: any) {
      toast.error('Incorrrect Email or Password ');
    }
    setIsLoading(false);
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-4" onSubmit={methods?.handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="email">{t('email')}</Label>
          <Input name="email" placeholder="m@example.com" type="text" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">{t('password')}</Label>
            <Link className="ml-auto inline-block text-sm underline" href="#">
              Forgot your password?
            </Link>
          </div>
          <PasswordInput id="password" name="password" />
        </div>
        <div className="flex items-center ">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember-me" />
            <Label className="text-sm" htmlFor="remember-me">
              Remember me
            </Label>
          </div>
          <div className="ml-auto">
            <LangSelector />
          </div>
        </div>

        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="size-5  animate-spin" />
          ) : (
            t('login')
          )}
        </Button>
      </form>
    </FormProvider>
  );
};

export default Form;
