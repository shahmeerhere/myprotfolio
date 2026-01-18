"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const [gridSize, setGridSize] = useState("30px 30px");

  useEffect(() => {
    const updateGridSize = () => {
      setGridSize(window.innerWidth < 768 ? "30px 30px" : "50px 50px");
    };
    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

      {/* Central Colorful Aura */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-[80vw] h-[80vh] bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-purple-900/20 rounded-full blur-[120px] opacity-40"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
            rotate: [0, 45, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: gridSize,
        }}
      />

      {/* Floating Orbs - More centralized */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"
        animate={{
          x: [-50, 50, -50],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"
        animate={{
          x: [50, -50, 50],
          y: [50, -50, 50],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* === VIGNETTE MASK (The key to "sides must be black") === */}
      {/* This radial gradient mask fades the content to black at the edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, black 100%)"
        }}
      />

      {/* Animated Subtle Vertical Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <motion.line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth="1"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}
