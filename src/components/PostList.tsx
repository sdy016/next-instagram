'use client';
import React from 'react';
import useSWR from 'swr';
import { SimplePost } from '@/model/post';
import PostCard from './PostCard';
import GridSpinner from './ui/GridSpinner';

type Props = {};

export default function PostList({}: Props) {
  const { data: posts, isLoading: loading } = useSWR<SimplePost[]>('/api/posts');

  return (
    <section>
      {loading && (
        <div className="text-center mt-40">
          <GridSpinner color="red" />
        </div>
      )}

      {posts && (
        <ul className="">
          {posts.map((post, index) => {
            return (
              <li key={post.id} className="mb-4">
                <PostCard post={post} priority={index < 2} />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
