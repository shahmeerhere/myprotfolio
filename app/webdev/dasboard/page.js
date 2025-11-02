"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaDocker,
    FaGitAlt,
    FaAws,
    FaLinux,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiFirebase,
    SiSupabase,
    SiKubernetes,
    SiRedux,
    SiVercel,
    SiMongodb,
    SiMysql,
    SiPostgresql,
} from "react-icons/si";
import { Button } from "../../components/ui/button";

const allTools = [
    { name: "React", icon: <FaReact />, color: "#61dafb", category: "Frontend", url: "https://reactjs.org/" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#cccccc", category: "Frontend", url: "https://nextjs.org/" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", category: "Frontend", url: "https://tailwindcss.com/" },
    { name: "React Bits", icon: <FaReact />, color: "#a855f7", category: "Frontend", url: "https://reactbits.dev/" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a", category: "Backend", url: "https://nodejs.org/" },
    { name: "Firebase", icon: <SiFirebase />, color: "#fbbf24", category: "Backend", url: "https://firebase.google.com/" },
    { name: "Supabase", icon: <SiSupabase />, color: "#22c55e", category: "Backend", url: "https://supabase.com/" },
    { name: "Redux", icon: <SiRedux />, color: "#764abc", category: "Backend", url: "https://redux.js.org/" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#3FA037", category: "Database", url: "https://www.mongodb.com/" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758f", category: "Database", url: "https://www.mysql.com/" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", category: "Database", url: "https://www.postgresql.org/" },
    { name: "Docker", icon: <FaDocker />, color: "#0db7ed", category: "DevOps", url: "https://www.docker.com/" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "#326ce5", category: "DevOps", url: "https://kubernetes.io/" },
    { name: "Git", icon: <FaGitAlt />, color: "#f1502f", category: "DevOps", url: "https://git-scm.com/" },
    { name: "Vercel", icon: <SiVercel />, color: "#cccccc", category: "Cloud", url: "https://vercel.com/" },
    { name: "AWS", icon: <FaAws />, color: "#ff9900", category: "Cloud", url: "https://aws.amazon.com/" },
    { name: "Linux", icon: <FaLinux />, color: "#f0f0f0", category: "Cloud", url: "https://www.linux.org/" },
];

export default function Dashboard() {
    const [filter, setFilter] = useState("All");

    const filteredTools = filter === "All" 
        ? allTools 
        : allTools.filter(t => t.category === filter);

    return (
        <div className="min-h-screen p-8 bg-transparent">
            <h1 className="text-5xl font-extrabold text-center mb-12
                           bg-clip-text text-transparent
                           bg-gradient-to-r from-white via-gray-400 to-gray-600
                           drop-shadow-lg">
                Dev Tools Dashboard
            </h1>

            {/* Category Buttons */}
            <div className="flex gap-4 mb-8 flex-wrap justify-center">
                {["All", "Frontend", "Backend", "Database", "DevOps", "Cloud"].map(cat => (
                    <Button
                        key={cat}
                        variant={filter === cat ? "default" : "outline"}
                        className={filter === cat ? "text-black bg-white/20" : "text-white border-white/50 hover:bg-white/10"}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-center">
                {filteredTools.map((tool, i) => (
                    <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => window.open(tool.url, "_blank", "noopener,noreferrer")}
                    >
                        <div
                            className="p-6 rounded-full flex items-center justify-center"
                            style={{
                                fontSize: "4rem",
                                color: tool.color,
                                textShadow: `0 0 10px ${tool.color}, 0 0 20px ${tool.color}, 0 0 30px ${tool.color}`,
                            }}
                        >
                            {tool.icon}
                        </div>
                        <span className="mt-4 text-lg font-semibold text-white">{tool.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
