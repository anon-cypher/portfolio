"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Workflow, Layers, ShieldCheck, Activity } from "lucide-react";

const signals = [
    {
        title: "End-to-End Ownership",
        label: "From Problem → Model → Deployment → Monitoring",
        icon: <Workflow className="w-5 h-5 text-[#00f0ff]" />,
    },
    {
        title: "Multi-Domain Experience",
        label: "Computer Vision • LLMs • Automation Systems",
        icon: <Layers className="w-5 h-5 text-[#b000ff]" />,
    },
    {
        title: "Production-Focused",
        label: "Deployed, Tested, and Iterated in Real Environments",
        icon: <ShieldCheck className="w-5 h-5 text-[#00ffcc]" />,
    },
    {
        title: "Optimization Mindset",
        label: "Improving Accuracy, Latency, and System Efficiency",
        icon: <Activity className="w-5 h-5 text-[#ff3366]" />,
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
                    className="mb-16 max-w-4xl"
                >
                    <h2 className="text-sm font-mono text-[#00f0ff] mb-2 tracking-widest uppercase">
            // INIT_SYSTEM: Who Am I
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Systems Thinker. <br />
                        <span className="text-white/60">Building Intelligent Systems End-to-End.</span>
                    </h3>
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                        I specialize in designing and deploying AI systems that operate reliably in real-world environments.
                        My work focuses on combining machine learning, LLMs, and scalable infrastructure to create solutions
                        that are not just accurate, but production-ready. I approach problems from a systems perspective—optimizing
                        across data, models, and deployment to deliver measurable impact.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {signals.map((signal, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                        >
                            <Card className="h-full bg-white/5 border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 overflow-hidden group">
                                <CardContent className="p-6 flex flex-col justify-between h-full relative">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/2 overflow-hidden -mr-8 -mt-8 rotate-45 transform transition-transform group-hover:scale-150 duration-500" />

                                    <div className="p-3 bg-white/5 w-fit rounded-lg mb-6 relative z-10">
                                        {signal.icon}
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#00f0ff] transition-colors">{signal.title}</h4>
                                        <p className="text-sm text-white/60 leading-relaxed font-mono">{signal.label}</p>
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
