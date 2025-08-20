"use client";

import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Gadgets You Must Have in 2025",
    excerpt:
      "Discover the latest must-have gadgets that can make your life easier and more fun this year.",
    date: "August 10, 2025",
    author: "John Doe",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "How to Save Money When Shopping Online",
    excerpt:
      "Smart tips and tricks to help you get the best deals and save money while shopping online.",
    date: "August 14, 2025",
    author: "Sarah Smith",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "The Future of E-commerce",
    excerpt:
      "Explore how artificial intelligence and virtual reality are shaping the future of online shopping.",
    date: "August 18, 2025",
    author: "Michael Lee",
    image:
      "https://images.unsplash.com/photo-1556742400-b5b7c5121f43?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent"
        >
          BuyIt Blog
        </motion.h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Read the latest articles, guides, and updates from BuyIt. Stay
          informed with trends and tips to make your shopping smarter.
        </p>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-900 shadow-md rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-indigo-600 dark:text-teal-400">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
