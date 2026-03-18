"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Terminal, Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

// Typing Effect Component
const Typewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                if (i < text.length) {
                    setDisplayText((prev) => prev + text.charAt(i));
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 50);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timer);
    }, [text, delay]);

    return <span>{displayText}</span>;
};

// 3D Brain/Node replacement
const AiCore = () => {
    return (
        <Canvas className="w-full h-full">
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#00f0ff" />
            <directionalLight position={[-10, -10, -5]} intensity={2} color="#b000ff" />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            <Sphere args={[1.5, 64, 64]}>
                <MeshDistortMaterial
                    color="#111827"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe
                />
            </Sphere>
            <Sphere args={[1.2, 32, 32]}>
                <MeshDistortMaterial
                    color="#00f0ff"
                    attach="material"
                    distort={0.6}
                    speed={3}
                    roughness={0.2}
                    emissive="#00f0ff"
                    emissiveIntensity={0.5}
                />
            </Sphere>
        </Canvas>
    );
};

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col space-y-8"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="inline-flex items-center space-x-2 border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1 rounded-full text-sm text-white/80"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
                            </span>
                            <span>System Online • Shubham Gupta</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white/90 leading-[1.1]">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                                I Build
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#b000ff] to-[#00f0ff] animate-gradient-shift bg-[length:200%_auto]">
                                <Typewriter text="S\calable AI Systems." delay={500} />
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 1 }}
                            className="text-lg md:text-xl text-white/60 max-w-lg font-mono"
                        >
                            &gt; AI Systems Engineer<br />
                            &gt; Agentic AI & Multi-Agent Systems<br />
                            &gt; LLM Infrastructure, RAG & Vector DBs<br />
                            &gt; GenAI, LLMOps & Deployment Pipelines<br />
                            &gt; MLOps, CI/CD & Production Workflows<br />
                            &gt; Computer Vision & Multimodal Models
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button variant="glow" size="lg" className="w-full sm:w-auto">
                            Explore Systems <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <a href="/ShubhamGupta_Resume.pdf" download="ShubhamGupta_Resume.pdf" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                <Download className="mr-2 h-4 w-4" /> Download Resume
                            </Button>
                        </a>
                        <a href="https://github.com/anon-cypher" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full border border-white/10 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 transition-all">
                                <Github className="h-5 w-5" />
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Content - 3D Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center"
                >
                    {/* Subtle glowing backdrop behind the 3D object */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#b000ff]/20 rounded-full blur-[100px] z-0 pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#00f0ff]/20 rounded-full blur-[80px] z-0 pointer-events-none" />

                    <div className="w-full h-full relative z-10">
                        <AiCore />
                    </div>

                    {/* Floating data nodes */}
                    <div className="absolute top-10 right-10 glass-panel px-4 py-2 rounded-lg text-xs font-mono text-[#00f0ff] animate-pulse">
                        MODEL_STATE: ACTIVE
                    </div>
                    <div className="absolute bottom-20 left-10 glass-panel px-4 py-2 rounded-lg text-xs font-mono text-[#b000ff] animate-pulse delay-700">
                        LATENCY: 12ms
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
