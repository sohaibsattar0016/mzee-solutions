"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function HoverCard({
  children,
  className = "",
  glowColor = "rgba(168, 85, 247, 0.5)",
}: HoverCardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl bg-dark-card/50 backdrop-blur-xl border border-dark-border p-6 transition-colors duration-300 ${className}`}
      whileHover={{
        scale: 1.05,
        borderColor: "#a855f7",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        boxShadow: "0 0 0 rgba(168, 85, 247, 0)",
      }}
      whileTap={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: `0 0 30px ${glowColor}, inset 0 0 30px ${glowColor}`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
