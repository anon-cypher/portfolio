"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Award, Medal } from "lucide-react";

const achievements = [
    { title: "HL Global Excellence Award", icon: <Medal className="w-8 h-8 text-[#00f0ff]" />, delay: 0.1 },
    { title: "2nd Prize IRTC Research", icon: <Trophy className="w-8 h-8 text-yellow-400" />, delay: 0 },
    { title: "Spotlight Award", icon: <Star className="w-8 h-8 text-[#00f0ff]" />, delay: 0.2 },
    { title: "Best Project Award", icon: <Award className="w-8 h-8 text-[#b000ff]" />, delay: 0.3 },
    { title: "MSI Contribution Award", icon: <Medal className="w-8 h-8 text-[#00ffcc]" />, delay: 0.4 },
];

export function AchievementsSection() {
    return (
        <section id="achievements" className="relative py-24 z-10 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-sm font-mono text-yellow-400 mb-2 tracking-widest uppercase">
            // RECOGNITION
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Awards & Milestones
                    </h3>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: item.delay, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10, rotate: 2 }}
                            className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center space-y-4 w-64 h-48 cursor-default group"
                        >
                            <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-[#00f0ff]/10 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_#00f0ff80]">
                                {item.icon}
                            </div>
                            <h4 className="text-white font-semibold text-center group-hover:text-[#00f0ff] transition-colors">{item.title}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
