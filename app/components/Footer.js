"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/shahmeerhere", label: "GitHub", color: "hover:text-gray-300" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/shahmeershahid", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaEnvelope, href: "mailto:theshahmeer786@gmail.com", label: "Email", color: "hover:text-red-400" },
    { icon: FaInstagram, href: "https://instagram.com/shahmeer.shahid", label: "Instagram", color: "hover:text-pink-500" },
    { icon: SiFiverr, href: "https://www.fiverr.com/shahmeerhere", label: "Fiverr", color: "hover:text-green-400" },
    { icon: SiUpwork, href: "https://www.upwork.com/freelancers/~01shahmeer", label: "Upwork", color: "hover:text-green-500" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/project" },
    { name: "DevSecOps", href: "/devsecops" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-gray-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Shahmeer Shahid</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Frontend Developer & DevSecOps Advocate. Building secure, scalable web applications with modern technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`text-gray-500 ${social.color} transition-colors`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:theshahmeer786@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  theshahmeer786@gmail.com
                </a>
              </li>
              <li className="text-gray-500">Islamabad, Pakistan</li>
              <li>
                <a
                  href="/resume-devsecops.pdf"
                  download
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Shahmeer Shahid. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with <span className="text-blue-400">Next.js</span> & <span className="text-cyan-400">Security</span> in mind
          </p>
        </div>
      </div>
    </footer>
  );
}

