import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./nav/page";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shahmeer Shahid | Frontend Developer & DevSecOps Advocate",
  description: "Professional portfolio showcasing secure web applications, DevSecOps practices, and modern frontend development. Specializing in Next.js, React, security-first development, and CI/CD pipelines.",
  keywords: ["Shahmeer Shahid", "Frontend Developer", "DevSecOps", "Next.js", "React", "Web Security", "Portfolio", "Full Stack Developer"],
  authors: [{ name: "Shahmeer Shahid" }],
  openGraph: {
    title: "Shahmeer Shahid | Frontend Developer & DevSecOps Advocate",
    description: "Building secure, scalable web applications with modern technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahmeer Shahid | Frontend Developer & DevSecOps Advocate",
    description: "Building secure, scalable web applications with modern technologies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white scroll-smooth`}
      >
        <Navbar />    
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
