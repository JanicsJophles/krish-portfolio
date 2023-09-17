import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { BsFillMoonStarsFill, BsStrava, BsDiscord } from "react-icons/bs";

import { useState, useEffect } from "react";
export default function GetStarted() {
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
    <>
      <Head>
        <title>krishs portfolio</title>
        <meta name="description" content="tiktokstuff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit-cover"
        />
      </Head>

      <main className="bg-transparent bg-white dark:bg-black">
        <section className="h-screen">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              First, you must request and download your data from TikTok.
            </h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              To do this, you must go to{" "}
              <a
                href="https://www.tiktok.com/setting/download-your-data"
                target="_blank"
                rel="noopener noreferrer"
                class="underline font-bold"
              >
                https://www.tiktok.com/setting/download-your-data
              </a>{" "}
              and download your data in the JSON format. If you download it in
              the TXT format, this will not work. Also don't upload the zip file.
              Extract the zip file and select the json file that's inside.
              As a privacy note it is
              important to say that your login credentials, your password, are
              not exposed inside of this file. Also this file is not stored or
              downloaded anywhere on our databases/servers.
            </p>
            <div>
              <input
                class="items-center text-sm mb-6 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                accept=".json"
                id="file_input"
                type="file"
              ></input>
              
            </div>

            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href=""
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Continue
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section>
          <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-black dark:border-gray-600">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              2023. Created by{" "}
              <a href="https://krishanator.com/" class="hover:underline">
                Krish Vijayvergia
              </a>
            </span>
          </footer>
        </section>
      </main>
    </>
  );
}
