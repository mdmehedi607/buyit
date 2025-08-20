"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I track my order?",
    answer:
      "After placing an order, you can track it from your BuyIt account dashboard. You’ll also receive an email with the tracking link once your order is shipped.",
  },
  {
    question: "What is BuyIt’s return policy?",
    answer:
      "We offer a 7-day return policy for most products. Items must be unused and in their original packaging. Visit our Returns page for more details.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our support team through the Contact Us page or by emailing support@buyit.com. We usually respond within 24 hours.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, BuyIt ships worldwide. Shipping fees and delivery times vary depending on the destination country.",
  },
];

export default function HelpCenterPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          Help Center
        </motion.h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Welcome to the BuyIt Help Center. Here you’ll find answers to the most
          frequently asked questions and guidance on using our services.
        </p>

        {/* FAQ Section */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900 shadow-md"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-gray-600 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
