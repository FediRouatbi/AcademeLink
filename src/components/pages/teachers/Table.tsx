'use client';

import { Alert } from '@/components/common/Alert';
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
import { Teacher } from '@/gql/graphql';
import { useDeleteTeacherMutation, useGetTeachersQuery } from '@/hooks/teacher';
import { useEditTeacherAtom } from '@/hooks/teacher/useEditTeacherAtom';
import { useSeachAtom } from '@/hooks/useSeachAtom';
import dayjs from 'dayjs';
import { Pencil, Trash2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import * as NProgress from 'nprogress';

export default function TeachersTabel() {
  const { data: session } = useSession();
  const [debouncedValue] = useSeachAtom();
  const [open, setOpen] = useState(false);

  const { mutate: deleteTeacher } = useDeleteTeacherMutation({
    onSuccess() {
      toast.success(`teacher ${teacher?.user?.user_name} delete successfully`);
      setTeacher(null);
      refetch();
    },
  });
  const { push } = useRouter();
  const { data, refetch } = useGetTeachersQuery({ search: debouncedValue });
  const [teacher, setTeacher] = useEditTeacherAtom();
  const teachers = data?.GetTeachers;

  const onClickEdit = (
    e: React.MouseEvent<HTMLButtonElement>,
    teacher: Teacher
  ) => {
    e.stopPropagation();
    setTeacher({ ...teacher, action: 'EDIT' });
  };
  const onClickDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    teacher: Teacher
  ) => {
    e.stopPropagation();
    setOpen(true);
    setTeacher({ ...teacher, action: 'DELETE' });
  };

  const onClickCancel = () => {
    setOpen(false);
  };
  const onClickConfirm = () => {
    setOpen(false);

    if (!teacher) return;

    deleteTeacher(teacher?.teacher_id);
  };

  useEffect(() => {
    NProgress.done();
  }, []);

  const role = session?.user?.role;
  return (
    <>
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Teachers</CardTitle>
          <CardDescription>Teachers on Academe</CardDescription>
        </CardHeader>
        <CardContent>
          <Table total={teachers?.length} emptyMessage="No Teachers Found">
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead className="hidden sm:table-cell">Info</TableHead>
                <TableHead className="hidden sm:table-cell">Type</TableHead>
                <TableHead className="hidden md:table-cell">Status</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className=""></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teachers?.map((teacher) => {
                return (
                  <TableRow
                    key={teacher?.teacher_id}
                    className="cursor-pointer"
                    onClick={() => {
                      NProgress.start();
                      push(`/fr/teachers/${teacher?.teacher_id}`);
                    }}
                  >
                    <TableCell>{teacher?.teacher_id}</TableCell>
                    <TableCell>
                      <div className="font-medium">
                        {teacher?.user?.user_name}
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {teacher?.user?.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      Teacher
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge
                        className="text-xs"
                        // variant={teacher?.classroom ? "success" : "outline"}
                      >
                        {true ? 'active' : 'inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell ">
                      {dayjs(teacher?.user?.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                    {role === 'ADMIN' && (
                      <TableCell className="hidden md:table-cell text-right space-x-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="active:scale-95"
                          onClick={(e) => onClickEdit(e, teacher)}
                        >
                          <Pencil className="size-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          onClick={(e) => onClickDelete(e, teacher)}
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
      </Card>{' '}
      <Alert
        open={open}
        title="Are you absolutely sure?"
        description={
          <>
            This action cannot be undone. This will permanently delete
            <p className="font-bold">{teacher?.user?.user_name}</p>
          </>
        }
        onClickCancel={onClickCancel}
        onClickConfirm={onClickConfirm}
      />
    </>
  );
}
