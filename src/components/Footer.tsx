"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LOGO_URL = "https://static.wixstatic.com/media/d97dfe_cf24532419624a49802826fc25a80c4f~mv2.png";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full text-center pt-12 pb-12"
    >
      <div className="max-w-md mx-auto">
        {/* Divider */}
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#03fd1c]/50 to-transparent mx-auto mb-6" />

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 mx-auto mb-4 relative rounded-full overflow-hidden"
        >
          <Image
            src={LOGO_URL}
            alt="Spectator Sport"
            fill
            className="object-cover"
            unoptimized
          />
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
