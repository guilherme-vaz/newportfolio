import * as C from './style'
import { Divisor } from '../Divisor/divisor'

export const About = () => {
    return (
        <div>
            <C.Paragraph>
                Software Developer graduated in <C.Emphasis>Computer Science</C.Emphasis> from the Federal University of Alagoas, Brazil.
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

        </div>
    )
}