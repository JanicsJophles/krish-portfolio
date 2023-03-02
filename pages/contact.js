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
        <nav className=" px-2 sm:px-4 py-2.5 rounded ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <a href="#" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Page under construction..
                </span>
              </a>
              </div>
              <ul>
                  <li>
                    <div className='self-center'>
                    <button type="button" className="self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link href="/">Click this button to go back to home</Link></button>
                    
                    </div>
                  </li>
                  </ul>
              </nav>
        </section>
      </main>
        
      </div>
    )
}