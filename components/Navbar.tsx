"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

// --- CONSTANTS ---
const NAV_LINKS = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Services", link: "#services" },
    { title: "Work", link: "#work" },
    { title: "Contact", link: "#contact" },
];

const SOCIALS = [
    {
        name: "GitHub",
        link: "https://github.com/pasinduwickramasuriya",
        icon: (props: any) => (
            <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/pasindu-sadhanjana/",
        icon: (props: any) => (
            <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
];

// --- ADVANCED ANIMATIONS ---
const navContainerVars: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "circOut",
            staggerChildren: 0.1,
        },
    },
};

const navItemVars: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
};

const mobileMenuVars: Variants = {
    initial: { 
        clipPath: "circle(0% at top right)",
    },
    animate: {
        clipPath: "circle(150% at top right)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Webflow-style explosive circular reveal
    },
    exit: {
        clipPath: "circle(0% at top right)",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    }
};

const mobileLinkVars: Variants = {
    initial: { y: 60, opacity: 0, rotate: 5, scale: 0.9 },
    open: {
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { ease: [0.16, 1, 0.3, 1], duration: 0.8 } // Deep ease out
    }
};

const containerVars: Variants = {
    initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.1 } }
};

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <motion.nav
                initial="hidden"
                animate="visible"
                variants={navContainerVars}
                className="fixed top-0 w-full z-50 transition-all duration-500 py-6 pointer-events-none"
            >
                <div className="max-w-[95%] mx-auto px-4 md:px-8 flex items-center justify-between">

                    {/* --- LOGO (Animated Hover) --- */}
                    <div className="pointer-events-auto bg-white/60 backdrop-blur-lg px-4 py-2 rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-white/40">
                        <Link href="#home" className="group relative z-50">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="font-black text-2xl tracking-tighter text-black uppercase flex items-center gap-1"
                            >
                                Pasindu
                                <motion.span
                                    animate={{ rotate: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                                    className="text-lime-500 text-3xl leading-none"
                                >
                                    .
                                </motion.span>
                                <span className="text-lime-500 font-bold text-lg">dev</span>
                            </motion.div>
                        </Link>
                    </div>

                    {/* --- UNIVERSAL HAMBURGER BUTTON (Magnetic) --- */}
                    <div className="pointer-events-auto bg-white/60 backdrop-blur-lg p-2 rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-white/40">
                        <Magnetic intensity={0.2}>
                            <button
                                onClick={toggleMenu}
                                className="relative z-50 flex items-center justify-center p-4 rounded-full bg-neutral-900 border-none group hover:bg-black transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.1)]"
                            >
                                <div className="relative flex flex-col justify-center gap-[6px] w-[24px] h-[24px]">
                                    <motion.span
                                        animate={isMobileMenuOpen ? { rotate: 45, y: 8, backgroundColor: "#fff" } : { rotate: 0, y: 0, backgroundColor: "#fff" }}
                                        className="block w-full h-[2px] origin-center transition-all duration-300"
                                    />
                                    <motion.span
                                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: "#fff" }}
                                        className="block w-full h-[2px] transition-all duration-300"
                                    />
                                    <motion.span
                                        animate={isMobileMenuOpen ? { rotate: -45, y: -8, backgroundColor: "#fff" } : { rotate: 0, y: 0, backgroundColor: "#fff" }}
                                        className="block w-[70%] group-hover:w-full h-[2px] origin-center transition-all duration-300 ml-[30%] group-hover:ml-0"
                                    />
                                </div>
                            </button>
                        </Magnetic>
                    </div>
                </div>
            </motion.nav>

            {/* --- FULL SCREEN MOBILE MENU --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        variants={mobileMenuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center"
                    >
                        {/* Decorative Background Pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col gap-6 md:gap-8 text-center md:text-left relative z-10 w-full max-w-4xl px-8"
                        >
                            <span className="text-neutral-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Navigation</span>
                            {NAV_LINKS.map((link) => (
                                <div key={link.title} className="overflow-hidden">
                                    <motion.div variants={mobileLinkVars}>
                                        <Link
                                            href={link.link}
                                            onClick={toggleMenu}
                                            className="group relative inline-block text-6xl md:text-[8vw] leading-[0.9] font-black text-black uppercase tracking-tighter transition-colors"
                                        >
                                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">{link.title}</span>
                                            {/* Expansive Background shape filling behind text on hover */}
                                            <span className="absolute inset-x-[-1rem] bottom-0 h-0 bg-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:h-full -z-0" />
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}

                            {/* Socials Divider */}
                            <motion.div variants={mobileLinkVars} className="h-px w-full bg-neutral-200 my-8"></motion.div>

                            {/* Massive Socials Row */}
                            <div className="overflow-hidden">
                                <motion.div variants={mobileLinkVars} className="flex gap-10 justify-center md:justify-start">
                                    {SOCIALS.map(({ link, icon: Icon, name }, i) => (
                                        <Magnetic key={i} intensity={0.2}>
                                            <Link href={link} target="_blank" className="group flex items-center gap-3 text-neutral-500 hover:text-black transition-colors duration-500">
                                                <div className="p-4 rounded-full bg-neutral-50 group-hover:bg-lime-400 group-hover:shadow-[0_0_30px_rgba(132,204,22,0.4)] transition-all duration-500">
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <span className="text-sm font-bold uppercase tracking-widest hidden md:inline">{name}</span>
                                            </Link>
                                        </Magnetic>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Footer Info in Menu */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.5 } }}
                            className="absolute bottom-10 text-neutral-400 text-xs font-mono uppercase tracking-widest"
                        >
                            Pasindu.dev © 2025
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}