import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Creators } from '@/components/Creators'

export default function Home() {
  return (
    <>
      <Head>
        <title>CacheBounty - Bounty projects made simple for DAOs</title>
        <meta
          name="description"
          content="Most freelance and bounty software is hard to publish in a way that the community could find some found ways to do it, but many have trouble."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Creators />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
