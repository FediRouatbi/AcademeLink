import * as React from 'react';

import { cn } from '@/lib/utils';
import { useController, useFormContext } from 'react-hook-form';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, name, ...props }, ref) => {
    const { control } = useFormContext();
    const { field, fieldState } = useController({
      name,
      control,
    });
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
        {...field}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
