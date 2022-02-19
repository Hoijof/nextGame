import { getCollection, hashPassword } from '@/utils/apiUtils';

export async function findUser(data) {
  const collection = await getCollection('users');
  const user = await collection.findOne(data);

  return user;
}

export async function createUser(username, password) {
  const collection = await getCollection('users');

  const searchedUser = await findUser({ username });

  if (searchedUser) {
    throw new Error('User already exists');
  }

  const id = await collection.insertOne({ username, password: await hashPassword(password) });

  return id.insertedId;
}

export async function updateUser(_id, data) {
  const collection = await getCollection('users');

  return collection.updateOne({ _id }, { $set: data });
}

export async function generateNewToken(user) {
  const token = await hashPassword(user.username + new Date());

  return token;
}
