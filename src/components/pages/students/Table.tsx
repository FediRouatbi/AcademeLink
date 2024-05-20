'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useDeleteStudentMutation, useGetStudentsQuery } from '@/hooks/student';
import dayjs from 'dayjs';
import { Pencil, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { GetStudentsQuery } from '@/gql/graphql';
import { toast } from 'sonner';
import { Alert } from '@/components/common/Alert';
import { useEditStudentAtom } from '@/hooks/student/useEditStudentAtom';
import { useSeachAtom } from '@/hooks/useSeachAtom';

import * as NProgress from 'nprogress';
import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import { RoleCodeType } from '@/lib/next-auth';

export default function StudentsTabel({
  role,
}: {
  role: RoleCodeType | undefined;
}) {
  const t = useTranslations('Students.Table');

  const [debouncedValue] = useSeachAtom();

  const { data, refetch, isPending } = useGetStudentsQuery({
    search: debouncedValue,
  });
  const { mutate: deleteStudent } = useDeleteStudentMutation({
    onSuccess() {
      toast.success(`student ${student?.user?.user_name} delete successfully`);
      setStudent(null);
      refetch();
    },
  });
  const [student, setStudent] = useEditStudentAtom();
  const students = data?.GetStudents;

  type Student = GetStudentsQuery['GetStudents'][0];
  const [open, setOpen] = useState(false);
  const { push } = useRouter();

  const onClickEdit = (
    e: React.MouseEvent<HTMLButtonElement>,
    student: Student
  ) => {
    e.stopPropagation();
    setStudent({ ...student, action: 'EDIT' });
  };
  const onClickDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    student: Student
  ) => {
    e.stopPropagation();
    setOpen(true);
    setStudent({ ...student, action: 'DELETE' });
  };

  const onClickCancel = () => {
    setOpen(false);
  };
  const onClickConfirm = () => {
    setOpen(false);

    if (!student) return;

    deleteStudent(student?.student_id);
  };

  useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <>
      <Card>
        <CardHeader className="px-7">
          <CardTitle>{t('title')}</CardTitle>
          <CardDescription>{t('description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table total={students?.length} emptyMessage="No Students Found">
            <TableHeader>
              <TableRow>
                <TableHead>{t('id')}</TableHead>
                <TableHead className="hidden sm:table-cell">
                  {t('info')}
                </TableHead>
                <TableHead className="hidden sm:table-cell">
                  {t('classroom')}
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  {t('status')}
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  {t('date')}
                </TableHead>
                <TableHead className=""></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students?.map((student) => {
                return (
                  <TableRow
                    key={student?.student_id}
                    className="cursor-pointer"
                    onClick={() => {
                      NProgress.start();
                      push(`/students/${student?.student_id}`);
                    }}
                  >
                    <TableCell>{student?.student_id}</TableCell>
                    <TableCell>
                      <div className="font-medium">
                        {student?.user?.user_name}
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {student?.user?.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {student?.classroom?.classroom_name}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge
                        className="text-xs"
                        variant={student?.classroom ? 'success' : 'outline'}
                      >
                        {student?.classroom ? 'active' : 'inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell ">
                      {dayjs(student?.user?.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                    {role === 'ADMIN' && (
                      <TableCell className="hidden md:table-cell text-right space-x-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="active:scale-95"
                          onClick={(e) => onClickEdit(e, student)}
                        >
                          <Pencil className="size-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          onClick={(e) => onClickDelete(e, student)}
                          variant="ghost"
                          size="icon"
                          className="active:scale-95"
                        >
                          <Trash2 className="size-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Alert
        open={open}
        title="Are you absolutely sure?"
        description={
          <>
            This action cannot be undone. This will permanently delete
            <p className="font-bold">{student?.user?.user_name}</p>
          </>
        }
        onClickCancel={onClickCancel}
        onClickConfirm={onClickConfirm}
      />
    </>
  );
}
