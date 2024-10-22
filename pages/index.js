import Head from 'next/head';
import * as C from '../styles/index/style'
import { About } from '../components/about/about';
import Layout from '../components/layout/layout';
import { Poppins } from '@next/font/google'

// Subsets are really important. CHECK BELOW FOR MORE INFO
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})



export default function Home() {
  return (
    <div>
      <Head>
        <title className={poppins.className}>Guilherme Vaz</title>
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
