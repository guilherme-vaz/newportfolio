import Layout from '../components/layout/layout'
import * as C from '../styles/hobbies/style'
import Image from 'next/image'
import Honkai from '../public/images/honkai.png'
import Persona from '../public/images/persona5.ico'
import Stardew from '../public/images/stardew.png'
import Zelda from '../public/images/zelda.webp'

export default function Hobbies() {
    return (
        <Layout>
            <C.Title>Hobbies</C.Title>
            <C.Subtitle>Things I like to do outside work</C.Subtitle>
            <C.OtherTitle>Gaming</C.OtherTitle>
            <Image 
                width={60}
                height={60}
                src={Persona}
            />
            <Image
             width={60}
             height={60}
             src={Honkai}
            />

            <Image
             width={60}
             height={60}
             src={Stardew}
            />

            <Image
             width={60}
             height={60}
             src={Zelda}
            />
        </Layout>
    )
}