"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[40px] text-white font-semibold w-3/4 sm:w-full">
            I create{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
               Websites,{" "} ML models{" "} and{" "} other cool stuffs{" "}
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
          Full Stack Web Developer in MERN stack with expertise in Next.js and Flask. Proficient in building scalable web applications using RESTful APIs. Experienced in machine learning and deep learning, demonstrating successful model development. 
          Committed to continuous learning and collaboration, delivering innovative solutions with a focus on high-quality results.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Skills
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Experience & PoW
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="absolute  flex bottom-10 z-[60] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-sm text-white max-w-[200px]"
        >
          Skills
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-sm text-white max-w-[200px]"
        >
          Experience
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-sm text-white max-w-[200px]"
        >
          Contact
        </Link>
      </div> */}

      <div className="absolute bottom-0 right-0 z-[10]">
        <img
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40 w-1/2 sm:w-[62%]"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480}/>
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
