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
            description: "Enterprise Recipe Engine with Fine-Tuned LLMs and RAG for secure, localized results.",
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
            description: "Headless E-Com platform with edge-caching and PCI-DSS compliant secure payment tunnels.",
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
            description: "Secure digital fortress for personal data built on Zero Trust principles and ABAC.",
            tech: ["Next.js", "Keycloak / OAuth", "AES-256", "WebAuthn"],
            url: "https://justme-ashy.vercel.app/",
            github: null,
            featured: true,
            security: ["Zero Trust Arch", "ABAC Policies", "E2E Encryption"],
        },

        {
            image: "/p5.png",
            title: "Cars Vault",
            category: "Showcase App",
            description: "Elegant showroom application with modern design and responsive layout.",
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
            description: "Responsive travel platform showcasing nature and cultural heritage.",
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
        <section id={id} className="min-h-screen bg-transparent text-[#D1D1D1] py-16">
            {/* Header Section */}
            <div className="relative px-6 overflow-hidden mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-7xl mx-auto text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#D1D1D1] via-[#4A0E0E] to-[#1A1A1C] bg-clip-text text-transparent pb-2 leading-tight">
                        My Projects
                    </h2>
                    <div className="w-24 h-1 bg-[#4A0E0E] mx-auto mb-8"></div>
                    <p className="text-xl md:text-2xl text-[#8E8E93] max-w-3xl mx-auto leading-relaxed">
                        Secure, scalable web applications with a focus on <span className="text-[#4A0E0E] font-semibold">security by design</span>.
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
                            <FaShieldAlt className="text-[#4A0E0E]" />
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
                <div className="px-6 py-12 bg-transparent">
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
            className={`group relative bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-[#4A0E0E]/50 transition-all duration-300 ${compact ? "h-full" : ""
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
                    <span className="px-3 py-1 bg-[#1A1A1C] backdrop-blur-sm text-[#D1D1D1] text-xs font-bold rounded-full border border-white/5">
                        {project.category}
                    </span>
                </div>

                {/* Security Badge */}
                {project.security.length > 0 && (
                    <div className="absolute top-4 right-4">
                        <div className="px-3 py-1 bg-[#4A0E0E]/40 backdrop-blur-sm text-[#D1D1D1] text-xs font-semibold rounded-full flex items-center gap-1 border border-[#4A0E0E]/20">
                            <FaLock className="text-xs" />
                            Secure
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-[#8E8E93] text-sm mb-4 leading-relaxed line-clamp-3">
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
                        className="flex-1 bg-gradient-to-r from-[#1A1A1C] to-[#4A0E0E] text-[#D1D1D1] text-center py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#4A0E0E] focus:ring-offset-2 focus:ring-offset-[#121214] border border-white/5 shadow-lg"
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
