import { NextRequest, NextResponse } from 'next/server';

import { validateRequest } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const { user: currentUser } = await validateRequest();

    return NextResponse.json(currentUser);
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
