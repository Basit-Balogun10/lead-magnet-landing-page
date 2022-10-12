import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../containers/Hero";
import Services from "../containers/Services";
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <div className="bg-gray-300/70">
            <Head>
                <title>Vision Football Club</title>
                <meta
                    name="description"
                    content="The official website of Vision Football Club"
                />
                <link rel="icon" href="/vision_football_club_icon.ico" />
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
