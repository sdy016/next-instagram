'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import ColorButton from './ui/ColorButton';
import { useSession, signIn, signOut } from 'next-auth/react';
import Avatar from './Avatar';

type Props = {};

const menus = [
  { href: '/', icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
  { href: '/search', icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
  { href: '/new', icon: <NewIcon />, clickedIcon: <NewFillIcon /> },
];

export default function Navbar({}: Props) {
  const { data: session } = useSession();
  const path = usePathname();
  const user = session?.user;
  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instagram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menus.map((menu) => (
            <li key={menu.href}>
              <Link href={menu.href}>{path === menu.href ? menu.clickedIcon : menu.icon}</Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} size="small" highlight />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text="Sign out" onClick={() => signOut()} />
            ) : (
              <ColorButton text="Sign in" onClick={() => signIn()} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
