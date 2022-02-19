import propTypes from 'prop-types';

import {
  Card as MCard, CardContent, Typography, Image,
} from '@system';

import { isUrl } from '@utils';

export function Card({ name, description, image }) {
  return (
    <MCard sx={{ width: '300px', height: '300px' }}>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{description}</Typography>
        <Image src={isUrl(image) ? image : '/images/no-image.png'} alt="ups" width={200} height={200} />
      </CardContent>
    </MCard>
  );
}

Card.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};
