"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-24 pb-6">
      {/* Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2
        }}
        className="relative mb-8"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(3, 253, 28, 0.3)",
              "0 0 40px rgba(3, 253, 28, 0.5)",
              "0 0 20px rgba(3, 253, 28, 0.3)",
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="rounded-full p-1"
        >
          <Image
            src="https://static.wixstatic.com/media/d97dfe_cf24532419624a49802826fc25a80c4f~mv2.png"
            alt="Spectator Sport Logo"
            width={140}
            height={140}
            className="rounded-full"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Tagline */}
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="text-3xl md:text-4xl lg:text-5xl font-black text-center tracking-tight mb-5"
      >
        <span className="text-white">THE WORLD IS </span>
        <motion.span
          className="text-[#03fd1c] neon-glow-text"
          animate={{
            textShadow: [
              "0 0 10px #03fd1c, 0 0 20px #03fd1c",
              "0 0 20px #03fd1c, 0 0 40px #03fd1c, 0 0 60px rgba(3, 253, 28, 0.5)",
              "0 0 10px #03fd1c, 0 0 20px #03fd1c",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          WATCHING
        </motion.span>
      </motion.h1>


    </section>
  );
}
