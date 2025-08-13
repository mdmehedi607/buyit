'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaLinkedinIn,FaGithub,FaTwitter  } from "react-icons/fa";
import Link from "next/link";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  const items = [
    { icon: <FaTwitter size={20} />, label: 'Twitter', bg:'bg-blue-500', href:'/'},
    { icon: <FaGithub size={25} />, label: 'Github', bg:'bg-neutral-600',href:'https://github.com/mdmehedi607' },
    { icon: <FaLinkedinIn  size={20} />, label: 'LinkedIn', bg:'bg-blue-600', href:'https://www.linkedin.com/in/sm-mehedi-hasan-developer' },
     { icon: <FaFacebookF size={20} />, label: 'Facebook', bg:'bg-blue-500', href:'https://www.facebook.com/s.m.mehedi.hasan.668909/' },
     { icon: <FaWhatsapp size={25}/>, label: 'Whatsapp', bg:'bg-green-500', href:'https://wa.me/8801954801914?text=Hi%20Mehedi%2C%20I%20came%20from%20your%20website!'},
  ];

  return (
    <div className="fixed bottom-10 right-10 z-50 w-[44px] h-[44px] md:w-[50px] md:h-[50px] ">
      <div className="relative w-full h-full">
        {/* Radial buttons */}
        {items.map((item, i) => {
          const radius = 80;
           const startAngle = 150;
            const endAngle = 300;
            const totalItems = items.length;
          const angle = startAngle + ((endAngle - startAngle) / (totalItems - 1)) * i;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
           <Link href={item.href} key={i}>
            <motion.button
              
              className={`absolute  w-10 h-10 rounded-full ${item.bg} text-white flex items-center justify-center shadow-md cursor-pointer`}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{
                opacity: open ? 1 : 0,
                x: open ? x : 0,
                y: open ? y : 0,
              }}
              transition={{ type: 'spring', stiffness:300, damping: 15 }}
              title={item.label}
            >
              {item.icon}
            </motion.button>
           </Link>
          );
        })}

        {/* Main Button */}
        <button
          className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-blue-600 dark:bg-neutral-400 text-white dark:text-gray-800 flex items-center justify-center shadow-xl z-10  absolute bottom-0 right-0 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Plus size={24} />
          </motion.div>
        </button>
      </div>
    </div>
  );
}


