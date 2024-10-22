import '../styles/global.css'
import { Poppins } from '@next/font/google'

// Subsets are really important. CHECK BELOW FOR MORE INFO
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function App({ Component, pageProps }) {
    return (
        <main className={poppins.className}>
            <Component {...pageProps} />
        </main>
    )
}
