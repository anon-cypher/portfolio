"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { NetworkBackground } from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";

export default function LinkedinRedirectPage() {
    return (
        <main className="relative min-h-screen bg-background text-foreground antialiased selection:bg-[#00f0ff] selection:text-[#0A0F1C] flex flex-col items-center justify-center p-6">
            <NetworkBackground />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="glass-panel p-8 md:p-12 rounded-2xl relative max-w-lg w-full text-center shadow-2xl z-10"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none" />

                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                    <Download className="w-8 h-8 text-[#00f0ff]" />
                </div>

                <h1 className="text-3xl font-bold text-white mb-4">
                    Shubham Gupta
                </h1>
                <p className="text-white/60 mb-8 font-mono text-sm leading-relaxed">
                    AI Systems Engineer | GenAI Architect
                    <br />
                    Download the latest resume below.
                </p>

                <div className="flex flex-col space-y-4">
                    {/* The download attribute allows the file to be downloaded directly. */}
                    {/* We link to /resume/resume.pdf as the user should place it in public/resume/resume.pdf */}
                    <a href="/resume/resume.pdf" download="Shubham_Gupta_Resume.pdf" className="w-full relative group block">
                        <Button variant="glow" size="lg" className="w-full group-hover:shadow-[0_0_20px_#00f0ff80] transition-shadow duration-300">
                            <Download className="mr-2 w-5 h-5" /> Download Resume
                        </Button>
                    </a>

                    <Link href="/" className="inline-block mt-4 text-white/40 hover:text-white transition-colors text-sm font-mono flex items-center justify-center space-x-2">
                        <ArrowLeft className="w-4 h-4" /> <span>Back to Portfolio</span>
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}
