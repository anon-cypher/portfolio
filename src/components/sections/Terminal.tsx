"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const predefinedOutputs: Record<string, string[]> = {
    "whoami": [
        "Role: AI Systems Engineer | GenAI Architect",
        "Mission: Building autonomous systems that operate reliably in real-world environments.",
        "Focus: LLM Infrastructure, Agentic AI, RAG, and Computer Vision.",
        "Approach: Systems-level optimization across data, models, and deployment."
    ],
    "ls projects": [
        "[01] Smart Factory Edge MLOps",
        "[02] Document-to-JSON LLM Parser",
        "[03] Semiconductor Defect Detection",
        "[04] Engineering Drawing QA",
        "[05] Real-Time Pothole Detection"
    ],
    "cat experience": [
        "2023-2026: AI Systems Engineer @ HL Mando",
        "2022-2022: Security Automation Engineer @ BreachLock",
        "2021-2021: AI Intern @ ThinkingStack"
    ],
    "list items": [
        "[AWD] 2nd Prize @ IRTC Research",
        "[AWD] Silver Prize @ HL Mando CTO MSI",
        "[AWD] Spotlight Award @ HL Mando",
        "[AWD] Best Project Award",
        "[AWD] MSI Contribution Award"
    ],
    "help": [
        "Available commands:",
        "  whoami          - Professional summary",
        "  ls projects     - List featured deployments",
        "  cat experience  - View system timeline",
        "  list items      - View awards & milestones",
        "  clear           - Clear terminal history"
    ]
};

export function TerminalSection() {
    const [history, setHistory] = useState<string[]>([
        "Shubham OS v1.0.0 (Linux kernel 6.x)",
        "Type 'help' to see available commands.",
        ""
    ]);
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();
        if (!cmd) return;

        setHistory(prev => [...prev, `> ${input.trim()}`]);
        setInput("");

        if (cmd === 'clear') {
            setHistory([]);
            return;
        }

        setTimeout(() => {
            const output = predefinedOutputs[cmd] || [`bash: ${cmd}: command not found`];

            // Simulate typing output line by line
            output.forEach((line, index) => {
                setTimeout(() => {
                    setHistory(prev => [...prev, line]);
                }, index * 100);
            });
        }, 200);
    };

    return (
        <section className="relative py-24 z-10 max-w-4xl mx-auto px-6 w-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full rounded-lg overflow-hidden border border-white/10 bg-[#0A0F1C]/90 backdrop-blur-xl shadow-2xl"
            >
                {/* Terminal Header */}
                <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#111827]">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="mx-auto text-xs text-white/50 font-mono">shubham@ai-sys:~</div>
                </div>

                {/* Terminal Body */}
                <div
                    ref={containerRef}
                    className="p-6 h-[350px] overflow-y-auto font-mono text-sm flex flex-col space-y-2 custom-scrollbar"
                    onClick={() => inputRef.current?.focus()}
                >
                    {history.map((line, i) => (
                        <div key={i} className={`${line.startsWith('>') ? 'text-[#00f0ff]' : line.startsWith('[OK]') ? 'text-green-400' : 'text-white/80'}`}>
                            {line}
                        </div>
                    ))}

                    <form onSubmit={handleCommand} className="flex items-center text-[#00f0ff]">
                        <span className="mr-2">&gt;</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 bg-transparent outline-none border-none text-[#00f0ff] caret-white"
                            autoComplete="off"
                            spellCheck="false"
                        />
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
