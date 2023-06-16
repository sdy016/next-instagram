import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/route';
import {
  getFollowingPostsOf,
  getLikedPostsOf,
  getPost,
  getPostsOf,
  getSavedPostsOf,
} from '@/service/posts';
// import { getUser, searchUsers } from '@/service/user';
// import { getUserByUsername } from '@/service/user';

type Context = {
  params: {
    slug: string[];
  };
};

export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params;
  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse('Bad Request', { status: 400 });
  }
  const [username, query] = slug;

  let request = getPostsOf;
  if (query === 'saved') {
    request = getSavedPostsOf;
  } else if (query === 'liked') {
    request = getLikedPostsOf;
  }

  return request(username).then((data) => NextResponse.json(data));
}
