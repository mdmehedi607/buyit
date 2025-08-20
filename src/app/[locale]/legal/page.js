"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-3xl border border-gray-200 dark:border-gray-700 p-8 md:p-12"
      >
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent"
        >
          Legal Information
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-10"
        >
          Last updated: August 19, 2025
        </motion.p>

        {/* Sections */}
        <div className="space-y-10">
          {/* Disclaimer */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-teal-400 mb-4">
              Disclaimer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The information provided on BuyIt is for general informational
              purposes only. We make no warranties of any kind regarding the
              accuracy, adequacy, or reliability of the information. Any action
              you take based on the information on our website is strictly at
              your own risk.
            </p>
          </motion.section>

          {/* Limitation of Liability */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-teal-400 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              BuyIt and its affiliates shall not be held responsible for any
              damages, including direct, indirect, incidental, or consequential
              damages, arising out of the use or inability to use our services,
              products, or website.
            </p>
          </motion.section>

          {/* Intellectual Property */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-teal-400 mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All content, trademarks, logos, and materials on BuyIt are the
              intellectual property of BuyIt or its licensors. Unauthorized use,
              reproduction, or distribution of our content is strictly
              prohibited without prior written permission.
            </p>
          </motion.section>

          {/* Governing Law */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-teal-400 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These legal terms shall be governed by and construed in accordance
              with the laws of your jurisdiction. Any disputes shall be subject
              to the exclusive jurisdiction of the courts located in your
              region.
            </p>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
