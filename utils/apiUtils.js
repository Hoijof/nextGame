import bcrypt from 'bcrypt';
import clientPromise from '@/lib/mongodb';

export async function hashPassword(password) {
  return bcrypt.hash(process.env.SALT + password, 9);
}

export async function getCollection(name) {
  const client = await clientPromise;

  const collection = await client.db().collection(name);

  return collection;
}

export async function checkPassword(plainPassword, hashedPassword) {
  return bcrypt.compare(process.env.SALT + plainPassword, hashedPassword);
}

export async function isTokenValid(token) {
  const collection = await getCollection('users');

  const user = await collection.findOne({ token });

  return !!user;
}

export function getToken(req) {
  const basicAuth = req.headers.authorization;

  if (basicAuth) {
    return basicAuth.split(' ')[1];
  }

  return null;
}

export async function isAuth(req) {
  const token = getToken(req);

  if (token && await isTokenValid(token)) {
    return true;
  }

  return false;
}
