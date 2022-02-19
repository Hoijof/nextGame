import { findUser, generateNewToken, updateUser } from '@/services/userService';
import { checkPassword } from '@/utils/apiUtils';

export default async function Authorize(req, res) {
  const { username, password } = req.body;

  const user = await findUser({ username });

  if (user && await checkPassword(password, user.password)) {
    const token = await generateNewToken(user);

    await updateUser(user._id, { token });

    res.status(200).json({ status: 'Authorized', token });
  } else {
    res.status(401).json({ status: 'Unauthorized', message: 'Invalid username or password' });
  }
}
