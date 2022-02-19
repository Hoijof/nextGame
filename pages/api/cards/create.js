import { createCard } from "@/services/cardService";

export default async function handler(req, res) {
  const { name, description, image } = req.body;

  try {
    const id = await createCard({
      name,
      description,
      image,
    });

    res.status(200).json({ id })

  } catch (e) {
    res.status(500).json({ error: e.message })

  }
}