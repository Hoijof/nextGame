export default function handler(req, res) {
  const client = await clientPromise

  await client.db().collection('cards').insertOne({
    name,
    description,
    image,
  });


  res.status(200).json({ status: "Healthy!" })
}