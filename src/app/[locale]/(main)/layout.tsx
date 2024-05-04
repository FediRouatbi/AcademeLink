import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import LogoutButton from '@/components/LogoutButton';
import {
  BellIcon,
  HomeIcon,
  Package2Icon,
  Teacher,
  UsersIcon,
} from '@/assets/svg';
import LinkItem from '../../../components/common/LinkItem';
import Search from '../../../components/common/Search';
import Image from 'next/image';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { Library, Palette, Settings, Shapes } from 'lucide-react';
const routes = [
  {
    isActive: 'home',
    href: '/',
    item: (
      <>
        <HomeIcon className="h-4 w-4" />
        Home
      </>
    ),
  },
  {
    href: '/classrooms',
    isActive: 'classrooms',
    item: (
      <>
        <Shapes className="h-4 w-4" />
        Classrooms
      </>
    ),
  },
  {
    href: '/teachers',
    isActive: 'teachers',
    item: (
      <>
        <Teacher className="h-4 w-4" />
        Teachers
      </>
    ),
  },

  {
    href: '/students',
    isActive: 'students',
    item: (
      <>
        <UsersIcon className="h-4 w-4" />
        Students
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </>
    ),
  },
  {
    href: '/subjects',
    isActive: 'subjects',
    item: (
      <>
        <Library className="h-4 w-4" />
        Subjects
      </>
    ),
  },

  {
    href: '/appearance',
    isActive: 'appearance',
    item: (
      <>
        <Palette className="h-4 w-4" />
        Appearance
      </>
    ),
  },
  {
    href: '/settings',
    isActive: 'settings',
    item: (
      <>
        <Settings className="h-4 w-4" />
        Settings
      </>
    ),
  },
];
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) return redirect('fr/login');

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] h-svh overflow-hidden">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">AcademeLink</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              {routes.map((el) => (
                <LinkItem
                  key={el.isActive}
                  href={el?.href}
                  isActive={el.isActive}
                  item={el?.item}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col   overflow-auto">
        <header className="z-10  sticky min-h-[60px] backdrop-blur-sm top-0 flex   items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <Search />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <Image
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/user.svg"
                  style={{
                    aspectRatio: '32/32',
                    objectFit: 'cover',
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <LogoutButton />
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 ">
          {children}
        </main>
      </div>
    </div>
  );
}
