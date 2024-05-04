"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetTeachersQuery } from "@/hooks/teacher";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
export default function TeachersTabel() {
  const { push } = useRouter();
  const { data } = useGetTeachersQuery();
  const teachers = data?.GetTeachers;
  return (
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
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teachers?.map((teacher) => {
              return (
                <TableRow
                  key={teacher?.teacher_id}
                  className="cursor-pointer"
                  onClick={() => push(`/fr/teachers/${teacher?.teacher_id}`)}
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
                  <TableCell className="hidden md:table-cell text-right">
                    {dayjs(teacher?.user?.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
