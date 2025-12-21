"use client";

import { motion } from "framer-motion";

export default function CookiesPage() {
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
              Cookie <span className="gradient-text">Policy</span>
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
              <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
              <p className="text-white/70 leading-relaxed">
                Cookies are small text files that are stored on your computer or
                mobile device when you visit a website. They are widely used to make
                websites work more efficiently and provide information to the owners
                of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
              <p className="text-white/70 leading-relaxed">
                We use cookies to understand how you use our website and to improve
                your experience. This includes personalizing content, providing
                social media features, and analyzing our traffic.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
              <ul className="text-white/70 leading-relaxed space-y-2">
                <li>
                  <strong className="text-white">Essential Cookies:</strong> Required
                  for the website to function properly.
                </li>
                <li>
                  <strong className="text-white">Analytics Cookies:</strong> Help us
                  understand how visitors interact with our website.
                </li>
                <li>
                  <strong className="text-white">Preference Cookies:</strong> Remember
                  your settings and preferences.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
              <p className="text-white/70 leading-relaxed">
                You can control and manage cookies in various ways. Please note that
                removing or blocking cookies may impact your user experience and
                parts of our website may no longer be fully accessible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-white/70 leading-relaxed">
                If you have any questions about our use of cookies, please contact
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
