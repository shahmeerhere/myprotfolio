"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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
        <section className="relative w-full h-screen bg-[#444] overflow-hidden flex flex-col justify-between">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero_eye.png"
                    alt="Shahmeer Vision"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                {/* Lighter Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
            </div>

            {/* Top Bar Info */}
            <header className="relative z-20 flex justify-end items-start pt-24 px-6 md:pt-32 md:px-10 w-full text-xs md:text-sm font-mono tracking-widest text-gray-300 uppercase mix-blend-difference">
                {/* Left side text removed as requested */}
                <div className="flex flex-col gap-1 text-right">
                    <span className="flex items-center gap-2 justify-end">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Available for project
                    </span>
                    <span>{time} GMT+5</span>
                    <span>EARLY 2026</span>
                </div>
            </header>

            {/* Main Center Content (Pushing text to visually align with reference) */}
            <div className="relative z-10 flex-grow flex items-center justify-center pointer-events-none">
                {/* 
                    The specific "AKULA" style large text is usually top-left or centered-left.
                    We will place "SHAHMEER" very large.
                 */}
            </div>

            <div className="absolute top-[15%] left-[5%] md:left-[8%] z-10 mix-blend-overlay opacity-90">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-[18vw] leading-none font-black text-white tracking-tighter"
                    style={{ fontFamily: 'Impact, sans-serif' }} // Using system font slightly closer to the bold industrial look
                >
                    SHAHMEER
                </motion.h1>
            </div>

            {/* Bottom Content */}
            <footer className="relative z-20 flex flex-col md:flex-row justify-between items-end p-6 md:p-12 w-full text-gray-400">
                <div className="max-w-md">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-lg md:text-xl font-light text-white leading-relaxed"
                    >
                        Building <span className="font-bold">brands</span>, <span className="font-bold">websites</span>, <br />
                        and <span className="font-bold">secure experiences</span>.
                    </motion.p>
                    <div className="mt-4 flex gap-4 text-xs font-mono tracking-widest uppercase">
                        <span>Scroll</span>
                        <motion.span
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            ↓
                        </motion.span>
                    </div>
                </div>

                <div className="hidden md:block text-right font-mono text-xs opacity-50">
                    <span>BASED IN PAKISTAN</span>
                </div>
            </footer>
        </section>
    );
}
