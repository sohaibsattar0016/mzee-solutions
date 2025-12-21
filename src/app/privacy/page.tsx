"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
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
              Privacy <span className="gradient-text">Policy</span>
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
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-white/70 leading-relaxed">
                We collect information you provide directly to us, such as when you
                fill out our contact form, use our AI intake terminal, or
                communicate with us via email. This may include your name, email
                address, company name, and project details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-white/70 leading-relaxed">
                We use the information we collect to provide, maintain, and improve
                our services, to communicate with you about projects and services,
                and to respond to your inquiries and requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="text-white/70 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties. We may share information with trusted
                service providers who assist us in operating our website and
                conducting our business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-white/70 leading-relaxed">
                We implement appropriate security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or
                destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
              <p className="text-white/70 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact
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
