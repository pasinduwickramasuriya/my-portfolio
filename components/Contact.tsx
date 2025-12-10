


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Icons = {
    Github: (props: any) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
    ),
    Linkedin: (props: any) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    ),
    Arrow: (props: any) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
    )
};

export default function Contact({ email = "pasindusadanjana17@gmail.com" }) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <section id="contact" className="relative bg-white text-black py-24 md:py-40 overflow-hidden border-t border-neutral-100">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Aggressive Call to Action */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 mb-8 bg-lime-100 px-4 py-2 rounded-full border border-lime-200"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                            </span>
                            <span className="text-sm font-black uppercase tracking-widest text-lime-800">Available for hire</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-8 leading-[0.8]"
                        >
                            Got an <br />
                            <span className="text-lime-500 relative">
                                Idea?
                                <svg className="absolute w-full h-4 -bottom-1 left-0 text-lime-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </motion.h2>

                        <p className="text-neutral-600 text-lg md:text-xl font-bold max-w-lg leading-relaxed border-l-4 border-black pl-6">
                            Let’s connect and create something seamless. I combine high-performance engineering with intentional UI design.
                        </p>
                    </div>

                    {/* Right Column: Interaction Hub */}
                    <div className="flex flex-col justify-center space-y-8">

                        {/* Interactive Email Card */}
                        <motion.button
                            onClick={handleCopy}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative w-full bg-neutral-50 border-2 border-neutral-100 p-8 rounded-[2.5rem] flex flex-col items-start gap-4 transition-all hover:border-black hover:bg-white overflow-hidden"
                        >
                            <span className="text-xs font-black uppercase tracking-widest text-neutral-400">Main Channel</span>
                            <h3 className="text-2xl md:text-4xl font-black tracking-tight text-black break-all">
                                {email}
                            </h3>

                            <div className="flex items-center gap-2 text-sm font-bold text-lime-600">
                                <span>Click to copy address</span>
                                <Icons.Arrow className="w-4 h-4" />
                            </div>

                            {/* Success Overlay */}
                            <AnimatePresence>
                                {isCopied && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="absolute inset-0 bg-lime-500 flex items-center justify-center gap-4 z-20"
                                    >
                                        <span className="text-black font-black uppercase text-2xl tracking-widest">Address Copied!</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        {/* Social Row */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: "GitHub", url: "https://github.com/pasinduwickramasuriya", icon: Icons.Github },
                                { name: "LinkedIn", url: "https://www.linkedin.com/in/pasindu-sadhanjana/", icon: Icons.Linkedin }
                            ].map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    className="group flex flex-col gap-4 p-8 border-2 border-neutral-100 rounded-[2.5rem] bg-neutral-50 hover:bg-black hover:text-white hover:border-black transition-all duration-500"
                                >
                                    <div className="flex justify-between items-center w-full">
                                        <link.icon className="w-8 h-8 group-hover:text-lime-500 transition-colors" />
                                        <Icons.Arrow className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-lime-500" />
                                    </div>
                                    <span className="font-black uppercase tracking-widest text-sm">{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modern Simple Footer info */}

            </div>
        </section>
    );
}