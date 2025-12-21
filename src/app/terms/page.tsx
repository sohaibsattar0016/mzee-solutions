"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen">
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-white/60">Last updated: December 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-white/70 leading-relaxed">
                By accessing or using our services, you agree to be bound by these
                Terms of Service. If you disagree with any part of the terms, you
                may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services</h2>
              <p className="text-white/70 leading-relaxed">
                MZee Solutions provides web development, AI solutions, and digital
                marketing services. The specific scope, deliverables, and timeline
                for each project will be outlined in a separate project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
              <p className="text-white/70 leading-relaxed">
                Upon full payment, clients receive full ownership of all custom code
                and designs created specifically for their project. We retain the
                right to showcase completed work in our portfolio unless otherwise
                agreed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="text-white/70 leading-relaxed">
                Payment terms will be specified in individual project agreements.
                Typically, we require a deposit before work begins, with remaining
                payments tied to project milestones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
              <p className="text-white/70 leading-relaxed">
                MZee Solutions shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your use
                of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Contact</h2>
              <p className="text-white/70 leading-relaxed">
                For any questions regarding these Terms of Service, please contact
                us at{" "}
                <a
                  href="mailto:hello@mzee.solutions"
                  className="text-neon-purple hover:underline"
                >
                  hello@mzee.solutions
                </a>
                .
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
