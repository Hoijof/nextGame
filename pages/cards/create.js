import React from 'react';
import { useRouter } from 'next/router';

import { createCard } from '@/services/api/cardService';

import { Link, Grid, Input, Button, Typography } from '@system';

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
      <Grid container sx={{ alignItems: 'center' }}>
        <Grid item xs={12}>
          <Typography color="error">{error}</Typography>
          <Link href='/'> Go HOME </Link>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container sx={{ alignItems: 'center' }}>
      <Grid item xs={12}>
        <Input value={name} onChange={handleNameChange} placeholder="Card Name" />
        <Input value={description} onChange={handleDescriptionChange} placeholder="Description" />
        <Input value={image} onChange={handleImageChange} placeholder="Main image" />

        <Button disabled={isSubmitting} onClick={onSubmit}>Create Card</Button>
      </Grid>
    </Grid>
  )
}