import { createCard } from '@/services/cardService';
import { isAuth } from '@/utils/apiUtils';

export default async function handler(req, res) {
  if (!await isAuth(req)) {
    res.status(401).json({ status: 'Unauthorized' });

    return;
  }

  const { name, description, image } = req.body;

  try {
    const id = await createCard({
      name,
      description,
      image,
    });

    res.status(200).json({ id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
