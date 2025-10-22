"use client";
import { motion } from "framer-motion";

const AboutMePage = () => {
  const teamMembers = [
    {
      name: "Brigitte Schwartz",
      imageSrc: "https://placehold.co/400x400/333333/ffffff?text=Brigitte",
      description:
        "Front-end engineer obsessed with micro-interactions, accessibility, and building interfaces that feel alive.",
    },
    {
      name: "Alfredo Torres",
      imageSrc: "https://placehold.co/400x400/111111/ffffff?text=Alfredo",
      description:
        "Full-stack developer who turns system architecture chaos into scalable, high-performance codebases.",
    },
    {
      name: "Adora Montminy",
      imageSrc: "https://placehold.co/400x400/222222/ffffff?text=Adora",
      description:
        "Product designer focused on crafting emotionally intelligent digital experiences through user empathy.",
    },
    {
      name: "Daniel Gallego",
      imageSrc: "https://placehold.co/400x400/000000/ffffff?text=Daniel",
      description:
        "Cybersecurity strategist ensuring resilience across web systems with deep focus on network integrity.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* 🖼️ Top Image Gallery */}
      <section className="grid grid-cols-1 sm:grid-cols-3">
        {[
          {
            src: "https://placehold.co/800x600/1f2937/ffffff?text=Innovation",
            alt: "Abstract architecture",
          },
          {
            src: "https://placehold.co/800x600/000000/ffffff?text=Momentum",
            alt: "Dynamic high-angle shot",
          },
          {
            src: "https://placehold.co/800x600/111111/ffffff?text=Structure",
            alt: "Modern building detail",
          },
        ].map((img, i) => (
          <motion.div
            key={i}
            className="relative h-64 sm:h-96"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
            />
          </motion.div>
        ))}
      </section>

      {/* 🧠 About Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Title */}
          <motion.header
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-6xl sm:text-7xl font-extrabold mb-4">
              About Me
            </h1>
            <div className="w-20 border-b-4 border-white"></div>
          </motion.header>

          {/* Right Description */}
          <motion.section
            className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <article>
              <h2 className="text-xl font-bold text-gray-300 mb-3 uppercase tracking-wider">
                My Vision
              </h2>
              <p className="text-gray-400 leading-relaxed">
                To merge design and logic into digital systems that speak to both
                humans and machines. I envision a future where every interface
                feels intuitive, secure, and intelligently built for scale.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-300 mb-3 uppercase tracking-wider">
                My Mission
              </h2>
              <p className="text-gray-400 leading-relaxed">
                To craft seamless user experiences backed by robust engineering.
                My mission is to bridge creativity and security in modern
                software ecosystems while keeping innovation human-centric.
              </p>
            </article>
          </motion.section>
        </div>
      </section>

      {/* ⚡ Vision Section */}
      <section className="flex flex-col md:flex-row min-h-screen">
        <motion.div
          className="w-full md:w-1/2 flex"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            "https://placehold.co/600x1200/000000/ffffff?text=Innovation",
            "https://placehold.co/600x1200/222222/ffffff?text=Focus",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Vision imagery"
              className="w-1/2 object-cover grayscale hover:grayscale-0 transition duration-700"
            />
          ))}
        </motion.div>

        <motion.section
          className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-black"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
            My Vision
          </h1>
          <div className="w-24 border-b-4 border-white mb-12"></div>

          <ul className="space-y-10">
            {[
              "Create systems that blend functionality with minimalism while staying adaptive to the evolving web.",
              "Lead innovation that simplifies complexity — building with intent, performance, and clarity.",
            ].map((point, i) => (
              <li key={i} className="flex items-start space-x-6">
                <span className="text-4xl font-extrabold">0{i + 1}.</span>
                <p className="text-gray-300 leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </motion.section>
      </section>

      {/* 🚀 Mission Section */}
      <section className="flex flex-col md:flex-row min-h-screen">
        <motion.section
          className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
            My Mission
          </h1>
          <div className="w-24 border-b-4 border-white mb-12"></div>

          <ul className="space-y-10">
            {[
              "Develop meaningful, secure, and accessible web platforms.",
              "Use design thinking to align user goals with technical excellence.",
              "Adopt a growth mindset for continuous learning and innovation.",
              "Build digital ecosystems that are reliable, fast, and future-proof.",
            ].map((point, i) => (
              <li key={i} className="flex items-start space-x-6">
                <span className="text-4xl font-extrabold">0{i + 1}.</span>
                <p className="text-gray-300 leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.div
          className="w-full md:w-1/2 grid grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {[
            "https://placehold.co/600x600/111111/ffffff?text=Inspire",
            "https://placehold.co/600x600/333333/ffffff?text=Create",
            "https://placehold.co/600x600/000000/ffffff?text=Code",
            "https://placehold.co/600x600/444444/ffffff?text=Reflect",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Mission imagery"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
            />
          ))}
        </motion.div>
      </section>

      {/* 👥 Team Section */}
      <section className="py-24 md:py-32 px-6 lg:px-12">
        <motion.header
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
            Meet My Team
          </h1>
          <div className="w-20 border-b-4 border-white mx-auto"></div>
        </motion.header>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, i) => (
            <motion.article
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-full max-w-xs mx-auto overflow-hidden rounded-lg mb-6">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="w-full object-cover grayscale hover:grayscale-0 transition duration-700"
                />
              </div>
              <h2 className="text-lg font-bold mb-2 uppercase tracking-wider">
                {member.name}
              </h2>
              <p className="text-sm text-gray-400">{member.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <footer className="h-16 bg-[#1a1a1a]"></footer>
    </main>
  );
};

export default AboutMePage;
