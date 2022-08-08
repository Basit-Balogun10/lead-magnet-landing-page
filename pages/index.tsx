import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../containers/Hero';
import Services from '../containers/Services';
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
      <div className="bg-[#b3bac7] text-[textColor]">
          <Head>
              <title>John Fenton Technical Soccer Coaching</title>
              <meta
                  name="description"
                  content="The official website of John Fenton Technical Coaching"
              />
              <link rel="icon" href="/john_fenton_icon.ico" />
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