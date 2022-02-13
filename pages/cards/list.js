import { Link, Grid, Card, CardContent, Typography } from '@system';
import { getAllCards } from '@/services/cardService';


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
    <Grid container sx={{ alignItems: 'center' }}>
      <Grid item xs={12}>
        {cards.map((card, key) => (
          <Card key={key}>
            <CardContent>
              <Typography>{card.name}</Typography>
              <Typography>{card.description}</Typography>
              <img src={card.image} alt="ups" />
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  )
}

export async function getServerSideProps() {
  const cards = await getAllCards();

  return {
    props: { cards },
  }
}