"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaLinux,
    FaUserShield, // Used for Auth/Security
    FaBug, // Used for Penetration Testing/Hacking
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
    SiPostman, // Added Postman
    SiBurpsuite, // Added Burp Suite
} from "react-icons/si";
import { IoIosColorPalette } from "react-icons/io"; // Icon for React Bits
import { Button } from "../../components/ui/button";

const allTools = [
    // --- Frontend ---
    { name: "React", icon: <FaReact />, color: "#61dafb", category: "Frontend", url: "https://reactjs.org/" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#cccccc", category: "Frontend", url: "https://nextjs.org/" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", category: "Frontend", url: "https://tailwindcss.com/" },
    { name: "UI/UX Libraries", icon: <IoIosColorPalette />, color: "#a855f7", category: "Frontend", url: "https://reactbits.dev/" },
    
    // --- Backend & Auth ---
    { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a", category: "Backend", url: "https://nodejs.org/" },
    { name: "Firebase", icon: <SiFirebase />, color: "#fbbf24", category: "Backend", url: "https://firebase.google.com/" },
    { name: "Supabase", icon: <SiSupabase />, color: "#22c55e", category: "Backend", url: "https://supabase.com/" },
    { name: "Clerk Auth", icon: <FaUserShield />, color: "#6c47ff", category: "Backend", url: "https://clerk.com/" }, // Added Clerk
    { name: "Redux", icon: <SiRedux />, color: "#764abc", category: "Backend", url: "https://redux.js.org/" },
    
    // --- Database ---
    { name: "MongoDB", icon: <SiMongodb />, color: "#3FA037", category: "Database", url: "https://www.mongodb.com/" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758f", category: "Database", url: "https://www.mysql.com/" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", category: "Database", url: "https://www.postgresql.org/" },
    
    // --- Security & Testing ---
    { name: "Burp Suite", icon: <SiBurpsuite />, color: "#ff8c00", category: "Security", url: "https://portswigger.net/burp" }, // Added Burp Suite
    { name: "Nmap", icon: <FaBug />, color: "#cc0000", category: "Security", url: "https://nmap.org/" }, // Added Nmap
    { name: "Git", icon: <FaGitAlt />, color: "#f1502f", category: "DevOps", url: "https://git-scm.com/" },
    
    // --- API & Environment ---
    { name: "Postman", icon: <SiPostman />, color: "#ff6c37", category: "Tools", url: "https://www.postman.com/" }, // Added Postman
    { name: "Vercel", icon: <SiVercel />, color: "#cccccc", category: "Cloud", url: "https://vercel.com/" },
    { name: "Linux", icon: <FaLinux />, color: "#f0f0f0", category: "Cloud", url: "https://www.linux.org/" },
];

export default function Dashboard() {
    const [filter, setFilter] = useState("All");

    // Dynamically generate unique categories for the buttons
    const categories = ["All", ...new Set(allTools.map(t => t.category))];

    const filteredTools = filter === "All" 
        ? allTools 
        : allTools.filter(t => t.category === filter);

    // Custom animation for tool items
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
        <div className="min-h-screen p-8 bg-transparent">
            <h1 className="text-5xl font-extrabold text-center mb-12
                            bg-clip-text text-transparent
                            bg-gradient-to-r from-white via-gray-400 to-gray-600
                            drop-shadow-lg">
                DevSecOps Tools Dashboard 🛡️
            </h1>

            {/* Category Buttons */}
            <div className="flex gap-4 mb-8 flex-wrap justify-center">
                {categories.map(cat => (
                    <Button
                        key={cat}
                        // Use a custom class for better styling continuity with the portfolio theme
                        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                            filter === cat 
                                ? 'bg-cyan-500 hover:bg-cyan-600 text-black shadow-lg shadow-cyan-500/30' 
                                : 'bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700'
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
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
                {filteredTools.map((tool, i) => (
                    <motion.div
                        key={tool.name}
                        custom={i} // Pass index to custom animation variant
                        variants={itemMotion}
                        whileHover={{ scale: 1.1, y: -5 }} // Added subtle y-lift on hover
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex flex-col items-center cursor-pointer text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50"
                        onClick={() => window.open(tool.url, "_blank", "noopener,noreferrer")}
                    >
                        <div
                            className="p-3 flex items-center justify-center"
                            style={{
                                fontSize: "4rem",
                                color: tool.color,
                                textShadow: `0 0 8px ${tool.color}, 0 0 15px ${tool.color}cc`, // Sharper shadow
                            }}
                        >
                            {tool.icon}
                        </div>
                        <span className="mt-2 text-lg font-semibold text-white/90">{tool.name}</span>
                        <span className="text-xs text-cyan-400/80 uppercase tracking-widest mt-1">
                            {tool.category}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}