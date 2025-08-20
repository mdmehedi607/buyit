"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "BuyIt is simply the best! The product quality is outstanding and delivery was faster than I expected.",
  },
  {
    name: "David Khan",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    review:
      "I always find great deals on BuyIt. Their customer support is very helpful and quick to respond.",
  },
  {
    name: "Maria Lopez",
    role: "Frequent Buyer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "The website is easy to use, and the checkout process is smooth. Highly recommend BuyIt to everyone!",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent"
        >
          What Our Customers Say
        </motion.h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          At BuyIt, we value our customers and their feedback. Here’s what some
          of our happy customers have to say about their experience.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-indigo-500"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">“{t.review}”</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
