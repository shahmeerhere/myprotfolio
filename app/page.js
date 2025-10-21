"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaLaptopCode, FaServer, FaDatabase, FaEnvelope } from "react-icons/fa"

export default function Portfolio() {
  const items = [
    { image: "/p6.png", title: "Instagram Clone", description: "Full-stack clone with auth, posts, responsive UI.", url: "https://minegram-tawny.vercel.app/" },
    { image: "/p9.png", title: "Food Genie", description: "AI powered food app with database and responsive UI.", url: "https://foodgenie-lg9n.vercel.app/" },
    { image: "/p7.png", title: "Morva", description: "Scalable E-Commerce Shoe Store with seamless UX", url: "https://shoestore-9yb9.vercel.app/" },
    { image: "/p8.png", title: "Just Me", description: "Access your personal vault anytime, anywhere.", url: "https://justme-ashy.vercel.app/" },
    { image: "/p5.png", title: "Cars Vault", description: "Elegant car showroom app with modern design.", url: "https://carsvault.vercel.app/" },
    { image: "/p1.png", title: "Pak Tourism", description: "Explore beautiful destinations across Pakistan.", url: "https://paktourism.vercel.app/" },
    { image: "/p2.png", title: "Timetable Generator", description: "Smart timetable generator for students.", url: "https://timetablegenerator-iota.vercel.app" },
    { image: "/p3.png", title: "Weather App", description: "Real-time weather tracking app powered by OpenWeather API.", url: "https://weatherapp-nine-blond.vercel.app" },
    { image: "/p6.png", title: "iTask", description: "A simple React.js app to manage daily tasks.", url: "https://todolist-eight-tau-49.vercel.app/" },
    { image: "/p4.png", title: "Tic Tac Toe", description: "Fun, responsive multiplayer Tic Tac Toe game.", url: "https://tictactoe-tau-rose.vercel.app" }
  ]

  return (
    <div className="min-h-screen bg-[#080808] text-gray-200">
      
      {/* HERO SECTION */}
      <section className="h-screen flex items-center justify-center text-center px-6 relative">
        {/* Animated gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-tr from-indigo-600/40 via-purple-600/40 to-pink-600/40"
        />
        
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Hey, I’m <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Shahmeer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Passionate about <span className="text-indigo-400">Web Development</span>.  
            I craft sleek apps with modern tech and scalable design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link href="#projects" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
              View Projects
            </Link>
            <Link href="#contact" className="px-6 py-3 rounded-xl bg-gray-800 text-gray-200 font-semibold shadow-lg hover:bg-gray-700 transition">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          I’m a passionate developer turning ideas into functional, user-friendly digital products. My stack revolves around React, Next.js, Tailwind, and modern web technologies.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[{ title: "Frontend Development", desc: "Crafting sleek UIs with React, Next.js & Tailwind CSS.", icon: <FaLaptopCode /> },
          { title: "Backend Development", desc: "Building APIs & databases with secure logic.", icon: <FaServer /> },
          { title: "Full-Stack Projects", desc: "Delivering complete solutions from ideation to deployment.", icon: <FaDatabase /> }].map((s, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05, y: -5 }} className="p-8 bg-[#2b2b2b] rounded-2xl shadow-lg border border-gray-700 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition">
              <div className="flex items-center justify-center text-3xl mb-4 text-indigo-400">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
              <p className="text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <motion.a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
              <div className="h-64 flex items-end p-6 relative" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">{item.title}</h3>
                  <p className="text-sm text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition">{item.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Let’s Connect</h2>
        <p className="text-lg text-gray-400 mb-8">Have an idea or project? Let’s build it together.</p>
        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <Link href="https://github.com/shahmeerhere" className="flex items-center gap-2 hover:text-indigo-400 transition"><FaLaptopCode /> GitHub</Link>
          <Link href="https://linkedin.com/in/shahmeershahid" className="flex items-center gap-2 hover:text-pink-400 transition">LinkedIn</Link>
          <Link href="mailto:theshahmeer786@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition"><FaEnvelope /> Email</Link>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} Shahmeer. All rights reserved.
      </footer>
    </div>
  )
}
