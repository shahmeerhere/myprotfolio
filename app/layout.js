import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./nav/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SHAHMEER SHAHID",
  description: "Portfolio website created by Shahmeer Shahid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />    
        <main>{children}</main>
         <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Shahmeer Shahid. All rights reserved.
      </footer>
      </body>
    </html>
  );
}
