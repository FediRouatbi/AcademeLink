import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { GetClassroomQuery, Student } from '@/gql/graphql';
type Props = { students: GetClassroomQuery['getClassroom']['student'] };
const Students = ({ students }: Props) => {
  return (
    <Table total={students?.length}>
      <TableHeader>
        <TableRow>
          <TableHead>Student</TableHead>
          <TableHead className="hidden sm:table-cell">Type</TableHead>
          <TableHead className="hidden sm:table-cell">Status</TableHead>
          <TableHead className="hidden md:table-cell">CreatedAt</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students?.map((student) => (
          <TableRow key={student?.student_id}>
            <TableCell>
              <div className="font-medium">
                {student?.user?.first_name} {student?.user?.last_name}
              </div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                {student?.user?.email}
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">Sale</TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge className="text-xs" variant="secondary">
                Fulfilled
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Students;
