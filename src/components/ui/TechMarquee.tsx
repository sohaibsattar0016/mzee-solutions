"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "Next.js", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "AWS", icon: "☁️" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "GraphQL", icon: "◈" },
  { name: "Redis", icon: "🔴" },
];

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-12">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-bg to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-bg to-transparent z-10" />
      
      <div className="flex">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 whitespace-nowrap hover:border-neon-purple/50 transition-colors"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-lg font-medium text-white/80">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
