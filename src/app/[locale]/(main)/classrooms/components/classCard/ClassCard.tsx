import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { CalendarIcon, Trash2, UsersIcon } from 'lucide-react';
import { GetClassroomsQuery } from '@/gql/graphql';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import React from 'react';
import dayjs from 'dayjs';


export type ClassroomType = GetClassroomsQuery['getClassrooms'][0];
type Props = {
  classroom: ClassroomType;
  onClickDelete: (classroom: ClassroomType) => void;
};

export default function ClassCard({ classroom, onClickDelete }: Props) {
  return (
    <Card className="max-w-sm mt-5 relative group">
      <Button
        onClick={() => onClickDelete(classroom)}
        variant="ghost"
        size="icon"
        className="active:scale-95   absolute z-20 group-hover:opacity-100 transition-all opacity-0 top-5 right-5"
      >
        <Trash2 className="size-4" />

        <span className="sr-only">Delete </span>
      </Button>
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl">{classroom?.classroom_name}</CardTitle>
        <div className="flex items-center space-x-2 text-sm font-medium">
          <div className="flex items-center space-x-1">
            <UsersIcon className="w-4 h-4" />
            <span>{classroom?.student?.length} students</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p>
          Mathematics class for 7th-grade students. Focuses on pre-algebra
          skills and problem-solving. The class covers topics such as linear
          equations.
        </p>
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-medium">Subjects :</h3>
          <ul className="list-disc pl-6 space-y-1">
            {classroom?.course?.map((cours, i) => {
              return (
                <li className="" key={i}>
                  <div className="flex items-center gap-5">
                    {cours?.subject?.name}
                    <HoverCard>
                      <HoverCardTrigger>
                        <Avatar className="size-6 cursor-pointer">
                          <AvatarImage alt="Mr. Anderson" src="/teacher.png" />
                          <AvatarFallback>MA</AvatarFallback>
                        </Avatar>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                          <Avatar>
                            <AvatarImage src="/teacher.png" />
                            <AvatarFallback>VC</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">
                              @{cours?.teacher?.user?.user_name}
                            </h4>
                            <p className="text-sm">
                              Eng. Dr. HDR., Assistant Professor at INSAT
                            </p>
                            <div className="flex items-center pt-2">
                              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                              <span className="text-xs text-muted-foreground">
                                Joined{' '}
                                {dayjs(cours?.teacher?.user?.createdAt).format(
                                  'MMMM YYYY'
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
