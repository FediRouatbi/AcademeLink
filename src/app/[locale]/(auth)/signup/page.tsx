import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const Signup = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto w-[350px] space-y-6">
        <div className="space-y-2 ">
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-username">Username</Label>
              <Input id="signup-username" placeholder="Choose a username" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input id="signup-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Confirm Password</Label>
              <Input id="signup-password"  type="password" />
            </div>

            <Button className="w-full" type="submit">
              Sign Up
            </Button>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link className="underline" href="/login">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
