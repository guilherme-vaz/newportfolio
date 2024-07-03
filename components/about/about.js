import Link from 'next/link'
import * as C from './style'
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram, AiFillSpotify,  } from "react-icons/ai";
import { SiSteam } from "react-icons/si";
import { Divisor } from '../Divisor/divisor'
import { WorkBadge } from '../workBadge/workBadge';

export const About = () => {
    return (
        <div>
            <C.Paragraph>
                Hello I'm Guilherme, a software developer graduated in <C.Emphasis>Computer Science</C.Emphasis> from the Federal University of Alagoas, Brazil.
            </C.Paragraph>

            <C.Paragraph>
                In my last job, I was responsible for developing web interfaces using <C.Emphasis>React.js and TypeScript</C.Emphasis> at AIRed Geotecnologia. I was able to provide support integrating a payment API for our SaaS product, as well as bring new components and styling using <C.Emphasis>Styled-components</C.Emphasis>.
            </C.Paragraph>

            <C.Paragraph>
                I worked as an <C.Emphasis>UX Design</C.Emphasis> intern at SenseData, where I developed wireframes, prototypes, conducted research, and usability testing for a customer success product.
                I brought new solutions and features with my expertise using tools like <C.Emphasis>Figma</C.Emphasis>, and principles like <C.Emphasis>Design Thinking</C.Emphasis> and <C.Emphasis>Nielsen's Heuristics</C.Emphasis> to the product.
            </C.Paragraph>

            <C.Paragraph>
                Additionally, I have experience in backend development and Machine learning with <C.Emphasis>Node</C.Emphasis>, <C.Emphasis>AWS Serverless</C.Emphasis>, <C.Emphasis>DynamoDB</C.Emphasis>, <C.Emphasis>MySQL</C.Emphasis>, <C.Emphasis>Django</C.Emphasis> and <C.Emphasis>Python</C.Emphasis>.
            </C.Paragraph>

            <Divisor />

            <C.Subtitle>
                Volunteer Work
            </C.Subtitle>

            <C.Paragraph>
                I was a volunteer at <Link href={'https://techprobem.com.br/'} target='_blank'><C.Emphasis $underline $color>Tech Pro Bem</C.Emphasis></Link>, where I assisted the backend team in developing the website for a public health NGO, <Link href={'https://www.saudedarua.org/'}><C.Emphasis $underline $color>Saúde da Rua</C.Emphasis></Link>.
            </C.Paragraph>

            <C.Paragraph>
                I volunteered with the <Link href={'https://devsfree.com.br/'} target='_blank'><C.Emphasis $underline $color>DevsFree</C.Emphasis></Link> community, where I redesigned a client's platform and led the frontend development team for its creation. Unfortunately, I had to conclude my involvement before the project was completed, but you can view the design I created <Link href={'https://www.figma.com/proto/cKVpsTL8UMWs3z8uytmRfD/ICPA---Website?node-id=1133-2&starting-point-node-id=1133%3A2&t=abGJBorl1OwVZyEp-1'} target='_blank'><C.Emphasis $underline $color>here</C.Emphasis></Link>.
            </C.Paragraph>

            <Divisor />

            <C.Subtitle>
                Find me on
            </C.Subtitle>

            <C.Social>
                <WorkBadge notImg img={<AiOutlineGithub size={20}/>} link='https://github.com/guilherme-vaz' text={'GitHub'} />
                <WorkBadge notImg img={<AiFillLinkedin size={20}/>} link='https://www.linkedin.com/in/guiilherme-vaz/' text={'LinkedIn'} />
                <WorkBadge notImg img={<AiOutlineInstagram size={20}/>} link='https://www.instagram.com/guiilherme.vaz/' text={'Instagram'} />
                <WorkBadge notImg img={<AiFillSpotify size={20}/>} link='https://open.spotify.com/user/kinquas?si=8667311005c74cfe' text={'Spotify'} />
                <WorkBadge notImg img={<SiSteam size={18}/>} link='https://steamcommunity.com/id/kinquas/' text={'Steam'} />
            </C.Social>

            <C.SmallText $paddingTop>Or mail me at guilhermeolivaaz@gmail.com</C.SmallText>
            <C.SmallText $opacity $marginTop $textAlign $marginBottom>2024-PRESENT &#169; Guilherme Vaz</C.SmallText>


        </div>
    )
}