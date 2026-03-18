"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  intensity?: number;
}

export default function Magnetic({ children, intensity = 0.5 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Springs for smooth movement
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const positionX = useSpring(0, springConfig);
  const positionY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered || !ref.current) return;

      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();

      // Calculate distance from center to cursor
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);

      // Apply intensity
      positionX.set(middleX * intensity);
      positionY.set(middleY * intensity);
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      // Return to center when not hovering
      positionX.set(0);
      positionY.set(0);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered, intensity, positionX, positionY]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        x: positionX,
        y: positionY,
        display: 'inline-block',
      }}
    >
      {children}
    </motion.div>
  );
}
