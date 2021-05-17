import Head from "next/head";
import { Splash } from "../src/Splash";
import { Navbar } from "../src/Navbar";
import { About } from "../src/About";
import { Skills } from "../src/Skills";
import { Works } from "../src/Works";

export default function Home() {
    return (
        <>
            <Head>
                <title>Daniel Chadwick</title>
                <meta name="description" content="danielchadwick.co.uk powered by Next and NestJS." />
                <meta content="width=device-width, initial-scale=0.8" name="viewport" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={"page-content"}>
                <Splash />

                <Navbar />

                <About />

                <div className={"container mt-8"}>
                    <Skills />
                </div>

                <div className={"container"}>
                    <h2>My Work</h2>

                    <Works />
                </div>
            </main>
        </>
    );
};
