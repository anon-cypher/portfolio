"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export function ContactSection() {

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

                    <div className="mb-12">
                        <p className="text-sm font-mono text-[#00f0ff] animate-pulse">
                            &gt; choose_communication_channel --mode="direct_message"
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
                        <a href="mailto:shubham.sg53147@gmail.com" className="text-white/50 hover:text-[#00f0ff] transition-colors relative group">
                            <span className="flex items-center space-x-2">
                                <Mail className="w-5 h-5" /> <span>Email</span>
                            </span>
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#00f0ff] transition-all group-hover:w-full" />
                        </a>
                        <a href="https://www.linkedin.com/in/anon-cypher/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#b000ff] transition-colors relative group">
                            <span className="flex items-center space-x-2">
                                <Linkedin className="w-5 h-5" /> <span>LinkedIn</span>
                            </span>
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#b000ff] transition-all group-hover:w-full" />
                        </a>
                        <a href="https://github.com/anon-cypher" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors relative group">
                            <span className="flex items-center space-x-2">
                                <Github className="w-5 h-5" /> <span>GitHub</span>
                            </span>
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                        </a>
                        <a href="https://www.instagram.com/anon.cypher/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#ff3366] transition-colors relative group">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                <span>Instagram</span>
                            </span>
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#ff3366] transition-all group-hover:w-full" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
