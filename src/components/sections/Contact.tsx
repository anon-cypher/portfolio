"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Mail, Linkedin, Github } from "lucide-react";

export function ContactSection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="contact" className="relative py-32 z-10 bg-gradient-to-t from-[#0A0F1C] to-transparent">
            <div className="container mx-auto px-6 max-w-2xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Ready to Architect <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#b000ff]">Custom Intelligence?</span>
                    </h2>
                    <p className="text-white/60 text-lg mb-12 max-w-lg mx-auto">
                        Whether you need scalable LLM infrastructure, edge CV models, or a fully connected autonomous pipeline, my systems are ready. Let's connect.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Button
                            variant="glow"
                            size="lg"
                            className="w-full sm:w-auto overflow-hidden group relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="absolute inset-0 bg-[#00f0ff]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10 flex items-center">
                                Initialize Contact <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </span>

                            {/* Ripple Effect on Hover */}
                            {isHovered && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0.5 }}
                                    animate={{ scale: 2, opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 bg-white/20 rounded-full"
                                />
                            )}
                        </Button>
                    </div>

                    <div className="flex items-center justify-center space-x-8">
                        <a href="#" className="text-white/50 hover:text-[#00f0ff] transition-colors relative group">
                            <span className="flex items-center space-x-2">
                                <Mail className="w-5 h-5" /> <span>Email</span>
                            </span>
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#00f0ff] transition-all group-hover:w-full" />
                        </a>
                        <a href="#" className="text-white/50 hover:text-[#b000ff] transition-colors relative group">
                            <span className="flex items-center space-x-2">
                                <Linkedin className="w-5 h-5" /> <span>LinkedIn</span>
                            </span>
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#b000ff] transition-all group-hover:w-full" />
                        </a>
                        <a href="#" className="text-white/50 hover:text-white transition-colors relative group">
                            <span className="flex items-center space-x-2">
                                <Github className="w-5 h-5" /> <span>GitHub</span>
                            </span>
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
