import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "./nav/page";

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
  description: "protoflio website created by Shahmeer Shahid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Navbar/> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
