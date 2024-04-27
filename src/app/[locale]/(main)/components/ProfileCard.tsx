import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import { AtSign, CalendarDays, UserIcon } from "lucide-react";
import dayjs from "dayjs";
import { RoleCodeEnum } from "@/gql/graphql";

type RoleCodeType = keyof typeof RoleCodeEnum;

type Props = {
  createdAt: string;
  email: string;
  first_name: string;
  last_name: string;
  updatedAt: string;
  user_id: number;
  user_name: string;
  role: RoleCodeType;
};
const ProfileCard = (user: Props) => {
  const {
    createdAt,
    email,
    first_name,
    last_name,
    role,
    updatedAt,
    user_id,
    user_name,
  } = user;

  return (
    <Card className="w-full">
      <CardContent className="p-6 flex gap-10">
        <Avatar className="h-32 w-32">
          <AvatarImage alt="User Avatar" src="/teacher.png" className="" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-medium">
              {first_name} {last_name}
            </h4>
            <Badge className="bg-primary/10 text-primary" variant="outline">
              {role}
            </Badge>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <UserIcon className="h-4 w-4" />
            <span>ID: {user_id}</span>

            <span>@{user_name}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <CalendarDays className="h-4 w-4" />
            <span>Joined: {dayjs(createdAt).format("MMMM DD, YYYY")}</span>
            <CalendarDays className="h-4 w-4" />
            <span>Updated: {dayjs(updatedAt).format("MMMM DD, YYYY")}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
