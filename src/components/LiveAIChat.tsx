"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const prompts = [
    "Explain your CV pipeline",
    "How did you reduce QA by 60%?",
    "Describe your RAG architecture"
];

const responses: Record<string, string> = {
    "Explain your CV pipeline": "My standard Computer Vision pipeline utilizes YOLOv8 for rapid object detection followed by TrOCR for precise OCR, processed via PyTorch on CUDA and deployed on Edge TPUs. Inference time averages ~12ms.",
    "How did you reduce QA by 60%?": "By introducing an automated deep-learning module that verified semantic correctness in engineering blueprints. It flagged anomalies immediately, meaning human QA only processed the 40% edge-cases.",
    "Describe your RAG architecture": "The RAG pipeline uses Llama-2 as the reasoning engine and FAISS for vector search. Documents are parsed via a microservice, chunked, and embedded with BGE-Large before querying."
};

export function LiveAIChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'ai' | 'user', text: string }[]>([
        { role: 'ai', text: "Hello. I am the AI representation of Shubham's portfolio. How can I assist your evaluation?" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        setMessages(prev => [...prev, { role: 'user', text }]);
        setInputValue("");
        setIsTyping(true);

        setTimeout(() => {
            const response = responses[text] || "I don't have simulated context for that yet. However, I am built to be highly scalable.";
            setMessages(prev => [...prev, { role: 'ai', text: response }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, type: "spring" }}
                className="fixed bottom-6 right-6 z-50"
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-14 h-14 rounded-full bg-[#00f0ff] hover:bg-[#00f0ff]/80 text-[#0A0F1C] flex items-center justify-center shadow-[0_0_20px_#00f0ff80] transition-transform hover:scale-105"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
                </button>
            </motion.div>

            {/* Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] glass-panel border border-white/20 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden bg-[#0A0F1C]/95"
                    >
                        {/* Header */}
                        <div className="px-4 py-3 border-b border-white/10 bg-[#111827] flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00f0ff]"></span>
                                </div>
                                <span className="text-sm font-semibold text-white/90">Shubham AI Agent</span>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`flex items-end space-x-2 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-white/10' : 'bg-[#00f0ff]/20'}`}>
                                            {msg.role === 'user' ? <User className="w-3 h-3 text-white/70" /> : <Bot className="w-3 h-3 text-[#00f0ff]" />}
                                        </div>
                                        <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-white/10 text-white rounded-br-none' : 'bg-[#111827] border border-white/5 text-white/80 rounded-bl-none'}`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="flex items-end space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center">
                                            <Bot className="w-3 h-3 text-[#00f0ff]" />
                                        </div>
                                        <div className="p-3 rounded-2xl bg-[#111827] border border-white/5 text-white/80 rounded-bl-none flex space-x-1">
                                            <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
                                            <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                                            <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Preloaded Prompts */}
                        <div className="px-4 pb-2 flex flex-nowrap overflow-x-auto gap-2 no-scrollbar">
                            {prompts.map((p, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSend(p)}
                                    className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                                >
                                    {p}
                                </button>
                            ))}
                        </div>

                        {/* Input Form */}
                        <div className="p-3 border-t border-white/10 bg-[#111827]">
                            <form
                                className="flex items-center bg-[#0A0F1C] border border-white/10 rounded-full pr-1 pl-3 py-1 focus-within:border-[#00f0ff]/50 transition-colors"
                                onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
                            >
                                <input
                                    type="text"
                                    placeholder="Ask a question..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="flex-1 bg-transparent border-none outline-none text-sm text-white/90"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="p-2 bg-[#00f0ff] hover:bg-[#00f0ff]/80 text-[#0A0F1C] rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
