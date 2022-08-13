import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../containers/Hero';
import Services from '../containers/Services';
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
      <div className="bg-[#b3bac7] text-[textColor]">
          <Head>
              <title>Midlands Football Academy</title>
              <meta
                  name="description"
                  content="The official website of Midlands Football Academy"
              />
              <link rel="icon" href="/midlands_icon.ico" />
          </Head>

          <main className="">
              <Header />
              <Hero />
              <Services />
          </main>
      </div>
  );
}

export default Home