"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Skill {
    name: string;
    icon: string;
    description: string;
}

interface Categories {
    [key: string]: Skill[];
}

interface SkillsProps {
    categories?: Categories;
    headerTitle?: string;
    headerDescription?: string;
}

const defaultCategories: Categories = {
    Frontend: [
        {
            name: "Next.js",
            icon: "devicon-nextjs-plain",
            description: "Building server-rendered React applications",
        },
        {
            name: "React",
            icon: "devicon-react-original colored",
            description: "Creating dynamic user interfaces",
        },
        {
            name: "TypeScript",
            icon: "devicon-typescript-plain colored",
            description: "Adding type safety to JavaScript",
        },
        {
            name: "Tailwind CSS",
            icon: "devicon-tailwindcss-original colored",
            description: "Crafting responsive and modern designs",
        },
        {
            name: "Framer Motion",
            icon: "devicon-framermotion-original",
            description: "Implementing smooth animations",
        },
    ],
    Backend: [
        {
            name: "Node.js",
            icon: "devicon-nodejs-plain colored",
            description: "Building scalable server-side applications",
        },
        {
            name: "Express.js",
            icon: "devicon-express-original",
            description: "Creating robust APIs and backends",
        },
        {
            name: "MongoDB",
            icon: "devicon-mongodb-plain colored",
            description: "Managing NoSQL databases",
        },
    ],
    Tools: [
        {
            name: "Git & GitHub",
            icon: "devicon-github-original",
            description: "Version control and collaboration",
        },
        {
            name: "VS Code",
            icon: "devicon-vscode-plain colored",
            description: "Efficient development environment",
        },
        {
            name: "Figma",
            icon: "fab fa-figma",
            description: "Designing UI/UX prototypes",
        },
    ],
};

function Skills({
    categories = defaultCategories,
    headerTitle = "Skills & Expertise",
    headerDescription = "Technologies and tools I use to build modern web applications",
}: SkillsProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState(
        Object.keys(categories)[0]
    );

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("skills");
            if (element) {
                const { top } = element.getBoundingClientRect();
                if (top < window.innerHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            id="skills"
            className="relative  py-16 sm:py-24 overflow-hidden min-h-screen"
        >
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, translateY: 4 }}
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center -mt-10 mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {headerTitle}
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-4" />
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                        {headerDescription}
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2 sm:gap-4">
                    {Object.keys(categories).map((category: string) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 sm:px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${activeCategory === category
                                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                                : "bg-gray-800/50 text-gray-400 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {categories[activeCategory]?.map((skill: Skill, index: number) => (
                        <div
                            key={skill.name}
                            className={`group p-4 sm:p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50
                hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10
                ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-blue-500/20 flex items-center justify-center overflow-hidden">
                                    <i
                                        className={`${skill.icon} text-lg sm:text-2xl text-blue-400 group-hover:text-blue-300 transition-all duration-300 transform group-hover:scale-110`}
                                    ></i>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                                        {skill.name}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                                        {skill.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;