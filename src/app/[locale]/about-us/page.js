"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-3xl border border-gray-200 dark:border-gray-700 p-8 md:p-12"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent"
        >
          About BuyIt
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-10"
        >
          Learn more about who we are, what we do, and why we built BuyIt.
        </motion.p>

        {/* Sections */}
        <div className="space-y-10">
          <Section
            title="Our Story"
            content="BuyIt was founded with a simple idea: make online shopping easier, faster, and more reliable. We started as a small team with a big vision — to provide quality products at affordable prices with an exceptional shopping experience."
          />
          <Section
            title="Our Mission"
            content="At BuyIt, our mission is to empower people to shop smarter. We aim to offer a wide range of high-quality products, ensure transparency, and deliver excellent customer service every step of the way."
          />
          <Section
            title="Our Vision"
            content="We envision a world where online shopping is not just convenient but also trustworthy and enjoyable. BuyIt is committed to becoming a global leader in e-commerce by focusing on innovation and customer satisfaction."
          />
          <Section
            title="Our Values"
            content="Trust, quality, and customer-first service are at the core of everything we do. We believe in building long-term relationships with our customers by staying true to these values."
          />
          <Section
            title="Meet Our Team"
            content="Behind BuyIt is a passionate team of designers, developers, marketers, and customer support specialists who work tirelessly to bring you the best shopping experience."
          />
          <Section
            title="Contact Us"
            content="Got questions or feedback? We’d love to hear from you! Reach out to us at support@buyit.com or visit our Contact page."
          />
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Thank you for choosing BuyIt. We’re excited to serve you!
          </p>
          <a
            href="/"
            className="inline-block mt-4 px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md transition-all"
          >
            Back to Homepage
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Reusable Section Component
function Section({ title, content }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0"
    >
      <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
}
