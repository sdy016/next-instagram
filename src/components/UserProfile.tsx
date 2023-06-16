'use client';
import { HomeUser, ProfileUser, SearchUser } from '@/model/user';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import Avatar from './Avatar';
import FollowButton from './FollowButton';

type Props = {
  user: ProfileUser;
};

export default function UserProfile({ user }: Props) {
  const { image, name, username, posts, followers, following } = user;
  const info = [
    { text: 'posts', count: posts },
    { text: 'followers', count: followers },
    { text: 'following', count: following },
  ];
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-12 border-b border-neutral-300">
      <Avatar size="xlarge" highlight image={image} />
      <div className="md:ml-10 basis-1/3">
        <div className="flex flex-col items-center md:flex-row">
          <h1 className="text-2xl md:mr-8 my-2 md:mb-0">{username}</h1>
          <FollowButton user={user} />
        </div>
        <ul className="my-4 flex gap-4">
          {info.map(({ text, count }, index) => (
            <li key={index}>
              <span className="font-bold mr-1">{count}</span>
              {text}
            </li>
          ))}
        </ul>
        <p className="text-xl font-bold text-center md:text-start">{name}</p>
      </div>
    </section>
  );
}
