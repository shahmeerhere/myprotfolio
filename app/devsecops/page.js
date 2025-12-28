"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaLaptopCode,
  FaEnvelope,
  FaReact,
  FaGitAlt,
  FaAws,
  FaLinux,
  FaShieldAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiKubernetes } from "react-icons/si"; 

// Assuming Dashboard is available in the current context
import Dashboard from "./dasboard/page";

// Motion Variants for smooth entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function DevSecOpsPortfolio() {
  const projects = [
    {
      image: "/p9.png",
      title: "Food Genie (Secure API)",
      description: "AI-Driven Recipe Generator. Integrated OpenAI API while implementing **Input Validation and Rate Limiting** to prevent API abuse and ensure data integrity. Built with Next.js/Supabase.",
      url: "https://foodgenie-five.vercel.app/",
    },
    {
      image: "/p7.png",
      title: "Morva (E-Commerce UX)",
      description: "Scalable E-Commerce Store with seamless UX. Designed for high performance and **PCI DSS minimal compliance** via external payment gateways and secure state management.",
      url: "https://shoestore-9yb9.vercel.app/",
    },
    {
      image: "/p8.png",
      title: "Just Me (Data Vault)",
      description: "Personal Data Vault featuring **Role-Based Access Control (RBAC)** and secure, encrypted storage. Focus on robust authentication flows (OAuth) and authorization checks.",
      url: "https://justme-ashy.vercel.app/",
    },
    {
      image: "/p2.png",
      title: "Smart Scheduler (Logic & Resilience)",
      description: "A logic-heavy application utilizing **conflict-detection algorithms** for scheduling. Secured the backend endpoints against injection and ensures data resilience.",
      url: "https://timetablegenerator-iota.vercel.app",
    },
    {
      image: "/p5.png",
      title: "Cars Vault",
      description: "Elegant car showroom app with modern design.",
      url: "https://carsvault.vercel.app/",
    },
    {
      image: "/p1.png",
      title: "Pak Tourism",
      description: "Explore beautiful destinations across Pakistan.",
      url: "https://paktourism.vercel.app/",
    },
    
  ];

  // Data for the DevSecOps Pipeline section
  const pipelineSteps = [
    { title: "Secure Frontend (DEV)", desc: "Crafting zero-vulnerability UIs using Next.js, React, and strict dependency scanning (SAST) on the client side.", icon: <FaReact />, color: "#38bdf8" },
    { title: "API Resilience (SEC)", desc: "Building secure, high-throughput APIs (Node.js/Supabase) with input sanitization, rate limiting, and OWASP mitigation.", icon: <FaShieldAlt />, color: "#E34A30" },
    { title: "Containerization (OPS)", desc: "Deploying applications with Docker and Kubernetes for consistent, scalable, and isolated production environments.", icon: <SiKubernetes />, color: "#3069c5" },
    { title: "Hardened OS & Net (SEC)", desc: "Experience with Linux hardening, network configuration, virtual machines, and Red Hat preparation.", icon: <FaLinux />, color: "#ff9900" },
    { title: "Automated CI/CD (OPS)", desc: "Using Git & GitHub Actions to enforce code quality, run automated tests, and block deployments upon critical vulnerability detection.", icon: <FaGitAlt />, color: "#F1502F" },
    { title: "Cloud & Monitoring (OPS)", desc: "Cloud deployment on AWS/Vercel with focused monitoring for runtime errors, performance, and security events.", icon: <FaAws />, color: "#2E7D32" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 overflow-x-hidden">
      
      {/* === 1. DEVSECOPS HERO SECTION === */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0">
          <Image
            src="/hacker.jpg"
            alt="DevSecOps systems background"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>

        <div className="relative z-10 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-cyan-400 font-light text-xl md:text-2xl mb-3 tracking-widest uppercase"
          >
            DevSecOps | Product Engineering
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white relative overflow-hidden"
          >
            Building Resilient Applications,
            <span
              className="block bg-gradient-to-r from-blue-300 via-white to-gray-200 text-transparent bg-clip-text animate-gradient-x mt-2"
              // ENHANCEMENT: Stronger shadow for better text lift
              style={{ textShadow: '0 0 6px rgba(59,130,246,0.7), 0 0 12px rgba(255,255,255,0.4)' }}
            >
              Secured by Design
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I integrate <b>security testing (SAST/DAST)</b> directly into CI/CD to eliminate vulnerabilities while delivering <b>high-performance Next.js</b> experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { label: "View Secure Projects", href: "#projects" },
              { label: "Pipeline & Methodology", href: "#services" },
              { label: "Download Resume", href: "/resume-devsecops.pdf", download: true },
            ].map((btn, idx) => (
              <Link
                key={idx}
                href={btn.href}
                download={btn.download || false}
                className={`relative w-full sm:w-auto px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    idx === 0
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20' 
                  }`}
              >
                {btn.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="border-gray-800" />
      
      {/* --- 2. THE DEVSECOPS PIPELINE (MERGED SERVICES/SKILLS) --- */}
      <motion.section 
        id="services" 
        className="py-20 px-6 text-center bg-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 
          variants={itemVariants} 
          className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-400 to-blue-500 drop-shadow-lg"
        >
          The DevSecOps Pipeline
        </motion.h2>
        <motion.p 
          variants={itemVariants} 
          className="text-gray-500 max-w-3xl mx-auto mb-12"
        >
          Merging rapid development with robust security and automated operations (CI/CD, Infrastructure).
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {pipelineSteps.map((s, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4, boxShadow: `0 0 20px ${s.color}/40` }}
              className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/20
                    hover:border-cyan-400 transition-all duration-300 cursor-pointer"
            >
              <motion.div
                className="flex items-center justify-center mb-6 rounded-full w-20 h-20 mx-auto"
                style={{
                  color: s.color,
                  fontSize: "3rem",
                  textShadow: `0 0 10px ${s.color}, 0 0 20px ${s.color}/40`,
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {s.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-white">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Visual reinforcement of the DevSecOps cycle */}
        <motion.div 
          variants={itemVariants} 
          className="mt-16 max-w-4xl mx-auto p-4 bg-zinc-900 rounded-xl border border-gray-700"
        >
          <p className="text-gray-400 mb-4 text-sm">Visualizing the Continuous DevSecOps Flow:</p></motion.div>
      </motion.section>

      <hr className="border-gray-800" />

      {/* --- 3. DASHBOARD / TOOLS (Keeping this component) --- */}
      <section className="py-20 px-6">
        <Dashboard />
      </section>

      <hr className="border-gray-800" />
      
      {/* --- 4. SECURE PROJECTS (Enhanced Interactions) --- */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Featured Secure Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              // Parent hover animation
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="relative h-64">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-100 filter brightness-75" 
                />
                
                {/* Overlay for Title and Hover Description */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  
                  {/* FIX APPLIED HERE: Using direct initial/variants to correctly listen to parent's 'hover' state */}
                  <motion.div
                    className="overflow-hidden"
                    variants={{
                      rest: { height: 0, opacity: 0, transition: { duration: 0.2 } },
                      hover: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
                    }}
                    // The parent's hover state is implicitly passed down as 'hover'
                    whileHover="hover" 
                    initial="rest" // Start in the rest state
                  >
                    <p className="text-sm text-cyan-400 leading-relaxed pt-2 border-t border-cyan-800">
                      {item.description}
                    </p>
                  </motion.div>
                  
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* --- 5. ABOUT ME (Unified DevSecOps Mission) --- */}
      <motion.section 
        id="about" 
        className="py-20 px-6 md:px-16 lg:px-24 bg-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">My Mission</h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              My core mission is to bridge the gap between <b>rapid software development (Dev)</b> and <b>enterprise-level security (Sec)</b>. I don&apos;t see security as a checklist item; I see it as a <b>feature</b> of high-quality engineering.
              <br /><br />
              I combine my experience in <b>Full-Stack Next.js</b> with hands-on knowledge of <b>Linux, network hardening, and vulnerability mitigation</b> to deliver resilient, reliable, and production-ready applications. My focus is always on efficiency, performance, and <b>secure code culture</b>.
            </p>
          </motion.div>

          {/* Image Section (Using the CS image for visual branding consistency) */}
          <motion.div
            variants={itemVariants}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-500 ease-out relative">
              <Image 
                src="/v1.jpg" 
                alt="" 
                fill 
                className="object-cover object-center transition-transform duration-700 hover:scale-110" 
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <hr className="border-gray-800" />

      {/* --- 6. CONTACT --- */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Let’s Collaborate on Resilience</h2>
        <p className="text-lg text-gray-400 mb-8">Ready to build secure, scalable solutions? Reach out.</p>
        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <Link href="https://github.com/shahmeerhere" className="flex items-center gap-2 hover:text-cyan-400 transition">
            <FaLaptopCode /> GitHub (Code)
          </Link>
          <Link href="https://linkedin.com/in/shahmeershahid" className="flex items-center gap-2 hover:text-cyan-400 transition">
            LinkedIn
          </Link>
          <Link href="mailto:theshahmeer786@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition">
            <FaEnvelope /> Email
          </Link>
          <Link href="/resume-devsecops.pdf" download className="flex items-center gap-2 text-red-500 hover:text-red-400 transition">
            <FaShieldAlt /> DevSecOps Resume
          </Link>
        </div>
      </section>
      
      {/* FOOTER NOTE */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-500 hidden md:block z-10">
        Theme | DevSecOps Mode ⚡
      </div>
    </div>
  );
}