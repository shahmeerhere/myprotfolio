"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import ParticleEffect from "./components/ParticleEffect";
import { AnimatedText, GradientText } from "./components/AnimatedText";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

// --- Enhanced Custom Icons with Gradients ---
const NextIcon = () => (
  <div className="relative">
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black rounded-lg blur-sm"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <svg viewBox="0 0 24 24" className="w-10 h-10 relative z-10">
      <defs>
        <linearGradient id="next-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#a1a1aa" />
        </linearGradient>
      </defs>
      <path
        stroke="url(#next-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  </div>
);

const ReactIcon = () => (
  <div className="relative">
    <motion.div 
      className="absolute inset-0 bg-blue-500/10 rounded-full blur-sm"
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <svg viewBox="0 0 24 24" className="w-10 h-10 relative z-10">
      <defs>
        <linearGradient id="react-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="3" fill="url(#react-gradient)" />
      <path
        stroke="url(#react-gradient)"
        strokeWidth="2"
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
      />
    </svg>
  </div>
);

const DockerIcon = () => (
  <div className="relative">
    <motion.div 
      className="absolute inset-0 bg-blue-500/10 rounded-lg blur-sm"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <svg viewBox="0 0 24 24" className="w-10 h-10 relative z-10 text-blue-400">
      <path
        fill="currentColor"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </div>
);

const SecurityIcon = () => (
  <div className="relative">
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-sm"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <svg viewBox="0 0 24 24" className="w-10 h-10 relative z-10 text-green-400">
      <path
        fill="currentColor"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  </div>
);

// --- Premium DevSecOps Visualization Component ---
const DevSecOpsVisual = () => (
  <Card className="w-full h-full p-8 relative overflow-hidden group border-blue-500/20">
    {/* Animated Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-emerald-900/10"></div>
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
    
    {/* Animated Grid */}
    <motion.div 
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
      animate={{ backgroundPosition: ["0 0", "40px 40px"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    
    {/* Floating Particles */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-500/40 rounded-full blur-sm"
        animate={{
          y: [0, -40, 0],
          x: [0, Math.random() * 30 - 15, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          delay: i * 0.6,
          ease: "easeInOut",
        }}
        style={{
          left: `${15 + i * 12}%`,
          top: `${25 + i * 8}%`,
        }}
      />
    ))}

    {/* Central Visualization */}
    <div className="relative z-10 flex flex-col items-center gap-8 h-full justify-center">
      {/* Rotating Shield Core */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-48 h-48 border border-blue-500/20 rounded-full"
      />
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600/20 via-transparent to-emerald-600/20 border border-blue-500/30 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.4)] relative"
      >
        {/* Inner Glow */}
        <motion.div 
          className="absolute inset-4 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full blur-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <div className="relative z-20">
          <SecurityIcon />
        </div>
      </motion.div>

      {/* Connection Nodes */}
      <div className="flex gap-4 flex-wrap justify-center">
        {[
          { label: "CI/CD", status: "Active", color: "green" },
          { label: "Docker", status: "Running", color: "blue" },
          { label: "Security", status: "Scanning", color: "emerald" },
          { label: "K8s", status: "Orchestrated", color: "purple" },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 text-xs text-gray-300 font-mono flex flex-col items-center gap-1 group hover:border-blue-500/50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <motion.span 
                className={`w-2 h-2 bg-${item.color}-500 rounded-full`}
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              />
              <span className="font-semibold text-white">{item.label}</span>
            </div>
            <span className="text-[10px] text-gray-500 group-hover:text-gray-400">{item.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </Card>
);

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const techStack = [
    { name: "Next.js 14", icon: <NextIcon />, desc: "Full Stack Framework", color: "from-white to-gray-400" },
    { name: "React 18", icon: <ReactIcon />, desc: "UI Components", color: "from-blue-400 to-cyan-400" },
    { name: "Docker", icon: <DockerIcon />, desc: "Containerization", color: "from-blue-500 to-sky-400" },
    { name: "Security", icon: <SecurityIcon />, desc: "Snyk & OWASP", color: "from-green-400 to-emerald-400" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-500/50 relative">
      {/* Animated Backgrounds */}
      <AnimatedBackground />
      <ParticleEffect />
      
      {/* === Enhanced Hero Section === */}
      <motion.section 
        style={{ opacity, scale }}
        className="flex flex-col md:flex-row items-center justify-center min-h-screen pt-20 md:pt-0 relative z-10"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black"></div>
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        />
        
        {/* Left Side - Image with Parallax Effect */}
        <motion.figure
          initial={{ opacity: 0, x: -80, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-1/2 relative overflow-hidden h-[50vh] md:h-screen"
        >
          <motion.div 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full"
          >
            <Image
              src="/i.png"
              alt="Shahmeer Shahid - Frontend Developer & DevSecOps Advocate"
              fill
              className="object-cover opacity-90 hover:opacity-100 transition-all duration-700"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/0 to-black/90 md:from-black/40 md:via-black/20 md:to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          </motion.div>
        </motion.figure>

        {/* Right Side - Content */}
        <motion.article
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center relative z-10"
        >
          <div className="max-w-2xl mx-auto md:mx-0 space-y-6 sm:space-y-8 md:space-y-10">
            {/* Headings with Stagger Animation */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              >
                <span className="block text-white">Building Fast</span>
                <span className="block text-gray-500">Web Apps,</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-gray-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Secured by Design.
                </span>
              </motion.h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                I am a <strong>Frontend Developer & DevSecOps Advocate</strong>. I bridge the gap
                between rapid product delivery (Next.js) and security best practices (CI/CD, OWASP).
              </p>
              
              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 flex-wrap">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold">
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Available for projects
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300 text-xs font-semibold">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Based in Pakistan
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-6 sm:pt-8"
            >
              <Link href="/project" className="group w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-full px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-white to-gray-200 text-black font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                  <span className="relative z-10">Explore Projects</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>

              <Link href="/contact" className="group w-full sm:w-auto flex justify-center sm:justify-start">
                <motion.div
                  whileHover={{ scale: 1.1, x: 5 }}
                  className="flex items-center gap-3 sm:gap-4 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute inset-0 bg-white/10 rounded-full blur-sm"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-white/20 rounded-full group-hover:border-white/40 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">
                    Get In Touch
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.article>
      </motion.section>

      {/* === Feature Highlight === */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative border-y border-white/10 bg-gradient-to-r from-blue-950/20 via-black to-emerald-950/20 py-12 overflow-hidden z-10"
      >
        {/* Animated Background Line */}
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-3 sm:p-4 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-2xl border border-blue-500/20"
            >
              <SecurityIcon />
            </motion.div>
            <div className="flex-1">
              <p className="text-gray-400 text-xs sm:text-sm font-mono uppercase tracking-wider mb-2">
                Security Innovation
              </p>
              <p className="text-white text-base sm:text-lg font-medium max-w-2xl">
                Built a self-healing <span className="text-blue-400">CI/CD pipeline</span> that automatically blocks deployments if high-severity vulnerabilities are detected.
              </p>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hidden lg:block"
          >
            <Card className="px-6 py-3 border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-emerald-500/10">
              <span className="text-sm font-mono text-blue-400">View Case Study →</span>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* === Mission Section === */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 md:py-36 relative z-10"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-20 items-center">
          
          {/* Left Text Area */}
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-10 md:space-y-14 lg:space-y-16"
          >
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mb-8"
              />
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10"
              >
                The Mission
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed space-y-4 md:space-y-6"
              >
                <span className="block">
                  I Don&apos;t just write code; I ship secure products. 
                  Most developers build features and worry about security later. 
                  I believe in <span className="text-white font-bold border-b border-blue-500">&quot;Shifting Left&quot;</span>—integrating security from the first line of code.
                </span>
              </motion.p>
            </div>

            {/* Tech Stack Grid */}
            <div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-500 uppercase tracking-widest text-xs sm:text-sm font-bold mb-6 md:mb-8 flex items-center gap-2 sm:gap-3"
              >
                <span className="w-6 sm:w-8 h-px bg-gray-700"></span>
                Core Technology Stack
              </motion.h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group relative"
                  >
                    <Card className="p-6 border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-white/10">
                      <div className="flex items-center gap-4 mb-3">
                        {tech.icon}
                        <div>
                          <p className={`font-bold text-lg bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                            {tech.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{tech.desc}</p>
                        </div>
                      </div>
                      <motion.div 
                        className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-blue-500/30 transition-all duration-300"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.1 * i + 0.3 }}
                      />
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Right Side - Premium Visualization */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]"
          >
            <DevSecOpsVisual />
          </motion.figure>
        </div>
      </motion.section>

      {/* === Footer CTA === */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 relative overflow-hidden z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-black"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8"
          >
            Ready to Build Something
            <span className="block bg-gradient-to-r from-blue-400 via-white to-gray-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Secure & Scalable?
            </span>
          </motion.h3>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-xl mx-auto"
          >
            Let&apos;s discuss how we can combine modern development practices with enterprise-grade security.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-shadow duration-300"
              >
                Start a Conversation
              </motion.button>
            </Link>
            
            <Link href="/project" className="group">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <span className="text-sm font-medium uppercase tracking-wider">View All Projects</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-5 h-5"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
