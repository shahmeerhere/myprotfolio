"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLaptopCode, FaServer, FaDatabase, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  const items = [
    { image: "/p6.png", title: "Instagram Clone", description: "Full-stack clone with auth, posts, responsive UI.", url: "https://minegram-tawny.vercel.app/" },
    { image: "/p9.png", title: "Food Genie", description: "AI powered food app with database and responsive UI.", url: "https://foodgenie-lg9n.vercel.app/" },
    { image: "/p7.png", title: "Morva", description: "Scalable E-Commerce Shoe Store with seamless UX.", url: "https://shoestore-9yb9.vercel.app/" },
    { image: "/p8.png", title: "Just Me", description: "Access your personal vault anytime, anywhere.", url: "https://justme-ashy.vercel.app/" },
    { image: "/p5.png", title: "Cars Vault", description: "Elegant car showroom app with modern design.", url: "https://carsvault.vercel.app/" },
    { image: "/p1.png", title: "Pak Tourism", description: "Explore beautiful destinations across Pakistan.", url: "https://paktourism.vercel.app/" },
    { image: "/p2.png", title: "Timetable Generator", description: "Smart timetable generator for students.", url: "https://timetablegenerator-iota.vercel.app" },
    { image: "/p3.png", title: "Weather App", description: "Real-time weather tracking app powered by OpenWeather API.", url: "https://weatherapp-nine-blond.vercel.app" },
    { image: "/p6.png", title: "iTask", description: "A simple React.js app to manage daily tasks.", url: "https://todolist-eight-tau-49.vercel.app/" },
    { image: "/p4.png", title: "Tic Tac Toe", description: "Fun, responsive multiplayer Tic Tac Toe game.", url: "https://tictactoe-tau-rose.vercel.app" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <img
          src="p1.png"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>

        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white"
          >
            Hey, I’m{" "}
            <span className="bg-gradient-to-r from-white via-gray-400 to-gray-600 text-transparent bg-clip-text">
              Shahmeer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            A forward-thinking <span className="text-white font-semibold">CS student</span> crafting innovative digital experiences through{" "}
            <span className="text-gray-300">web development, cybersecurity,</span> and <span className="text-gray-300">future tech.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4"
          >
            <Link
              href="#projects"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
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
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              I transform abstract ideas into{" "}
              <span className="text-white">functional</span>,{" "}
              <span className="text-white">scalable</span>, and{" "}
              <span className="text-white">visually refined</span> digital experiences.  
              My toolkit includes <span className="text-white">React</span>,{" "}
              <span className="text-white">Next.js</span>, and{" "}
              <span className="text-white">Tailwind CSS</span> — driven by a passion for crafting seamless, human-centered interfaces that balance{" "}
              <span className="text-white">aesthetics</span> and{" "}
              <span className="text-white">performance</span>.
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
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-[#1a1a1a] shadow-2xl flex items-center justify-center border border-gray-800 hover:scale-105 transition-transform duration-500 ease-out">
              <span className="text-sm sm:text-base text-gray-400"><img src="p1.png" alt="" /></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 text-center bg-gradient-to-b from-black via-gray-900/20 to-black">
        <h2 className="text-4xl font-bold mb-12 text-white">What I Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{ title: "Frontend Development", desc: "Crafting sleek UIs with React, Next.js & Tailwind CSS.", icon: <FaLaptopCode /> },
          { title: "Backend Development", desc: "Building secure APIs and data-driven logic for performance.", icon: <FaServer /> },
          { title: "Full-Stack Projects", desc: "Delivering complete, scalable solutions from concept to deployment.", icon: <FaDatabase /> }].map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-[#121212] rounded-2xl shadow-lg border border-gray-800 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-center text-3xl mb-4 text-white">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:shadow-white/20 transition-all duration-300"
            >
              <div
                className="h-64 flex items-end p-6 relative"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-all">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
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
