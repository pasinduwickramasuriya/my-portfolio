"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
    title: string;
    id: string;
    description: string;
    features: string[];
}

const defaultServices: Service[] = [
    {
        title: "Web Development",
        id: "01",
        description: "Building pixel-perfect, responsive websites that perform flawlessly across all devices.",
        features: ["Next.js", "React", "Tailwind"],
    },
    {
        title: "UI/UX Design",
        id: "02",
        description: "Translating complex logic into intuitive, accessible, and beautiful user interfaces.",
        features: ["Figma", "Prototyping", "Design Systems"],
    },
    {
        title: "API Integration",
        id: "03",
        description: "Connecting your frontend to the world. Robust integration with third-party services.",
        features: ["REST", "GraphQL", "Webhooks"],
    },
    {
        title: "Frontend Eng.",
        id: "04",
        description: "Crafting the client-side magic. Smooth animations, state management, and speed.",
        features: ["TypeScript", "Framer Motion", "Redux"],
    },
    {
        title: "Backend Eng.",
        id: "05",
        description: "Solid architecture for scalable applications. Database design and server logic.",
        features: ["Node.js", "PostgreSQL", "Prisma"],
    },
    {
        title: "Fullstack",
        id: "06",
        description: "End-to-end delivery. From the database schema to the final pixel on the screen.",
        features: ["Vercel", "CI/CD", "Testing"],
    },
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="relative bg-white py-24 md:py-32 overflow-hidden border-t border-neutral-100">

            {/* 1. Header Section */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-black mb-4">
                            My <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-lime-600 z-10">
                                Expertise
                                {/* Decorative underline */}
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-lime-400 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h2>
                    </div>
                    <p className="max-w-md text-neutral-700 font-medium text-base md:text-lg leading-relaxed border-l-4 border-lime-400 pl-6">
                        I combine technical precision with design thinking to build scalable, human-centered digital products.
                    </p>
                </motion.div>
            </div>

            {/* 2. The Rounded Grid */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {defaultServices.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            index={index}
                            hoveredIndex={hoveredIndex}
                            setHoveredIndex={setHoveredIndex}
                        />
                    ))}
                </div>
            </div>

            {/* 3. Infinite Tech Ticker (Marquee) */}
            <div className="mt-32 bg-white py-10 overflow-hidden flex -rotate-1 scale-105 transform origin-left">
                <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16">
                            {["Next.js", "React", "TypeScript", "Node.js", "Figma", "TailwindCSS", "Prisma", "PostgreSQL", "Framer Motion", "Docker", "AWS"].map((tech) => (
                                <span key={tech} className="text-5xl font-black text-lime-300  uppercase hover:text-lime-300 hover:[-webkit-text-stroke:1px_transparent] transition-colors cursor-default duration-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 40s linear infinite;
                }
            `}</style>
        </section>
    );
}

// --- SUB-COMPONENT: SERVICE CARD ---
function ServiceCard({
    service,
    index,
    hoveredIndex,
    setHoveredIndex
}: {
    service: Service;
    index: number;
    hoveredIndex: number | null;
    setHoveredIndex: (i: number | null) => void;
}) {
    // Determine if this card is being hovered, or if another card is (so this one should blur)
    const isHovered = hoveredIndex === index;
    const isBlur = hoveredIndex !== null && hoveredIndex !== index;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "circOut" }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            // Rounded-3xl (approx 24px) or Rounded-[2.5rem] (40px) for that super modern look
            className={`
                group relative h-[360px] p-8 md:p-10 flex flex-col justify-between 
                bg-white border-2 rounded-[2.5rem] transition-all duration-500 ease-out cursor-default
                ${isHovered
                    ? "border-black shadow-[0px_20px_40px_-15px_rgba(0,0,0,0.1)] -translate-y-2 z-10"
                    : "border-neutral-100 hover:border-neutral-200"
                }
                ${isBlur ? "opacity-50 blur-[2px] scale-95" : "opacity-100 scale-100 blur-0"}
            `}
        >
            {/* Background Hover Gradient (Subtle) */}
            <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-lime-50/50 to-transparent opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""}`} />

            {/* Top: ID and Icon Placeholder */}
            <div className="relative flex justify-between items-start z-10">
                <span className={`text-6xl font-black tracking-tighter transition-colors duration-300 ${isHovered ? "text-black" : "text-neutral-200"}`}>
                    {service.id}
                </span>

                {/* Arrow Icon that rotates on hover */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isHovered ? "bg-lime-400 border-lime-400 rotate-45" : "bg-white border-neutral-100"}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={isHovered ? "text-black" : "text-black"}>
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </div>
            </div>

            {/* Bottom: Content */}
            <div className="relative z-10">
                <h3 className="text-3xl font-black uppercase text-black mb-4 leading-none">
                    {service.title}
                </h3>
                {/* Darkened text for better visibility */}
                <p className="text-neutral-600 font-medium text-sm md:text-base leading-relaxed mb-6">
                    {service.description}
                </p>

                {/* Features (Pills) - Fully Rounded */}
                <div className="flex flex-wrap gap-2">
                    {service.features.map(f => (
                        <span key={f} className={`text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-full border transition-colors duration-300 ${isHovered ? "bg-black border-black text-white" : "bg-neutral-50 border-neutral-100 text-neutral-500"}`}>
                            {f}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}