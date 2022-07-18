import 'focus-visible'
import '@/styles/tailwind.css'

import Head from 'next/head'
import { Footer } from '@/layouts/Footer'
import { Header } from '@/layouts/Header'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>CacheBounty - Bounty projects made simple for DAOs</title>
        <meta
          name="description"
          content="Most freelance and bounty software is hard to publish in a way that the community could find some found ways to do it, but many have trouble."
        />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
