
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Service {
    title: string;
    icon: string;
    description: string;
    features: string[];
}

interface ServicesProps {
    services?: Service[];
    headerTitle?: string;
    headerSubtitle?: string;
}

const defaultServices: Service[] = [
    {
        title: "Web Development",
        icon: "fas fa-code",
        description: "Building responsive and scalable websites with modern technologies.",
        features: ["Next.js", "React", "TypeScript"],
    },
    {
        title: "UI/UX Design",
        icon: "fas fa-palette",
        description: "Crafting intuitive and engaging user interfaces with thoughtful design.",
        features: ["Figma", "User-Centered Design", "Prototyping"],
    },
    {
        title: "API Integration",
        icon: "fas fa-plug",
        description: "Seamless backend and frontend integration for robust applications.",
        features: ["REST APIs", "GraphQL", "Node.js"],
    }, {
        title: "Frontend Development",
        icon: "fas fa-code",
        description:
            "Crafting dynamic and responsive user interfaces with modern frontend technologies for seamless user experiences.",
        features: ["React JS", "Next.js", "TypeScript"],
    },
    {
        title: "Backend Development",
        icon: "fas fa-server",
        description:
            "Building robust and scalable server-side applications to power web solutions with efficiency and reliability.",
        features: ["Node.js", "Java", "REST APIs"],
    },
    {
        title: "Fullstack Development",
        icon: "fas fa-laptop-code",
        description:
            "Delivering end-to-end web solutions by integrating frontend and backend technologies for comprehensive applications.",
        features: ["React JS", "Node.js", "Next.js"],
    },
];

function Services({
    services = defaultServices,
    headerTitle = "Services",
    headerSubtitle = "Transforming ideas into digital reality with expertise and creativity",
}: ServicesProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("services");
            if (element) {
                const { top } = element.getBoundingClientRect();
                if (top < window.innerHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            id="services"
            className="relative min-h-screen py-16 sm:py-24 overflow-hidden"
        >
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, translateY: 4 }}
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center -mt-5 mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {headerTitle}
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-4" />
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                        {headerSubtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service: Service, index: number) => (
                        <div
                            key={service.title}
                            className={`group relative p-4 sm:p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <div className="relative z-10">
                                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <i
                                        className={`${service.icon} text-xl sm:text-2xl text-blue-400 group-hover:text-blue-300`}
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors duration-300">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {service.features.map((feature: string) => (
                                        <span
                                            key={feature}
                                            className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;