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
        { title: "AI-Driven UX (DEV)", desc: "Adaptive interfaces with Next.js and secure AI model contexts.", icon: <FaReact />, color: "#8E8E93" },
        { title: "LLM Gateway Security (SEC)", desc: "Protecting GenAI endpoints with validation layers.", icon: <FaShieldAlt />, color: "#4A0E0E" },
        { title: "Platform Orchestration (OPS)", desc: "Kubernetes & WASM-based deployment strategies.", icon: <SiKubernetes />, color: "#505052" },
        { title: "Infrastructure as Code (OPS)", desc: "Hardened Linux and Terraform/Ansible provisioning.", icon: <FaLinux />, color: "#8E8E93" },
        { title: "Autonomous Pipelines (OPS)", desc: "Self-healing CI/CD with automated security rollbacks.", icon: <FaGitAlt />, color: "#4A0E0E" },
        { title: "Observability & AIOps (OPS)", desc: "Deep tracing and AI-driven anomaly detection.", icon: <FaAws />, color: "#505052" },
    ];

    return (
        <section id={id} className="min-h-screen bg-transparent text-[#D1D1D1] overflow-x-hidden py-16">

            {/* === 1. DEVSECOPS HEADER === */}
            <div className="relative flex flex-col justify-center items-center text-center px-6 mb-12">

                <div className="relative z-10 max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-[#4A0E0E] font-light text-xl md:text-2xl mb-3 tracking-widest uppercase"
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
                            className="block bg-gradient-to-r from-[#1A1A1C] via-[#D1D1D1] to-[#4A0E0E] text-transparent bg-clip-text mt-2"
                            style={{ textShadow: '0 0 6px rgba(74,14,14,0.1), 0 0 12px rgba(209,209,209,0.1)' }}
                        >
                            Secured by Design
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-[#D1C7BB] mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Integrating security (SAST/DAST) directly into CI/CD for high-performance, secure Next.js applications.
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
                    className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#D1D1D1] via-[#4A0E0E] to-[#1A1A1C] drop-shadow-lg"
                >
                    The DevSecOps Pipeline
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="text-[#8E8E93] max-w-3xl mx-auto mb-12"
                >
                    Merging speed with robust security and automated operations.
                </motion.p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {pipelineSteps.map((s, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -4, boxShadow: `0 0 20px ${s.color}/10` }}
                            className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/5
                    hover:border-[#4A0E0E] transition-all duration-300 cursor-pointer"
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
                            <p className="text-[#8E8E93] text-sm leading-relaxed">{s.desc}</p>
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
