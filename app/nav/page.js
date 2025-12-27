"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-900">
      <nav className="flex items-center justify-between py-4 px-6 md:px-12" role="navigation" aria-label="Main navigation">
        {/* Brand / Logo */}
        <Link href="/" className="text-lg md:text-xl font-bold tracking-widest text-white hover:text-gray-300 transition-colors" aria-label="Home">
          Shahmeer Shahid
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm uppercase" role="list">
          <li role="listitem"><Link href="/" className="hover:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Home</Link></li>
          <li role="listitem"><Link href="/devsecops" className="hover:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">DevSecOps</Link></li>
          <li role="listitem"><Link href="/project" className="hover:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Projects</Link></li>
          <li role="listitem"><Link href="/about" className="hover:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">About Me</Link></li>
          <li role="listitem"><Link href="/contact" className="hover:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
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
          <div id="mobile-menu" className="absolute top-full left-0 right-0 bg-black border-t border-gray-900 md:hidden animate-slideDown" role="menu">
            <ul className="flex flex-col text-center text-sm uppercase py-4 space-y-4" role="list">
              <li><Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400 transition-colors">Home</Link></li>
              <li><Link href="/devsecops" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400 transition-colors">DevSecOps</Link></li>
              <li><Link href="/project" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400 transition-colors">Projects</Link></li>
              <li><Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400 transition-colors">About Me</Link></li>
              <li><Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-gray-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
