"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "BuyIt collects personal information such as your name, email address, phone number, billing/shipping address, and payment details when you place an order or create an account. We also collect non-personal data like device information and browsing behavior.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use your data to process orders, deliver products, improve our services, personalize user experience, and communicate with you regarding promotions, updates, or support queries.",
    },
    {
      title: "Cookies & Tracking",
      content:
        "Our website uses cookies and similar technologies to improve site functionality, analyze traffic, and deliver targeted advertisements. You can disable cookies in your browser settings, but some features may not function properly.",
    },
    {
      title: "Data Sharing",
      content:
        "We never sell your personal information. However, we may share data with trusted partners (e.g., payment processors, delivery services) strictly for order fulfillment and service improvement.",
    },
    {
      title: "Data Security",
      content:
        "We implement strict security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no online method is 100% secure.",
    },
    {
      title: "Your Rights",
      content:
        "You can request to update, delete, or access your personal data anytime by contacting our support team. You also have the right to opt-out of marketing communications.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please contact us at support@buyit.com.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent"
        >
          Privacy Policy
        </motion.h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          At BuyIt, we value your privacy and are committed to protecting your
          personal information. Please read this Privacy Policy carefully to
          understand how we collect, use, and safeguard your data.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-900 shadow-md rounded-2xl border border-gray-200 dark:border-gray-700 p-6"
            >
              <h2 className="text-xl font-bold mb-3 text-indigo-600 dark:text-teal-400">
                {sec.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{sec.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400"
        >
          Last updated: August 2025
        </motion.p>
      </motion.div>
    </div>
  );
}
