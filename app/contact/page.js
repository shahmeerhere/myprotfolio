"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-hidden">

            {/* Contact Section */}
            <section className="flex flex-col md:flex-row min-h-screen">

                {/* Left Image Panel */}
                <div className="w-full md:w-1/2 relative h-96 md:h-auto bg-[#111]">
                    <Image
                        src="https://placehold.co/1000x1200/0a0a0a/ffffff?text=Cyber+Tech+Structure"
                        alt="Futuristic cyber architecture"
                        width={1000}
                        height={1200}
                        className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition duration-700"
                    />
                </div>

                {/* Right Contact Info */}
                <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center">
                    <div className="max-w-md mx-auto md:mx-0 space-y-10">

                        {/* Header */}
                        <motion.header
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <h1 className="text-5xl sm:text-7xl font-extrabold mb-3 tracking-tight">
                                Contact Me
                            </h1>
                            <div className="w-24 border-b-4 border-cyan-400 mb-10"></div>
                        </motion.header>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-gray-400 leading-relaxed"
                        >
                            Open for collaborations, freelance projects, and cybersecurity-focused roles.
                            Lets build something meaningful whether it is a secure web platform,
                            scalable architecture, or an automation system that works smarter.
                        </motion.p>

                        {/* Contact List */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="space-y-5 text-gray-300"
                        >
                            {/* Phone */}
                            <a
                                href="tel:+923101576742"
                                className="flex items-center space-x-3 hover:text-cyan-400 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.3 2.3a1 1 0 011.4 0l3 3a1 1 0 01.21 1.1l-1 2a1 1 0 00.2 1.1l4.3 4.3a1 1 0 001.1.2l2-1a1 1 0 011.1.2l3 3a1 1 0 010 1.4l-1.5 1.5a2.5 2.5 0 01-2.9.5 26 26 0 01-9.7-9.7 2.5 2.5 0 01.5-2.9L2.3 2.3z" />
                                </svg>
                                <span>+92 310 157 6742</span>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:theshahmeer786@gmail.com"
                                className="flex items-center space-x-3 hover:text-cyan-400 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>theshahmeer786@gmail.com</span>
                            </a>

                            {/* Website */}
                            <a
                                href="https://shahmeershahid.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:text-cyan-400 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 2.293a1 1 0 011.414 0L19 7.586a1 1 0 010 1.414l-5.293 5.293a1 1 0 01-1.414-1.414L15.586 9H5a1 1 0 010-2h10.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <span>www.shahmeershahid.vercel.app</span>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/shahmeershahid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:text-cyan-400 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7 19H4V9h3v10zM5.5 7.6A1.8 1.8 0 115.5 4a1.8 1.8 0 010 3.6zM20 19h-3v-5.4c0-1.29-.46-2.17-1.61-2.17-.88 0-1.41.6-1.64 1.18-.08.2-.1.48-.1.76V19h-3s.04-8.13 0-9h3v1.27c.4-.63 1.12-1.52 2.72-1.52 1.99 0 3.63 1.3 3.63 4.09V19z" />
                                </svg>
                                <span>linkedin.com/in/shahmeershahid</span>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/shahmeerhere"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:text-cyan-400 transition"
                            >
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                                    alt="GitHub"
                                    width={20}
                                    height={20}
                                    className="h-5 w-5 text-cyan-400"
                                />
                                <span>GitHub</span>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com/shahmeer.shahid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:text-cyan-400 transition"
                            >
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                                    alt="Instagram"
                                    width={20}
                                    height={20}
                                    className="h-5 w-5 text-cyan-400"
                                />
                                <span>Instagram</span>
                            </a>

                            {/* Fiverr */}
                            <a
                                href="https://www.fiverr.com/shahmeerhere"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:text-cyan-400 transition"
                            >
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                                    alt="Fiverr"
                                    width={20}
                                    height={20}
                                    className="h-5 w-5 text-cyan-400"
                                />
                                <span>Fiverr</span>
                            </a>

                            {/* Upwork */}
                            <a
                                href="https://www.upwork.com/freelancers/~01shahmeer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 hover:text-cyan-400 transition"
                            >
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/512/5968/5968709.png"
                                    alt="Upwork"
                                    width={20}
                                    height={20}
                                    className="h-5 w-5 text-cyan-400"
                                />
                                <span>Upwork</span>
                            </a>

                            {/* Address */}
                            <div className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>Islamabad, Pakistan</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Thank You Section */}
            <section className="flex flex-col md:flex-row min-h-screen">
                {/* Text Section */}
                <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center">
                    <motion.div
                        className="max-w-xl mx-auto md:mx-0"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-extrabold mb-3 tracking-tight">
                            Thank You
                        </h1>
                        <div className="w-24 border-b-4 border-cyan-400 mb-10"></div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            I appreciate you taking the time to explore my work. If you are seeking someone driven, creative, and deeply focused on cybersecurity and full-stack development you have found the right person.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Let us connect and build the future securely, one line of code at a time.
                        </p>
                    </motion.div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 relative h-96 md:h-auto bg-[#111]">
                    <Image
                        src="https://placehold.co/1000x1200/0a0a0a/ffffff?text=Digital+Skyline"
                        alt="Digital skyline in futuristic tones"
                        width={1000}
                        height={1200}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                    />
                </div>
            </section>
        </div>
    );
};

export default Contact;
