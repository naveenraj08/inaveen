import Head from 'next/head'
import App from './_app'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Service } from '@/components/services'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Experience />
      <Service />
      <Contact />

    </>
  )
}
