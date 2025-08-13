"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center text-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover scale-110"
            src="/videos/intro.mp4"
            autoPlay
            muted
            loop
          ></video>
          
 
          {/* Brand Logo Intro */}
          <motion.div
            className="absolute z-20 flex flex-col items-center gap-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
         
              <Image src='/images/aqua.png' width={220} height={180} alt='BuyIT' className='w-40 h-15'/>
              {/* Shine Effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: "-150%" }}
                animate={{ x: "150%" }}
                transition={{ delay: 1, duration: 1 }}
              />
       
            <motion.p
              className="text-sm md:text-lg text-gray-300 uppercase tracking-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
                BUY BEST PRODUCTS
              </span>
            </motion.p>
          </motion.div>

          {/* Left Door */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 bg-white "
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ delay: 2.8, duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/10 to-transparent blur-sm  "></div>
          </motion.div>

          {/* Right Door */}
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 bg-white  "
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ delay: 2.8, duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/10 to-transparent blur-sm"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}