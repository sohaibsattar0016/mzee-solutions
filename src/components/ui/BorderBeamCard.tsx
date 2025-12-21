"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface BorderBeamCardProps {
  children: ReactNode;
  className?: string;
}

export function BorderBeamCard({ children, className = "" }: BorderBeamCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-2xl bg-dark-card/50 backdrop-blur-xl p-6 overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 rounded-2xl">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect
            width="100%"
            height="100%"
            fill="none"
            rx="16"
            ry="16"
            stroke="url(#beam-gradient)"
            strokeWidth="2"
            strokeDasharray="200 800"
            strokeLinecap="round"
            className="animate-border-beam"
            style={{
              animation: "dash 4s linear infinite",
            }}
          />
          <defs>
            <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
              <stop offset="51%" stopColor="#06b6d4" stopOpacity="1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <style jsx>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
      <div className="relative z-10 border border-dark-border rounded-2xl p-6 bg-dark-card/30">
        {children}
      </div>
    </motion.div>
  );
}
