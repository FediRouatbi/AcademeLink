"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = { href: string; item: ReactNode; isActive: string };

const LinkItem = ({ href, item, isActive }: Props) => {
  const activeStyle = "bg-gray-100 text-gray-900";
  const pathname = usePathname();
  const isHomePage = pathname?.length === 3 && isActive === "home";

  const className = cn(
    "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
    (pathname?.includes(isActive) || isHomePage) && activeStyle
  );

  return (
    <Link className={className} href={href}>
      {item}
    </Link>
  );
};

export default LinkItem;
