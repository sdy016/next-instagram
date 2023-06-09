'use client';
import { SimplePost } from '@/model/post';
import React, { useEffect, useState } from 'react';
import Avatar from './Avatar';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import Image from 'next/image';
import ModalPortal from './ui/ModalPortal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
import PostUserAvatar from './PostUserAvatar';

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  const [openModal, setOpenModal] = useState(false);

  return (
    <article className="rounded-lg shadow-md border border-gray-200">
      <PostUserAvatar userImage={userImage} username={username} />
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority
        onClick={() => setOpenModal((prev) => !prev)}
      />
      <ActionBar post={post} />
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
          {/* <div className="fixed top-0 left-0 w-full h-full bg-slate-500 z-50">포스트 상세 페이지!</div> */}
          {/* <div className="w-full absolute h-full top-0 flex">
            <Image
              className="w-full object-cover aspect-square"
              src={image}
              alt={`photo by ${username}`}
              width={500}
              height={500}
              priority
              onClick={() => setOpenModal((prev) => !prev)}
            />
            <div className="flex flex-col">
              <ActionBar post={post} />
              <CommentForm />
            </div>
          </div> */}
        </ModalPortal>
      )}
    </article>
  );
}
