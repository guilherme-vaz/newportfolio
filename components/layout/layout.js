import * as C from './style';
import Link from 'next/link';
import Image from 'next/image';
import Agumon from '../../public/images/agumon.gif'

export default function Layout({children}) {
    return (
        <>
            <C.Menu>
                <Link href='/'>
                    <Image 
                        src={Agumon}
                        width={45}
                        height={45}
                        alt='Agumon'
                        unoptimized
                    />
                </Link>  
                <C.LinksContainer>
                    <Link style={{color: '#404f6b'}} href='/projects'>Projects</Link>
                    <Link style={{color: '#404f6b'}}  href='/hobbies'>Hobbies</Link>
                </C.LinksContainer>
            </C.Menu>

            <C.Container>
                {children}
            </C.Container>
        </>
    )
}
