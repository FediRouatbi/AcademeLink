'use client';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { useController, useFormContext } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hideError?: boolean;
}
const PasswordInput: React.FC<InputProps> = ({
  className,
  name = 'input',
  hideError,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
  });

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        className={cn(
          'flex h-10 w-full  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10',
          className
        )}
        {...props}
        {...field}
      />
      <button
        className="absolute right-3   top-2 hover:opacity-70 "
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <Eye /> : <EyeOff />}
      </button>
      {!hideError && (
        <p className="text-sm text-red-800 pt-2 h-5">
          {fieldState?.error?.message}
        </p>
      )}
    </div>
  );
};
PasswordInput.displayName = 'PasswordInput';
const Input: React.FC<InputProps> = ({
  className,
  type,
  name = 'input',
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
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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
Input.displayName = 'Input';

export { Input, PasswordInput };
