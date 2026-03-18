"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth out the mouse following using framer-motion springs
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(0, springConfig);
  const cursorYSpring = useSpring(0, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorXSpring.set(e.clientX - 12); // Center the 24px cursor
      cursorYSpring.set(e.clientY - 12);
    };

    const handleMouseOver = (e: MouseEvent) => {
        // Tag interactive elements to expand cursor
        const target = e.target as HTMLElement;
        const isInteractive = 
            target.tagName.toLowerCase() === 'a' ||
            target.tagName.toLowerCase() === 'button' ||
            target.closest('a') ||
            target.closest('button');

        setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorXSpring, cursorYSpring]);

  // Hide cursor on mobile/touch devices completely via CSS classes, but we can also return null if window size is small
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDesktop) return null;

  return (
    <motion.div
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      initial={{ opacity: 0 }}
      animate={{ 
          opacity: 1,
          scale: isHovering ? 2.5 : 1, // Grow when over interactive stuff
          backgroundColor: isHovering ? "rgba(115, 115, 115, 0.1)" : "rgba(115, 115, 115, 0.5)", // Neutral 500
          mixBlendMode: "normal",
          backdropFilter: isHovering ? "blur(4px)" : "none",
          border: isHovering ? "1px solid rgba(115, 115, 115, 0.5)" : "none"
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]"
    />
  );
}
