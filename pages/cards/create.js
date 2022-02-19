import React from 'react';
import { useRouter } from 'next/router';

import {
  Link, Grid, Input, Button, Typography,
} from '@system';

import { createCard } from '@/services/client/cardService';

export default function CreateCard() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [error, setError] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = React.useCallback(async () => {
    try {
      setIsSubmitting(true);

      const { id } = await createCard({ name, description, image });

      router.push(`/cards/${id}`);
    } catch (e) {
      setError(e.message);
    }
  }, [name, description, image, router]);

  const handleNameChange = React.useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleDescriptionChange = React.useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  const handleImageChange = React.useCallback((e) => {
    setImage(e.target.value);
  }, []);

  if (error) {
    return (
      <Grid container sx={{ alignItems: 'center' }} direction="column">
        <Grid item xs={12}>
          <Typography color="error">{error}</Typography>
          <Link href="/"> Go HOME </Link>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container sx={{ alignItems: 'center', pt: 3 }} direction="column" spacing={2}>
      <Grid item xs={12}>
        <Input value={name} onChange={handleNameChange} placeholder="Card Name" />
      </Grid>
      <Grid item xs={12}>
        <Input value={description} onChange={handleDescriptionChange} placeholder="Description" />
      </Grid>
      <Grid item xs={12}>
        <Input value={image} onChange={handleImageChange} placeholder="Main image" />
      </Grid>
      <Grid item xs={12}>
        <Button disabled={isSubmitting} onClick={onSubmit}>Create Card</Button>
      </Grid>
    </Grid>
  );
}
