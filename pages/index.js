import Head from 'next/head';
import * as C from '../styles/index/style'
import { About } from '../components/about/about';
import Layout from '../components/layout/layout';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Guilherme Vaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <C.Title>
            Guilherme Vaz
          </C.Title>

          <C.Work>
            <About />
          </C.Work>
      </Layout>
    </div>
  );
}
