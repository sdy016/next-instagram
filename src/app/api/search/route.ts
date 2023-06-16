import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { searchUsers } from '@/service/user';

export const dynamic = 'force-dynamic';
export async function GET() {
  return searchUsers().then((data) => NextResponse.json(data));
}
