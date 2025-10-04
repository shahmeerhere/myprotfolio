"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Portfolio() {
  const items = [
    {
      image: "/p6.png",
      title: "Instagram Clone",
      description: "A full-stack clone of Instagram with authentication, posts, and responsive UI.",
      url: "https://minegram-tawny.vercel.app/",
      gradient: "linear-gradient(180deg, rgba(79,70,229,0.6), rgba(168,85,247,0.7), rgba(0,0,0,0.85))"
    },
    {
      image: "/p5.png",
      title: "Cars Vault",
      description: "An elegant car showroom web app showcasing modern design & interactivity.",
      url: "https://carsvault.vercel.app/",
      gradient: "linear-gradient(180deg, rgba(6,182,212,0.6), rgba(236,72,153,0.6), rgba(0,0,0,0.85))"
    },
    {
      image: "/p1.png",
      title: "Pak Tourism",
      description: "A tourism platform to explore beautiful destinations across Pakistan.",
      url: "https://paktourism.vercel.app/",
      gradient: "linear-gradient(180deg, rgba(16,185,129,0.6), rgba(37,99,235,0.6), rgba(0,0,0,0.85))"
    },
    {
      image: "/p2.png",
      title: "Timetable Generator",
      description: "A smart timetable generator that helps students organize schedules with ease.",
      url: "https://timetablegenerator-iota.vercel.app",
      gradient: "linear-gradient(180deg, rgba(234,179,8,0.6), rgba(239,68,68,0.6), rgba(0,0,0,0.85))"
    },
    {
      image: "/p3.png",
      title: "Weather App",
      description: "A real-time weather tracking app powered by OpenWeather API.",
      url: "https://weatherapp-nine-blond.vercel.app",
      gradient: "linear-gradient(180deg, rgba(14,165,233,0.6), rgba(168,85,247,0.6), rgba(0,0,0,0.85))"
    },
    {
      image: "/p4.png",
      title: "Tic Tac Toe",
      description: "A fun, responsive Tic Tac Toe game with multiplayer support.",
      url: "https://tictactoe-tau-rose.vercel.app",
      gradient: "linear-gradient(180deg, rgba(236,72,153,0.6), rgba(251,191,36,0.6), rgba(0,0,0,0.85))"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-200">

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          Hey, I’m <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Shahmeer</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-2xl max-w-2xl mb-6 text-gray-400"
        >
          Building sleek, modern, and responsive apps with Next.js & Tailwind.
        </motion.p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-pink-500/40 transition"
        >
          View My Work
        </motion.a>
      </section>

      {/* About */}
      <section id="about" className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          I’m a passionate developer who loves turning ideas into functional,
          user-friendly digital products. My stack revolves around React, Next.js,
          Tailwind, and modern web technologies.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Development",
              desc: "Crafting sleek, modern UIs with React, Next.js & Tailwind CSS.",
              color: "from-indigo-500 to-purple-500"
            },
            {
              title: "Backend Development",
              desc: "Building scalable APIs and integrating databases with secure logic.",
              color: "from-pink-500 to-rose-500"
            },
            {
              title: "Full-Stack Projects",
              desc: "Delivering complete solutions from ideation to deployment.",
              color: "from-cyan-500 to-blue-500"
            }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-gray-900 rounded-2xl shadow-lg border border-gray-800 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition"
            >
              <h3 className={`text-2xl font-semibold mb-4 bg-gradient-to-r ${service.color} text-transparent bg-clip-text`}>
                {service.title}
              </h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
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
        whileHover={{ scale: 1.04, y: -6 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
        className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
      >
        <div
          className="h-64 flex items-end p-6 relative"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white drop-shadow-lg">
              {item.title}
            </h3>
            <p className="text-sm text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition">
              {item.description}
            </p>
          </div>
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
        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <Link href="https://github.com/shahmeerhere" className="hover:text-indigo-400 transition">GitHub</Link>
          <Link href="https://linkedin.com/in/shahmeershahid" className="hover:text-pink-400 transition">LinkedIn</Link>
          <Link href="mailto:theshahmeer786@gmail.com" className="hover:text-cyan-400 transition">Email</Link>
          <Link href="https://shahmeershahid.vercel.app" className="hover:text-purple-400 transition">Portfolio</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Shahmeer. All rights reserved.
      </footer>
    </div>
  )
}
