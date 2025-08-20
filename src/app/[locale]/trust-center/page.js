"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileCheck, UserCheck } from "lucide-react";

export default function TrustCenterPage() {
  const trustItems = [
    {
      id: 1,
      title: "Data Security",
      description:
        "We use industry-leading encryption and secure servers to protect customer data and ensure privacy.",
      icon: <Lock className="w-10 h-10 text-purple-500 dark:text-purple-400" />,
    },
    {
      id: 2,
      title: "Compliance",
      description:
        "Our systems follow GDPR, CCPA, and ISO standards to keep our services legally compliant and trustworthy.",
      icon: (
        <FileCheck className="w-10 h-10 text-green-500 dark:text-green-400" />
      ),
    },
    {
      id: 3,
      title: "Transparency",
      description:
        "We maintain transparency in our policies, data practices, and security updates for complete trust.",
      icon: (
        <ShieldCheck className="w-10 h-10 text-blue-500 dark:text-blue-400" />
      ),
    },
    {
      id: 4,
      title: "User Protection",
      description:
        "We actively monitor threats and provide tools to protect user accounts from unauthorized access.",
      icon: (
        <UserCheck className="w-10 h-10 text-pink-500 dark:text-pink-400" />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-200 px-4 sm:px-6 py-12 mt-15">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Trust Center
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          At <span className="font-semibold">BuyIt</span>, trust and security
          are at the heart of everything we do. Explore our security measures,
          compliance standards, and data protection practices.
        </p>

        {/* Trust Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h2 className="text-lg sm:text-xl font-bold mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
