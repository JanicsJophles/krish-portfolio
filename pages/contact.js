import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
export default function Contact() {
    return(
        <div>
            <Head>
        <title>Contact me</title>
        <meta name="description" content="contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit-cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <main className='h-screen bg-transparent bg-white px-10 dark:bg-black flex justify-center items-center'>
        <section className='min-h-screen'>
         <nav className='py-10 mb-12 flex justify-between'>
         <h1 className='text-black dark:text-white text-xl font-ColateraSoft'>Contact Me! Coming soon...</h1>
         <ul>
            <li>
            
            <Link className='bg-gradient-to-tr bg-lime-400 text-white px-4 py-2 rounded-md ml-8 border-none font-ColateraSoft'
            href='/'
            
              >Go back to home
            </Link>
            </li>
         </ul>
         </nav>
        </section>
      </main>
        
                </div>
    )
}