"use client";

import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";

/**
 * The headline link: scholarship nomination. Rotating conic border +
 * periodic shine sweep (both pure CSS, see globals.css) so it reads as
 * THE thing to tap without autoplaying anything heavy.
 */
export default function FeaturedCard() {
  return (
    <motion.a
      href="https://spectatorsport.foundation/nominate"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileTap={{ scale: 0.97 }}
      className="block featured-ring"
    >
      <div className="featured-inner px-5 py-6 sm:px-7 sm:py-7">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#03fd1c] flex items-center justify-center shrink-0">
            <Award className="w-7 h-7 text-black" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#03fd1c] text-[11px] font-bold tracking-[0.2em] uppercase mb-1">
              First In, Last Out Scholarship
            </p>
            <h2 className="text-white font-black text-xl leading-tight">
              Nominate an Athlete
            </h2>
          </div>
          <ArrowRight className="w-6 h-6 text-[#03fd1c] shrink-0" />
        </div>
        <p className="text-gray-400 text-sm mt-4 leading-relaxed">
          Know a kid who&apos;s first to practice and last to leave? Put their
          name in. Free, 90 seconds, four scholarships a year.
        </p>
      </div>
    </motion.a>
  );
}
