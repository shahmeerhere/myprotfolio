"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Portfolio() {

  const items = [
    {
      image: "p6.png",
      title: "Instagram Clone",
      description: "A full-stack clone of Instagram with authentication, posts, and responsive UI.",
      url: "https://minegram-tawny.vercel.app/"
    },
    {
      image: "p5.png",
      title: "Cars Vault",
      description: "An elegant car showroom web app showcasing modern design & interactivity.",
      url: "https://carsvault.vercel.app/"
    },
    {
      image: "p1.png",
      title: "Pak Tourism",
      description: "A tourism platform to explore beautiful destinations across Pakistan.",
      url: "https://paktourism.vercel.app/"
    },
    {
      image: "p2.png",
      title: "Timetable Generator",
      description: "A smart timetable generator that helps students organize schedules with ease.",
      url: "https://timetablegenerator-iota.vercel.app"
    },
    {
      image: "p3.png",
      title: "Weather App",
      description: "A real-time weather tracking app powered by OpenWeather API.",
      url: "https://weatherapp-nine-blond.vercel.app"
    },
    {
      image: "p4.png",
      title: "Tic Tac Toe",
      description: "A fun, responsive Tic Tac Toe game with multiplayer support.",
      url: "https://tictactoe-tau-rose.vercel.app"
    }
  ];




  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          Hey, I’m <span className="text-indigo-500">Shahmeer</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg md:text-2xl max-w-2xl mb-6 text-gray-400"
        >
          Building sleek, modern, and responsive apps with Next.js & Tailwind.
        </motion.p>
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition"
        >
          View My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          I’m a passionate developer who loves turning ideas into functional,
          user-friendly digital products. My stack revolves around React, Next.js,
          Tailwind, and modern web technologies.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-900 rounded-2xl shadow hover:shadow-indigo-600/50 transition">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Frontend Development</h3>
            <p className="text-gray-400">Crafting sleek, modern UIs with React, Next.js & Tailwind CSS.</p>
          </div>
          <div className="p-8 bg-gray-900 rounded-2xl shadow hover:shadow-indigo-600/50 transition">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Backend Development</h3>
            <p className="text-gray-400">Building scalable APIs and integrating databases with secure logic.</p>
          </div>
          <div className="p-8 bg-gray-900 rounded-2xl shadow hover:shadow-indigo-600/50 transition">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Full-Stack Projects</h3>
            <p className="text-gray-400">Delivering complete solutions from ideation to deployment.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Projects</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="h-64 flex items-end p-6"
                style={{
                  backgroundImage: `${item.gradient}, url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-xl font-bold text-white drop-shadow-lg">
                  {item.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Let’s Connect</h2>
        <p className="text-lg text-gray-400 mb-8">
          Have an idea or project? Let’s build it together.
        </p>
        <div className="flex justify-center gap-8 text-lg">
          <Link href="https://github.com/shahmeerhere" className="hover:text-indigo-500">GitHub</Link>
          <Link href="https://linkedin.com/in/yourusername" className="hover:text-indigo-500">LinkedIn</Link>
          <Link href="mailto://theshahmeer786@gmail.com" className="hover:text-indigo-500">Email</Link>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-600 border-t border-gray-800">
        © {new Date().getFullYear()} Shahmeer. All rights reserved.
      </footer>
    </div>
  )
}
