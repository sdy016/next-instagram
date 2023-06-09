import React from 'react';
import Image from 'next/image';
import HeartIcon from './ui/icons/HeartIcon';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import { parseDate } from '@/util/date';
import { SimplePost } from '@/model/post';

type Props = {
  post: SimplePost;
};

export default function ActionBar({ post: { image, username, likes, createdAt, text } }: Props) {
  return (
    <>
      <div className="flex justify-between items-center my-2 px-4">
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div className="px-4 py-1">
        <p className="text-sm font-bold mb-2">{`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : 'like'}`}</p>
        {text && (
          <p>
            <span className="font-bold mr-1">{username}</span>
          </p>
        )}
        <p className="text-xs text-neutral-500 uppercase my-4">{parseDate(createdAt)}</p>
      </div>
    </>
  );
}
