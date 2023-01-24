import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import {
   BsFillMoonStarsFill,
   BsStrava,
   BsDiscord,
 } from "react-icons/bs";
import Typewriter from 'typewriter-effect';
import {
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiAdguard
} from "react-icons/si"
import krish from '../public/krish.png'
import { useState, useEffect } from 'react';
export default function Home() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  
  return (
    <>
      <Head>
        <title>Krish Vijayvergia's Portfolio</title>
        <meta name="description" content="Yuppity yup yup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-screen bg-white px-10 dark:bg-black flex justify-center items-center'>
        <section className='min-h-screen'>
         <nav className='py-10 mb-12 flex justify-between'>
         <h1 className='text-black dark:text-white text-xl font-ColateraSoft'>krish "krishanator" vijayvergia</h1>
         <ul className='flex items-center'>
        
          <li>
            <BsFillMoonStarsFill className="text-black dark:text-white cursor-pointer text-2xl ml-4" onClick={handleThemeSwitch}/>
          </li>
          
          <li>
            <a href='https://twitter.com/krishanatoryt' rel="noopener noreferrer" target="_blank"><AiFillTwitterCircle className=" text-black dark:text-white cursor-pointer text-2xl ml-4"/></a>
          </li>

          <li>
          <a href='https://www.youtube.com/channel/UCZ8G9EZZ11QJ6mTgIimyy-g' rel="noopener noreferrer" target="_blank"><AiFillYoutube className=" text-black dark:text-white cursor-pointer text-2xl ml-4"/></a>
          </li>

          <li>
          <a href='https://www.strava.com/athletes/86482587' rel="noopener noreferrer" target="_blank"><BsStrava className=" text-black dark:text-white cursor-pointer text-2xl ml-4"/></a>
          </li>

          <li>
          <a href='https://discord.gg/FXTZxSbDWE' rel="noopener noreferrer" target="_blank"><BsDiscord className=" text-black dark:text-white cursor-pointer text-2xl ml-4" /></a>
          </li>
          
          <li>
            <a
            className='bg-gradient-to-tr bg-lime-400 text-white px-4 py-2 rounded-md ml-8 border-none font-ColateraSoft'
            href='#'
            >
              Contact Me
            </a>
          </li>
         </ul>
         </nav> 
         <div className='font-ColateraSoft text-4xl text-center text-gray-500'>
         <div>
         <Typewriter
         options={{
          loop:true
         }}
         onInit={(typewriter) => {
          typewriter.typeString("Who is Krish Vijayvergia?")
          .pauseFor(15000)
          .deleteAll()
          .pauseFor(1000)
          .start()
         }}
         />
         </div>
         </div>
         <div className='text-black dark:text-white font-ColateraSoft text-2xl text-center mt-4'>
          <h2>Student, Developer, and Runner</h2>
         </div>
         <div className='text-black dark:text-white font-ColateraSoft text-center mt-2'>
          <p>Hello! I am Krish! I like to run, play videogames, and I also love to create discord bots! I am learning so much about code everyday!</p>
          <p>If you want me to create a discord bot for you, please hit the contact me button in the top right!</p>
          <p>As you can also see, my other socials like discord, strava, youtube, and twitter are pinned! Click those buttons!</p>
         </div>
         <div className="text-5xl flex justify-center mt-4 mb-0 gap-8 py-2 text-gray-600 dark:text-gray-400">
              <SiJavascript />
              <SiHtml5 />
              <SiReact />
              <SiTailwindcss />
              <SiTypescript />
            </div>
         <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-19 md:h-70 md:w-70">
         
              <Image src={krish} layout="fill" objectFit="cover" />
            
            </div>
            
         <footer className='text-4xl flex justify-center mt-4 mb-0 gap-8 py-2 text-black dark:text-gray-400'>
          
         </footer>


      <style jsx>{`
        
        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          border-color: gray
          
         
        }
        
        
        
      `}</style>
        </section>
      </main>
    </>
  )
}
