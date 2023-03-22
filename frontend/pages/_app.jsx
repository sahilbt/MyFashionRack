import '../styles/globals.css'
import {Bree_Serif} from '@next/font/google'
import { AppWrapper } from '../context/userContext'
import { useState } from 'react'

const font = Bree_Serif({
    weight : '400',
    subsets:['latin']
})

export default function App({ Component, pageProps }) {

  
  return(
    <AppWrapper>
      <main className = {font.className}>
          <Component {...pageProps} />
      </main>
    </AppWrapper>
  )
}
