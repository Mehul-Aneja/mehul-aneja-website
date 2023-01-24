import Head from 'next/head';
import { Inter } from '@next/font/google';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Image from "next/image";
import design from "/public/design.png";
import code from "/public/code.png";
import consulting from "/public/consulting.png";
import {useState} from 'react';
import { SocialIcon } from 'react-social-icons';
import Mehul from "/public/Mehul.jpg"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Mehul Aneja</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-b from-black to-rose-900 pb-10 md:px-20 lg:px-40 dark:bg-gradient-to-b dark:from-white dark:to-teal-500">

        <section className="min-h-screen">

          <nav className="pt-8 flex justify-between">
            <div className="ml-3 transition ease-in-out delay-100 hover:scale-110"> <a className="bg-gradient-to-r from-cyan-500 to-teal-600 text-black px-4 py-2 rounded-md text-lg dark:text-white dark:from-black dark:to-black" href="https://drive.google.com/file/d/16N2rTYLtR0ybMqcgpIp3USMRT8FWinPQ/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a> </div>
            <div className="mr-3"><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="text-cyan-100 cursor-pointer text-3xl transition ease-in-out delay-100 hover:scale-110 dark:text-slate-900" /></div>
          </nav>

          <div className="text-center pt-12">
            <h2 className="text-6xl text-cyan-300 font-medium dark:text-black">Mehul Aneja</h2> 
            <h3 className="text-3xl text-cyan-400 dark:text-slate-900">Student | New York University</h3>
            <h3 className="text-3xl pb-5 text-cyan-400 dark:text-slate-900">646-716-2910 | mehulaneja123@gmail.com</h3>
          </div>

          <div className="relative mx-auto rounded-full w-72 h-72 overflow-hidden">
            <Image src={Mehul} layout="" objectFit="cover" />
          </div>

          <div className="text-center p-6">
            <p className="text-base pb-2 leading-6 text-cyan-100 max-w-screen-md mx-auto dark:text-slate-900">Hello! I&apos;m a student at New York University studying Computer Science and Mathematics.</p>
            <p className="text-base leading-6 text-cyan-100 max-w-screen-md mx-auto dark:text-slate-900">Some of my passion projects are on display here and more works can be found on my resume and Github. Feel free to look around and reach out to me if you&apos;d like to connect!</p>
          </div>

          <div className="text-5xl flex justify-center gap-20 pb-16 text-gray-600">
            <SocialIcon className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105" style={{height: 75, width: 75}} url="https://www.linkedin.com/in/mehulaneja/" fgColor="white" target="_blank" />
            <SocialIcon className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105" style={{height: 75, width: 75}} url="mailto: mehulaneja123@gmail.com" bgColor="white" fgColor="#DB4437" target="_blank" />
            <SocialIcon className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105" style={{height: 75, width: 75}} url="https://github.com/mehul-aneja" bgColor="black" fgColor="white" target="_blank" />
          </div>

        </section>




        {/*<section>

          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800"> I provide ahalf wsushd sidhs <span className="text-teal-500">dudgd</span> duhdd ud dudhdh y hvuwwjdgd uidhwhdjd hdiwhdihbd my services.</p>
            <p className="text-md py-2 leading-8 text-gray-800"> I provide ahalf wsushd sidhs <span className="text-teal-500">dudgd</span> duhdd ud diwhdihbd my services.</p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="relative mx-auto" src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating elegant designs suiting your needs for imporrant design theory.</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="relative mx-auto" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating elegant designs suiting your needs for imporrant design theory.</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="relative mx-auto" src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating elegant designs suiting your needs for imporrant design theory.</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>

        </section>

        <section>

          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800"> I provide ahalf wsushd sidhs <span className="text-teal-500">dudgd</span> duhdd ud dudhdh y hvuwwjdgd uidhwhdjd hdiwhdihbd my services.</p>
            <p className="text-md py-2 leading-8 text-gray-800"> I provide ahalf wsushd sidhs <span className="text-teal-500">dudgd</span> duhdd ud diwhdihbd my services.</p>
          </div>

        

        </section>*/}



      </main>
    </div>
    </>
  )
}
