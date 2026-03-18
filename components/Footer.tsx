"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/Magnetic";

interface SocialLink {
    name: string;
    url: string;
}

interface QuickLink {
    label: string;
    href: string;
}

const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/pasinduwickramasuriya" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pasindu-sadhanjana/" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
];

const quickLinks: QuickLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-white text-black pt-24 pb-12 overflow-hidden">
            <div className="max-w-[95%] mx-auto px-4 md:px-8">
                {/* Huge Brand Typography Centered */}
                <div className="w-full text-center md:text-left mb-20 md:mb-32">
                    <h2 className="text-[15vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase text-neutral-900 overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block"
                        >
                            Pasindu<span className="text-lime-500">.dev</span>
                        </motion.span>
                    </h2>
                </div>

                {/* 1. Main Grid - Centered on Mobile, Left on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24 text-center md:text-left">

                    {/* Brand Column */}
                    <div className="md:col-span-2 flex flex-col items-center md:items-start">
                        <p className="text-neutral-600 font-medium text-lg leading-relaxed max-w-sm">
                            Crafting digital experiences that merge technical precision with aesthetic excellence. Based in Sri Lanka, working globally.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-bold uppercase tracking-widest text-sm text-black mb-6">
                            Menu
                        </h4>
                        <ul className="space-y-4 w-full flex flex-col items-center md:items-start">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-3 text-base font-bold text-neutral-600 hover:text-black transition-colors"
                                    >
                                        {/* Dot Indicator */}
                                        <span className="w-2 h-2 rounded-full bg-neutral-200 group-hover:bg-lime-500 transition-colors" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-bold uppercase tracking-widest text-sm text-black mb-6">
                            Socials
                        </h4>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {socialLinks.map((social) => (
                                <Magnetic key={social.name} intensity={0.1}>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-6 py-3 rounded-full bg-neutral-50 text-xs font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.1)]"
                                    >
                                        {social.name}
                                    </a>
                                </Magnetic>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Static Signature & Bottom Bar */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 pt-8">

                    {/* Copyright */}
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-center md:text-left">
                        <span className="font-black text-xl tracking-tight">PASINDU W.</span>
                        <span className="hidden md:inline text-neutral-300">|</span>
                        <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                            © {new Date().getFullYear()} All Rights Reserved.
                        </span>
                    </div>

                    <Magnetic intensity={0.2}>
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-3 pl-6 pr-2 py-2 bg-neutral-50 rounded-full hover:bg-lime-400 transition-colors duration-500 shadow-sm hover:shadow-[0_0_20px_rgba(132,204,22,0.4)]"
                        >
                            <span className="text-xs font-bold uppercase tracking-wider group-hover:text-black">
                                Back to Top
                            </span>
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                            <svg
                                className="w-4 h-4 text-black transform group-hover:-translate-y-0.5 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            </div>
                        </button>
                    </Magnetic>
                </div>
            </div>
        </footer>
    );
}