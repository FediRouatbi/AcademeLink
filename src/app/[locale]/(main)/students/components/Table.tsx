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
import useGetStudentsQuery from "../hooks/useGetStudentsQuery";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
export default function StudentsTabel() {
  const { push } = useRouter();
  const { data } = useGetStudentsQuery();
  const students = data?.GetStudents;
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Students</CardTitle>
        <CardDescription>Students on Academe</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
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
            {students?.map((student) => {
              return (
                <TableRow
                  key={student?.student_id}
                  className="cursor-pointer"
                  onClick={() => push(`/fr/users/${student?.student_id}`)}
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
                    Student
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge
                      className="text-xs"
                      variant={student?.classroom ? "success" : "outline"}
                    >
                      {student?.classroom ? "active" : "inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-right">
                    {dayjs(student?.user?.createdAt).format("DD/MM/YYYY")}
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
