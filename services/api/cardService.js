import { isUrl } from '@utils';

const NO_IMAGE_URL = '/images/no-image.png';

export async function createCard({ name, description, image }) {
  const response = await fetch('/api/cards/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      description,
      image: isUrl(image) ? image : NO_IMAGE_URL,
    }),
  })

  return await response.json();
}