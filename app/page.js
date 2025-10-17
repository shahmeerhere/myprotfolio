"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaLaptopCode, FaServer, FaShieldAlt, FaTools, FaBug, FaTerminal, FaDatabase, FaEnvelope } from "react-icons/fa"

export default function Portfolio() {
  const [mode, setMode] = useState("dev")

  const items = [
    { image: "/p6.png", title: "Instagram Clone", description: "Full-stack clone with auth, posts, responsive UI.", url: "https://minegram-tawny.vercel.app/" },
    { image: "/p5.png", title: "Cars Vault", description: "Elegant car showroom app with modern design.", url: "https://carsvault.vercel.app/" },
    { image: "/p1.png", title: "Pak Tourism", description: "Explore beautiful destinations across Pakistan.", url: "https://paktourism.vercel.app/" },
    { image: "/p2.png", title: "Timetable Generator", description: "Smart timetable generator for students.", url: "https://timetablegenerator-iota.vercel.app" },
    { image: "/p3.png", title: "Weather App", description: "Real-time weather tracking app powered by OpenWeather API.", url: "https://weatherapp-nine-blond.vercel.app" },
    { image: "/p7.png", title: "iTo-DO", description: "A simple React.js app to manage daily tasks with add, complete, and delete features.", url: "https://todolist-eight-tau-49.vercel.app/" },
    { image: "/p4.png", title: "Tic Tac Toe", description: "Fun, responsive multiplayer Tic Tac Toe game.", url: "https://tictactoe-tau-rose.vercel.app" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-gray-200">
      <section
        className="h-[130vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-24 relative text-white"
        style={{
          backgroundImage: "url('/me.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 w-full max-w-7xl h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-1/2 p-4">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4"
            >
              Hey, I’m <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Shahmeer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl mb-6 text-gray-200 leading-relaxed"
            >
              Passionate about <span className="text-indigo-400">Web Development</span> & <span className="text-pink-400">Cybersecurity</span>.
              Building sleek apps and breaking them (ethically) to make them stronger.
            </motion.p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <motion.button
                onClick={() => setMode("dev")}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`w-40 sm:w-44 md:w-48 px-5 py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2 ${mode === "dev"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
              >
                <FaLaptopCode /> Developer
              </motion.button>

              <motion.button
                onClick={() => setMode("cyber")}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`w-40 sm:w-44 md:w-48 px-5 py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2 ${mode === "cyber"
                  ? "bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
              >
                <FaShieldAlt /> Cybersecurity
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block md:w-1/2 h-full min-h-[300px]"
          >
          </motion.div>

        </div>
      </section>



      {mode === "dev" && (
        <>
          <section id="about" className="py-20 container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I’m a passionate developer turning ideas into functional, user-friendly digital products. My stack revolves around React, Next.js, Tailwind, and modern web technologies.
            </p>
          </section>

          <section id="services" className="py-20 container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12 text-white">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[{ title: "Frontend Development", desc: "Crafting sleek UIs with React, Next.js & Tailwind CSS.", icon: <FaLaptopCode /> },
              { title: "Backend Development", desc: "Building APIs & databases with secure logic.", icon: <FaServer /> },
              { title: "Full-Stack Projects", desc: "Delivering complete solutions from ideation to deployment.", icon: <FaDatabase /> }].map((s, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.05, y: -5 }} className="p-8 bg-gray-900 rounded-2xl shadow-lg border border-gray-800 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition">
                  <div className="flex items-center justify-center text-3xl mb-4 text-indigo-400">{s.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
                  <p className="text-gray-300">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="projects" className="py-20 container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">My Projects</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {items.map((item, idx) => (
                <motion.a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04, y: -6 }}
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                  <div className="h-64 flex items-end p-6 relative" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">{item.title}</h3>
                      <p className="text-sm text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition">{item.description}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>
        </>
      )}

      {mode === "cyber" && (
        <section id="cybersecurity" className="py-20 container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Cybersecurity Journey</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Exploring ethical hacking, penetration testing, and digital defense. Documenting labs, CTFs, and security projects to build a solid foundation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[{ title: "Homelab & Tools", desc: "Kali, Burp Suite, Wireshark, Nmap.", icon: <FaTools /> },
            { title: "CTF Writeups", desc: "TryHackMe & HackTheBox challenges.", icon: <FaBug /> },
            { title: "Scripts & Automation", desc: "Python scripts for scanning & automation.", icon: <FaTerminal /> }].map((cyber, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05, y: -5 }} className="p-8 bg-gray-900 rounded-2xl shadow-lg border border-gray-800 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition">
                <div className="flex items-center justify-center text-3xl mb-4 text-cyan-400">{cyber.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{cyber.title}</h3>
                <p className="text-gray-300">{cyber.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {[{ title: "SQL Injection Lab", desc: "Tested and documented SQLi vulnerabilities safely.", icon: <FaDatabase /> },
            { title: "Custom Port Scanner", desc: "Lightweight Python scanner for ports & services.", icon: <FaServer /> }].map((proj, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} className="p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 text-left hover:border-indigo-500/40 transition flex items-start gap-4">
                <div className="text-2xl mt-1 text-indigo-400">{proj.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-white">{proj.title}</h4>
                  <p className="text-gray-400 mt-2">{proj.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section id="contact" className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Let’s Connect</h2>
        <p className="text-lg text-gray-400 mb-8">Have an idea or project? Let’s build it together.</p>
        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <Link href="https://github.com/shahmeerhere" className="flex items-center gap-2 hover:text-indigo-400 transition"><FaLaptopCode /> GitHub</Link>
          <Link href="https://linkedin.com/in/shahmeershahid" className="flex items-center gap-2 hover:text-pink-400 transition"><FaShieldAlt /> LinkedIn</Link>
          <Link href="mailto:theshahmeer786@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition"><FaEnvelope /> Email</Link>
          <Link href="https://shahmeershahid.vercel.app" className="flex items-center gap-2 hover:text-purple-400 transition"><FaLaptopCode /> Portfolio</Link>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Shahmeer. All rights reserved.
      </footer>
    </div>
  )
}
