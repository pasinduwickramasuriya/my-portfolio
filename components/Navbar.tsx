"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- CONSTANTS ---
const NAV_LINKS = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Services", link: "#services" },
    { title: "Work", link: "#work" },
    { title: "Contact", link: "#contact" },
];

const LINKS = {
    sourceCode: "https://github.com/pasinduwickramasuriya",
};

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
    initial: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
    animate: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transition: { duration: 0.6, ease: [0.87, 0, 0.13, 1] } // Custom bezier for snappy feel
    },
    exit: {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        transition: { duration: 0.6, ease: [0.87, 0, 0.13, 1] }
    }
};

const mobileLinkVars: Variants = {
    initial: { y: 40, opacity: 0, rotate: 5 },
    open: {
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: { ease: "easeOut", duration: 0.4 }
    }
};

const containerVars: Variants = {
    initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.2, staggerChildren: 0.1 } }
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
                className={`fixed top-0 w-full z-50 h-[80px] transition-all duration-500 ${scrolled || isMobileMenuOpen
                    ? "bg-white/90 backdrop-blur-xl border-b border-neutral-200 shadow-sm"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

                    {/* --- LOGO (Animated Hover) --- */}
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
                            <span className="text-lime-500 font-bold text-lg group-hover:underline decoration-2 underline-offset-4 transition-all">dev</span>
                        </motion.div>
                    </Link>

                    {/* --- DESKTOP NAV (The "Pill" Container) --- */}
                    <div className="hidden md:flex items-center gap-8">
                        <motion.div
                            className="relative flex items-center px-2 py-2 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-md shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)]"
                        >
                            {NAV_LINKS.map((link, index) => (
                                <Link
                                    key={link.title}
                                    href={link.link}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="relative px-5 py-2 text-sm font-bold uppercase tracking-wide text-neutral-600 hover:text-black transition-colors z-10"
                                >
                                    {/* The Text */}
                                    {link.title}

                                    {/* The Floating Background Pill */}
                                    {hoveredIndex === index && (
                                        <motion.div
                                            layoutId="navbar-hover"
                                            className="absolute inset-0 bg-neutral-100 rounded-full -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </motion.div>

                        {/* Desktop Socials & CTA */}
                        <div className="flex items-center gap-4">
                            {SOCIALS.map(({ link, icon: Icon }, i) => (
                                <motion.div key={i} variants={navItemVars} whileHover={{ y: -3 }}>
                                    <Link
                                        href={link}
                                        target="_blank"
                                        className="text-neutral-400 hover:text-black transition-colors"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div variants={navItemVars}>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-2 border-black bg-transparent text-black hover:bg-black hover:text-white rounded-full px-6 py-5 uppercase font-bold text-xs tracking-widest transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                >
                                    <Link href={LINKS.sourceCode} target="_blank">Source</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </div>

                    {/* --- MOBILE HAMBURGER (Animated) --- */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden relative z-50 flex flex-col justify-center gap-1.5 p-2 w-10 h-10 group"
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="block w-8 h-0.5 bg-black origin-center transition-all duration-300"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-8 h-0.5 bg-black transition-all duration-300"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="block w-6 group-hover:w-8 h-0.5 bg-black origin-center transition-all duration-300 ml-auto group-hover:ml-0"
                        />
                    </button>
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
                            className="flex flex-col gap-6 text-center relative z-10"
                        >
                            {NAV_LINKS.map((link) => (
                                <div key={link.title} className="overflow-hidden">
                                    <motion.div variants={mobileLinkVars}>
                                        <Link
                                            href={link.link}
                                            onClick={toggleMenu}
                                            className="group relative text-6xl font-black text-black uppercase tracking-tighter transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-lime-500 hover:to-lime-600"
                                        >
                                            {link.title}
                                            {/* Hover underline */}
                                            <span className="absolute -bottom-2 left-0 w-0 h-2 bg-lime-500 transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}

                            {/* Mobile Socials */}
                            <div className="overflow-hidden mt-8">
                                <motion.div variants={mobileLinkVars} className="flex gap-8 justify-center">
                                    {SOCIALS.map(({ link, icon: Icon }, i) => (
                                        <Link key={i} href={link} target="_blank" className="text-neutral-400 hover:text-lime-500 transition-colors transform hover:scale-125 duration-300">
                                            <Icon className="w-8 h-8" />
                                        </Link>
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