'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect } from 'react';
import { useGetTeacherQuery } from '@/hooks/teacher';
import * as NProgress from 'nprogress';
import { Link, useRouter } from '@/navigation';

const Header = ({ teacherId }: { teacherId: number }) => {
  const { data } = useGetTeacherQuery({ id: teacherId });
  const { push } = useRouter();
  const student = data?.GetTeacher;
  useEffect(() => {
    NProgress.done();
  }, []);
  return (
    <div className="flex items-center gap-4">
      <Link href={'/teachers'}>
        <Button variant="outline" size="icon" className="h-7 w-7">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
      </Link>
      <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
        {student?.user?.user_name}
      </h1>
      <Badge className="ml-auto sm:ml-0" variant={true ? 'success' : 'outline'}>
        {true ? 'active' : 'inactive'}
      </Badge>
      <div className="hidden items-center gap-2 md:ml-auto md:flex">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            NProgress.start();
            push('/teachers');
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
