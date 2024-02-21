import { redirect } from 'next/navigation';

import { validateRequest } from '@/lib/auth';
import SignOut from '@/components/sign-out';

export default async function Page() {
  const { user } = await validateRequest();

  if (!user) {
    redirect('/login');
  }

  return (
    <div>
      Page
      <SignOut />
    </div>
  );
}
