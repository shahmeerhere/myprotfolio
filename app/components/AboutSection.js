"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const CheckIcon = ({ className = "w-6 h-6" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export default function AboutSection({ id }) {
    const coreValues = [
        {
            title: "Zero-Trust AI Architecture",
            description:
                "Building systems that assume breach. I integrate identity-aware proxies and cryptographic verification into AI model serving layers.",
            iconColor: "text-red-400",
        },
        {
            title: "Autonomous Reliability",
            description:
                "Engineering self-healing platforms. I design Kubernetes operators that automatically scale and patch infrastructure without human intervention.",
            iconColor: "text-blue-400",
        },
        {
            title: "Supply Chain Defense",
            description:
                "Securing the software factory. From signed commits to SBOM generation, ensuring that every artifact deployed is verified and trusted.",
            iconColor: "text-green-400",
        },
        {
            title: "Generative Innovation",
            description:
                "Leveraging LLMs not just for features, but to optimize the engineering process itself—automating docs, tests, and security audits.",
            iconColor: "text-yellow-400",
        },
    ];

    const valueSectionAnimation = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true },
    };

    return (
        <section id={id} className="min-h-screen bg-black text-white font-sans overflow-x-hidden py-24">
            {/* 🖼️ Top Hero Image - Removed or made smaller for section */}
            {/* Keeping a version of it as a section header */}

            {/* 🧠 About Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <motion.header
                        className="w-full lg:w-1/3 lg:sticky lg:top-20"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-6xl sm:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            About Me
                        </h1>
                        <div className="w-20 border-b-4 border-blue-500"></div>
                    </motion.header>

                    <motion.section
                        className="w-full lg:w-2/3 grid grid-cols-1 gap-12 border-l border-gray-800 lg:pl-12"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                    >
                        <article>
                            <h2 className="text-2xl font-bold text-blue-400 mb-4 uppercase tracking-wider">
                                Focus: AI Infrastructure & Platform Engineering
                            </h2>
                            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                                <p>
                                    I am Shahmeer Shahid, an <b>AI Platform Engineer</b> specialized in <b>Secure Autonomous Systems</b>.
                                    My mission is to architect the infrastructure that powers the next generation of intelligent applications.
                                </p>
                                <p>
                                    As AI models move from production to mission-critical dependency, I verify their <b>Safety and Reliability</b>.
                                    I blend <b>DevSecOps rigor</b> with <b>MLOps agility</b>, building pipelines that are not just fast, but inherently secure against adversarial ML attacks.
                                </p>
                            </div>
                        </article>

                        <article className="pt-8">
                            <h2 className="text-xl font-bold text-gray-400 mb-3 uppercase tracking-wider">
                                Advanced Tech Stack
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                                <li><b>Orchestration:</b> Kubernetes (EKS/GKE), Helm, Docker, & WebAssembly (WASM).</li>
                                <li><b>AI Security:</b> LLM Guardrails, Prompt Defense, & Model Governance.</li>
                                <li><b>Infrastructure:</b> Terraform (IaC), Ansible, & AWS/GCP Cloud Native Architecture.</li>
                                <li><b>Frontend AI:</b> Next.js 15, React Server Components, & Vector Database Integration.</li>
                            </ul>
                        </article>
                    </motion.section>
                </div>
            </div>

            {/* ⚡ Design Philosophy */}
            <div className="flex flex-col md:flex-row mb-24">
                <motion.section
                    className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-zinc-950/70"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
                        Engineering Strategy
                    </h1>
                    <div className="w-24 border-b-4 border-white mb-12"></div>

                    <ul className="space-y-10">
                        {[
                            "Lead innovation that simplifies complexity: building with clarity, performance, and intent.",
                            "Create systems that are adaptive, blending high functionality with minimalism and invincible security.",
                            "Use design thinking to align user goals with technical excellence and long-term supply chain resilience.",
                        ].map((point, i) => (
                            <li key={i} className="flex items-start space-x-6">
                                <span className="text-4xl font-extrabold text-blue-500">
                                    {i + 1 < 10 ? `0${i + 1}` : i + 1}.
                                </span>
                                <p className="text-gray-300 text-lg leading-relaxed">{point}</p>
                            </li>
                        ))}
                    </ul>
                </motion.section>

                <motion.div
                    className="w-full md:w-1/2 min-h-[500px] relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/strategy.png"
                        alt="Engineering Strategy Visualization"
                        fill
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                    />
                </motion.div>
            </div>

            {/* 💎 Core Values Section */}
            <div className="px-6 lg:px-12 bg-zinc-950 py-24">
                <motion.header
                    className="max-w-4xl mx-auto text-center mb-16"
                    {...valueSectionAnimation}
                >
                    <p className="text-sm uppercase tracking-widest text-blue-400 mb-3 font-semibold">
                        Pillars of Practice
                    </p>
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
                        My Core Values
                    </h1>
                    <div className="w-20 border-b-4 border-blue-500 mx-auto"></div>
                </motion.header>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {coreValues.map((value, i) => (
                        <motion.article
                            key={i}
                            className="text-center p-6 bg-zinc-900 border border-gray-800 rounded-lg shadow-xl hover:bg-zinc-800 transition-all duration-300 hover:scale-[1.03]"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className={`mx-auto mb-4 ${value.iconColor}`}>
                                <CheckIcon className="w-8 h-8 mx-auto" />
                            </div>
                            <h2 className="text-lg font-bold mb-3 uppercase tracking-wider text-white">
                                {value.title}
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
