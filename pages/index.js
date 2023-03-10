import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import manuelguevara from "../public/manuelguevara.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.jpg";
import web3 from "../public/web2.jpg";
import web4 from "../public/web2.jpg";
import web5 from "../public/web2.jpg";
import web6 from "../public/web2.jpg";
import { useState } from "react";
import Link from "next/link";
import reactLogo from "./../public/react.svg";
import "./../styles/Home.module.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Magcdev Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">MagcDev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <Link
                  target="_blank"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1UAGkbsGff1zH8ThAU0_gbtp7QOmJnkmU/view?usp=share_link"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium md:text-6xl">
              Manuel Guevara
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Full Stack Developer</h3>
            <div className=" w-36 mx-auto h-36 relative">
              <Image
              fill
                src={reactLogo}
                className="animate-spin-slow"
                alt="React logo"
              />
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white md:text-lg max-w-xl mx-auto">
              Developer ReactJS | Javascript | NextJS | Node.js. Lets check my
              work down below!
            </p>
          </div>
          <div className="text-5xl flex justify-center text-gray-600 gap-16 dark:text-gray-400">
            <Link href="https://twitter.com/MagcDev" target="_blank">
              <AiFillTwitterCircle />
            </Link>
            <Link
              href="https://www.linkedin.com/in/manuelaguevarac"
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
            <Link href="https://github.com/MagcDEV" target="_blank">
              <AiFillGithub />
            </Link>
          </div>
          <div className=" mt-16 mx-auto md:w-1/3 relative bg-gradient-to-b from-teal-500 rounded-lg ">
            <Image
              alt="Manuel Guevara"
              src={manuelguevara}
              className="mx-auto"
            />
          </div>
        </section>
        <section>
          <div className="mt-2">
            <h3 className="text-3xl py-1 dark:text-white">About me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Software developer with experience in technologies like
              JavaScript, ReactJS, NextJS and Node.js, I create websites and web
              applications with a focus on responsive design and functionality.
              I consider myself a fast learner and highly adaptable to new
              challenges and technologies, I have experience in 100% remote and
              face-to-face work, I also have experience using project management
              software such as Jira and Clickup.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className=" md:w-1/3 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                className="mx-auto"
                alt="code"
                src={code}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Front End Develoment
              </h3>
              <p className="py-2">
                Creating beautifull and responsive websites and web aplications
                using the latest technologies
              </p>
              <h4 className="py-4 text-teal-600">Front End Tools</h4>
              <p className=" text-gray-800 py-1">ReactJS</p>
            </div>
            <div className=" md:w-1/3 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                className="mx-auto"
                alt="code"
                src={design}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Back End Develoment
              </h3>
              <p className="py-2">
                Creating full stack web aplications like APIs
              </p>
              <h4 className="py-4 text-teal-600">Back End Tools</h4>
              <p className=" text-gray-800 py-1">Node.js</p>
              <p className=" text-gray-800 py-1">Typescript</p>
              <p className=" text-gray-800 py-1">Python</p>
              <p className=" text-gray-800 py-1">Java (Spring Boot)</p>
            </div>
            <div className=" md:w-1/3 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                className="mx-auto"
                alt="code"
                src={consulting}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Database Develoment
              </h3>
              <p className="py-2">
                Creating and configuring databases for web aplications
              </p>
              <h4 className="py-4 text-teal-600">DB Tools</h4>
              <p className=" text-gray-800 py-1">MongoDB</p>
              <p className=" text-gray-800 py-1">SQL</p>
              <p className=" text-gray-800 py-1">Postgres</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here are some of my personal projecs where I use technologies like
              ReactJS, NextJS, Tailwindcss, Node.js and more
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1">
              <Image
                src={web1}
                alt="pro"
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                responsive
              />
              <div className="mt-5">
                <p className="m-2 dark:text-white">
                  Browse the marvel API and find your favorite character with my
                  app.
                </p>
                <div className="flex">
                  <Link
                    target="_blank"
                    className="m-2 text-teal-500 font-bold dark:text-white"
                    href="https://github.com/MagcDEV/MarvelHeroes"
                  >
                    Github
                  </Link>
                  <div className="my-auto dark:text-white">
                    <AiFillGithub />
                  </div>
                </div>
                <Link
                  target="_blank"
                  className="m-2 text-teal-500 font-bold"
                  href="https://heroic-granita-7310fe.netlify.app"
                >
                  Check it out!
                </Link>
              </div>
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web2}
                alt="pro"
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                responsive
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web3}
                alt="pro"
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                responsive
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web4}
                alt="pro"
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                responsive
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web5}
                alt="pro"
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                responsive
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web6}
                alt="pro"
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                responsive
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
