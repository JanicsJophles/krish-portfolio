import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Collapse } from "flowbite";
import { BsFillMoonStarsFill, BsStrava, BsDiscord } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiAdguard,
} from "react-icons/si";
import krish from "../public/krish.png";
import { useState, useEffect } from "react";
export default function Home() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

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
    <div>
      <Head>
        <title>krishs portfolio</title>
        <meta name="description" content="Yuppity yup yup" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit-cover"
        />
      </Head>

      <main className="h-screen bg-transparent bg-white dark:bg-black pt-8">
        <section className="min-h-screen">
          <nav className=" px-2 sm:px-4 py-2.5 rounded ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <a href="#" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  krish vijayvergia
                </span>
              </a>

              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-default"
              >
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                  <li>
                    <button
                      className="py-2 pl-3 pr-4 text-xl text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent sm:inline-block"
                      onClick={handleThemeSwitch}
                    >
                      <BsFillMoonStarsFill className="mr-2" />
                    </button>
                  </li>
                  <li>
                    <a
                      href="https://github.com/JanicsJophles"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/krish-vijayvergia-33b54928b/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.strava.com/athletes/86482587"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      strava
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:krishwinrocks@gmail.com"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="font-ColateraSoft text-2xl text-center text-gray-500">
            <div>
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Who is Krish Vijayvergia?")
                    .pauseFor(15000)
                    .deleteAll()
                    .pauseFor(1000)
                    .start();
                }}
              />
            </div>
          </div>
          <div className="text-black dark:text-white font-ColateraSoft text-xl text-center mt-2">
            <h2>Genius, billionaire, playboy, philanthropist?</h2>
          </div>
          <div className="text-black dark:text-white font-ColateraSoft text-center mt-2">
            <p>
              Nah. But yo im Krish i code sometimes. I mainly code in JavaScript, but I do know
              some Dart and HTML.
            </p>
            <p>
              I create websites, build apps, and code discord bots sometimes. 
            </p>
            <p>
              I love running and I hope to win nationals one day!
              Some of my socials are linked in the top right, go check em out!
            </p>
          </div>
          <div className="text-5xl flex justify-center mt-4 mb-0 gap-8 py-2 text-gray-600 dark:text-gray-400">
            <SiJavascript />
            <SiHtml5 />
            <SiReact />
            <SiTailwindcss />
            <SiTypescript />
          </div>
          <div className="mx-auto bg-gradient-to-b rounded-full w-60 h-60 relative overflow-hidden mt-19 md:h-70 md:w-70">
            <Image src={krish} layout="fill" objectFit="cover" />
          </div>

          <footer className="text-4xl flex justify-center mt-4 mb-0 gap-8 py-2 text-black dark:text-gray-400"></footer>
        </section>
      </main>
    </div>
  );
}
