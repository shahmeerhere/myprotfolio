import { Geist, Geist_Mono, Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";

import Navbar from "./nav/page";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Shahmeer Shahid | Frontend Developer & DevSecOps Advocate",
  description: "Professional portfolio showcasing secure web applications.",
  authors: [{ name: "Shahmeer Shahid" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${dancingScript.variable} antialiased bg-black text-white font-sans`}
      >

        <SplashCursor />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}