import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { HomeIcon, Package2Icon, Teacher, UsersIcon } from '@/assets/svg';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { Library, Palette, Presentation, Settings, Shapes } from 'lucide-react';
import { redirect } from '@/navigation';
import DropDown from '@/components/navbar/DropDown';
import LinkItem from '@/components/common/LinkItem';
import Search from '@/components/common/Search';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getCurrentUser } from '@/services/user';
const routes = [
  {
    isActive: 'home',
    href: '/',
    icon: <HomeIcon className="h-4 w-4" />,
    text: 'home',
  },
  {
    href: '/classrooms',
    isActive: 'classrooms',
    icon: <Shapes className="h-4 w-4" />,
    text: 'classrooms',
  },
  {
    href: '/teachers',
    isActive: 'teachers',
    icon: <Teacher className="h-4 w-4" />,
    text: 'teachers',
  },

  {
    href: '/students',
    isActive: 'students',
    icon: <UsersIcon className="h-4 w-4" />,
    text: 'students',
  },
  {
    href: '/courses',
    isActive: 'courses',
    icon: <Presentation className="h-4 w-4" />,
    text: 'courses',
  },
  {
    href: '/subjects',
    isActive: 'subjects',
    icon: <Library className="h-4 w-4" />,
    text: 'subjects',
  },

  {
    href: '/preferences',
    isActive: 'preferences',
    icon: <Palette className="h-4 w-4" />,
    text: 'preferences',
  },
  {
    href: '/settings',
    isActive: 'settings',
    icon: <Settings className="h-4 w-4" />,
    text: 'settings',
  },
];
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  const session = await getServerSession(authOptions);

  await queryClient.prefetchQuery({
    queryKey: ['GetCurrentUser'],
    queryFn: () => getCurrentUser(session?.token?.accessToken || ''),
  });

  if (!session) return redirect('/login');

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] h-svh overflow-hidden">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
              <Link className="flex items-center gap-2 font-semibold" href="#">
                <Package2Icon className="h-6 w-6" />
                <span className="">SmartLearn</span>
              </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                {routes.map((el) => (
                  <LinkItem
                    role={session?.user?.role}
                    key={el.isActive}
                    href={el?.href}
                    isActive={el.isActive}
                    icon={el.icon}
                    text={el.text}
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

            <DropDown />
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 ">
            {children}
          </main>
        </div>
      </div>
    </HydrationBoundary>
  );
}
