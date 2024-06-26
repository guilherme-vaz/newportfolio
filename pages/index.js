import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.css'
import { WorkBadge } from '../components/workBadge/workBadge';
import { About } from '../components/about/about';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guilherme Vaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.menu}>
        <p>Olá hehehe</p>
        <div>
          <Link href='/projects'>Projects</Link>
          <Link href='/hobbies'>Hobbies</Link>
        </div>
      </div>

      <main className={styles.container}>
        <h1 className={styles.title}>
          Guilherme Vaz
        </h1>

        <section className={styles.work}>
          <About />
        </section>
      </main>
    </div>
  );
}
