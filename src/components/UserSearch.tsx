'use client';
import { SearchUser } from '@/model/user';
import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import Avatar from './Avatar';
import GridSpinner from './ui/GridSpinner';
import UserCard from './UserCard';

type Props = {};

export default function UserSearch({}: Props) {
  const [keyword, setKeyword] = useState('');
  const { data: users, isLoading, error } = useSWR<SearchUser[]>(`/api/search${keyword ? '/' + keyword : ''}`);

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  // useEffect(() => {}, [keyword]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full max-w-2xl my-4 flex flex-col items-center">
      <form className="w-full mb-4" onSubmit={onSubmit}>
        <input
          className="w-full text-xl p-3 outline-none border border-gray-400"
          type="text"
          autoFocus
          placeholder="Search for a username or id"
          value={keyword}
          onChange={handleKeyword}
        />
      </form>
      {error && <p>무언가가 잘못 되었다!</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && <p>찾는 사용자가 없음.</p>}
      <ul className="w-full p-4">
        {users &&
          users.map((user: SearchUser) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}
