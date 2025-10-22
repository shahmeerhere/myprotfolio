"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* === HERO SECTION === */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen pt-24 md:pt-0">
        {/* Left Side - Image */}
        <motion.figure
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 relative overflow-hidden"
        >
          <motion.img
            src="i.png"
            alt="Portfolio Visual"
            className="w-full h-[60vh] md:h-screen object-cover opacity-90"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </motion.figure>

        {/* Right Side - Text */}
        <motion.article
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 p-8 sm:p-10 md:p-16 flex flex-col justify-center text-center md:text-left"
        >
          <div className="max-w-xl mx-auto md:mx-0 space-y-6">
           {/* Headings */}
<motion.div
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  className="w-full flex justify-start"
>
  <div>
    <h1 className="text-left leading-tight font-extrabold text-white text-5xl sm:text-6xl md:text-7xl">
      My
    </h1>
    <div className="flex items-center gap-4">
      <h1 className="text-left font-extrabold text-white text-5xl sm:text-6xl md:text-7xl">
        Portfolio
      </h1>
      <span className="hidden sm:block h-[2px] w-16 bg-gray-400"></span>
    </div>
  </div>
</motion.div>


            {/* Description */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0"
            >
              Crafting sleek, high-performance digital products that fuse design, functionality,
              and innovation built to inspire and perform.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 sm:gap-6 pt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#e5e5e5",
                  color: "#000",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white text-black font-semibold py-3 px-8 text-sm uppercase rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
              >
                Explore Now
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center text-white cursor-pointer group"
              >
                <div className="h-10 w-10 flex items-center justify-center border border-white rounded-full transition duration-300 group-hover:bg-white group-hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm uppercase tracking-wider ml-2">
                  Play Video
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.article>
      </section>

      {/* === INTRODUCTION SECTION === */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 border-t border-gray-900"
      >
        <main className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Left Text */}
          <motion.article
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left space-y-10"
          >
            <header>
              <motion.h2
                whileHover={{ letterSpacing: "0.05em" }}
                transition={{ duration: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3"
              >
                Introduction
              </motion.h2>
              <motion.div
                className="w-20 mx-auto md:mx-0 border-b-4 border-white"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
            </header>

            <motion.p
              className="text-gray-300 text-base leading-relaxed max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
             I am Shahmeer Shahid, a tech-driven creator obsessed with building, breaking, and securing the web. I design digital systems that dont just work they evolve with the future.
            </motion.p>

            {/* Info Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-700/50">
              {[
                {
                  title: "About Me",
                  text: "Curious, analytical, and future-driven — blending creativity with code to craft seamless experiences and secure systems.",
                },
                {
                  title: "About Portfolio",
                  text: "A showcase of design precision and functional logic, capturing both creative energy and performance excellence.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className="hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-500"
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.article>

          {/* Right Image */}
          <motion.figure
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <motion.img
              src="cw.jpg"
              alt="Workspace"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.figure>
        </main>
      </motion.section>
    </div>
  );
}
