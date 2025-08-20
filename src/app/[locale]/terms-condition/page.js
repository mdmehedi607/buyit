"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-3xl border border-gray-200 dark:border-gray-700 p-8 md:p-12"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent"
        >
          Terms & Conditions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-10"
        >
          Last updated: August 1, 2025
        </motion.p>

        {/* Sections */}
        <div className="space-y-10">
          <Section
            title="1. Introduction"
            content="Welcome to our website. These Terms & Conditions outline the rules and regulations for the use of our platform. By accessing this site, you accept these Terms in full."
          />
          <Section
            title="2. User Responsibilities"
            content="Users must provide accurate information, keep their accounts secure, and avoid any actions that may disrupt or misuse our services. Any illegal, abusive, or harmful activity will result in account suspension."
          />
          <Section
            title="3. Intellectual Property"
            content="All content, logos, graphics, and software on this website are owned by us and are protected by intellectual property laws. You may not copy, distribute, or reuse our content without prior permission."
          />
          <Section
            title="4. Privacy Policy"
            content="We respect your privacy. All personal data provided will be handled according to our Privacy Policy. By using our services, you consent to our collection and use of your information."
          />
          <Section
            title="5. Payments & Refunds"
            content="All purchases made through our platform are subject to our payment terms. Fees are non-refundable unless otherwise stated or required by law."
          />
          <Section
            title="6. Limitation of Liability"
            content="We are not liable for any indirect, incidental, or consequential damages that may occur through your use of our services. Use of this website is at your own risk."
          />
          <Section
            title="7. Governing Law"
            content="These Terms are governed by the laws of your country of residence. Any disputes shall be resolved in accordance with applicable legal processes."
          />
          <Section
            title="8. Changes to Terms"
            content="We may update these Terms at any time. Significant changes will be notified via our website or email. Continued use of our services means you accept the revised Terms."
          />
          <Section
            title="9. Contact Us"
            content="If you have any questions regarding these Terms, please contact us at support@example.com."
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
            By continuing to use our services, you agree to these Terms.
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



