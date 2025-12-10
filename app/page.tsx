
"use client";

import { motion } from 'framer-motion';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import { StarsCanvas } from '@/components/StarBackground';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="relative">
      {/* Updated background to #0a1128 for consistency with Footer.tsx */}
      {/* <StarsCanvas /> */}
      <div className="space-y-16 sm:space-y-24 relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Added responsive padding to match Skills.tsx, Work.tsx, etc. */}
        <motion.div
          initial={{ opacity: 0, translateY: 4 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7 }}
        // Changed y to translateY for consistency with Skills.tsx animations
        >
          <Hero />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 4 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        // Changed y to translateY and adjusted duration to 0.7 for uniformity
        >
          <About />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 4 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        // Changed y to translateY and adjusted duration
        >
          <Services />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 4 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        // Changed y to translateY and adjusted duration
        >
          <Skills />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 4 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        // Changed y to translateY and adjusted duration
        >
          <Work />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 4 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        // Changed y to translateY and adjusted duration
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}