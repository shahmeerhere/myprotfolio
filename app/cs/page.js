"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLaptopCode, FaEnvelope, FaNetworkWired, FaLinux } from "react-icons/fa";

export default function AspirantHero() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* NAVBAR */}
      <header className="py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-20 bg-black/90 backdrop-blur-sm border-b border-gray-800 shadow-lg">
        <h1 className="text-lg sm:text-xl font-bold tracking-[0.25em] text-white">
          A S P I R A N T
        </h1>
        <button className="md:hidden text-white hover:text-gray-400 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </header>

      {/* HERO SECTION */}
      <main className="flex flex-col md:flex-row min-h-screen pt-20 md:pt-0">
        {/* LEFT: IMAGE */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="w-full md:w-1/2 relative">
          <Image src="/hacker.jpg" alt="Shahmeer Shahid — Red Hat & Networking" width={1000} height={1200} className="w-full h-full object-cover opacity-90" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </motion.div>

        {/* RIGHT: TEXT CONTENT */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="w-full md:w-1/2 flex flex-col justify-center p-8 sm:p-12 md:p-16 bg-black">
          <div className="max-w-xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-cyan-400 font-light text-2xl mb-3 tracking-wide">
              My Ongoing Journey
            </motion.h2>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Red Hat & Networking <br /> <span className="text-gray-400">In the Making</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }} className="text-gray-300 mb-8 leading-relaxed text-base sm:text-lg">
              I’m <span className="text-white font-semibold">Shahmeer Shahid</span>, a computer science student expanding expertise in <span className="text-white">Linux</span>, <span className="text-white">Networking</span>, and <span className="text-white">cybersecurity</span>. Currently working hands-on with Linux virtual machines, network setup, and preparing for <span className="text-red-500 font-bold">Red Hat certification</span>.
            </motion.p>

            {/* SKILL ICONS / NETWORKING PLACEHOLDER */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.6 }} className="flex flex-wrap gap-6 mb-10">
              <div className="flex flex-col items-center cursor-pointer">
                <FaLinux className="text-5xl text-orange-300 drop-shadow-lg mb-2" />
                <span className="text-white font-semibold">Linux</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <FaNetworkWired className="text-5xl text-cyan-400 drop-shadow-lg mb-2" />
                <span className="text-white font-semibold">Networking</span>
              </div>
              {/* Placeholder for networking certificate */}
              <div className="flex flex-col items-center cursor-pointer opacity-40">
                <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center">
                  ?
                </div>
                <span className="text-gray-400 mt-2 text-sm text-center">Networking Certificate</span>
              </div>
            </motion.div>

            {/* BUTTON GROUP */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.6 }} className="flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 bg-white/10 backdrop-blur-sm text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600 font-semibold rounded-lg shadow-md hover:shadow-cyan-500/30 text-center w-full sm:w-auto transition">
                View Projects
              </a>

              <a href="#contact" className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-black transition shadow-md text-center w-full sm:w-auto">
                Connect
              </a>

              <a href="/resume.pdf" download className="px-6 py-3 bg-transparent border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-black transition shadow-md hover:shadow-cyan-500/40 text-center w-full sm:w-auto">
                Download Resume
              </a>

              {/* Placeholder for Networking project URL */}
              <a href="#" className="px-6 py-3 bg-transparent border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-black transition shadow-md hover:shadow-green-500/40 text-center w-full sm:w-auto">
                Networking Projects
              </a>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Let’s Connect</h2>
        <p className="text-lg text-gray-400 mb-8">Have an idea? Let’s make it real.</p>
        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <Link href="https://github.com/shahmeerhere" className="flex items-center gap-2 hover:text-white transition">
            <FaLaptopCode /> GitHub
          </Link>
          <Link href="https://linkedin.com/in/shahmeershahid" className="flex items-center gap-2 hover:text-white transition">
            LinkedIn
          </Link>
          <Link href="mailto:theshahmeer786@gmail.com" className="flex items-center gap-2 hover:text-white transition">
            <FaEnvelope /> Email
          </Link>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-500 hidden md:block z-10">
        Theme | Aspirant Mode ⚡
      </div>
    </div>
  );
}
