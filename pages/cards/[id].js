import { useRouter } from 'next/router';

export default function Card() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <h1>
      Card
      {id}
    </h1>
  );
}
