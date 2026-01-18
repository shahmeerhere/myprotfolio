"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaLock, FaShieldAlt } from "react-icons/fa";

export default function ProjectsSection({ id }) {
    const projects = [
        {
            image: "/p9.png",
            title: "NeuroGastronomy AI",
            category: "GenAI & LLM Ops",
            description: "Enterprise-grade Recipe Engine powered by Fine-Tuned LLMs. Features RAG for localized ingredients and strict output guardrails against hallucinated health advice.",
            tech: ["Next.js", "OpenAI / LangChain", "Vector DB", "Prompt Eng."],
            url: "https://foodgenie-five.vercel.app/",
            github: null,
            featured: true,
            security: ["Prompt Injection Defense", "PII Redaction", "Output Validation"],
        },
        {
            image: "/p7.png",
            title: "Lumix Commerce",
            category: "Headless E-Com Platform",
            description: "High-performance headless architecture for global retail. Implements edge-caching strategies and PCI-DSS compliant payment tunnels for sub-second transactions.",
            tech: ["Next.js 15", "Edge Functions", "Stripe Connect", "Redis"],
            url: "https://shoestore-9yb9.vercel.app/",
            github: null,
            featured: true,
            security: ["PCI-DSS Tunnels", "Bot Mitigation", "Session Hygiene"],
        },
        {
            image: "/p8.png",
            title: "ZeroTrust Vault",
            category: "Identity & Access",
            description: "A secure digital fortress for personal data. Built on Zero Trust principles with granular ABAC (Attribute-Based Access Control) and client-side encryption keys.",
            tech: ["Next.js", "Keycloak / OAuth", "AES-256", "WebAuthn"],
            url: "https://justme-ashy.vercel.app/",
            github: null,
            featured: true,
            security: ["Zero Trust Arch", "ABAC Policies", "E2E Encryption"],
        },
        {
            image: "/p2.png",
            title: "AutoSched Agent",
            category: "Constraint AI",
            description: "Algorithmic scheduling agent that solves NP-hard overlap problems in real-time. optimized for university-scale resource allocation.",
            tech: ["React", "Genetic Algos", "Heuristics", "WASM"],
            url: "https://timetablegenerator-iota.vercel.app",
            github: null,
            featured: false,
            security: ["DoS Protection", "Input Sanitization"],
        },
        {
            image: "/p5.png",
            title: "Cars Vault",
            category: "Showcase App",
            description: "Elegant car showroom application with modern design and responsive layout. Showcases automotive inventory with smooth user experience.",
            tech: ["Next.js", "React", "Tailwind CSS"],
            url: "https://carsvault.vercel.app/",
            github: null,
            featured: false,
            security: [],
        },
        {
            image: "/p1.png",
            title: "Pak Tourism",
            category: "Travel & Tourism",
            description: "Explore beautiful destinations across Pakistan. A responsive travel platform showcasing the country's natural beauty and cultural heritage.",
            tech: ["Next.js", "React", "Responsive Design"],
            url: "https://paktourism.vercel.app/",
            github: null,
            featured: false,
            security: [],
        },

    ];

    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section id={id} className="min-h-screen bg-black text-white py-24">
            {/* Header Section */}
            <div className="relative px-6 overflow-hidden mb-16">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-black"></div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-7xl mx-auto text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent pb-2 leading-tight">
                        My Projects
                    </h1>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Building secure, scalable web applications with modern technologies.
                        Each project emphasizes <span className="text-blue-400 font-semibold">security by design</span> and exceptional user experience.
                    </p>
                </motion.div>
            </div>

            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
                <div className="px-6 mb-20">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
                        >
                            <FaShieldAlt className="text-blue-400" />
                            Featured Secure Projects
                        </motion.h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {featuredProjects.map((project, idx) => (
                                <ProjectCard key={idx} project={project} variants={itemVariants} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}

            {/* Other Projects */}
            {otherProjects.length > 0 && (
                <div className="px-6 py-16 bg-zinc-950/50">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-12"
                        >
                            Additional Projects
                        </motion.h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {otherProjects.map((project, idx) => (
                                <ProjectCard key={idx} project={project} variants={itemVariants} compact />
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}
        </section>
    );
}

function ProjectCard({ project, variants, compact = false }) {
    return (
        <motion.article
            variants={variants}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`group relative bg-zinc-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 ${compact ? "h-full" : ""
                }`}
            role="article"
            aria-label={`Project: ${project.title}`}
        >
            {/* Image */}
            <div className="relative h-48 md:h-64 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-xs font-semibold rounded-full">
                        {project.category}
                    </span>
                </div>

                {/* Security Badge */}
                {project.security.length > 0 && (
                    <div className="absolute top-4 right-4">
                        <div className="px-3 py-1 bg-green-600/80 backdrop-blur-sm text-xs font-semibold rounded-full flex items-center gap-1">
                            <FaLock className="text-xs" />
                            Secure
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                {/* Security Features */}
                {project.security.length > 0 && !compact && (
                    <div className="mb-4">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Security Features:</p>
                        <div className="flex flex-wrap gap-2">
                            {project.security.map((feature, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tech Stack */}
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, compact ? 3 : 5).map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > (compact ? 3 : 5) && (
                            <span className="px-2 py-1 bg-gray-800 text-gray-500 text-xs rounded">
                                +{project.tech.length - (compact ? 3 : 5)}
                            </span>
                        )}
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                        aria-label={`Visit ${project.title} live site`}
                    >
                        <FaExternalLinkAlt className="text-xs" />
                        View Live
                    </a>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                            aria-label={`View ${project.title} on GitHub`}
                        >
                            <FaGithub />
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}
