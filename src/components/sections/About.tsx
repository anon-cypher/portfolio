"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, BrainCircuit, Activity, Trophy } from "lucide-react";

const metrics = [
    {
        title: "Experience",
        value: "3+ Years",
        label: "Building AI Systems",
        icon: <Terminal className="w-5 h-5 text-[#00f0ff]" />,
    },
    {
        title: "Production Models",
        value: "10+",
        label: "End-to-End Deployments",
        icon: <BrainCircuit className="w-5 h-5 text-[#b000ff]" />,
    },
    {
        title: "Optimization",
        value: "60%",
        label: "QA Reduction via deep learning automation",
        icon: <Activity className="w-5 h-5 text-[#00ffcc]" />,
    },
    {
        title: "Recognition",
        value: "2nd Prize",
        label: "IRTC Research Award",
        icon: <Trophy className="w-5 h-5 text-yellow-400" />,
    },
];

export function AboutSection() {
    return (
        <section id="about" className="relative py-24 z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 max-w-3xl"
                >
                    <h2 className="text-sm font-mono text-[#00f0ff] mb-2 tracking-widest uppercase">
            // INIT_SYSTEM: Who Am I
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Systems Thinker. <br />
                        <span className="text-white/60">Architecting Intelligence.</span>
                    </h3>
                    <p className="text-lg text-white/70 leading-relaxed">
                        I build production-grade AI pipelines. From designing YOLO + TrOCR systems that hit 89% accuracy
                        to architecting end-to-end LLM + RAG pipelines, I focus on shipping intelligent systems that solve
                        complex real-world problems. My approach bridges edge-to-cloud ML architectures with advanced
                        methods like Reinforcement Learning and Genetic Algorithms.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                        >
                            <Card className="h-full bg-white/5 border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
                                <CardContent className="p-6 flex flex-col justify-between h-full">
                                    <div className="p-3 bg-white/5 w-fit rounded-lg mb-4">
                                        {metric.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-bold text-white mb-1 tracking-tight">{metric.value}</h4>
                                        <p className="text-sm font-medium text-white/80">{metric.title}</p>
                                        <p className="text-xs text-white/50 mt-2">{metric.label}</p>
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
