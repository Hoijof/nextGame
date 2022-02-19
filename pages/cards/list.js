import { Link, Grid, Typography } from '@system';

import { getAllCards } from '@/services/cardService';

import { Card } from '@/components/Card';

export default function ListCard({ cards = [] }) {
  if (cards.length === 0) {
    return (
      <Grid container sx={{ alignItems: 'center' }}>
        <Grid item xs={12}>
          <Typography>NO CARDS YET</Typography>
          <Link href='/'> Go HOME </Link>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container sx={{ alignItems: 'center' }} spacing={2}>

      {cards.map((card, key) => (
        <Grid item key={key}>
          <Card name={card.name} description={card.description} image={card.image} />
        </Grid>
      ))}
    </Grid>
  )
}

export async function getServerSideProps() {
  const cards = await getAllCards();

  return {
    props: { cards },
  }
}