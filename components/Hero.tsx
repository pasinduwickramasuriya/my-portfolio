
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";

interface HeroProps {
    greeting?: string;
    name?: string;
    typewriterStrings?: string[];
    profileImage?: string;
    profileImageAlt?: string;
    ctaLink?: string;
}

function Hero({
    greeting = "Code → Design → Impact",
    name = "Pasindu Wickramasuriya",
    typewriterStrings = [
        "Frontend Engineer",
        "Backend Engineer",
        "Fullstack Engineer",
        "UI/UX Engineer",
    ],
    profileImage = "/pasi.png", // Image in public/pasindu.png
    profileImageAlt = "Profile picture of Pasindu",
    ctaLink = "#contact",
}: HeroProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen  overflow-hidden flex items-center justify-center" // Changed: Added flex items-center justify-center for section-level centering
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen min-w-[320px]"> {/* Changed: Added min-w-[320px] to prevent clipping on small screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 min-h-screen items-center justify-items-center"> {/* Changed: Adjusted gap-8 to gap-6 sm:gap-8 for tighter mobile spacing */}
                    {/* Left Side: Text Content */}
                    <div className="pt-16 sm:pt-20 md:pt-0 max-w-lg sm:max-w-xl justify-self-center md:justify-self-start text-center"> {/* Changed: Changed justify-self-start to justify-self-center md:justify-self-start for centered mobile content */}
                        <div
                            className={`mb-6 sm:mb-8 transform transition-all duration-700 ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                                }`}
                        >
                            <div className="inline-block rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-gray-300 border border-gray-700 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm bg-gray-900/30"> {/* Changed: Adjusted px-4 to px-3 sm:px-4, py-1.5 to py-1 sm:py-1.5, text-sm to text-xs sm:text-sm for mobile */}
                                {greeting}
                            </div>
                        </div>

                        <h1
                            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 sm:mb-8 transform transition-all duration-700 ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                                }`}
                        > {/* Changed: Adjusted text-4xl sm:text-5xl md:text-6xl to text-3xl sm:text-4xl md:text-5xl lg:text-6xl, mb-8 to mb-6 sm:mb-8 for responsive scaling */}
                            <span className="relative">
                                Hi, I'm{" "}
                                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                                    {name}
                                </span>
                            </span>
                        </h1>

                        <div
                            className={`transform transition-all duration-700 delay-200 ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                                }`}
                        >
                            <TypewriterComponent
                                options={{
                                    strings: typewriterStrings,
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 100,
                                    wrapperClassName:
                                        "text-lg sm:text-xl md:text-2xl font-medium text-blue-500", // Changed: Adjusted text-xl md:text-2xl to text-lg sm:text-xl md:text-2xl for mobile
                                }}
                            />
                        </div>

                        <div
                            className={`mt-8 sm:mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6 transform transition-all duration-700 delay-300 ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                                }`}
                        > {/* Changed: Adjusted mt-10 to mt-8 sm:mt-10, removed md:justify-start, gap-x-6 to gap-x-4 sm:gap-x-6 for mobile */}
                            <Button
                                size="lg"
                                asChild
                                className="group relative rounded-lg bg-blue-500 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-all duration-300 hover:scale-105 overflow-hidden" // Changed: Adjusted px-4 to px-3 sm:px-4, py-2.5 to py-2 sm:py-2.5, text-sm to text-xs sm:text-sm for mobile
                            >
                                <a href={ctaLink} aria-label="Get in Touch">
                                    <span className="relative z-10">Get in Touch</span>
                                    <div className="absolute inset-0 bg-blue-400 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Side: Circular Photo with Dynamic Moving Borders */}
                    <div
                        className={`transform transition-all duration-700 delay-200 relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] justify-self-center md:justify-self-end mt-8 md:mt-0 ${isVisible
                            ? "translate-x-0 opacity-100"
                            : "translate-x-10 opacity-0"
                            }`}
                    >
                        <div className="absolute inset-8 md:inset-10 bg-blue-500/20 rounded-full blur-3xl z-20" />
                        {/* <div className="absolute inset-2 -mt-6 md:-mt-10 rounded-full border-2 border-dashed border-violet-400/30 animate-spin-regular z-10" /> */}
                        {/* <div className="absolute inset-0 -mt-6 md:-mt-10 rounded-full border-2 border-dashed border-violet-400/50 animate-spin-wild z-10" /> */}

                        <div className="absolute inset-8 md:inset-10 bg-blue-500/5 rounded-full blur-3xl z-0" />

                        <img
                            src={profileImage}
                            alt={profileImageAlt}
                            className="relative z-30 w-[250px] h-[250px] md:w-[400px] md:h-[400px] mx-auto object-contain drop-shadow-2xl"
                        />
                        <div className="absolute inset-8 md:inset-10 bg-blue-500/20 rounded-full blur-3xl z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;


{/* <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className={`relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 transform transition-all duration-700 justify-self-center -mt-40 sm:mt-0`} 
                    >
                        <div
                            className="absolute inset-0 rounded-full border-0 animate-spin-slow z-10"
                            style={{
                                background:
                                    "conic-gradient(from 0deg, #3b82f6 0deg 45deg, transparent 45deg 90deg, #60a5fa 90deg 135deg, transparent 135deg 180deg, #1e40af 180deg 225deg, transparent 225deg 270deg, #3b82f6 270deg 315deg, transparent 315deg 360deg)",
                                boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                            }}
                        />
                        <div className="absolute inset-1 rounded-full border-2 border-dashed border-violet-400/50 animate-spin-wild z-10" />
                        <div className="absolute inset-4 sm:inset-6 md:inset-8 bg-violet-500/20 rounded-full blur-3xl z-0" /> 
                        <div className="absolute inset-3 sm:inset-4 md:inset-5 rounded-full overflow-hidden bg-background z-20"> 
                            <Image
                                src={profileImage}
                                alt={profileImageAlt}
                                fill
                                className="object-cover rounded-full drop-shadow-2xl"
                                priority
                            />
                        </div>
                        <div className="absolute inset-4 sm:inset-6 md:inset-8 bg-violet-500/20 rounded-full blur-3xl z-10" /> 
                    </motion.div> */}