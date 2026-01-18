"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    FaReact,
    FaGitAlt,
    FaAws,
    FaLinux,
    FaShieldAlt,
} from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import Dashboard from "./Dashboard";

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

export default function DevSecOpsSection({ id }) {

    // Data for the DevSecOps Pipeline section
    const pipelineSteps = [
        { title: "AI-Driven UX (DEV)", desc: "Building adaptive, generative interfaces with Next.js and ensuring separate, secure contexts for AI model interactions.", icon: <FaReact />, color: "#38bdf8" },
        { title: "LLM Gateway Security (SEC)", desc: "Protecting GenAI endpoints. Implementing prompt injection defense, rate limiting, and output validation layers.", icon: <FaShieldAlt />, color: "#E34A30" },
        { title: "Platform Orchestration (OPS)", desc: "Kubernetes & WASM-based deployment strategies for microservices and heavy AI inference workloads.", icon: <SiKubernetes />, color: "#3069c5" },
        { title: "Infrastructure as Code (OPS)", desc: "Hardened Linux environments and Terraform/Ansible provisioning for reproducible, immutable production states.", icon: <FaLinux />, color: "#ff9900" },
        { title: "Autonomous Pipelines (OPS)", desc: "Self-healing CI/CD workflows (GitHub Actions) that automatically rollback on security or visual regression failures.", icon: <FaGitAlt />, color: "#F1502F" },
        { title: "Observability & AIOps (OPS)", desc: "Deep tracing (OpenTelemetry) and AI-driven anomaly detection to predict outages before they impact users.", icon: <FaAws />, color: "#2E7D32" },
    ];

    return (
        <section id={id} className="min-h-screen bg-black text-gray-200 overflow-x-hidden py-20">

            {/* === 1. DEVSECOPS HEADER === */}
            <div className="relative flex flex-col justify-center items-center text-center px-6 mb-20">

                <div className="relative z-10 max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-cyan-400 font-light text-xl md:text-2xl mb-3 tracking-widest uppercase"
                    >
                        DevSecOps | Product Engineering
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white relative overflow-hidden"
                    >
                        Building Resilient Applications
                        <span
                            className="block bg-gradient-to-r from-blue-300 via-white to-gray-200 text-transparent bg-clip-text mt-2"
                            style={{ textShadow: '0 0 6px rgba(59,130,246,0.7), 0 0 12px rgba(255,255,255,0.4)' }}
                        >
                            Secured by Design
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        I integrate <b>security testing (SAST/DAST)</b> directly into CI/CD to eliminate vulnerabilities while delivering <b>high-performance Next.js</b> experiences.
                    </motion.p>
                </div>
            </div>



            {/* --- 2. THE DEVSECOPS PIPELINE --- */}
            <motion.div
                className="py-10 px-6 text-center"
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
            </motion.div>



            {/* --- 3. DASHBOARD / TOOLS --- */}
            <div className="px-6">
                <Dashboard />
            </div>

        </section>
    );
}
