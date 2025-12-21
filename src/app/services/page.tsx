"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Globe,
  Brain,
  TrendingUp,
  Code2,
  Database,
  Cloud,
  Smartphone,
  BarChart3,
  Search,
  Mail,
  Target,
  Megaphone,
} from "lucide-react";
import { HoverCard } from "@/components/ui/HoverCard";

const services = [
  {
    id: "web",
    title: "Web Development",
    subtitle: "Digital Experiences That Convert",
    description:
      "We build lightning-fast, scalable web applications that captivate users and drive business results. From complex SaaS platforms to elegant marketing sites.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      {
        icon: Code2,
        title: "Custom Development",
        description: "Tailored solutions built with Next.js, React, and modern frameworks.",
      },
      {
        icon: Database,
        title: "Backend Systems",
        description: "Robust APIs and databases designed for scale and performance.",
      },
      {
        icon: Cloud,
        title: "Cloud Architecture",
        description: "AWS, GCP, and Azure deployments with 99.99% uptime.",
      },
      {
        icon: Smartphone,
        title: "Responsive Design",
        description: "Pixel-perfect experiences across all devices and platforms.",
      },
    ],
  },
  {
    id: "ai",
    title: "AI Solutions",
    subtitle: "Intelligence That Transforms",
    description:
      "Harness the power of artificial intelligence to automate processes, gain insights, and create competitive advantages that were impossible before.",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    features: [
      {
        icon: Brain,
        title: "Machine Learning",
        description: "Custom ML models trained on your data for predictive analytics.",
      },
      {
        icon: Code2,
        title: "LLM Integration",
        description: "GPT-4, Claude, and custom AI assistants for your workflows.",
      },
      {
        icon: BarChart3,
        title: "Data Analytics",
        description: "Transform raw data into actionable business intelligence.",
      },
      {
        icon: Target,
        title: "Computer Vision",
        description: "Image recognition and processing for automation.",
      },
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    subtitle: "Growth That Scales",
    description:
      "Data-driven marketing strategies that amplify your brand, capture qualified leads, and maximize ROI across all digital channels.",
    icon: TrendingUp,
    gradient: "from-orange-500 to-red-500",
    features: [
      {
        icon: Search,
        title: "SEO & Content",
        description: "Dominate search rankings with strategic content optimization.",
      },
      {
        icon: Target,
        title: "Paid Advertising",
        description: "High-converting campaigns across Google, Meta, and LinkedIn.",
      },
      {
        icon: Mail,
        title: "Email Marketing",
        description: "Automated sequences that nurture leads into customers.",
      },
      {
        icon: Megaphone,
        title: "Brand Strategy",
        description: "Cohesive messaging that resonates with your audience.",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ServicesPage() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  return (
    <div className="relative min-h-screen">
      {/* Circuit Veins with Hover Trigger */}
      <svg 
        className={`fixed left-0 top-0 w-24 h-full text-purple-500 transition-opacity duration-300 ${
          hoveredSide === "left" ? "opacity-50" : "opacity-10"
        }`}
        viewBox="0 0 100 1000"
        fill="none"
        preserveAspectRatio="xMinYMin slice"
      >
        <path d="M0 0 V100 H30 V200 H50 V300 H20 V400 H40 V500 H10 V600 H35 V700 H25 V800 H45 V900 H15 V1000" stroke="currentColor" strokeWidth="1.5" />
        <path d="M0 50 H20 V150 H40 V250 H15 V350 H35 V450 H25 V550 H45 V650 H20 V750 H40 V850 H30 V950" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="100" r="4" fill="currentColor" className="animate-pulse" />
        <circle cx="50" cy="200" r="4" fill="currentColor" className="animate-pulse" />
        <circle cx="20" cy="300" r="4" fill="currentColor" className="animate-pulse" />
        <circle cx="40" cy="400" r="4" fill="currentColor" className="animate-pulse" />
        <circle cx="10" cy="500" r="4" fill="currentColor" className="animate-pulse" />
      </svg>

      <svg 
        className={`fixed right-0 top-0 w-24 h-full text-purple-500 transition-opacity duration-300 ${
          hoveredSide === "right" ? "opacity-50" : "opacity-10"
        }`}
        viewBox="0 0 100 1000"
        fill="none"
        preserveAspectRatio="xMaxYMin slice"
      >
        <path d="M100 0 V100 H70 V200 H50 V300 H80 V400 H60 V500 H90 V600 H65 V700 H75 V800 H55 V900 H85 V1000" stroke="currentColor" strokeWidth="1.5" />
        <path d="M100 50 H80 V150 H60 V250 H85 V350 H65 V450 H75 V550 H55 V650 H80 V750 H60 V850 H70 V950" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="70" cy="100" r="4" fill="currentColor" className="animate-pulse" />
        <circle cx="50" cy="200" r="4" fill="currentColor" className="animate-pulse" />
        <circle cx="80" cy="300" r="4" fill="currentColor" className="animate-pulse" />
        <circle cx="60" cy="400" r="4" fill="currentColor" className="animate-pulse" />
        <circle cx="90" cy="500" r="4" fill="currentColor" className="animate-pulse" />
      </svg>

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
              <span className="text-sm text-white/70">What We Do</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              End-to-end digital solutions that transform businesses. From
              concept to launch and beyond, we&apos;re your strategic technology
              partner.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-32"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                variants={itemVariants}
                className="scroll-mt-32"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                    >
                      <service.icon size={32} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-bold mb-2">{service.title}</h2>
                    <p className="text-neon-purple text-lg mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-white/60 text-lg mb-8">
                      {service.description}
                    </p>
                    <motion.a
                      href="/contact"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                    </motion.a>
                  </div>

                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                    onMouseEnter={() => setHoveredSide(index % 2 === 0 ? "right" : "left")}
                    onMouseLeave={() => setHoveredSide(null)}
                  >
                    {service.features.map((feature) => (
                      <HoverCard key={feature.title} className="p-5">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-20 flex items-center justify-center flex-shrink-0`}
                          >
                            <feature.icon size={20} className="text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">{feature.title}</h4>
                            <p className="text-sm text-white/60">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </HoverCard>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Work With <span className="gradient-text">Us</span>?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We&apos;re not just vendors—we&apos;re partners invested in your
              success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "50+",
                label: "Projects Delivered",
                description: "Across industries from fintech to healthcare",
              },
              {
                stat: "98%",
                label: "Client Satisfaction",
                description: "Based on post-project surveys",
              },
              {
                stat: "3x",
                label: "Average ROI",
                description: "Return on investment for our clients",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-2">
                  {item.stat}
                </div>
                <div className="text-lg font-semibold mb-2">{item.label}</div>
                <p className="text-sm text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a Project in <span className="gradient-text">Mind</span>?
            </h2>
            <p className="text-white/60 mb-8">
              Let&apos;s discuss how we can help you achieve your goals.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Conversation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
