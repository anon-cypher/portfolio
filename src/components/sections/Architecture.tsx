"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Brain,
    Layers,
    Database,
    Rocket,
    Cloud,
    Code,
    CheckCircle2,
    Cpu,
    CpuIcon,
    Terminal,
    Workflow,
    Search,
    ShieldCheck,
    CpuIcon as Chips
} from "lucide-react";

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    color: string;
    skills: {
        name: string;
        items: string[];
    }[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "AI / ML & GenAI",
        icon: <Brain className="w-6 h-6" />,
        color: "#00f0ff",
        skills: [
            { name: "Machine Learning", items: ["Deep Learning"] },
            { name: "Generative AI", items: ["Large Language Models (LLMs)"] },
            { name: "Agentic AI", items: ["Autonomous Workflows", "Multi-Agent Systems"] },
            { name: "Retrieval", items: ["RAG Systems"] },
            { name: "Computer Vision", items: ["OCR (TrOCR, rOCR)"] },
            { name: "Optimization", items: ["Reinforcement Learning", "Genetic Algorithms"] },
        ],
    },
    {
        title: "Frameworks & Libraries",
        icon: <Layers className="w-6 h-6" />,
        color: "#b000ff",
        skills: [
            { name: "LLM / Agents", items: ["LangChain", "LangGraph", "AutoGen"] },
            { name: "Deep Learning", items: ["PyTorch", "TensorFlow", "Keras"] },
            { name: "ML & Data", items: ["Scikit-Learn", "Pandas", "NumPy"] },
            { name: "CV & Viz", items: ["OpenCV", "Matplotlib", "Seaborn"] },
            { name: "NLP", items: ["Hugging Face Transformers"] },
        ],
    },
    {
        title: "LLM & Data Infra",
        icon: <Database className="w-6 h-6" />,
        color: "#00ffcc",
        skills: [
            { name: "Vector DBs", items: ["FAISS", "Pinecone", "ChromaDB"] },
            { name: "Knowledge", items: ["RAG Pipelines", "Retrieval Systems"] },
            { name: "LLM APIs", items: ["OpenAI API"] },
            { name: "Search", items: ["Embedding", "Semantic Search"] },
        ],
    },
    {
        title: "MLOps & Deployment",
        icon: <Rocket className="w-6 h-6" />,
        color: "#ff3366",
        skills: [
            { name: "Tools", items: ["Docker", "MLflow", "Jenkins"] },
            { name: "APIs", items: ["FastAPI", "Streamlit"] },
            { name: "Workflows", items: ["Model Deployment", "API Dev"] },
            { name: "Automation", items: ["Tracking", "Pipeline Auto"] },
        ],
    },
    {
        title: "Cloud, DevOps & Data",
        icon: <Cloud className="w-6 h-6" />,
        color: "#ffcc00",
        skills: [
            { name: "AWS", items: ["EC2", "S3", "Lambda"] },
            { name: "Ops", items: ["Git", "CI/CD", "Bash"] },
            { name: "DBs", items: ["MySQL", "PostgreSQL", "MongoDB"] },
        ],
    },
    {
        title: "Programming",
        icon: <Code className="w-6 h-6" />,
        color: "#ffffff",
        skills: [
            { name: "Primary", items: ["Python"] },
            { name: "Secondary", items: ["JavaScript", "SQL"] },
        ],
    },
];

const SkillCard = ({ category }: { category: SkillCategory }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass-panel p-6 rounded-2xl relative overflow-hidden group border border-white/5 hover:border-white/20 transition-all duration-300"
        >
            <div
                className="absolute top-0 right-0 w-24 h-24 blur-[60px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: category.color }}
            />

            <div className="flex items-center space-x-3 mb-6">
                <div
                    className="p-2 rounded-lg bg-white/5 border border-white/10"
                    style={{ color: category.color }}
                >
                    {category.icon}
                </div>
                <h4 className="text-lg font-bold text-white/90">{category.title}</h4>
            </div>

            <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-1">
                        <div className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 mt-1 mr-2 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: category.color }} />
                            <div>
                                <span className="text-sm font-semibold text-white/70 block">{skill.name}</span>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {skill.items.map((item, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-wider font-mono text-white/40 group-hover:text-white/60 transition-colors">
                                            {item}{i < skill.items.length - 1 ? "," : ""}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export function ArchitectureSection() {
    return (
        <section id="architecture" className="relative py-32 z-10 bg-[#0A0F1C]/50 backdrop-blur-3xl overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00f0ff]/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#b000ff]/5 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white/60 mb-6 uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                        <span>TECHNICAL_STACK_OVERRIDE</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Technical Skills <br />
                        {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#b000ff]">(Refined & Structured)</span> */}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} category={category} />
                    ))}
                </div>

                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-20 flex justify-center"
                >
                    <div className="glass-panel px-6 py-3 rounded-full border border-white/5 flex items-center space-x-8">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-[#00f0ff]" />
                            <span className="text-xs font-mono text-white/40 uppercase">AI Systems</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-[#b000ff]" />
                            <span className="text-xs font-mono text-white/40 uppercase">GenAI Architect</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-white/40" />
                            <span className="text-xs font-mono text-white/40 uppercase">MLOps Engineer</span>
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
}
