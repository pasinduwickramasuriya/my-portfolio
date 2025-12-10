




"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
    name: string;
    icon: string;
    description: string;
}

interface Categories {
    [key: string]: Skill[];
}

const defaultCategories: Categories = {
    Frontend: [
        { name: "Next.js", icon: "devicon-nextjs-plain", description: "App Router & SSR" },
        { name: "React", icon: "devicon-react-original", description: "Component Architecture" },
        { name: "TypeScript", icon: "devicon-typescript-plain", description: "Strict Typing" },
        { name: "Tailwind", icon: "devicon-tailwindcss-original", description: "Utility-First CSS" },
        { name: "Framer Motion", icon: "devicon-framermotion-original", description: "Complex Animations" },
    ],
    Backend: [
        { name: "Node.js", icon: "devicon-nodejs-plain", description: "Event-Driven Runtime" },
        { name: "Express", icon: "devicon-express-original", description: "RESTful APIs" },
        { name: "MongoDB", icon: "devicon-mongodb-plain", description: "NoSQL Schema Design" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain", description: "Relational Data" },
    ],
    Tools: [
        { name: "Git", icon: "devicon-git-plain", description: "Version Control" },
        { name: "Docker", icon: "devicon-docker-plain", description: "Containerization" },
        { name: "Figma", icon: "devicon-figma-plain", description: "UI Prototyping" },
        { name: "VS Code", icon: "devicon-vscode-plain", description: "IDE of Choice" },
    ],
};

export default function Skills() {
    const [activeTab, setActiveTab] = useState("Frontend");

    return (
        <section id="skills" className="relative bg-white py-24 md:py-32 overflow-hidden border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* 1. Header & Tabs */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">

                    {/* Title */}
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-black mb-6">
                            Tech <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-lime-600">
                                Stack
                                <svg className="absolute w-full h-3 -bottom-2 left-0 text-lime-400 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h2>
                        <p className="max-w-md text-neutral-700 font-medium text-sm md:text-base leading-relaxed border-l-4 border-lime-400 pl-6">
                            My weapon of choice. A curated list of tools and technologies I use to build digital products.
                        </p>
                    </div>

                    {/* Modern Tabs (Pill Shape) */}
                    <div className="flex flex-wrap gap-3 bg-neutral-100 p-2 rounded-full border border-neutral-200">
                        {Object.keys(defaultCategories).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={`
                                    relative px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 z-10
                                    ${activeTab === category ? "text-white" : "text-neutral-500 hover:text-black"}
                                `}
                            >
                                {activeTab === category && (
                                    <motion.div
                                        layoutId="activeSkillTab"
                                        className="absolute inset-0 bg-black rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2. The Skill Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {defaultCategories[activeTab].map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}

// --- SUB-COMPONENT: SKILL CARD ---
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                delay: index * 0.05
            }}
            className="group relative bg-neutral-50 h-56 rounded-[2rem] border-2 border-transparent hover:border-black hover:bg-white transition-all duration-300 flex flex-col justify-between p-8 overflow-hidden cursor-default hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
            {/* Background Decor (Lime Blob) */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-lime-200/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top: Icon */}
            <div className="relative z-10 w-14 h-14 flex items-center justify-center bg-white rounded-2xl border border-neutral-200 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <i className={`${skill.icon} text-4xl`}></i>
            </div>

            {/* Bottom: Text */}
            <div className="relative z-10">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-black uppercase tracking-tight text-black">
                        {skill.name}
                    </h3>
                    {/* Tiny Arrow */}
                    <svg className="w-5 h-5 text-neutral-300 group-hover:text-lime-500 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                </div>

                <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide group-hover:text-black transition-colors">
                    {skill.description}
                </p>
            </div>
        </motion.div>
    );
}