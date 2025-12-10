

"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useMotionValue,
    useAnimationFrame,
    wrap,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import TypewriterComponent from "typewriter-effect";

interface HeroProps {
    name?: string;
    role?: string;
    imageSrc?: string;
}

// --- 1. The Moving Text Component (Adapted for White Background) ---
function ParallaxText({ children, baseVelocity = 100 }: { children: string; baseVelocity: number }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div style={{ x }} className="font-black uppercase text-9xl md:text-[12rem] lg:text-[16rem] leading-[0.85] tracking-tighter flex whitespace-nowrap">
                {/* Ghost Text (Lime) */}
                <span className="block mr-8 text-lime-400/100">{children} </span>
                {/* Main Text (Black) */}
                <span className="block mr-8 text-black">{children} </span>
                {/* Ghost Text (Gray) */}
                <span className="block mr-8 text-gray-200">{children} </span>
                {/* Main Text (Black) */}
                <span className="block mr-8 text-black">{children} </span>
            </motion.div>
        </div>
    );
}

function useVelocity(value: any) {
    const velocity = useMotionValue(0);
    return velocity;
}

// --- 2. Main Hero Component (White Theme) ---
export default function Hero({
    name = "PASINDU",
    imageSrc = "/pp1.png",
}: HeroProps) {

    return (
        <section className="relative h-screen w-full bg-white overflow-hidden flex flex-col justify-end">

            {/* BACKGROUND GRID (Darker gray for visibility on white) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"></div>



            {/* LAYER 1: THE MOVING TEXT */}
            <div className="absolute inset-0 flex flex-col justify-center z-0 opacity-70 select-none pointer-events-none">
                <div className="rotate-[-2deg] scale-110">
                    <ParallaxText baseVelocity={-1}>{name}</ParallaxText>
                </div>
                <div className="rotate-[2deg] scale-110 mt-[-20px] md:mt-[-60px]">
                    <ParallaxText baseVelocity={2}>WICKRAMASURIYA</ParallaxText>
                </div>
            </div>

            {/* LAYER 2: THE FULL IMAGE */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                // UPDATED CLASS:
                // h-[60vh] (Mobile) vs md:h-[90vh] (Desktop) -> Prevents image from being too huge on phones
                // pb-24 (Mobile) -> Pushes image up so it looks centered above the buttons
                // items-end -> Anchors image to the bottom of this defined height
                className="relative z-10 w-full h-[60vh] md:h-[90vh] flex items-end justify-center pointer-events-none pb-24 md:pb-0"
            >
                <img
                    src={imageSrc}
                    alt="Pasindu"
                    // Removed grayscale to make it pop on white, or keep it if you prefer the style
                    className="h-full w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                />

                {/* Gradient fade - Changed to WHITE to blend into the floor */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
            </motion.div>

            {/* LAYER 3: FOREGROUND CONTENT */}
            <div className="absolute bottom-10 left-0 w-full z-20 flex flex-col items-center gap-6 pb-8">

                {/* Glass Box - Light Mode */}
                <div className="bg-white/60 backdrop-blur-md border border-black/5 px-6 py-4 rounded-xl text-center shadow-lg">
                    <TypewriterComponent
                        options={{
                            strings: ["Frontend Engineer", "UI/UX Designer", "Fullstack Developer"],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: "text-xl md:text-2xl font-bold text-black", // Black text
                            cursorClassName: "text-lime-500" // Lime cursor
                        }}
                    />
                </div>

                <Button
                    className="rounded-full bg-lime-400 text-black hover:bg-lime-500 font-bold text-lg px-8 py-6 transition-transform hover:scale-105 shadow-xl shadow-lime-400/20"
                >
                    <a href="#contact">Let's Create Magic</a>
                </Button>
            </div>

        </section>
    );
}