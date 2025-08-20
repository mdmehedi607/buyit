"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

export default function StatusPage() {
  const services = [
    {
      name: "Website",
      status: "operational",
      description: "Our website is fully functional and available.",
    },
    {
      name: "API",
      status: "degraded",
      description: "API is experiencing slower response times.",
    },
    {
      name: "Payment Gateway",
      status: "down",
      description: "Payments are temporarily unavailable.",
    },
    {
      name: "Email Service",
      status: "operational",
      description: "Emails are being delivered without delays.",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="text-green-500 w-6 h-6" />;
      case "down":
        return <XCircle className="text-red-500 w-6 h-6" />;
      case "degraded":
        return <AlertTriangle className="text-yellow-500 w-6 h-6" />;
      default:
        return <CheckCircle className="text-gray-400 w-6 h-6" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "operational":
        return "Operational";
      case "down":
        return "Down";
      case "degraded":
        return "Degraded";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-200 px-4 sm:px-6 py-10 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-3xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 md:p-12"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent"
        >
          System Status
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-8 text-sm sm:text-base"
        >
          Last updated: August 19, 2025
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="flex flex-col justify-between bg-gray-50 dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-3">
                <h2 className="text-lg sm:text-xl font-bold mb-1">
                  {service.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                {getStatusIcon(service.status)}
                <span className="font-semibold text-sm sm:text-base">
                  {getStatusText(service.status)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
