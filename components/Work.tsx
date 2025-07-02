"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    liveLink: string;
    githubLink?: string;
    behanceLink?: string;
    category: string;
    featured?: boolean;
}

interface WorkProps {
    projects?: Project[];
    filters?: string[];
}

const defaultProjects: Project[] = [
    {
        title: "Adventure Next.js",
        description:
            "Full-stack safari booking system with dark-themed UI, RESTful API, and customer messaging.",
        tech: ["Next.js", "Node.js", "TypeScript", "MongoDB", "ShadCN", "Tailwind CSS", "NodeMailer"],
        image: "/adventure-next.png",
        liveLink: "https://github.com/pasinduwickramasuriya",
        githubLink: "https://github.com/pasinduwickramasuriya",
        category: "Full-Stack",
        featured: true,
    },
    {
        title: "NextSecure Auth",
        description:
            "Secure authentication system with NextAuth.js and modern, responsive design.",
        tech: ["Next.js", "MongoDB", "NextAuth.js", "ShadCN", "Tailwind CSS", "TypeScript"],
        image: "/nextsecure-auth.png",
        liveLink: "https://github.com/pasinduwickramasuriya",
        githubLink: "https://github.com/pasinduwickramasuriya",
        category: "Full-Stack",
        featured: true,
    },
    {
        title: "Pharmacy Inventory Management",
        description:
            "Desktop app for streamlined inventory management and billing with SQL Server.",
        tech: ["C#", "SQL Server", "Visual Studio"],
        image: "/pharmacy-inventory.png",
        liveLink: "https://github.com/pasinduwickramasuriya",
        githubLink: "https://github.com/pasinduwickramasuriya",
        category: "Desktop",
    },
    {
        title: "Room Booking Web App",
        description:
            "Full-stack MERN app with Stripe payments and email notifications for room booking.",
        tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Bootstrap", "Stripe", "NodeMailer"],
        image: "/room-booking.png",
        liveLink: "https://github.com/pasinduwickramasuriya",
        githubLink: "https://github.com/username/room-booking",
        category: "Full-Stack",
    },
    {
        title: "Tour Booking Web App",
        description:
            "Responsive frontend for a tour booking app using React.js and custom CSS.",
        tech: ["React.js", "Custom CSS"],
        image: "/tour-booking.png",
        liveLink: "https://github.com/pasinduwickramasuriya",
        githubLink: "https://github.com/pasinduwickramasuriya",
        category: "UI/UX",
    },
];

const defaultFilters: string[] = ["All", "Full-Stack", "Desktop", "UI/UX"];

function Work({
    projects = defaultProjects,
    filters = defaultFilters,
}: WorkProps) {
    const [activeFilter, setActiveFilter] = useState("All");
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter(
                (project: Project) => project.category === activeFilter
            );

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("work");
            if (element) {
                const { top } = element.getBoundingClientRect();
                if (top < window.innerHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        const timer = setTimeout(() => setIsLoading(false), 1000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const SkeletonCard = () => (
        <div className="bg-gray-800/30 rounded-xl overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-700/30" />
            <div className="p-4 sm:p-6 space-y-4">
                <div className="h-6 w-2/3 bg-gray-700/30 rounded" />
                <div className="h-4 w-full bg-gray-700/30 rounded" />
                <div className="h-4 w-3/4 bg-gray-700/30 rounded" />
                <div className="flex gap-2">
                    <div className="h-8 w-20 bg-gray-700/30 rounded-full" />
                    <div className="h-8 w-20 bg-gray-700/30 rounded-full" />
                </div>
            </div>
        </div>
    );

    return (
        <section
            id="work"
            className="relative min-h-screen  py-16 sm:py-24 overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, translateY: 4 }}
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        My Work
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-4" />
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                        A showcase of my full-stack, desktop, and UI/UX projects
                    </p>
                </motion.div>

                <div
                    className={`flex flex-wrap justify-center mb-8 sm:mb-12 gap-2 sm:gap-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    {filters.map((filter: string) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 sm:px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${activeFilter === filter
                                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                                : "bg-gray-800/50 text-gray-400 hover:text-white"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {isLoading
                        ? [...Array(6)].map((_, index: number) => (
                            <SkeletonCard key={index} />
                        ))
                        : filteredProjects.map((project: Project, index: number) => (
                            <div
                                key={project.title}
                                className={`group relative bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500 text-white text-sm rounded-full transform rotate-3">
                        Featured
                      </div>
                    )}
                  </div> */}

                                <div className="p-4 sm:p-6 space-y-4">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech: string) => (
                                            <span
                                                key={tech}
                                                className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                                        >
                                            <span>View Project</span>
                                            <svg
                                                className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </a>
                                        <div className="flex gap-4">
                                            {project.githubLink && (
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                                >
                                                    <i className="fab fa-github text-lg sm:text-xl" />
                                                </a>
                                            )}
                                            {project.behanceLink && (
                                                <a
                                                    href={project.behanceLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                                >
                                                    <i className="fab fa-behance text-lg sm:text-xl" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default Work;