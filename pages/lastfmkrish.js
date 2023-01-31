import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function LastFMWebsite() {
    return(
        <div>
            <Head>
                <title>lastfmauth</title>
                <meta name="description" content="lastfmapiauthkrish" />
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit-cover" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
            <section className='min-h-screen'>
                <h1>Callback URI</h1>
                </section>
            </main>
        </div>
    )
}