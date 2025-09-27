"use client"
import { motion } from "framer-motion"
import ChromaGrid from "./components/ChromaGrid"

export default function Portfolio() {

  const items = [

{
      image: "p6.png",
      title: "Instagram Clone",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #F59E0B, #000)",
      url: "https://minegram-tawny.vercel.app/"
    },
    {
      image: "p5.png",
      title: "Cars Vault",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #F59E0B, #000)",
      url: "https://carsvault.vercel.app/"
    },
    {
      image: "p1.png",
      title: "Pak Tourism",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(180deg, #10B981, #000) ",
      url: "https://paktourism.vercel.app/"
    },
    {
      image: "p2.png",
      title: "Timetable Generator",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #F59E0B, #000)",
      url: "https://timetablegenerator-iota.vercel.app"
    },
    {
      image: "p3.png",
      title: "Weather App",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #EC4899, #000)",
      url: "https://weatherapp-nine-blond.vercel.app"
    },
    {
      image: "p4.png",
      title: "Tic Tac Toe",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #2563EB, #000)",
      url: "https://tictactoe-tau-rose.vercel.app"
    }
    
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hey, I’m <span className="text-indigo-600">Shahmeer</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg md:text-2xl max-w-2xl mb-6"
        >
          Building sleek, modern, and responsive apps with Next.js & Tailwind.
        </motion.p>
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
        >
          View My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          I’m a passionate developer who loves turning ideas into functional,
          user-friendly digital products. My stack revolves around React, Next.js,
          Tailwind, and modern web technologies.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 container mx-auto px-6 bg-white">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>

        <div style={{ height: '600px', position: 'relative' , background:'white'}}>
          <ChromaGrid
            items={items}
            radius={600}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-lg text-gray-600 mb-8">
          Have an idea or project? Let’s build it together.
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/yourusername" className="hover:text-indigo-600">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-indigo-600">LinkedIn</a>
          <a href="mailto:youremail@gmail.com" className="hover:text-indigo-600">Email</a>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Shahmeer. All rights reserved.
      </footer>
    </div>
  )
}
