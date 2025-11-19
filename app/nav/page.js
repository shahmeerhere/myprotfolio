"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-900">
      <nav className="flex items-center justify-between py-4 px-6 md:px-12">
        {/* Brand / Logo */}
        <Link href="/" className="text-lg md:text-xl font-bold tracking-widest text-white">
          Shahmeer Shahid
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm uppercase">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/devsecops" className="hover:text-gray-400">DevSecOps</Link></li>
          <li><Link href="/about" className="hover:text-gray-400">About Me</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            // Close Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-t border-gray-900 md:hidden animate-slideDown">
            <ul className="flex flex-col text-center text-sm uppercase py-4 space-y-4">
              <li><Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">Home</Link></li>
              <li><Link href="/devsecops" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">DevSecOps</Link></li>
              <li><Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">About Me</Link></li>
              <li><Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
