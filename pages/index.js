import Head from 'next/head';
import { Link } from '@system';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>
          NextJs Game
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Link href="/cards/create" variant="body2">
            Create Card
          </Link>
        </div>
      </main>

    </div>
  );
}
