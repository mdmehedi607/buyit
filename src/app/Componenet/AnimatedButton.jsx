import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * ShimmerButton.jsx
 * A Next.js + Framer Motion button with a shimmering light sweep animation
 * that repeats every interval milliseconds.
 */

export default function AnimatedButton({
  label = "Click me",
  interval = 1000,
  onClick = () => {},
  className = "",
  ariaLabel,
}) {
  const shimmerRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      if (!shimmerRef.current) return;
      shimmerRef.current.style.transition = "none";
      shimmerRef.current.style.transform = "translateX(-150%)";
      requestAnimationFrame(() => {
        shimmerRef.current.style.transition = "transform 0.6s ease-in-out";
        shimmerRef.current.style.transform = "translateX(800%)";
      });
    };
    animate();
    const id = setInterval(animate, interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <motion.button
      aria-label={ariaLabel || label}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative overflow-hidden px-5 py-2 rounded-2xl font-medium shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300/40 bg-blue-600 text-white select-none ${className}`}
    >
      {label}
      <span
        ref={shimmerRef}
        className="absolute top-0 left-0 h-full w-1/8 bg-gradient-to-r from-white/10 to-transparent blur-sm skew-x-12 "
        style={{ pointerEvents: "none" }}
      ></span>
    </motion.button>
  );
}
