"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { NetworkBackground } from "@/components/NetworkBackground";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { ArchitectureSection } from "@/components/sections/Architecture";
import { ProjectsSection } from "@/components/sections/Projects";
import { ExperienceSection } from "@/components/sections/Experience";
import { TerminalSection } from "@/components/sections/Terminal";
import { AchievementsSection } from "@/components/sections/Achievements";
import { ContactSection } from "@/components/sections/Contact";
import { LiveAIChat } from "@/components/LiveAIChat";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "architecture", "projects", "experience", "achievements", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "// About", href: "#about", id: "about" },
    { name: "// Architecture", href: "#architecture", id: "architecture" },
    { name: "// Systems", href: "#projects", id: "projects" },
    { name: "// Log", href: "#experience", id: "experience" },
    { name: "// Contact", href: "#contact", id: "contact" },
  ];

  return (
    <main className="relative min-h-screen bg-background text-foreground antialiased selection:bg-[#00f0ff] selection:text-[#0A0F1C]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f0ff] to-[#b000ff] origin-left z-50 shadow-[0_0_10px_#00f0ff]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-[#0A0F1C]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-tighter text-white flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#00f0ff] to-[#b000ff] flex items-center justify-center">
              <span className="text-[#0A0F1C] text-lg font-black tracking-tighter">SG</span>
            </div>
            <span className="hidden sm:inline-block">Shubham.AI</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-mono transition-colors hover:text-[#00f0ff] ${activeSection === link.id ? 'text-[#00f0ff]' : 'text-white/60'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a href="#contact" className="md:hidden border border-white/20 px-3 py-1.5 rounded text-xs font-mono text-[#00f0ff]">
            // Initialize
          </a>
        </div>
      </header>

      {/* Hero with Global Network Background */}
      <div id="home" className="relative">
        <NetworkBackground />
        <HeroSection />
      </div>

      <AboutSection />
      <ArchitectureSection />
      <ProjectsSection />
      <ExperienceSection />
      <TerminalSection />
      <AchievementsSection />
      <ContactSection />

      <LiveAIChat />

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-[#0A0F1C] text-center">
        <p className="text-white/40 text-xs font-mono">
          &copy; {new Date().getFullYear()} Shubham Gupta. All systems operational.
        </p>
      </footer>
    </main>
  );
}
