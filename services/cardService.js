import clientPromise from "@/lib/mongodb";

export async function createCard({ name, description, image }) {
  const client = await clientPromise;

  try {
    const id = await client.db().collection('cards').insertOne({
      name,
      description,
      image,
    });

    return id.insertedId;
  } catch (e) {
    throw e;
  }
}

export async function getAllCards() {
  const client = await clientPromise;

  const cards = await client.db().collection('cards').find({}).toArray();

  return JSON.parse(JSON.stringify(cards));
}