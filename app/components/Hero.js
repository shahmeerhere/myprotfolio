"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";



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
        <div ref={containerRef} className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-center">
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

                {/* === Right Content - 3D Visual === */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center relative mt-10 md:mt-0"
                >
                    {/* Background Glow */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-transparent blur-[80px] rounded-full"
                    />

                    {/* 3D Sphere Image with Animation */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 3, 0, -3, 0],
                        }}
                        transition={{
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                        }}
                        className="relative z-10"
                    >
                        {/* Glowing ring around image */}
                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0 0 60px rgba(139, 92, 246, 0.2), 0 0 120px rgba(59, 130, 246, 0.1)",
                                    "0 0 80px rgba(139, 92, 246, 0.4), 0 0 160px rgba(59, 130, 246, 0.2)",
                                    "0 0 60px rgba(139, 92, 246, 0.2), 0 0 120px rgba(59, 130, 246, 0.1)",
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="rounded-full"
                        >
                            <img
                                src="/hero_3d_sphere.png"
                                alt="3D Holographic Sphere"
                                className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] object-contain"
                            />
                        </motion.div>

                        {/* Floating particles */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1.5 h-1.5 bg-violet-400 rounded-full"
                                style={{
                                    top: `${20 + i * 15}%`,
                                    left: `${10 + i * 20}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 2 + i * 0.5,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>

            </motion.section>
        </div>
    );
}
