import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../containers/Hero";
import Services from "../containers/Services";
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <div className="bg-gray-300/70">
            <Head>
                <title>R-kix Football Coaching</title>
                <meta
                    name="description"
                    content="The official website of R-kix Football Coaching"
                />
                <link rel="icon" href="/rkix_football_coaching_icon.ico" />
            </Head>

            <main className="">
                <Header />
                <Hero />
                <Services />
            </main>
        </div>
    );
};

export default Home;
