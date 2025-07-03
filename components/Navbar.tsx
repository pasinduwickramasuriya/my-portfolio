
"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define constants within the file
const NAV_LINKS = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Services", link: "#services" },
    { title: "Skills", link: "#skills" },
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

// Define variants with correct typing
const linkVariants: Variants = {
    hidden: { opacity: 0, y: 6 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.06,
            duration: 0.2,
            ease: "easeOut",
        },
    }),
};

const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.15 + i * 0.06,
            duration: 0.2,
            ease: "easeOut",
        },
    }),
};

// Added: Define overlay variants for background blur animation
const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
    },
};

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Added: Full-screen overlay for background blur when mobile menu is open */}
            {isMobileMenuOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={overlayVariants}
                    className="fixed inset-0 bg-transparent backdrop-blur-md z-40"
                    onClick={() => setIsMobileMenuOpen(false)} // Added: Close menu when clicking overlay
                />
            )}
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed top-0 w-full bg-background/10 backdrop-blur-md z-50 px-4 sm:px-5 lg:px-7 h-[64px]  shadow-primary/10"
            >
                {/* Navbar Container */}
                <div className="max-w-5xl mx-auto h-full flex items-center justify-between ">
                    {/* Logo + Name */}
                    <Link href="#home" className="flex items-center group">
                        <span className="font-semibold text-lg lg:text-base lg:text-lg text-foreground ml-1.5 bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                            Pasindu.dev
                        </span>
                    </Link>

                    {/* Web Navbar */}
                    <div className="hidden md:flex w-[500px] items-center justify-center">
                        <div
                            className="flex items-center justify-between w-full px-3 py-1 rounded-full"
                            style={{
                                background: "conic-gradient(from 0deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1), rgba(96, 165, 250, 0.1), transparent)",
                                border: "1px solid rgba(59, 130, 246, 0.2)",
                                boxShadow: "0 2px 8px rgba(59, 130, 246, 0.05)",
                            }}
                        >
                            {NAV_LINKS.map((link, index) => (
                                <motion.div
                                    key={link.title}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    variants={linkVariants}
                                >
                                    <Button
                                        variant="ghost"
                                        asChild
                                        className="text-foreground text-sm hover:bg-primary/10 hover:text-blue-500 transition-all duration-200 rounded-full px-2.5 py-0.5"
                                    >
                                        <Link href={link.link}>{link.title}</Link>
                                    </Button>
                                </motion.div>
                            ))}
                            <motion.div
                                custom={NAV_LINKS.length}
                                initial="hidden"
                                animate="visible"
                                variants={linkVariants}
                            >
                                <Button
                                    variant="ghost"
                                    asChild
                                    className="text-foreground text-sm hover:bg-primary/10 hover:text-blue-500 transition-all duration-200 rounded-full px-2.5 py-0.5"
                                >
                                    <Link href={LINKS.sourceCode} target="_blank" rel="noreferrer noopener">
                                        Source
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Social Icons (Web) */}
                    <div className="hidden md:flex flex-row gap-2.5">
                        {SOCIALS.map(({ link, name, icon: Icon }, index) => (
                            <motion.div
                                key={name}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                variants={socialVariants}
                            >
                                <Link
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="text-foreground hover:text-blue-500 transition-all duration-200 hover:scale-125"
                                >
                                    <Icon className="h-5 w-5" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Hamburger Menu */}
                    <Button
                        variant="ghost"
                        className="md:hidden text-foreground text-2xl focus:outline-none hover:bg-primary/10 hover:text-blue-500 transition-all duration-200 rounded-full p-2" // Changed: Updated hover:text-pink-300 to hover:text-blue-500 for consistency with blue color scheme
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        ☰
                    </Button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className=" absolute top-[64px] left-0 w-full bg-background/90 backdrop-blur-md p-3 flex flex-col items-center md:hidden z-50" // Added: Explicit z-50 to ensure mobile menu is above overlay
                    >
                        {/* Logo + Name in Mobile Menu */}
                        <div className="flex items-center justify-center mb-3">
                            <span className="font-semibold text-base text-foreground ml-1.5 bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                                Pasindu.dev
                            </span>
                        </div>

                        {/* Links */}
                        <div className=" flex flex-col items-center gap-1.5 w-full">
                            {NAV_LINKS.map((link, index) => (
                                <motion.div
                                    key={link.title}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    variants={linkVariants}
                                    className="w-full"
                                >
                                    <Button
                                        variant="ghost"
                                        asChild
                                        className="w-full text-red-500 text-base hover:bg-primary/10 hover:text-blue-500 transition-all duration-200 rounded-full py-0.5"

                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Link href={link.link}>{link.title}</Link>
                                    </Button>
                                </motion.div>
                            ))}
                            <motion.div
                                custom={NAV_LINKS.length}
                                initial="hidden"
                                animate="visible"
                                variants={linkVariants}
                                className="w-full"
                            >
                                <Button
                                    variant="ghost"
                                    asChild
                                    // className=" w-full text-foreground text-base hover:bg-primary/10 hover:text-blue-500 transition-all duration-200 rounded-full py-0.5" 
                                     className="w-full text-red-500 text-base hover:bg-primary/10 hover:text-blue-500 transition-all duration-200 rounded-full py-0.5"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Link href={LINKS.sourceCode} target="_blank" rel="noreferrer noopener">
                                        Source
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center gap-4 mt-3">
                            {SOCIALS.map(({ link, name, icon: Icon }, index) => (
                                <motion.div
                                    key={name}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    variants={socialVariants}
                                >
                                    <Link
                                        href={link}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        // className="text-foreground hover:text-blue-500 transition-all duration-200 hover:scale-125"
                                         className="w-full text-red-500 text-base hover:bg-primary/10 hover:text-blue-500 transition-all duration-200 rounded-full py-0.5"
                                    >
                                        <Icon className="h-6 w-6" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.nav>
        </>
    );
}