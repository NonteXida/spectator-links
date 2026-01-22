"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function BlanketSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, paddingBottom: '4rem' }}
      className="pt-6 px-6"
    >
      <motion.a
        href="https://highschoolblanket.com"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="block"
      >
        <motion.div
          style={{ y }}
          className="relative overflow-hidden rounded-3xl card-neon p-6 md:p-8"
        >
          {/* Background gradient decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#03fd1c]/5 via-transparent to-[#03fd1c]/10 pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center gap-6">
            {/* Product Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 relative"
            >
              <Image
                src="https://static.wixstatic.com/media/d97dfe_a682d3fd7c5c48809f40f4cf9d5f2c33~mv2.jpg"
                alt="High School Blankets"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#03fd1c] transition-colors">
                High School Blankets
              </h3>
              <p className="text-gray-400 mb-3">
                Custom stadium blankets for your school. Show your spirit with premium quality gear!
              </p>
              <div className="inline-flex items-center gap-2 text-[#03fd1c] font-semibold">
                Shop Custom Blankets
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="hidden md:block absolute top-4 right-4">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-24 h-24 border border-[#03fd1c]/20 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.a>
    </motion.section>
  );
}
