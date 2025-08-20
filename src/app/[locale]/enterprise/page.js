"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, ShieldCheck, Users, Server } from "lucide-react";
import Link from 'next/link'

export default function EnterprisePage() {
  const features = [
    {
      title: "Scalable Infrastructure",
      description:
        "Handle millions of requests per day with our enterprise-grade infrastructure built for reliability and performance.",
      icon: <Server className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Advanced Security",
      description:
        "Protect your business data with top-level security features, compliance certifications, and 24/7 monitoring.",
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Dedicated Support",
      description:
        "Get priority access to our expert support team, available around the clock to ensure your success.",
      icon: <Users className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Custom Solutions",
      description:
        "We work closely with you to create tailored solutions that meet your business needs and goals.",
      icon: <Building2 className="w-8 h-8 text-pink-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-200 px-4 sm:px-6 py-10 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-3xl border border-gray-200 dark:border-gray-700 p-6 sm:p-10 md:p-16"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent"
        >
          Enterprise Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 text-sm sm:text-base md:text-lg max-w-3xl mx-auto"
        >
          Empower your organization with powerful, scalable, and secure
          enterprise-grade technology designed to accelerate growth.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="flex flex-col items-start bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-4">{feature.icon}</div>
              <h2 className="text-lg sm:text-xl font-bold mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Ready to Scale Your Business?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
            Contact our enterprise team today and discover how our solutions can
            empower your organization.
          </p>
         <Link href='contact-us'> <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Contact Enterprise Team
          </button></Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
