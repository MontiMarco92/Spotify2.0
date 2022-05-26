import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="h-screen bg-black">
      <Head>
        <title>Spotify - 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full">
        {/* sidebar */}
        <Sidebar />
        {/* center */}
      </main>

      {/* player */}
    </div>
  )
}

export default Home
