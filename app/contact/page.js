"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* CONTACT SECTION */}
      <section className="flex flex-col md:flex-row min-h-screen">
        {/* LEFT VECTOR PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex items-center justify-center bg-[#111]"
        >
          <Image
            src="/first.svg"
            alt="Cyber Frame"
            width={600}
            height={600}
            className="opacity-70 hover:opacity-100 transition duration-700"
            priority
          />
        </motion.div>

        {/* RIGHT CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center"
        >
          <div className="max-w-md mx-auto md:mx-0 space-y-10">
            {/* HEADER */}
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

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed"
            >
              Open for collaborations, freelance projects, and
              cybersecurity-focused roles.  
              Let’s build secure web platforms, scalable systems, and meaningful tech solutions.
            </motion.p>

            {/* CONTACT LIST */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-5 text-gray-300"
            >
              {/* PHONE */}
              <a
                href="tel:+923101576742"
                className="flex items-center space-x-3 hover:opacity-80 transition"
              >
                <FaPhone className="text-cyan-400" />
                <span className="text-cyan-400">+92 310 157 6742</span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:theshahmeer786@gmail.com"
                className="flex items-center space-x-3 hover:opacity-80 transition"
              >
                <FaEnvelope className="text-[#EA4335]" />
                <span className="bg-gradient-to-r from-[#EA4335] to-[#FBBC05] bg-clip-text text-transparent font-semibold">
                  Gmail
                </span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/shahmeerhere"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:opacity-80 transition"
              >
                <FaGithub className="text-gray-200" />
                <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent font-semibold">
                  GitHub
                </span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/shahmeershahid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:opacity-80 transition"
              >
                <FaLinkedin className="text-[#0A66C2]" />
                <span className="bg-gradient-to-r from-[#0A66C2] to-[#0077B5] bg-clip-text text-transparent font-semibold">
                  LinkedIn
                </span>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/shahmeer.shahid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:opacity-80 transition"
              >
                <FaInstagram className="text-[#E4405F]" />
                <span className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] bg-clip-text text-transparent font-semibold">
                  Instagram
                </span>
              </a>

              {/* FIVERR */}
              <a
                href="https://www.fiverr.com/shahmeerhere"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:opacity-80 transition"
              >
                <SiFiverr className="text-[#1DBF73]" />
                <span className="bg-gradient-to-r from-[#1DBF73] to-[#0ACF83] bg-clip-text text-transparent font-semibold">
                  Fiverr
                </span>
              </a>

              {/* UPWORK */}
              <a
                href="https://www.upwork.com/freelancers/~01shahmeer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:opacity-80 transition"
              >
                <SiUpwork className="text-[#6FDA44]" />
                <span className="bg-gradient-to-r from-[#6FDA44] to-[#2BB673] bg-clip-text text-transparent font-semibold">
                  Upwork
                </span>
              </a>

              {/* LOCATION */}
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span className="text-cyan-400">Islamabad, Pakistan</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* THANK YOU SECTION */}
      <section className="flex flex-col md:flex-row min-h-screen">
        {/* TEXT SECTION */}
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
              I appreciate you taking the time to explore my work. If you’re seeking someone driven,
              creative, and deeply focused on cybersecurity and full-stack development — you’ve found the right person.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Let’s connect and build the future securely, one line of code at a time.
            </p>
          </motion.div>
        </div>

        {/* RIGHT VECTOR PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex items-center justify-center bg-[#111]"
        >
          <Image
            src="/second.svg"
            alt="Cyber Frame 2"
            width={600}
            height={600}
            className="opacity-70 hover:opacity-100 transition duration-700"
            priority
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
