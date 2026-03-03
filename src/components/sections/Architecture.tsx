"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Database, Server, Smartphone, Cpu, Network, Combine, ArrowRight } from "lucide-react";

interface NodeProps {
    id: string;
    label: string;
    icon: React.ReactNode;
    tech: string[];
    isActive: boolean;
    onHover: (id: string | null) => void;
}

const ArchNode = ({ id, label, icon, tech, isActive, onHover }: NodeProps) => {
    return (
        <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => onHover(id)}
            onMouseLeave={() => onHover(null)}
        >
            <motion.div
                animate={{
                    scale: isActive ? 1.1 : 1,
                    boxShadow: isActive
                        ? "0 0 20px rgba(0, 240, 255, 0.5), inset 0 0 10px rgba(0, 240, 255, 0.2)"
                        : "0 0 0px rgba(0,0,0,0)",
                    borderColor: isActive ? "rgba(0, 240, 255, 0.8)" : "rgba(255, 255, 255, 0.1)",
                }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl glass-panel flex items-center justify-center cursor-pointer relative z-10 bg-surface/80"
            >
                {icon}
            </motion.div>
            <span className="mt-3 text-sm font-mono font-medium text-white/80 text-center w-24">
                {label}
            </span>

            {/* Tech tooltip */}
            <motion.div
                initial={{ opacity: 0, y: 10, pointerEvents: "none" }}
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                className="absolute top-28 md:top-32 w-48 p-4 glass-panel rounded-lg z-20 shadow-2xl"
            >
                <div className="flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <Badge variant="cyber" key={t}>{t}</Badge>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export function ArchitectureSection() {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    const nodes = [
        { id: "source", label: "User / Edge", icon: <Smartphone className="w-8 h-8 text-white/70" />, tech: ["React", "React Native", "IoT"] },
        { id: "pipe", label: "Data Pipeline", icon: <Network className="w-8 h-8 text-white/70" />, tech: ["Kafka", "Airflow", "Spark"] },
        { id: "train", label: "Model Training", icon: <Cpu className="w-8 h-8 text-[#00f0ff]" />, tech: ["PyTorch", "MLflow", "CUDA"] },
        { id: "vector", label: "Vector DB", icon: <Database className="w-8 h-8 text-[#b000ff]" />, tech: ["FAISS", "Pinecone", "Milvus"] },
        { id: "llm", label: "LLM / RAG", icon: <Combine className="w-8 h-8 text-[#00ffcc]" />, tech: ["LangChain", "OpenAI", "HuggingFace"] },
        { id: "deploy", label: "API & Edge Deployment", icon: <Server className="w-8 h-8 text-white/70" />, tech: ["FastAPI", "Docker", "AWS", "TensorRT"] },
    ];

    return (
        <section id="architecture" className="relative py-24 z-10 bg-black/40">
            <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none mix-blend-overlay"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-sm font-mono text-[#b000ff] mb-2 tracking-widest uppercase">
            // SYSTEM_ARCHITECTURE
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        End-to-End Pipeline
                    </h3>
                    <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                        Hover over nodes to inspect the technology stack powering my autonomous systems.
                    </p>
                </motion.div>

                {/* Desktop Pipeline View */}
                <div className="hidden md:flex flex-row items-center justify-center gap-2 lg:gap-6 mt-12 pb-32">
                    {nodes.map((node, i) => (
                        <React.Fragment key={node.id}>
                            <ArchNode
                                {...node}
                                isActive={activeNode === node.id}
                                onHover={setActiveNode}
                            />
                            {i < nodes.length - 1 && (
                                <div className="relative w-8 lg:w-16 h-0.5 flex items-center justify-center -mt-8">
                                    <div className="absolute inset-0 bg-white/10" />
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#b000ff] shadow-[0_0_10px_#00f0ff]"
                                        initial={{ scaleX: 0, transformOrigin: "left" }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.2 + 0.5, duration: 0.5 }}
                                    />
                                    <ArrowRight className="absolute text-white/50 w-4 h-4 translate-x-3 lg:translate-x-6" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Mobile Pipeline View - Vertical */}
                <div className="md:hidden flex flex-col items-center gap-6 mt-12 pb-12">
                    {nodes.map((node, i) => (
                        <React.Fragment key={node.id}>
                            <ArchNode
                                {...node}
                                isActive={activeNode === node.id}
                                onHover={setActiveNode}
                            />
                            {i < nodes.length - 1 && (
                                <div className="w-[1px] h-8 bg-white/20 relative">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-b from-[#00f0ff] to-[#b000ff]"
                                        initial={{ scaleY: 0, transformOrigin: "top" }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.2 + 0.5, duration: 0.5 }}
                                    />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
