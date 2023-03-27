import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import ModernFeatures from '@/components/ModernFeatures'
import NotComponents from '@/components/NotComponents'

const Home: NextPage = () => {
  return (
    <>
      <main
        className="min-h-screen bg-slate-900 text-slate-400 antialiased" data-props={'test'}
      >
        <Head>
          <title>Not Tailwind CSS | Code Hike Demo</title>
        </Head>

        <Header />
        <ModernFeatures />
        <NotComponents />
      </main>
    </>
  )
}

export default Home
