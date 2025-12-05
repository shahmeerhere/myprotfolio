"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- 1. Custom SVG Icons for Tech Stack ---
const NextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-blue-400">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);
const DockerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-blue-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
const SecurityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-green-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// --- 2. The High-Quality "DevSecOps Visual" Replacement ---
const DevSecOpsVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-10 relative overflow-hidden group">
    {/* Abstract Background Grid */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
    
    {/* Central Graphic */}
    <div className="relative z-10 flex flex-col items-center gap-6">
      {/* Shield / Core */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-32 h-32 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)]"
      >
        <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </motion.div>

      {/* Connection Lines */}
      <div className="flex gap-8">
        <motion.div 
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-xs text-gray-300 font-mono flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          CI/CD Active
        </motion.div>
        <motion.div 
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.4 }}
           className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-xs text-gray-300 font-mono flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          Dockerized
        </motion.div>
      </div>
    </div>
  </div>
);

export default function HomePage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const techStack = [
    { name: "Next.js", icon: <NextIcon />, desc: "Full Stack React" },
    { name: "Docker", icon: <DockerIcon />, desc: "Containerization" },
    { name: "Security", icon: <SecurityIcon />, desc: "Snyk & OWASP" },
    { name: "React", icon: <ReactIcon />, desc: "UI Components" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
      {/* === HERO SECTION === */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen pt-24 md:pt-0 relative">
        
        {/* Left Side - Image */}
        <motion.figure
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 relative overflow-hidden"
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}>
            {/* Replace with your image /i.png */}
            <Image
              src="/i.png"
              alt="Shahmeer Shahid"
              width={1000}
              height={1000}
              className="w-full h-[60vh] md:h-screen object-cover opacity-90 hover:grayscale-0 transition-all duration-700"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/90 md:hidden"></div>
        </motion.figure>

        {/* Right Side - Text */}
        <motion.article
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 p-8 sm:p-10 md:p-16 flex flex-col justify-center text-center md:text-left z-10"
        >
          <div className="max-w-xl mx-auto md:mx-0 space-y-8">
            {/* Headings */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full flex flex-col justify-start"
            >
              <h1 className="text-left leading-tight font-extrabold text-white text-5xl sm:text-6xl md:text-7xl tracking-tight">
                Building Fast
              </h1>
              <h1 className="text-left font-extrabold text-gray-500 text-5xl sm:text-6xl md:text-7xl tracking-tight">
                Web Apps,
              </h1>
              <div className="pt-2">
                 <h1 className="text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-gray-400 text-4xl sm:text-5xl md:text-6xl">
                  Secured by Design.
                </h1>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-sm sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0"
            >
              I am a <strong>Frontend Developer & DevSecOps Advocate</strong>. I bridge the gap
              between rapid product delivery (Next.js) and security best practices (CI/CD, OWASP).
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 sm:gap-6 pt-4"
            >
              <Link href="/project" aria-label="Navigate to projects page">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black font-bold py-4 px-10 text-sm uppercase rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  Explore Projects
                </motion.button>
              </Link>

              <motion.div
                whileHover={{ scale: 1.1, x: 5 }}
                className="flex items-center text-white cursor-pointer group gap-3"
              >
                <div className="h-12 w-12 flex items-center justify-center border border-white/30 rounded-full transition duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors">
                  Intro Video
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.article>
      </section>

      {/* === FEATURE HIGHLIGHT (THE HOOK) === */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full border-y border-white/10 bg-neutral-900/50 backdrop-blur-sm py-8"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
             <SecurityIcon />
          </div>
          <div>
            <p className="text-gray-400 text-sm font-mono uppercase tracking-wider mb-1">Current Focus</p>
            <p className="text-white text-lg font-medium">
              Built a self-healing <span className="text-blue-400">CI/CD pipeline</span> that automatically blocks deployments if high-severity vulnerabilities are detected.
            </p>
          </div>
        </div>
      </motion.div>

      {/* === MISSION SECTION === */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 md:py-32 relative"
      >
        <main className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Text Area */}
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-12"
          >
            <div>
              <motion.h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
                <Link href="/project">The mission</Link>
              </motion.h2>
              <div className="h-1 w-24 bg-blue-500 mb-8"></div>
              <p className="text-xl text-gray-300 leading-relaxed">
                I Don&apos;t just write code; I ship secure products. 
                Most developers build features and worry about security later. 
                I believe in <span className="text-white font-bold border-b border-blue-500">&quot;Shifting Left&quot;</span>—integrating security from the first line of code.
              </p>
            </div>

            {/* Tech Stack Grid (Replaces "About Portfolio") */}
            <div>
               <h3 className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-6">Core Technologies</h3>
               <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                      className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 transition-colors"
                    >
                      {tech.icon}
                      <div>
                        <p className="font-bold text-white">{tech.name}</p>
                        <p className="text-xs text-gray-500">{tech.desc}</p>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </motion.article>

          {/* Right Side - The New High Quality Visual */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 h-[400px] md:h-[500px]"
          >
            {/* This replaces the old /cw.jpg image with a scalable React Component */}
            <DevSecOpsVisual />
          </motion.figure>

        </main>
      </motion.section>
    </div>
  );
}