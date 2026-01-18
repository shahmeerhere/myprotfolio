"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "DevSecOps", href: "#devsecops" },
    { name: "Projects", href: "#project" },
    { name: "About Me", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out font-outfit ${scrolled ? "pt-4" : "pt-0 bg-transparent"
        }`}
    >
      <div className="flex justify-center w-full">
        <motion.nav
          initial={false}
          animate={{
            width: scrolled ? "85%" : "100%",
            borderRadius: scrolled ? "9999px" : "0px",
            backgroundColor: scrolled ? "rgba(20, 20, 20, 0.8)" : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
            border: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
            y: scrolled ? 10 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            mass: 0.5
          }}
          className={`flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${scrolled ? "py-3 max-w-5xl shadow-2xl shadow-blue-900/10" : "py-4 sm:py-6 w-full"
            }`}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Brand / Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors truncate font-dancing"
            aria-label="Home"
          >
            Shahmeer
          </Link>

          {/* Desktop Menu */}
          <ul className={`hidden md:flex items-center transition-all duration-500 ${scrolled ? "gap-6" : "gap-10"}`} role="list">
            {navLinks.map((link) => (
              <li key={link.name} role="listitem">
                <Link
                  href={link.href}
                  className="text-sm font-medium hover:text-blue-400 transition-colors text-gray-300 tracking-wide font-outfit uppercase"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button - Keeping simpler for now */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Dropdown - Outside the shrinking container */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-black/95 border-b border-gray-800 md:hidden p-4"
        >
          <ul className="flex flex-col text-center text-sm font-medium space-y-4 font-outfit" role="list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
