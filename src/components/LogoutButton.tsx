"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { DropdownMenuItem } from "./ui/dropdown-menu";

const LogoutButton = () => {
  const { push } = useRouter();
  return (
    <DropdownMenuItem asChild>
      <button
        className="w-full"
        onClick={async () => {
          await signOut({ redirect: false });
          push("/fr/login");
        }}
      >
        Logout
      </button>
    </DropdownMenuItem>
  );
};

export default LogoutButton;
