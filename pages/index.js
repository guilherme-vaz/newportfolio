import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/index.module.css'
import * as C from '../styles/index'
// import { WorkBadge } from '../components/workBadge/workBadge';
import { About } from '../components/about/about';
import Agumon from '../public/images/agumon.gif'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Guilherme Vaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <C.Menu>  
        <Image 
            src={Agumon}
            width={45}
            height={45}
            alt='Agumon'
            unoptimized
          />
        <C.LinksContainer>
          <Link style={{color: '#404f6b'}} href='/projects'>Projects</Link>
          <Link style={{color: '#404f6b'}}  href='/hobbies'>Hobbies</Link>
        </C.LinksContainer>
      </C.Menu>

      <C.Container>
      
        <C.Title>
          Guilherme Vaz
        </C.Title>

        <C.Work>
          <About />
        </C.Work>
      </C.Container>
    </div>
  );
}
