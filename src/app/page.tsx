'use client';
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      {/* header */}
      <div className="w-full p-0 md:p-5 lg:p-5 mb-4 md:mb-0 lg:mb-0 flex justify-around flex-col md:flex-row lg:flex-row items-center">
        <div className="w-full md:w-2/5 lg:w-2/5 mb-4 md:mb-0 lg:mb:0 flex justify-center">
          <h2 className="text-4xl font-extrabold dark:text-white">Erick Pinedo</h2>
        </div>
        <div className="w-full md:w-2/5 flex justify-between">
          <a href="#about">About</a>
          <a href="#Experience">Experience</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>


      {/* intro */}
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
        {/* image */}
        <div style={{ borderRadius: '400px', overflow: 'hidden' }}
          className="relative h-44 w-44 md:h-96 md:w-96 lg:h-96 lg:w-96">
          <Image
            src="/profile-rounded.jpg"
            // width={500}
            // height={500}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover" />
        </div>
        {/* info */}
        <div className="w-full flex flex-col 
        justify-center items-center">

          <p className="mb-5 mt-5">          <small className="font-semibold text-gray-500 dark:text-gray-400">Hello I'm</small></p>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Erick Pinedo </h1>
          <h1 className="mb-5 mt-5 flex items-center text-5xl font-extrabold dark:text-white"><span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">Full Stack Developer</span></h1>

          {/* <h2 className="mb-4 mt-4"><span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Full Stack Developer</span></h2> */}
          <div className="mb-4 mt-4 flex flex-row">
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Downloadd CV</button>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Contact Info</button>

          </div>
          <div className="mb-4 mt-4 flex flex-row justify-between">
            <Image
              src="/linkedin.png"
              width={30}
              height={30}
              alt="Picture of the author"
              className="ml-2 mr-2" />
            <Image
              src="/github.png"
              width={30}
              height={30}
              alt="Picture of the author"
              className="ml-2 mr-2" />
            <Image
              src="/logo-instagram-black and white.avif"
              width={30}
              height={30}
              alt="Picture of the author"
              className="ml-2 mr-2" />
          </div>

        </div>
      </div>

    </main>
    );
}