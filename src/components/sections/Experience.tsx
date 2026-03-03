"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
    {
        role: "AI Systems Engineer",
        company: "HL Mando",
        period: "2023 - Present",
        description: "Led AI optimization workflows and automated manual quality checks using Computer Vision. Designed multi-cloud pipelines for deploying optimized models globally. Applied Genetic Algorithms and Reinforcement Learning for component optimization.",
        tags: ["CV Automation", "GA + RL", "Production Deployment", "Multi-Cloud"],
    },
    {
        role: "Machine Learning Engineer",
        company: "BreachLock",
        period: "2021 - 2023",
        description: "Architected security automation pipelines. Developed language models for automated vulnerability reporting, reducing manual report generation time significantly.",
        tags: ["LLMs", "Pipeline Automation", "Cybersecurity AI"],
    },
    {
        role: "CV Researcher",
        company: "ThinkingStack",
        period: "2020 - 2021",
        description: "Built YOLO-based Automatic Number Plate Recognition (ANPR) systems and developed highly scalable edge nodes for real-time processing.",
        tags: ["YOLO", "ANPR", "Edge AI"],
    }
];

export function ExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" className="relative py-24 z-10 overflow-hidden bg-[#0A0F1C]/50">
            <div className="container mx-auto px-6 max-w-5xl" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-sm font-mono text-[#00ffcc] mb-2 tracking-widest uppercase">
            // EXECUTION_LOG
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        System Timeline
                    </h3>
                </motion.div>

                <div className="relative pl-8 md:pl-0">
                    {/* Animated Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 md:-translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div
                            style={{ scaleY: pathLength, transformOrigin: 'top' }}
                            className="w-full h-full bg-gradient-to-b from-[#00f0ff] via-[#b000ff] to-[#00ffcc] shadow-[0_0_10px_#00f0ff]"
                        />
                    </div>

                    <div className="space-y-24">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#0A0F1C] border-2 border-[#00f0ff] rounded-full -translate-x-1/2 mt-1.5 md:mt-0 z-20 shadow-[0_0_10px_#00f0ff]" />

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`w-full md:w-[45%] pl-10 md:pl-0 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}
                                >
                                    <div className={`p-6 md:p-8 rounded-2xl glass-panel relative group hover:border-[#b000ff]/40 transition-colors`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#b000ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                                        <div className="relative z-10">
                                            <span className="text-[#b000ff] font-mono text-sm tracking-widest uppercase">{exp.period}</span>
                                            <h4 className="text-2xl font-bold text-white mt-2 mb-1">{exp.role}</h4>
                                            <h5 className="text-lg text-white/60 mb-4">{exp.company}</h5>
                                            <p className="text-white/70 text-sm leading-relaxed mb-6">
                                                {exp.description}
                                            </p>
                                            <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                                                {exp.tags.map(t => (
                                                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[#00f0ff] whitespace-nowrap">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Empty Space for layout */}
                                <div className="hidden md:block w-[45%]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
