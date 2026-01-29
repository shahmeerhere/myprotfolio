"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaLinux,
    FaUserShield,
    FaBug,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiFirebase,
    SiSupabase,
    SiRedux,
    SiVercel,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiPostman,
    SiBurpsuite,
} from "react-icons/si";
import { IoIosColorPalette } from "react-icons/io";
import { MdGradient } from "react-icons/md";
import { Button } from "./ui/button";

const allTools = [
    // --- Frontend ---
    { name: "React", icon: <FaReact />, color: "#61dafb", category: "Frontend", url: "https://reactjs.org/" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#cccccc", category: "Frontend", url: "https://nextjs.org/" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", category: "Frontend", url: "https://tailwindcss.com/" },
    { name: "React Bits", icon: <IoIosColorPalette />, color: "#a855f7", category: "Frontend", url: "https://reactbits.dev/" },
    { name: "uiGradients", icon: <MdGradient />, color: "#eb3349", category: "Frontend", url: "https://uigradients.com/" },

    // --- Backend & Auth ---
    { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a", category: "Backend", url: "https://nodejs.org/" },
    { name: "Firebase", icon: <SiFirebase />, color: "#fbbf24", category: "Backend", url: "https://firebase.google.com/" },
    { name: "Supabase", icon: <SiSupabase />, color: "#22c55e", category: "Backend", url: "https://supabase.com/" },
    { name: "Clerk Auth", icon: <FaUserShield />, color: "#6c47ff", category: "Backend", url: "https://clerk.com/" },
    { name: "Redux", icon: <SiRedux />, color: "#764abc", category: "Backend", url: "https://redux.js.org/" },

    // --- Database ---
    { name: "MongoDB", icon: <SiMongodb />, color: "#3FA037", category: "Database", url: "https://www.mongodb.com/" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758f", category: "Database", url: "https://www.mysql.com/" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", category: "Database", url: "https://www.postgresql.org/" },

    // --- Security & Testing ---
    { name: "Burp Suite", icon: <SiBurpsuite />, color: "#ff8c00", category: "Security", url: "https://portswigger.net/burp" },
    { name: "Nmap", icon: <FaBug />, color: "#cc0000", category: "Security", url: "https://nmap.org/" },
    { name: "Git", icon: <FaGitAlt />, color: "#f1502f", category: "DevOps", url: "https://git-scm.com/" },

    // --- API & Environment ---
    { name: "Postman", icon: <SiPostman />, color: "#ff6c37", category: "Tools", url: "https://www.postman.com/" },
    { name: "Vercel", icon: <SiVercel />, color: "#cccccc", category: "Cloud", url: "https://vercel.com/" },
    { name: "Linux", icon: <FaLinux />, color: "#f0f0f0", category: "Cloud", url: "https://www.linux.org/" },
];

export default function Dashboard() {
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...new Set(allTools.map(t => t.category))];

    const filteredTools = filter === "All"
        ? allTools
        : allTools.filter(t => t.category === filter);

    const itemMotion = {
        hidden: { opacity: 0, y: 20 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
            },
        }),
    };

    return (
        <div className="min-h-screen p-8 bg-transparent flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12
                            bg-clip-text text-transparent
                            bg-gradient-to-r from-[#D1D1D1] via-[#4A0E0E] to-[#1A1A1C]
                            drop-shadow-lg">
                DevSecOps Tools Dashboard 🛡️
            </h1>

            {/* Category Buttons */}
            <div className="flex gap-4 mb-8 flex-wrap justify-center">
                {categories.map(cat => (
                    <Button
                        key={cat}
                        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${filter === cat
                            ? 'bg-gradient-to-r from-[#1A1A1C] to-[#4A0E0E] text-[#D1D1D1] shadow-lg shadow-[#4A0E0E]/20 border border-white/10'
                            : 'bg-black border border-white/5 text-[#8E8E93] hover:bg-[#1A1A1C] hover:text-[#D1D1D1]'
                            }`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            {/* Tools Grid */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
                {filteredTools.map((tool, i) => (
                    <motion.div
                        key={tool.name}
                        custom={i}
                        variants={itemMotion}
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex flex-col items-center cursor-pointer text-center p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-[#4A0E0E]/50"
                        onClick={() => window.open(tool.url, "_blank", "noopener,noreferrer")}
                    >
                        <div
                            className="p-3 flex items-center justify-center"
                            style={{
                                fontSize: "4rem",
                                color: tool.color,
                                textShadow: `0 0 8px ${tool.color}, 0 0 15px ${tool.color}cc`,
                            }}
                        >
                            {tool.icon}
                        </div>
                        <span className="mt-2 text-lg font-semibold text-[#D1D1D1]">{tool.name}</span>
                        <span className="text-xs text-[#8E8E93] uppercase tracking-widest mt-1">
                            {tool.category}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
