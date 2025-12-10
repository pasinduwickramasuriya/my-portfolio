"use client";

import { motion } from "framer-motion";

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
        <footer className="relative bg-white text-black pt-24 pb-12 overflow-hidden border-t-2 border-neutral-100">

            <div className="max-w-7xl mx-auto px-6">

                {/* 1. Main Grid - Centered on Mobile, Left on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24 text-center md:text-left">

                    {/* Brand Column */}
                    <div className="md:col-span-2 flex flex-col items-center md:items-start">
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">
                            Pasindu<span className="text-lime-500">.dev</span>
                        </h3>
                        <p className="text-neutral-600 font-medium text-base leading-relaxed max-w-sm">
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
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-5 py-2 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-bold uppercase tracking-wide hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Static Signature & Bottom Bar */}
                <div className="pt-12 border-t border-neutral-100 flex flex-col-reverse md:flex-row justify-between items-center gap-8">

                    {/* Copyright */}
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-center md:text-left">
                        <span className="font-black text-xl tracking-tight">PASINDU W.</span>
                        <span className="hidden md:inline text-neutral-300">|</span>
                        <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                            © {new Date().getFullYear()} All Rights Reserved.
                        </span>
                    </div>

                    {/* Scroll Top Button - Modern Pill */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 pl-5 pr-2 py-2 bg-neutral-100 rounded-full hover:bg-lime-400 transition-colors duration-300"
                    >
                        <span className="text-xs font-bold uppercase tracking-wider group-hover:text-black">
                            Back to Top
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
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
                </div>
            </div>
        </footer>
    );
}