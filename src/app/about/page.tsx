"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Sparkles } from "lucide-react";
import { HoverCard } from "@/components/ui/HoverCard";

const values = [
  {
    icon: Sparkles,
    title: "Excellence",
    description:
      "We don't settle for good enough. Every line of code, every pixel, every interaction is crafted with obsessive attention to detail.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We're not just vendors—we're invested partners in your success. Your wins are our wins, and we're with you for the long haul.",
  },
  {
    icon: Target,
    title: "Impact",
    description:
      "We measure success by results, not hours. Every decision we make is driven by the impact it will have on your business.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "We stay at the cutting edge of technology, constantly exploring new tools and techniques to give you a competitive advantage.",
  },
];

const team = [
  {
    name: "Muhammad Zeeshan",
    role: "Founder & CEO",
    bio: "Full-stack architect with 10+ years building scalable systems for Fortune 500 companies.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Technical Team",
    role: "Engineering Excellence",
    bio: "A curated network of senior engineers, designers, and strategists who deliver exceptional results.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "AI Specialists",
    role: "Intelligence Division",
    bio: "Machine learning experts who transform complex data into actionable business intelligence.",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function AboutPage() {
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
              <span className="text-sm text-white/70">Who We Are</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">MZee</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              We&apos;re a premium digital agency that combines technical
              excellence with strategic thinking to build products that matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-white/70">
                  <p>
                    MZee Solutions was born from a simple observation: too many
                    businesses were being underserved by agencies that
                    prioritized volume over quality.
                  </p>
                  <p>
                    We decided to do things differently. Instead of taking on
                    dozens of projects, we focus on a select few—giving each
                    client the attention and expertise they deserve.
                  </p>
                  <p>
                    Today, we&apos;re proud to be the trusted technology partner
                    for ambitious companies who refuse to settle for mediocre
                    digital experiences.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2020", label: "Founded" },
                  { value: "50+", label: "Projects" },
                  { value: "15+", label: "Countries" },
                  { value: "100%", label: "Remote" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <HoverCard className="h-full text-center p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center mx-auto mb-4">
                    <value.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-white/60">{value.description}</p>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              The <span className="gradient-text">Team</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A curated collective of experts passionate about building
              exceptional digital products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <HoverCard className="h-full p-8">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-6 mx-auto`}
                  >
                    <span className="text-3xl font-bold text-white">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-neon-purple text-sm mb-4">{member.role}</p>
                    <p className="text-white/60 text-sm">{member.bio}</p>
                  </div>
                </HoverCard>
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
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-white/60 mb-8">
              Ready to work with a team that cares as much about your success as
              you do?
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
