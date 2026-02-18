"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaGlobe, FaAward, FaShieldAlt } from "react-icons/fa";

const colorMap = {
    blue: {
        text: "text-blue-500",
        border: "border-blue-500",
        borderLight: "border-blue-500/20",
        borderUltraLight: "border-blue-500/10",
        bg: "bg-blue-500",
        bgLight: "bg-blue-500/5",
        dot: "#3b82f6"
    },
    red: {
        text: "text-red-600",
        border: "border-red-600",
        borderLight: "border-red-600/20",
        borderUltraLight: "border-red-600/10",
        bg: "bg-red-600",
        bgLight: "bg-red-600/5",
        dot: "#dc2626"
    }
};

const CertificateUI = ({ title, issuer, date, id, colorKey }) => {
    const colors = colorMap[colorKey];

    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group perspective-1000"
        >
            {/* 3D Certificate Card */}
            <div className="relative w-full aspect-[1.4/1] bg-[#1a1a1c] rounded-lg border-[8px] md:border-[12px] border-[#222] shadow-2xl overflow-hidden flex flex-col p-6 md:p-8 transition-all duration-500 group-hover:border-[#333] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                {/* Decorative Pattern Background */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.dot} 1px, transparent 0)`, backgroundSize: '24px 24px' }}></div>

                {/* Border Accent */}
                <div className={`absolute inset-1 border-[1px] ${colors.borderLight} pointer-events-none rounded-sm`}></div>
                <div className={`absolute inset-4 border-[2px] ${colors.borderUltraLight} pointer-events-none rounded-sm`}></div>

                {/* Content Header */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/40 border border-white/10">
                        <FaCertificate className={`text-2xl md:text-4xl ${colors.text}`} />
                    </div>
                    <div className="text-right">
                        <p className="text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8E93]">Verification ID</p>
                        <p className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">{id}</p>
                    </div>
                </div>

                {/* Main Body */}
                <div className="flex-grow flex flex-col items-center justify-center text-center relative z-10">
                    <h3 className="text-[8px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-[#8E8E93] mb-2 md:mb-4">Certificate of Completion</h3>
                    <h2 className="text-xl md:text-3xl font-extrabold text-white mb-2 leading-tight">Shahmeer Shahid</h2>
                    <div className={`w-16 md:w-24 h-[2px] ${colors.bg} mb-4 md:mb-6 opacity-50`}></div>
                    <p className="text-[#8E8E93] text-[10px] md:text-base mb-1 md:mb-2 font-medium">has successfully completed the requirements for</p>
                    <p className="text-sm md:text-2xl font-bold bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent italic px-4">
                        {title}
                    </p>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-end mt-4 relative z-10 pt-4 border-t border-white/5">
                    <div className="text-left">
                        <p className="text-[10px] md:text-[14px] font-dancing text-gray-400 italic mb-1 opacity-80">Official Registrar</p>
                        <div className="h-[1px] w-12 md:w-20 bg-white/20 mb-1"></div>
                        <p className="text-[7px] md:text-[9px] font-mono uppercase tracking-widest text-[#8E8E93]">{issuer}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 ${colors.borderLight} flex items-center justify-center mb-1 relative`}>
                            <div className={`absolute inset-0 ${colors.bgLight} animate-pulse rounded-full`}></div>
                            <FaAward className={`text-lg md:text-xl ${colors.text}`} />
                        </div>
                        <p className="text-[6px] md:text-[8px] font-mono uppercase text-[#8E8E93]">Verified Graduate</p>
                    </div>
                    <div className="text-right text-[#8E8E93]">
                        <p className="text-[8px] md:text-[10px] font-mono uppercase mb-1">Issue Date</p>
                        <p className="text-[10px] md:text-xs font-bold text-white">{date}</p>
                    </div>
                </div>

                {/* Holographic Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
            </div>
        </motion.div>
    );
};

export default function CertificatesSection({ id }) {
    const certificates = [
        {
            title: "Advanced React & Next.js Architecture",
            issuer: "Meta Engineering Academy",
            date: "January 2025",
            id: "CRT-SHAH-NX15-992",
            colorKey: "blue"
        },
        {
            title: "Cloud-Native Infrastructure & Security",
            issuer: "Google Cloud Platform Specialist",
            date: "December 2024",
            id: "CRT-SHAH-DP-8831",
            colorKey: "red"
        }
    ];

    return (
        <section id={id} className="relative py-24 bg-transparent overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-br from-white via-gray-400 to-gray-700 bg-clip-text text-transparent leading-tight">
                        Professional <br /> <span className="text-[#5F0A0A]">Certifications</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#4A0E0E] mx-auto mb-8"></div>
                    <p className="text-xl text-[#8E8E93] max-w-2xl mx-auto">
                        Validated expertise in high-performance web architecture and secure cloud ecosystems.
                    </p>
                </motion.div>

                {/* Certificates Grid */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <CertificateUI {...cert} />
                        </motion.div>
                    ))}
                </div>

                {/* Footer Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-wrap justify-center gap-8 items-center"
                >
                    <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <span className="text-[10px] uppercase tracking-widest font-mono">Verified by Credly</span>
                    </div>
                    <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <span className="text-[10px] uppercase tracking-widest font-mono">Authorized Specialist</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
