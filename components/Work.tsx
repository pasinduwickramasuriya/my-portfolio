


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    liveLink: string;
    githubLink?: string;
    category: string;
    year: string; // Added year for extra context
}

const defaultProjects: Project[] = [
    {
        id: 1,
        title: "Adventure Next",
        description: "A full-stack safari booking system featuring a high-performance dark mode UI, real-time availability checking, and RESTful API integration.",
        tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
        liveLink: "#",
        githubLink: "#",
        category: "Full-Stack",
        year: "2024"
    },
    {
        id: 2,
        title: "NextSecure Auth",
        description: "Enterprise-grade authentication system utilizing NextAuth.js v5. Includes 2FA, passwordless login, and role-based access control.",
        tech: ["Next.js", "NextAuth", "ShadCN"],
        liveLink: "#",
        category: "Full-Stack",
        year: "2024"
    },
    {
        id: 3,
        title: "Pharmacy Inv.",
        description: "Desktop application for inventory management. Features include barcode scanning, automated re-ordering, and SQL Server sync.",
        tech: ["C#", "SQL Server", ".NET"],
        liveLink: "#",
        category: "Desktop",
        year: "2023"
    },
    {
        id: 4,
        title: "Room Booking",
        description: "MERN stack application integrated with Stripe for secure payments and NodeMailer for automated booking confirmations.",
        tech: ["React", "Node.js", "Stripe"],
        liveLink: "#",
        category: "Full-Stack",
        year: "2023"
    },
    {
        id: 5,
        title: "Tour Booking UI",
        description: "High-conversion landing page optimized for Core Web Vitals. Features complex GSAP animations and responsive layouts.",
        tech: ["React", "Framer Motion", "GSAP"],
        liveLink: "#",
        category: "UI/UX",
        year: "2023"
    },
];

const categories = ["All", "Full-Stack", "Desktop", "UI/UX"];

export default function Work() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    // Filter logic
    const filteredProjects = defaultProjects.filter(
        (project) => activeCategory === "All" || project.category === activeCategory
    );

    return (
        <section id="work" className="relative bg-white py-24 md:py-32 overflow-hidden border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* 1. Header & Filter Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">

                    {/* Title */}
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-black">
                            Selected <span className="text-lime-500">Work</span>
                        </h2>
                        <p className="max-w-md text-neutral-700 font-medium text-sm md:text-base mt-6 border-l-4 border-lime-400 pl-6">
                            A collection of deployed applications, experiments, and open-source contributions.
                        </p>
                    </div>

                    {/* Modern Pill Filter */}
                    <div className="flex flex-wrap gap-2 bg-neutral-100 p-2 rounded-full border border-neutral-200">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`relative px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors duration-300 z-10 ${activeCategory === cat ? "text-white" : "text-neutral-500 hover:text-black"
                                    }`}
                            >
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-black rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2. Masonry Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isHovered={hoveredProject === project.id}
                                setHovered={setHoveredProject}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}

// --- SUB-COMPONENT: TEXT-ONLY PROJECT CARD ---
function ProjectCard({
    project,
    isHovered,
    setHovered
}: {
    project: Project;
    isHovered: boolean;
    setHovered: (id: number | null) => void;
}) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
            className={`
                group relative bg-white border-2 rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden cursor-pointer min-h-[350px]
                transition-all duration-300 ease-out
                ${isHovered
                    ? "border-black shadow-[0px_20px_40px_-15px_rgba(0,0,0,0.1)] -translate-y-2"
                    : "border-neutral-100"
                }
            `}
        >
            {/* Background Slash Effect (Cutter Animation) */}
            <div
                className={`absolute inset-0 bg-gradient-to-tr from-lime-50 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""}`}
            />

            {/* Top Row: Category & Year */}
            <div className="relative z-10 flex justify-between items-start mb-6">
                <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-bold uppercase tracking-wider group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    {project.category}
                </span>
                <span className="font-mono text-neutral-400 text-sm font-bold">
                    {project.year}
                </span>
            </div>

            {/* Middle: Title & Desc */}
            <div className="relative z-10 mb-8">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-4xl md:text-5xl font-black uppercase text-black leading-[0.9] mb-4 tracking-tighter">
                        {project.title}
                    </h3>

                    {/* Big Action Arrow */}
                    <div className="w-12 h-12 rounded-full border-2 border-neutral-200 flex items-center justify-center group-hover:bg-lime-400 group-hover:border-lime-400 transition-all duration-300">
                        <svg
                            className={`w-6 h-6 text-black transition-transform duration-500 ${isHovered ? "rotate-[-45deg]" : "rotate-0"}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>

                <p className="text-neutral-700 font-medium leading-relaxed max-w-md">
                    {project.description}
                </p>
            </div>

            {/* Bottom: Tech Stack */}
            <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="text-xs font-bold uppercase tracking-wide border border-neutral-200 px-3 py-1.5 rounded-full text-neutral-500 group-hover:border-black group-hover:text-black transition-colors duration-300"
                    >
                        {t}
                    </span>
                ))}
            </div>

            {/* Decorative Corner Slash */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lime-400 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

        </motion.div>
    );
}