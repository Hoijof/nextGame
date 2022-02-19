import { isAuth, getToken } from '@/utils/apiUtils';
import { findUser } from '@/services/userService';

export default async function UserInfo(req, { status }) {
  if (!await isAuth(req)) {
    status(401).json({ status: 'Unauthorized' });

    return null;
  }

  const user = await findUser({ token: getToken(req) });

  status(200).json({ user });
}
