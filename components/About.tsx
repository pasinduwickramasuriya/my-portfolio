


"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    tags?: string[];
}

const defaultTimeline: TimelineItem[] = [
    {
        year: "2023",
        title: "The Foundation",
        description:
            "Began pursuing a Bachelor of Information Technology (BIT) degree at the University of Moratuwa. Completed the first year with a distinction, laying a strong foundation in Algorithms, OOP, and Web Technologies.",
        tags: ["University of Moratuwa", "Java", "DSA"],
    },
    {
        year: "2024",
        title: "Full Stack Evolution",
        description:
            "Successfully completed the second year, shifting focus to complex system architecture. Built multiple full-stack applications and mastered modern frameworks like Next.js and Tailwind CSS.",
        tags: ["System Design", "Next.js", "PostgreSQL"],
    },
    {
        year: "2025",
        title: "Final Frontier",
        description:
            "Currently in the third year, final semester. Focusing on advanced HCI (Human-Computer Interaction) and preparing for professional deployment. Polishing skills to bridge the gap between code and design.",
        tags: ["HCI", "AI Integration", "Graduation"],
    },
];

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} id="about" className="relative bg-white text-black w-full">

            {/* 1. LAYOUT GRID */}
            <div className="flex flex-col md:flex-row max-w-7xl mx-auto">

                {/* --- LEFT COLUMN (STICKY HEADER) --- */}
                <div className="w-full md:w-5/12 relative">
                    <div className="sticky top-0 h-[30vh] md:h-screen flex flex-col justify-center px-6 md:px-12 py-12 md:py-0 border-r border-neutral-100">

                        {/* Animated Title */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <h2 className="text-[12vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase text-black mb-4">
                                About<br />
                                <span className="text-lime-500">Me.</span>
                            </h2>

                            <div className="h-1 w-24 bg-black mt-6 mb-6" />

                            {/* CHANGED: text-neutral-500 -> text-gray-700 for better visibility */}
                            <p className="text-gray-700 font-medium max-w-xs text-sm md:text-base leading-relaxed">
                                A journey from curiosity to code. Here is the timeline of my academic and professional evolution.
                            </p>
                        </motion.div>

                        {/* Decorative Background Number fading in */}
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-[40vh] font-black text-neutral-50 opacity-[0.03] select-none pointer-events-none">
                            02
                        </div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN (SCROLLING CONTENT) --- */}
                <div className="w-full md:w-7/12 px-6 md:px-20 py-20 md:py-32 flex flex-col gap-32">
                    {defaultTimeline.map((item, index) => (
                        <TimelineCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>

            {/* Progress Bar for this section */}
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="fixed bottom-0 left-0 h-2 bg-lime-500 origin-left z-50 w-full"
            />
        </section>
    );
}

// --- SUB-COMPONENT: INDIVIDUAL CARD ---
function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative"
        >
            {/* 1. Big Year Number */}
            {/* CHANGED: text-neutral-200 -> text-gray-300 for clearer visibility */}
            <h3 className="text-6xl md:text-9xl font-black text-gray-300 group-hover:text-lime-500/40 transition-colors duration-500 select-none">
                {item.year}
            </h3>

            {/* 2. Content Card */}
            <div className="relative -mt-8 md:-mt-12 ml-4 md:ml-12 p-8 bg-white border border-neutral-200 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] group-hover:shadow-[8px_8px_0px_0px_rgba(132,204,22,1)] group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300">

                {/* Title */}
                <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 text-black">
                    {item.title}
                </h4>

                {/* Description */}
                {/* CHANGED: text-neutral-600 -> text-gray-800 for high readability */}
                <p className="text-gray-800 leading-relaxed mb-6 font-mono text-sm md:text-base font-medium">
                    {item.description}
                </p>

                {/* Tags */}
                {item.tags && (
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                            <span
                                key={tag}
                                // CHANGED: text-neutral-500 -> text-gray-800
                                className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-neutral-100 text-gray-800 rounded-full group-hover:bg-lime-50 group-hover:text-lime-700 transition-colors border border-transparent group-hover:border-lime-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-lime-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* 3. Connector Line (Mobile Only) */}
            <div className="absolute left-0 top-20 bottom-0 w-px bg-neutral-200 md:hidden -z-10" />
        </motion.div>
    );
}