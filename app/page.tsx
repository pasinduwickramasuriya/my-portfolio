
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
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Hero />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <About />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Services />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Skills />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Work />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}