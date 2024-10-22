import * as C from './style'
import Link from 'next/link'

export const VolunteerInfo = () => {
    return (
        <div>
            <C.Subtitle>
                Volunteer Work
            </C.Subtitle>

            <C.Paragraph>
                I was a volunteer at <Link href={'https://techprobem.com.br/'} target='_blank'><C.Emphasis $underline $color>Tech Pro Bem</C.Emphasis></Link>, where I assisted the backend team in developing the website for a public health NGO, <Link href={'https://www.saudedarua.org/'}><C.Emphasis $underline $color>Saúde da Rua</C.Emphasis></Link>.
            </C.Paragraph>

            <C.Paragraph>
                I volunteered with the <Link href={'https://devsfree.com.br/'} target='_blank'><C.Emphasis $underline $color>DevsFree</C.Emphasis></Link> community, where I redesigned a client's platform and led the frontend development team for its creation. Unfortunately, I had to conclude my involvement before the project was completed, but you can view the design I created <Link href={'https://www.figma.com/proto/cKVpsTL8UMWs3z8uytmRfD/ICPA---Website?node-id=1133-2&starting-point-node-id=1133%3A2&t=abGJBorl1OwVZyEp-1'} target='_blank'><C.Emphasis $underline $color>here</C.Emphasis></Link>.
            </C.Paragraph>
        </div>
    )
}