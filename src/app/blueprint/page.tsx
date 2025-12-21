"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Code2,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { useState } from "react";

const blueprintSteps = [
  {
    id: 1,
    icon: Search,
    title: "Discovery",
    subtitle: "Week 1",
    description:
      "We dive deep into your business, understanding your goals, challenges, and vision. Through strategic workshops and research, we uncover the insights that will drive your project's success.",
    deliverables: [
      "Stakeholder interviews",
      "Competitive analysis",
      "User research synthesis",
      "Project roadmap",
    ],
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Strategy",
    subtitle: "Week 2",
    description:
      "Armed with insights, we craft a comprehensive strategy that aligns technology with your business objectives. Every decision is intentional, every feature purposeful.",
    deliverables: [
      "Technical architecture",
      "Feature prioritization",
      "UX wireframes",
      "Project timeline",
    ],
  },
  {
    id: 3,
    icon: Code2,
    title: "Development",
    subtitle: "Weeks 3-6",
    description:
      "Our elite engineers bring your vision to life with clean, scalable code. We follow agile methodologies with weekly demos to ensure alignment and rapid iteration.",
    deliverables: [
      "Sprint deliverables",
      "Weekly demos",
      "Code documentation",
      "Testing reports",
    ],
  },
  {
    id: 4,
    icon: Rocket,
    title: "Launch",
    subtitle: "Week 7",
    description:
      "We orchestrate a flawless launch with comprehensive testing, performance optimization, and deployment strategies that ensure your product hits the ground running.",
    deliverables: [
      "Performance audit",
      "Security review",
      "Deployment pipeline",
      "Launch checklist",
    ],
  },
  {
    id: 5,
    icon: HeartHandshake,
    title: "Growth",
    subtitle: "Ongoing",
    description:
      "Our partnership doesn't end at launch. We provide ongoing support, analytics insights, and strategic guidance to help you scale and evolve your digital presence.",
    deliverables: [
      "Analytics dashboard",
      "Monthly reviews",
      "Priority support",
      "Growth recommendations",
    ],
  },
];

export default function BlueprintPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen">
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="text-sm text-white/70">Our Process</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The <span className="gradient-text">Blueprint</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A proven 5-step methodology that transforms ideas into exceptional
              digital products. Every project follows this battle-tested
              framework.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple/50 via-neon-cyan/50 to-transparent hidden lg:block" />

            <div className="space-y-12 lg:space-y-24">
              {blueprintSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:order-2 lg:text-left" : "lg:text-right"
                    }`}
                  >
                    <motion.div
                      className={`glass-card p-8 cursor-pointer transition-all duration-300 ${
                        activeStep === step.id
                          ? "border-neon-purple shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                          : ""
                      }`}
                      onMouseEnter={() => setActiveStep(step.id)}
                      onMouseLeave={() => setActiveStep(null)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div
                        className={`flex items-center gap-4 mb-4 ${
                          index % 2 === 1 ? "" : "lg:justify-end"
                        }`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
                          <step.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                          <p className="text-neon-purple text-sm">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-white/60 mb-6">{step.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-white/80">
                          Deliverables:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div
                    className={`hidden lg:flex justify-center ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <motion.div
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center ${
                        activeStep === step.id
                          ? "bg-gradient-to-br from-neon-purple to-neon-cyan"
                          : "bg-dark-card border-2 border-dark-border"
                      }`}
                      animate={{
                        scale: activeStep === step.id ? 1.2 : 1,
                        boxShadow:
                          activeStep === step.id
                            ? "0 0 40px rgba(168, 85, 247, 0.5)"
                            : "0 0 0 rgba(168, 85, 247, 0)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span
                        className={`text-2xl font-bold ${
                          activeStep === step.id ? "text-white" : "text-white/60"
                        }`}
                      >
                        {step.id}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your <span className="gradient-text">Journey</span>?
            </h2>
            <p className="text-white/60 mb-8">
              Let&apos;s discuss how our blueprint can transform your vision into
              reality.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Discovery Call
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
