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
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0A0A0B]">

      {/* Aura Removed to keep background uniform */}

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74, 14, 14, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74, 14, 14, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: gridSize,
        }}
      />

      {/* Orbs Removed to keep background uniform */}

      {/* === VIGNETTE MASK (The key to "sides must be black") === */}
      {/* This radial gradient mask fades the content to black at the edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 20%, #0A0A0B 100%)"
        }}
      />

      {/* Animated Subtle Vertical Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <motion.line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke="rgba(163, 146, 131, 0.1)"
          strokeWidth="1"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}
