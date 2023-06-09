import { SearchUser } from '@/model/user';
import Link from 'next/link';
import React from 'react';
import Avatar from './Avatar';

type Props = {
  user: SearchUser;
};

export default function UserCard({ user: { image, username, name, following, followers } }: Props) {
  return (
    <Link
      href={`/user/${username}`}
      className="flex items-center rounded-md mb-4 border border-gray-300 p-4 bg-white hover:bg-neutral-50"
    >
      {image && <Avatar image={image} size={'large'} />}
      <div className="text-neutral-500 pl-4">
        <p className="text-black font-bold leading-4">{username}</p>
        <p>{name}</p>
        <p className="text-sm leading-4 ">
          <span className="text-red-300 font-bold mr-1">{followers}</span>followers
          <span className="text-red-300 font-bold mx-1">{following}</span>following
        </p>
      </div>
    </Link>
  );
}
