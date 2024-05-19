'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGetStudentQuery } from '@/hooks/student';
import * as NProgress from 'nprogress';

const Header = ({ studentId }: { studentId: number }) => {
  const { data } = useGetStudentQuery({ id: studentId });
  const { push } = useRouter();
  const student = data?.getStudent;

  useEffect(() => {
    NProgress.done();
  }, []);
  return (
    <div className="flex items-center gap-4">
      <Link href={'/fr/students'}>
        <Button variant="outline" size="icon" className="h-7 w-7">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
      </Link>
      <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
        {student?.user?.user_name}
      </h1>
      <Badge
        className="ml-auto sm:ml-0"
        variant={student?.classroom ? 'success' : 'outline'}
      >
        {student?.classroom ? 'active' : 'inactive'}
      </Badge>
      <div className="hidden items-center gap-2 md:ml-auto md:flex">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            NProgress.start();
            push('/fr/students');
          }}
        >
          Discard
        </Button>
        <Button size="sm">Save Product</Button>
      </div>
    </div>
  );
};

export default Header;
