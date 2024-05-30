import { Check, Clipboard } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const CustomClipBoard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState('');

  useEffect(() => {});

  if (copied) {
    return (
      <Check
        className="size-6 p-1 hover:bg-slate-200 rounded-lg !text-success"
        onClick={(e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(text);
          setCopied(text);
        }}
      />
    );
  }
  return (
    <Clipboard
      className="size-6 p-1 hover:bg-slate-200 rounded-lg"
      onClick={(e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopied(text);
      }}
    />
  );
};

export default CustomClipBoard;
