"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, Droplets, Zap } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Scuba Hood",
    description: "Premium athletic gear",
    icon: ShoppingBag,
    color: "from-[#03fd1c] to-emerald-600",
    url: "https://spectatorsport.com",
  },
  {
    id: 2,
    name: "LOK1N Energy",
    description: "Non-caffeinated focus drink",
    icon: Droplets,
    color: "from-cyan-400 to-blue-600",
    url: "https://spectatorsport.com",
  },
  {
    id: 3,
    name: "ST4CKT Protein",
    description: "30-serving protein shots",
    icon: Zap,
    color: "from-orange-400 to-red-600",
    url: "https://spectatorsport.com",
  },
];

export default function ProductSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pt-8 pb-12 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-center mb-8"
      >
        <span className="text-white">OUR </span>
        <span className="text-[#03fd1c]">GEAR</span>
      </motion.h2>

      <motion.div
        style={{ x }}
        className="flex gap-6 overflow-x-auto pb-4 slider-container snap-x snap-mandatory"
      >
        {products.map((product, index) => {
          const Icon = product.icon;
          return (
            <motion.a
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="
                flex-shrink-0 w-[280px] snap-center
                card-neon rounded-2xl p-6
                flex flex-col items-center text-center
                cursor-pointer group
              "
            >
              {/* Icon with gradient background */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className={`
                  w-20 h-20 rounded-2xl mb-4
                  bg-gradient-to-br ${product.color}
                  flex items-center justify-center
                  shadow-lg
                `}
              >
                <Icon className="w-10 h-10 text-white" />
              </motion.div>

              {/* Product name */}
              <h3 className="text-xl font-bold text-white group-hover:text-[#03fd1c] transition-colors mb-1">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {product.description}
              </p>

              {/* Shop button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="
                  px-6 py-2 rounded-full
                  bg-[#03fd1c]/10 border border-[#03fd1c]/30
                  text-[#03fd1c] text-sm font-semibold
                  group-hover:bg-[#03fd1c] group-hover:text-black
                  transition-all duration-300
                "
              >
                Shop Now
              </motion.div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Scroll hint for mobile */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-500 text-xs mt-2 md:hidden"
      >
        Swipe to see more
      </motion.p>
    </motion.section>
  );
}
