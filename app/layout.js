import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata = {
  title: "Shahmeer Shahid | Frontend Developer & DevSecOps Advocate",
  description: "Professional portfolio showcasing secure web applications.",
  authors: [{ name: "Shahmeer Shahid" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
  
        <SplashCursor />
        
        <Navbar />    
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}