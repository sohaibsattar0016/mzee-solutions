"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { BorderBeamCard } from "@/components/ui/BorderBeamCard";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

const valueProps = [
  {
    icon: Zap,
    title: "Speed",
    description:
      "Lightning-fast delivery without compromising quality. We ship production-ready solutions in weeks, not months.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Enterprise-grade security baked into every line of code. SOC2 compliant practices and battle-tested architectures.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description:
      "Built for growth from day one. Our solutions handle millions of users without breaking a sweat.",
    gradient: "from-blue-500 to-purple-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Home() {
  return (
    <div className="relative">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617]">
        <ParticleNetwork />

        {/* Circuit Lines - Left */}
        <svg className="absolute left-0 top-0 w-64 h-full text-white/10 hidden md:block" viewBox="0 0 200 600" fill="none" preserveAspectRatio="xMinYMid slice">
          <path d="M0 50 H60 V120 H90 V200 H40 V280 H80 V360 H30 V440 H70 V520 H50 V600" stroke="currentColor" strokeWidth="1" />
          <path d="M0 100 H40 V180 H70 V260 H25 V340 H55 V420 H35 V500" stroke="currentColor" strokeWidth="1" />
          <path d="M0 200 H30 V300 H50 V400 H20 V500" stroke="currentColor" strokeWidth="1" />
          <circle cx="60" cy="50" r="4" fill="#a855f7" className="animate-pulse" />
          <circle cx="90" cy="120" r="4" fill="#06b6d4" className="animate-pulse" />
          <circle cx="40" cy="200" r="4" fill="#a855f7" className="animate-pulse" />
          <circle cx="80" cy="280" r="4" fill="#06b6d4" className="animate-pulse" />
          <circle cx="30" cy="360" r="4" fill="#a855f7" className="animate-pulse" />
          <circle cx="70" cy="440" r="4" fill="#06b6d4" className="animate-pulse" />
          <circle cx="50" cy="520" r="4" fill="#a855f7" className="animate-pulse" />
        </svg>

        {/* Circuit Lines - Right */}
        <svg className="absolute right-0 top-0 w-64 h-full text-white/10 hidden md:block" viewBox="0 0 200 600" fill="none" preserveAspectRatio="xMaxYMid slice">
          <path d="M200 80 H140 V160 H110 V240 H160 V320 H120 V400 H170 V480 H130 V560" stroke="currentColor" strokeWidth="1" />
          <path d="M200 150 H160 V230 H130 V310 H175 V390 H145 V470 H165 V550" stroke="currentColor" strokeWidth="1" />
          <path d="M200 250 H170 V350 H150 V450 H180 V550" stroke="currentColor" strokeWidth="1" />
          <circle cx="140" cy="80" r="4" fill="#06b6d4" className="animate-pulse" />
          <circle cx="110" cy="160" r="4" fill="#a855f7" className="animate-pulse" />
          <circle cx="160" cy="240" r="4" fill="#06b6d4" className="animate-pulse" />
          <circle cx="120" cy="320" r="4" fill="#a855f7" className="animate-pulse" />
          <circle cx="170" cy="400" r="4" fill="#06b6d4" className="animate-pulse" />
          <circle cx="130" cy="480" r="4" fill="#a855f7" className="animate-pulse" />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="text-center lg:text-left">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-white/70">
                  Now accepting new projects
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                Engineering{" "}
                <span className="gradient-text">Intelligence</span>
                <span className="text-neon-purple">.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-white/60 max-w-xl mb-8 mx-auto lg:mx-0"
              >
                We craft premium digital experiences that transform businesses.
                From AI-powered solutions to stunning web applications, we
                deliver excellence at scale.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/contact">
                  <ShimmerButton className="w-full sm:w-auto">
                    <span className="flex items-center gap-2">
                      Start Your Project
                      <ArrowRight size={18} />
                    </span>
                  </ShimmerButton>
                </Link>
                <Link href="/blueprint">
                  <motion.button
                    className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Our Process
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                {/* Backlight Glow - Behind the Brain */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-purple-600 blur-[90px] opacity-50 pointer-events-none" />
                
                {/* Floating Brain with Anti-Gravity Animation */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Image
                    src="/hero-brain-removebg-preview.png"
                    alt="AI Brain Visualization"
                    width={500}
                    height={500}
                    unoptimized
                    className="drop-shadow-[0_0_60px_rgba(139,92,246,0.7)]"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Mobile Brain - Smaller version for mobile screens */}
            <motion.div
              variants={itemVariants}
              className="flex lg:hidden justify-center items-center mt-8"
            >
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-purple-600 blur-[60px] opacity-30 pointer-events-none" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Image
                    src="/hero-brain-removebg-preview.png"
                    alt="AI Brain Visualization"
                    width={250}
                    height={250}
                    unoptimized
                    className="drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
      </section>

      <section className="relative py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/40 text-sm uppercase tracking-wider mb-8"
          >
            Powered by cutting-edge technology
          </motion.p>
          <TechMarquee />
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">MZee</span>?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We combine technical excellence with strategic thinking to deliver
              solutions that drive real business results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <BorderBeamCard className="h-full">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center mb-6`}
                    >
                      <prop.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{prop.title}</h3>
                    <p className="text-white/60">{prop.description}</p>
                  </div>
                </BorderBeamCard>
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
            transition={{ duration: 0.6 }}
            className="glass-card p-12 md:p-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something{" "}
              <span className="gradient-text">Extraordinary</span>?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Let&apos;s discuss your vision and create a digital experience
              that sets you apart from the competition.
            </p>
            <Link href="/contact">
              <ShimmerButton>
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight size={18} />
                </span>
              </ShimmerButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/447861142053?text=Hy%20MZee%20Solutions%20i%20want%20the%20Website%2FAi%20integration%20quote"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </motion.a>
    </div>
  );
}
