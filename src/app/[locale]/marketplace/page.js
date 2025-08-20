"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";

export default function MarketplacePage() {
  const listings = [
    {
      id: 1,
      title: "Premium Headphones",
      price: "$120",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1580894894513-541e068a3a60?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Smartwatch Pro",
      price: "$250",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Wireless Speakers",
      price: "$180",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1599669454699-245b43e8e43b?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Gaming Laptop",
      price: "$1,500",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1587202372775-98927a7d6fbc?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      title: "Professional Camera",
      price: "$900",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1519183071298-a2962be96c83?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      title: "Drone Explorer",
      price: "$700",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-200 px-4 sm:px-6 py-10 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Marketplace Listings
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10 text-sm sm:text-base md:text-lg">
          Discover top-rated products and services from trusted sellers.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {listings.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-56 md:h-60">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white dark:bg-gray-900 px-2 py-1 rounded-md text-xs font-medium shadow">
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {item.price}
                </p>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span>{item.rating}</span>
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow hover:scale-105 transition-transform">
                  <ShoppingBag className="w-4 h-4" />
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
