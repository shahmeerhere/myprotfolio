"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

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

// --- Premium Abstract Security/Tech Visualization ---
const SecurityVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        {/* Rotating Rings */}
        {[...Array(3)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full border border-blue-500/20"
                style={{
                    width: `${300 + i * 100}px`,
                    height: `${300 + i * 100}px`,
                    borderStyle: i % 2 === 0 ? "solid" : "dashed",
                }}
                animate={{
                    rotate: i % 2 === 0 ? 360 : -360,
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
            />
        ))}

        {/* Central Core */}
        <motion.div
            className="relative z-10 w-48 h-48 bg-black/50 backdrop-blur-md rounded-full border border-blue-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)]"
            animate={{
                boxShadow: ["0 0 50px rgba(59,130,246,0.3)", "0 0 80px rgba(59,130,246,0.6)", "0 0 50px rgba(59,130,246,0.3)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
        >
            <SecurityIcon />

            {/* Floating Particles around core */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`p-${i}`}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                        x: [0, Math.cos(i) * 60, 0],
                        y: [0, Math.sin(i) * 60, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </motion.div>
    </div>
);

export default function Hero() {
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

    return (
        <div ref={containerRef} className="relative min-h-screen bg-[#444] overflow-hidden flex flex-col justify-center">
            <motion.section
                style={{ opacity, scale }}
                className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 relative z-10 pt-20"
            >
                {/* === Left Content === */}
                <motion.article
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left z-20"
                >
                    <div className="space-y-6 md:space-y-8">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="space-y-2"
                        >
                            <motion.h1
                                variants={fadeInUp}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
                            >
                                <span className="block text-white">Building Fast</span>
                                <span className="block text-gray-500">Web Apps,</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-gray-400">
                                    Secured by Design.
                                </span>
                            </motion.h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6"
                        >
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                                Hi, I'm <strong>Shahmeer Shahid</strong>. I bridge the gap
                                between rapid product delivery and ironclad security.
                                Full-stack developer & DevSecOps advocate.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
                                <Link href="#project" className="group w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative w-full px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black font-bold text-sm uppercase tracking-wider rounded-full overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                                    >
                                        <span className="relative z-10">Explore Projects</span>
                                    </motion.button>
                                </Link>

                                <Link href="#contact" className="group w-full sm:w-auto">
                                    <motion.div
                                        whileHover={{ scale: 1.1, x: 5 }}
                                        className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full group-hover:border-white/40 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium uppercase tracking-wider">
                                            Get In Touch
                                        </span>
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </motion.article>

                {/* === Right Content - Abstract Visual === */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center relative mt-10 md:mt-0"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen" />
                    <SecurityVisual />
                </motion.div>

            </motion.section>
        </div>
    );
}
