"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Icon for Core Values - using standard SVG for checkmark
const CheckIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const AboutMePage = () => {
  // New Core Values focused on the DevSecOps narrative
  const coreValues = [
    {
      title: "Security First (Shift Left)",
      description:
        "Every line of code is treated as a potential vulnerability. I integrate security testing (SAST/DAST) early to prevent costly fixes later.",
      iconColor: "text-red-400",
    },
    {
      title: "Resilience & Reliability",
      description:
        "Building fault-tolerant systems and ensuring continuous uptime through robust CI/CD pipelines and monitoring.",
      iconColor: "text-blue-400",
    },
    {
      title: "High Performance Frontend",
      description:
        "Obsessed with modern frameworks (Next.js) to deliver exceptional user experience, speed, and accessibility.",
      iconColor: "text-green-400",
    },
    {
      title: "Growth Mindset",
      description:
        "Dedicated to learning and adopting new tools, especially in the rapidly evolving fields of AI, Cloud, and security architecture.",
      iconColor: "text-yellow-400",
    },
  ];

  const valueSectionAnimation = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* 🖼️ Top Hero Image */}
      <section className="relative h-96 sm:h-[500px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/b1.png"
            alt="Abstract architecture representing complex systems"
            width={1600}
            height={900}
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition duration-1000"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center text-5xl sm:text-7xl font-extrabold text-white tracking-tight"
          >
            Engineering Resilience
          </motion.h1>
        </div>
      </section>

      {/* 🧠 About Section (The "Why") */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Title */}
          <motion.header
            className="w-full lg:w-1/3 sticky top-20" // Made it sticky for effect
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-6xl sm:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              About Me
            </h1>
            <div className="w-20 border-b-4 border-blue-500"></div>
          </motion.header>

          {/* Right Description */}
          <motion.section
            className="w-full lg:w-2/3 grid grid-cols-1 gap-12 border-l border-gray-800 lg:pl-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <article>
              <h2 className="text-2xl font-bold text-blue-400 mb-4 uppercase tracking-wider">
                My Focus: Secure Product Engineering
              </h2>
              {/* FIX APPLIED HERE: Replaced outer <p> with <div> */}
              <div className="text-gray-300 text-lg leading-relaxed space-y-4"> 
                <p>
                  I am Shahmeer Shahid, a technologist specializing in <b>Frontend Development</b>
                  backed by a strong <b>DevSecOps</b> philosophy. My work is defined by the commitment
                  to making systems not only fast and user-friendly, but fundamentally secure and reliable.
                </p>
                <p>
                  My goal is to eliminate the trade-off between speed and security. I leverage modern tools
                  like Next.js for rapid feature delivery while integrating static analysis (SAST) and container security
                  into the CI/CD pipeline, ensuring we <b>shift security left</b>—making it proactive, not reactive.
                </p>
              </div>
            </article>

            <article className="pt-8 border-t border-gray-800">
              <h2 className="text-xl font-bold text-gray-400 mb-3 uppercase tracking-wider">
                My Stack & Methodology
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                <li><b>Frontend:</b> Next.js, React, Tailwind CSS (Focused on accessibility and performance).</li>
                <li><b>Security:</b> Snyk integration, GitHub Actions security checks, OWASP Top 10 mitigation.</li>
                <li><b>Infrastructure:</b> Docker, Containerization, Continuous Integration/Deployment.</li>
              </ul>
            </article>
          </motion.section>
        </div>
      </section>

      {/* ⚡ Vision Section (Merging two previous sections) */}
      <section className="flex flex-col md:flex-row border-t border-gray-900">
        {/* Left Content (Mission/Vision Points) */}
        <motion.section
          className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-zinc-950/70"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
            My Design Philosophy
          </h1>
          <div className="w-24 border-b-4 border-white mb-12"></div>

          <ul className="space-y-10">
            {[
              "Lead innovation that simplifies complexity: building with clarity, performance, and intent.",
              "Create systems that are adaptive, blending high functionality with minimalism and exceptional security.",
              "Use design thinking to align user goals with technical excellence and long-term resilience.",
            ].map((point, i) => (
              <li key={i} className="flex items-start space-x-6">
                <span className="text-4xl font-extrabold text-blue-500">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}.
                </span>
                <p className="text-gray-300 text-lg leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/v1.jpg" // Using one of the existing image placeholders
            alt="Abstract code visualization"
            width={600}
            height={1200}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
          />
        </motion.div>
      </section>

      {/* 💎 Core Values Section (Replaced "Meet My Team") */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-zinc-950">
        <motion.header
          className="max-w-4xl mx-auto text-center mb-16"
          {...valueSectionAnimation}
        >
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-3 font-semibold">
            Pillars of Practice
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
            My Core Values
          </h1>
          <div className="w-20 border-b-4 border-blue-500 mx-auto"></div>
        </motion.header>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {coreValues.map((value, i) => (
            <motion.article
              key={i}
              className="text-center p-6 bg-zinc-900 border border-gray-800 rounded-lg shadow-xl hover:bg-zinc-800 transition-all duration-300 hover:scale-[1.03]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={`mx-auto mb-4 ${value.iconColor}`}>
                <CheckIcon className="w-8 h-8 mx-auto" />
              </div>
              <h2 className="text-lg font-bold mb-3 uppercase tracking-wider text-white">
                {value.title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <footer className="h-16 bg-[#1a1a1a]"></footer>
    </main>
  );
};

export default AboutMePage;