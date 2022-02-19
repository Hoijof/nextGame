import { createUser } from '@/services/userService';

export default async function CreateUser(req, res) {
  const { username, password } = req.body;

  try {
    await createUser(username, password);

    res.status(200).json({ status: 'Authorized' });
  } catch (e) {
    res.status(401).json({ status: 'Unauthorized', message: e.message });
  }
}
