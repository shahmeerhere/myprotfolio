"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaExclamationTriangle, FaRedoAlt, FaHome } from "react-icons/fa";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center px-6 font-sans relative overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4A0E0E]/10 via-transparent to-transparent opacity-50" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-lg w-full text-center space-y-8 p-12 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl"
            >
                {/* Error Icon */}
                <div className="flex justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-24 h-24 flex items-center justify-center rounded-full bg-[#4A0E0E]/20 text-[#4A0E0E] text-5xl border border-[#4A0E0E]/30"
                    >
                        <FaExclamationTriangle />
                    </motion.div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#D1D1D1] tracking-tighter">
                        System <br />
                        <span className="text-[#5F0A0A]">Anomaly</span>
                    </h1>
                    <p className="text-[#8E8E93] text-lg leading-relaxed max-w-sm mx-auto font-light">
                        An unexpected error occurred within the platform layer. Our systems are working to resolve the issue.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => reset()}
                        className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1A1A1C] to-[#4A0E0E] text-[#D1D1D1] font-bold text-sm uppercase tracking-wider rounded-full border border-white/5 shadow-lg group transition-all"
                    >
                        <FaRedoAlt className="group-hover:rotate-180 transition-transform duration-500" />
                        Try Again
                    </motion.button>

                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-4 bg-transparent hover:bg-white/5 text-[#8E8E93] hover:text-[#D1D1D1] font-bold text-sm uppercase tracking-wider rounded-full border border-white/10 transition-all"
                        >
                            <FaHome />
                            Terminal Home
                        </motion.button>
                    </Link>
                </div>

                {/* Error Details (Subtle) */}
                <p className="text-[10px] font-mono text-[#505052] uppercase tracking-[0.2em] pt-4">
                    Error Protocol: {error?.digest || "INTERNAL_RUNTIME_ERR"}
                </p>
            </motion.div>
        </div>
    );
}
