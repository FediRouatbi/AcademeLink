"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useController, useFormContext } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hideError?: boolean;
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  name = "input",
  hideError,
  ...props
}) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
  });  
  return (
    <div>
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
        {...field}
      />
      {!hideError && (
        <p className="text-sm text-red-800 pt-2 h-5">
          {fieldState?.error?.message}
        </p>
      )}
    </div>
  );
};
Input.displayName = "Input";

export { Input };
