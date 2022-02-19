import { isAuth, getToken } from '@/utils/apiUtils';
import { findUser, updateUser } from '@/services/userService';

export default async function Logout(req, res) {
  if (!await isAuth(req)) {
    res.status(401).json({ status: 'Unauthorized' });

    return null;
  }

  const user = await findUser({ token: getToken(req) });

  await updateUser(user._id, { token: '' });

  res.status(200).json({ status: 'Logged out' });
}
