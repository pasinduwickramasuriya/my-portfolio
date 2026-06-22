


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
    year: string;
}

const defaultProjects: Project[] = [
    {
        id: 1,
        title: "Yala Wildlife",
        description: "A full-stack safari booking and wildlife management platform featuring a high-performance interactive interface and booking flows.",
        tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
        liveLink: "https://github.com/pasinduwickramasuriya/yala-wildlife",
        githubLink: "https://github.com/pasinduwickramasuriya/yala-wildlife",
        category: "Full-Stack",
        year: "2026"
    },
    {
        id: 2,
        title: "Serenix Travels",
        description: "A premium travel and holiday booking web application focusing on immersive user experience, responsive grids, and animations.",
        tech: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://github.com/pasinduwickramasuriya/serenixtravels",
        githubLink: "https://github.com/pasinduwickramasuriya/serenixtravels",
        category: "UI/UX",
        year: "2026"
    },
    {
        id: 3,
        title: "Serena Movies",
        description: "A modern movies exploration app designed for discoverability. Features an elegant search interface and rich movie detail layouts.",
        tech: ["React", "TypeScript", "Tailwind"],
        liveLink: "https://github.com/pasinduwickramasuriya/serena-movies",
        githubLink: "https://github.com/pasinduwickramasuriya/serena-movies",
        category: "UI/UX",
        year: "2026"
    },
    {
        id: 4,
        title: "University Portal",
        description: "A comprehensive university portal backend and frontend management system for tracking schedules, enrollments, and grades.",
        tech: ["Python", "Django", "HTML", "CSS"],
        liveLink: "https://github.com/pasinduwickramasuriya/university-portal_django",
        githubLink: "https://github.com/pasinduwickramasuriya/university-portal_django",
        category: "Full-Stack",
        year: "2026"
    },
    {
        id: 5,
        title: "TransitLK",
        description: "Public transit routing and schedule helper for Sri Lankan commuters, featuring real-time location estimates and route planners.",
        tech: ["Next.js", "TypeScript", "Leaflet Maps"],
        liveLink: "https://github.com/pasinduwickramasuriya/transitlk",
        githubLink: "https://github.com/pasinduwickramasuriya/transitlk",
        category: "Full-Stack",
        year: "2026"
    },
    {
        id: 6,
        title: "GPS Tracker",
        description: "A real-time GPS tracking application integrated with maps for tracking location data and device coordinates.",
        tech: ["TypeScript", "Node.js", "WebSockets"],
        liveLink: "https://github.com/pasinduwickramasuriya/gps-tracker",
        githubLink: "https://github.com/pasinduwickramasuriya/gps-tracker",
        category: "Full-Stack",
        year: "2025"
    },
    {
        id: 7,
        title: "Pharmacy Mgmt",
        description: "Desktop application for inventory management. Features include barcode scanning, automated re-ordering, and SQL Server sync.",
        tech: ["C#", "SQL Server", ".NET"],
        liveLink: "https://github.com/pasinduwickramasuriya/Pharmacy-management-system",
        githubLink: "https://github.com/pasinduwickramasuriya/Pharmacy-management-system",
        category: "Desktop",
        year: "2025"
    },
    {
        id: 8,
        title: "Room Booking",
        description: "Full-stack room booking system integrated with database updates, responsive layouts, and user authentication.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        liveLink: "https://github.com/pasinduwickramasuriya/room-booking-system",
        githubLink: "https://github.com/pasinduwickramasuriya/room-booking-system",
        category: "Full-Stack",
        year: "2024"
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
        <section id="work" className="relative bg-white py-24 md:py-32 overflow-hidden">
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
                    <div className="flex flex-wrap gap-2 bg-neutral-50/50 p-2 rounded-full shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
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

                {/* 3. View More Call to Action */}
                <div className="flex justify-center mt-20">
                    <a
                        href="https://github.com/pasinduwickramasuriya?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-4 bg-black text-white hover:bg-neutral-900 px-8 py-5 rounded-full text-lg font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <span>View More on GitHub</span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-lime-400 text-black group-hover:rotate-45 transition-transform duration-300">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="3"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>
                </div>

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
        <a
            href={project.githubLink || project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
        >
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                className={`
                    group relative bg-white rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden cursor-pointer min-h-[350px] h-full
                    transition-all duration-500 ease-out
                    ${isHovered
                        ? "shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] -translate-y-2 z-10"
                        : "shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
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
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-50 group-hover:bg-lime-400 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(132,204,22,0.4)]">
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
                            className="text-xs font-bold uppercase tracking-wide bg-neutral-50 px-4 py-2 rounded-full text-neutral-500 group-hover:bg-black group-hover:text-white transition-colors duration-500"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Decorative Corner Slash */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lime-400 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

            </motion.div>
        </a>
    );
}