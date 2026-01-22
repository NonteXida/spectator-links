"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="px-6 text-center" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
    >
      <div className="max-w-md mx-auto">
        {/* Divider */}
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#03fd1c]/50 to-transparent mx-auto mb-6" />

        {/* Logo small */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 mx-auto mb-4"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <text
              x="50"
              y="70"
              textAnchor="middle"
              className="fill-[#03fd1c] font-black text-6xl"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              S
            </text>
          </svg>
        </motion.div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Spectator Sport. All rights reserved.
        </p>

        {/* Website link */}
        <motion.a
          href="https://spectatorsport.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ color: "#03fd1c" }}
          className="text-gray-400 text-sm mt-2 inline-block transition-colors"
        >
          spectatorsport.com
        </motion.a>
      </div>
    </motion.footer>
  );
}
