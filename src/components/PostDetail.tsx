import { FullPost, SimplePost } from '@/model/post';
import Image from 'next/image';
import React from 'react';
import ActionBar from './ActionBar';
import CommentForm from './CommentForm';
import useSWR from 'swr';
import PostUserAvatar from './PostUserAvatar';
import Avatar from './Avatar';

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes, text } = post;
  const { data } = useSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;

  return (
    <section className="flex w-full h-full">
      <div className="relative basis-3/5">
        <Image className="object-cover" src={image} alt={`photo by ${username}`} fill sizes="650px" priority />
      </div>
      <div className="w-full basis-2/5 flex flex-col">
        <PostUserAvatar userImage={userImage} username={username} />
        <ul className="border-t border-gray-200 h-full overflow-y-auto p-4 mb-1">
          {comments &&
            comments.map(({ image, username: commentUsername, comment }, index) => (
              <li key={index} className="flex items-center mb-1">
                <Avatar image={image} size="small" highlight={commentUsername === username} />
                <div className="ml-2">
                  <span className="font-bold mr-1">{commentUsername}</span>
                  <span>{comment}</span>
                </div>
              </li>
            ))}
        </ul>
        <ActionBar post={post} />
        <CommentForm />
      </div>
    </section>
  );
}