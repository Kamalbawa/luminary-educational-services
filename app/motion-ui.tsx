"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function MotionPage({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
        aria-hidden="true"
      />
      {children}
    </>
  );
}

type MotionSectionProps = ComponentPropsWithoutRef<typeof motion.section>;

export function MotionSection({ children, ...props }: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -7% 0px" }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
