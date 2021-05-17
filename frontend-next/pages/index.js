import Head from "next/head";
import { Splash } from "../src/Splash";

export default function Home() {
    return (
        <>
            <Head>
                <title>Daniel Chadwick</title>
                <meta name="description" content="danielchadwick.co.uk powered by Next and NestJS." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={"page-content"}>
                <Splash />
            </main>
        </>
    );
};
