import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { CalendarIcon, Edit, Edit2, Trash2, UsersIcon } from 'lucide-react';
import { GetClassroomsQuery } from '@/gql/graphql';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export type ClassroomType = GetClassroomsQuery['getClassrooms'][0];
type Props = {
  classroom: ClassroomType;
  onClickDelete: (classroom: ClassroomType) => void;
  onClickEdit: (classroom: ClassroomType) => void;
};

export default function ClassCard({
  classroom,
  onClickDelete,
  onClickEdit,
}: Props) {
  const t = useTranslations('Classrooms.Card');

  const { data: session } = useSession();
  const role = session?.user?.role;

  return (
    <Card className="max-w-sm mt-5 relative group hover:shadow-md transition-all">
      {role === 'ADMIN' && (
        <div className="absolute z-20 group-hover:opacity-100 transition-all opacity-0 top-5 right-5 flex gap-2">
          <Button
            onClick={() => onClickEdit(classroom)}
            variant="ghost"
            size="icon"
            className="active:scale-95   "
          >
            <Edit2 className="size-4" />

            <span className="sr-only">Edit </span>
          </Button>
          <Button
            onClick={() => onClickDelete(classroom)}
            variant="ghost"
            size="icon"
            className="active:scale-95  "
          >
            <Trash2 className="size-4" />

            <span className="sr-only">Delete </span>
          </Button>
        </div>
      )}
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl ">
          <Link
            href={`/fr/classrooms/${classroom?.classroom_id}`}
            className="hover:underline"
          >
            {classroom?.classroom_name}
          </Link>
        </CardTitle>
        <div className="flex items-center space-x-2 text-sm font-medium">
          <div className="flex items-center space-x-1">
            <UsersIcon className="w-4 h-4" />
            <span>
              {classroom?.student?.length} {t('students')}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <strong>{t('description')}</strong>
        <p> {classroom?.description}</p>
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-medium">{t('subjects')}</h3>
          <ul className="list-disc pl-6 space-y-1">
            {classroom?.course?.map((cours, i) => {
              const image_url =
                cours?.teacher?.user?.image_url || '/teacher.png';

              return (
                <li className="" key={i}>
                  <div className="flex items-center gap-5 ">
                    {cours?.subject?.name}
                    <HoverCard>
                      <HoverCardTrigger className=" w-full">
                        <Image
                          src={image_url}
                          width={24}
                          height={24}
                          alt="dsd "
                          className="rounded-full cursor-pointer"
                        />
                      </HoverCardTrigger>
                      <HoverCardContent className="w-fit">
                        <div className="flex justify-between space-x-4">
                          <Image
                            src={image_url}
                            width={60}
                            height={60}
                            alt="dsd "
                            className="rounded-full flex-1 w-full"
                          />
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">
                              @{cours?.teacher?.user?.user_name}
                            </h4>
                            <p className="text-sm">
                              {cours?.teacher?.user?.description}
                            </p>
                            <div className="flex items-center pt-2">
                              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                              <span className="text-xs text-muted-foreground">
                                {t('joined')}{' '}
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
