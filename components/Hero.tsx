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
    profileImage = "/pasi.png", // Image in public/pasi.png
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
            className="relative min-h-[80vh] overflow-hidden flex items-center justify-center" // Changed: Reduced min-h-screen to min-h-[80vh] to prevent overflow on mobile
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] min-w-[320px]"> {/* Changed: Adjusted min-h-screen to min-h-[80vh], kept min-w-[320px] */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 min-h-[80vh] items-center justify-items-center"> {/* Changed: Adjusted min-h-screen to min-h-[80vh] */}
                    {/* Left Side: Text Content */}
                    <div className="pt-16 sm:pt-20 md:pt-0 max-w-lg sm:max-w-xl justify-self-center md:justify-self-start text-center md:text-left"> {/* Changed: Added md:text-left for desktop alignment */}
                        <motion.div
                            initial={{ translateY: 10, opacity: 0 }}
                            animate={isVisible ? { translateY: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5 }} // Changed: Reduced duration from 0.7 to 0.5 for faster mobile animation
                            className="mb-6 sm:mb-8 will-change-transform-opacity" // Added: will-change-transform-opacity for performance
                        >
                            <div className="inline-block rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-gray-300 border border-gray-700 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm bg-gray-900/30">
                                {greeting}
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ translateY: 10, opacity: 0 }}
                            animate={isVisible ? { translateY: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }} // Changed: Reduced duration from 0.7 to 0.5, added delay: 0.1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight text-white mb-6 sm:mb-8 will-change-transform-opacity" // Added: will-change-transform-opacity
                        >
                            <span className="relative">
                                Hi, I'm<br />{" "}
                                {/* <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent"> */}
                                <span className="text-blue-500">

                                    {name}
                                </span>
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ translateY: 10, opacity: 0 }}
                            animate={isVisible ? { translateY: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }} // Changed: Reduced duration from 0.7 to 0.5, adjusted delay to 0.2
                            className="will-change-contents" // Added: will-change-contents for TypewriterComponent performance
                        >
                            <TypewriterComponent
                                options={{
                                    strings: typewriterStrings,
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 100, // Changed: Increased deleteSpeed from 50 to 100 to reduce DOM updates
                                    delay: 150, // Changed: Increased delay from 100 to 150 to slow typing
                                    wrapperClassName:
                                        "text-lg sm:text-xl md:text-2xl font-medium text-blue-500",
                                }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ translateY: 10, opacity: 0 }}
                            animate={isVisible ? { translateY: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }} // Changed: Reduced duration from 0.7 to 0.5, adjusted delay to 0.3
                            className="mt-8 sm:mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6 will-change-transform-opacity" // Added: will-change-transform-opacity
                        >
                            <Button
                                size="lg"
                                asChild
                                className="group relative rounded-lg bg-blue-500 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-all duration-300 hover:scale-105 overflow-hidden"
                            >
                                <a href={ctaLink} aria-label="Get in Touch">
                                    <span className="relative z-10">Get in Touch</span>
                                    <div className="absolute inset-0 bg-blue-400 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Side: Circular Photo with Simplified Blur Effect */}
                    <motion.div
                        initial={{ translateX: 10, opacity: 0 }}
                        animate={isVisible ? { translateX: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }} // Changed: Reduced duration from 0.7 to 0.5
                        className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] justify-self-center md:justify-self-end mt-8 md:mt-0 will-change-transform-opacity" // Changed: Adjusted w-[300px] h-[300px] md:w-[450px] md:h-[450px] to w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] for mobile
                    >
                        <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-md rounded-full z-10" />
                        {/* <div className="absolute inset-8 md:inset-10 bg-blue-500/20 rounded-full blur-3xl z-20" /> */}

                        <div className="absolute inset-1 rounded-full border-2 border-dashed border-blue-400/100 animate-spin-wild z-10" />
                        {/* <div className="absolute inset-4 sm:inset-6 md:inset-8 bg-violet-500/20 rounded-full blur-3xl z-0" />  */}


                        <img
                            src={profileImage}
                            alt={profileImageAlt}
                            className="relative z-20 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] mx-auto object-contain drop-shadow-2xl" // Changed: Adjusted w-[250px] h-[250px] md:w-[400px] md:h-[400px] to w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;



