"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight, Cpu, Layers } from "lucide-react";

interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    tech: string[];
    metrics: string;
    metricsLabel: string;
}

const projects: Project[] = [
    {
        id: "edge",
        title: "Smart Factory Edge MLOps",
        category: "Edge Architecture",
        description: "Designed edge-to-cloud ML infrastructure for industrial IoT. Automated model deployment from cloud to edge devices via NVIDIA Triton and TensorRT.",
        tech: ["TensorRT", "Kafka", "FastAPI", "Docker", "AWS IoT"],
        metrics: "99.9%",
        metricsLabel: "Uptime",
    },
    {
        id: "llm",
        title: "Document-to-JSON LLM Parser",
        category: "Generative AI",
        description: "Built an end-to-end LLM processing pipeline wrapping open-source models (Llama 2) into an API that extracts structured JSON data from raw PDFs.",
        tech: ["LangChain", "Llama 2", "FAISS", "Celery", "Redis"],
        metrics: "2x",
        metricsLabel: "Speedup",
    },
    {
        id: "defect",
        title: "Semiconductor Defect Detection",
        category: "Computer Vision",
        description: "Implemented high-speed real-time defect anomaly detection using a hybrid CNN approach, achieving state-of-the-art precision in minimal ms/inference.",
        tech: ["PyTorch", "OpenCV", "CUDA", "YOLOv8"],
        metrics: "89%",
        metricsLabel: "Accuracy",
    },
    {
        id: "qa",
        title: "Engineering Drawing QA",
        category: "Vision-Language",
        description: "Automated manual QA checks of complex engineering blueprints via fine-tuned TrOCR + YOLO architectures.",
        tech: ["TrOCR", "HuggingFace", "FastAPI", "Vue.js"],
        metrics: "60%",
        metricsLabel: "QA Reduction",
    },
    {
        id: "pothole",
        title: "Real-Time Pothole Detection",
        category: "Edge CV",
        description: "Deployed lightweight models onto Edge TPUs for real-time video stream processing from mobile vehicles.",
        tech: ["TensorFlow Lite", "Edge TPU", "GStreamer"],
        metrics: "30fps",
        metricsLabel: "Inference",
    }
];

export function ProjectsSection() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section id="projects" className="relative py-24 z-10 w-full overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-sm font-mono text-[#00f0ff] mb-2 tracking-widest uppercase">
                // SYSTEM_MODULES
                            </h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                Featured Deployments
                            </h3>
                        </div>
                        <Button variant="outline" className="w-fit">
                            View All Systems <ArrowUpRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Card
                                className={`h-full border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent cursor-pointer group transition-all duration-300 ${expandedId === project.id ? 'ring-2 ring-[#00f0ff]/50' : 'hover:border-[#00f0ff]/30'}`}
                                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                            >
                                <CardContent className="p-0">
                                    {/* Top Visual Area */}
                                    <div className="h-48 relative overflow-hidden bg-[#111827]/80 rounded-t-xl border-b border-white/5 flex items-center justify-center group-hover:bg-[#111827]">
                                        <div className="absolute inset-0 bg-cyber-grid opacity-20" />

                                        {/* Abstract visual metric representation */}
                                        <div className="relative z-10 flex flex-col items-center justify-center">
                                            <motion.div
                                                initial={{ scale: 0.8 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ duration: 1, type: "spring" }}
                                                className="w-24 h-24 rounded-full border border-[#00f0ff]/20 flex items-center justify-center relative"
                                            >
                                                <div className="absolute inset-0 rounded-full border-t-2 border-[#00f0ff] animate-spin" style={{ animationDuration: '3s' }} />
                                                <div className="absolute inset-2 rounded-full border-b-2 border-[#b000ff] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '4s' }} />
                                                <div className="text-center">
                                                    <span className="block text-xl font-bold font-mono text-white neon-text">{project.metrics}</span>
                                                </div>
                                            </motion.div>
                                            <span className="mt-3 text-xs text-[#00f0ff] uppercase tracking-widest font-mono">{project.metricsLabel}</span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-8">
                                        <div className="flex items-center space-x-2 mb-4">
                                            <Cpu className="w-4 h-4 text-[#00f0ff]" />
                                            <span className="text-xs text-white/50 uppercase font-mono tracking-wider">{project.category}</span>
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">{project.title}</h4>

                                        <p className="text-white/60 mb-6 text-sm leading-relaxed min-h-[60px]">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((t) => (
                                                <Badge key={t} variant="secondary" className="bg-white/5 hover:bg-white/10 text-white/70 border-white/10 text-[10px]">{t}</Badge>
                                            ))}
                                        </div>

                                        <AnimatePresence>
                                            {expandedId === project.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden border-t border-white/10 pt-6 mt-6 flex gap-4"
                                                >
                                                    <Button variant="glow" size="sm" className="w-full text-xs">
                                                        <Layers className="w-3 h-3 mr-2" /> View Architecture
                                                    </Button>
                                                    <Button variant="outline" size="sm" className="w-full text-xs hover:text-[#00f0ff]">
                                                        <Github className="w-3 h-3 mr-2" /> Repository
                                                    </Button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
