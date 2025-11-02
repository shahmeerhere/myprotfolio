"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaEnvelope, 
  FaReact, 
  FaNodeJs,  
  FaGitAlt, 
  FaAws
} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";


import Dashboard from "./dasboard/page";

export default function Portfolio() {
  const projects = [
    { image: "/cw.jpg", title: "Instagram Clone", description: "Full-stack clone with auth, posts, responsive UI.", url: "https://minegram-tawny.vercel.app/" },
    { image: "/p9.png", title: "Food Genie", description: "AI powered food app with database and responsive UI.", url: "https://foodgenie-five.vercel.app/" },
    { image: "/p7.png", title: "Morva", description: "Scalable E-Commerce Shoe Store with seamless UX.", url: "https://shoestore-9yb9.vercel.app/" },
    { image: "/p8.png", title: "Just Me", description: "Access your personal vault anytime, anywhere.", url: "https://justme-ashy.vercel.app/" },
    { image: "/p5.png", title: "Cars Vault", description: "Elegant car showroom app with modern design.", url: "https://carsvault.vercel.app/" },
    { image: "/p1.png", title: "Pak Tourism", description: "Explore beautiful destinations across Pakistan.", url: "https://paktourism.vercel.app/" },
    { image: "/p2.png", title: "Timetable Generator", description: "Smart timetable generator for students.", url: "https://timetablegenerator-iota.vercel.app" },
    { image: "/p3.png", title: "Weather App", description: "Real-time weather tracking app powered by OpenWeather API.", url: "https://weatherapp-nine-blond.vercel.app" },
    { image: "/p6.png", title: "iTask", description: "A simple React.js app to manage daily tasks.", url: "https://todolist-eight-tau-49.vercel.app/" },
    { image: "/p4.png", title: "Tic Tac Toe", description: "Fun, responsive multiplayer Tic Tac Toe game.", url: "https://tictactoe-tau-rose.vercel.app" },
  ];

  const services = [
    { title: "Frontend Development", desc: "Crafting sleek UIs with React, Next.js & Tailwind CSS.", icon: <FaLaptopCode /> },
    { title: "Backend Development", desc: "Building secure APIs and data-driven logic for performance.", icon: <FaServer /> },
    { title: "Full-Stack Projects", desc: "Delivering complete, scalable solutions from concept to deployment.", icon: <FaDatabase /> },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0">
          <Image
            src="/web.jpg"
            alt="Hero background"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>

        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white relative overflow-hidden"
          >
            Hey, I’m{" "}
            <span
              className="bg-gradient-to-r from-white via-gray-300 to-gray-400 text-transparent bg-clip-text animate-gradient-x"
              style={{ textShadow: '0 0 4px rgba(255,255,255,0.4), 0 0 8px rgba(255,255,255,0.2)' }}
            >
              Shahmeer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            A forward-thinking <span className="text-white font-semibold">CS student</span> crafting innovative digital experiences through <span className="text-gray-300">web development, cybersecurity,</span> and <span className="text-gray-300">future tech.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { label: "View Projects", href: "#projects" },
              { label: "Contact Me", href: "#contact" },
              { label: "Download Resume", href: "/resume-webdev.pdf", download: true },
            ].map((btn, idx) => (
              <Link
                key={idx}
                href={btn.href}
                download={btn.download || false}
                className="relative w-full sm:w-auto px-8 py-3 rounded-xl
                     bg-white/20 backdrop-blur-md border border-white/30
                     font-semibold text-transparent bg-clip-text
                     bg-gradient-to-r from-white via-gray-400 to-gray-500
                     hover:scale-105 hover:shadow-lg hover:text-white transition-all duration-300"
                style={{ textShadow: '0 0 3px rgba(255,255,255,0.3)' }}
              >
                {btn.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>


      {/* SERVICES / SKILLS */}
      <section id="services" className="py-20 px-6 text-center bg-gradient-to-b from-black via-gray-900/10 to-black">
        <h2 className="text-4xl font-bold mb-12
                 bg-clip-text text-transparent
                 bg-gradient-to-r from-white via-gray-400 to-gray-600
                 drop-shadow-lg">
          What I Do
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Frontend Development", desc: "React, Next.js, Tailwind CSS - sleek, interactive, responsive UI.", icon: <FaReact />, color: "#61dafb" },
            { title: "Backend & APIs", desc: "Node.js, Firebase, Supabase - secure and scalable server logic.", icon: <FaNodeJs />, color: "#3c873a" },
            { title: "Database Management", desc: "MongoDB, MySQL, PostgreSQL - efficient, structured, and NoSQL solutions.", icon: <FaDatabase />, color: "#f0db4f" },
            { title: "Cloud & DevOps", desc: "Docker, Kubernetes, AWS, Linux - modern deployment & container orchestration.", icon: <FaAws />, color: "#ff9900" },
            { title: "Version Control & CI/CD", desc: "Git, Vercel - collaborative, automated deployment pipelines.", icon: <FaGitAlt />, color: "#f1502f" },
            { title: "UI Enhancements", desc: "Shadcn/UI, Tailwind components - reusable, visually consistent design.", icon: <SiTailwindcss />, color: "#38bdf8" },
          ].map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.06, y: -6, boxShadow: `0 0 20px ${s.color}/50` }}
              className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/20
                   hover:border-white/40 transition-all duration-300 cursor-pointer"
            >
              <div
                className="flex items-center justify-center mb-6 rounded-full w-20 h-20 mx-auto"
                style={{
                  color: s.color,
                  fontSize: "3rem",
                  textShadow: `0 0 10px ${s.color}, 0 0 20px ${s.color}/40, 0 0 30px ${s.color}/20`,
                }}
              >
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* DASHBOARD / TOOLS */}
      <section className="py-20 px-6">
        <Dashboard />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:shadow-white/20 transition-all duration-300"
            >
              <div className="relative h-64">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-all">{item.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="py-20 px-6 md:px-16 lg:px-24 bg-black">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">About Me</h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              I transform abstract ideas into <span className="text-white">functional</span>, <span className="text-white">scalable</span>, and <span className="text-white">visually refined</span> digital experiences.
              My toolkit includes <span className="text-white">React</span>, <span className="text-white">Next.js</span>, and <span className="text-white">Tailwind CSS</span> — driven by a passion for crafting seamless, human-centered interfaces that balance <span className="text-white">aesthetics</span> and <span className="text-white">performance</span>.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-[#1a1a1a] shadow-2xl overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-500 ease-out relative">
              <Image src="/web.jpg" alt="Cover" fill className="object-cover object-center transition-transform duration-700 hover:scale-110" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Let’s Connect</h2>
        <p className="text-lg text-gray-400 mb-8">Have a project or idea? Let’s make it real.</p>
        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <Link href="https://github.com/shahmeerhere" className="flex items-center gap-2 hover:text-white transition"><FaLaptopCode /> GitHub</Link>
          <Link href="https://linkedin.com/in/shahmeershahid" className="flex items-center gap-2 hover:text-white transition">LinkedIn</Link>
          <Link href="mailto:theshahmeer786@gmail.com" className="flex items-center gap-2 hover:text-white transition"><FaEnvelope /> Email</Link>
        </div>
      </section>

    </div>
  );
}
