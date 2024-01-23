import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
const Login = () => {
  const t = useTranslations("RootLayout");

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto w-[350px] space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400 text-left">
            Enter your email below to login to your account
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link className="ml-auto inline-block text-sm underline" href="#">
                Forgot your password?
              </Link>
            </div>
            <Input id="password"  type="password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember-me" />
            <Label className="text-sm" htmlFor="remember-me">
              Remember me
            </Label>
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
          <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link className="underline" href="/signup">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
