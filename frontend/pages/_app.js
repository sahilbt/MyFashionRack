import '@/styles/globals.css'
import {Bree_Serif} from '@next/font/google'

const font = Bree_Serif({
    weight: '400',
    subsets:['latin'],
})

export default function App({ Component, pageProps }) {
  return(
    <main className = {font.className}>
        <Component {...pageProps} />
    </main> 
  )
}
