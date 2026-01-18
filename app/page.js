"use client";

import MainHero from "./components/MainHero";
import Hero from "./components/Hero";
import DevSecOpsSection from "./components/DevSecOpsSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import AnimatedBackground from "./components/AnimatedBackground";
import ParticleEffect from "./components/ParticleEffect";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#444] text-white font-sans selection:bg-blue-500/50">
      <MainHero />
      <AnimatedBackground />
      <ParticleEffect />

      <Hero />
      <DevSecOpsSection id="devsecops" />
      <ProjectsSection id="project" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
    </main>
  );
}
