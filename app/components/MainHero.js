"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MainHero() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col font-sans">
            {/* Background Image - The high-quality face portrait you uploaded */}
            <div className="absolute inset-0 z-0">
                {/* Subtle gradients for readability while keeping the image center sharp */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

                <Image
                    src="/hero_main.jpg"
                    alt="Shahmeer Shahid"
                    fill
                    className="object-cover object-top opacity-100"
                    style={{ filter: "contrast(1.02) brightness(0.95)" }}
                    priority
                />
            </div>

            {/* Main Content Area - Text on the sides as in the reference picture */}
            <div className="relative z-20 flex-grow flex flex-col md:flex-row items-center justify-between px-8 md:px-24">

                {/* Left Side: Large Title */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full md:w-1/2 mt-12 md:mt-0"
                >
                    <h1 className="text-6xl md:text-[8vw] font-bold leading-[0.9] tracking-tighter text-white">
                        Platform <br />
                        <span className="text-gray-400">Engineer</span>
                    </h1>
                </motion.div>

                {/* Right Side: Small Description */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="w-full md:w-1/3 mt-8 md:mt-24"
                >
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xs font-light">
                        Crafting intelligent systems and secure platforms that push technical boundaries.
                        Focused on building high-performance, resilient architecture.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Info Area */}
            <footer className="relative z-20 p-8 md:px-12 md:pb-12 flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="flex flex-wrap gap-12">
                    {[
                        { num: "01", label: "Full-Stack Development" },
                        { num: "02", label: "DevSecOps & Security" },
                        { num: "03", label: "AI Systems Engineering" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + (i * 0.1) }}
                            className="flex flex-col gap-1"
                        >
                            <span className="text-[10px] font-mono text-blue-500">{item.num}</span>
                            <span className="text-[11px] uppercase tracking-widest text-white/70 font-medium">{item.label}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Local Time</span>
                    <span className="text-xs text-white font-bold">{time} GMT+5</span>
                </div>
            </footer>

            {/* Subtle Vignette Background */}
            <div className="absolute inset-0 pointer-events-none z-10 radial-vignette" />

            <style jsx>{`
                .radial-vignette {
                    background: radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%);
                }
            `}</style>
        </section>
    );
}
