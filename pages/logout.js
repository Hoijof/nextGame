import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { logout } from '@/services/client/userService';
import { deleteToken } from '@/utils/index';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    const f = async () => {
      await logout();

      deleteToken();
      router.replace('/');
    };

    f();
  }, [router]);

  return null;
}
