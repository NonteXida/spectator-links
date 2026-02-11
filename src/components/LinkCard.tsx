"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface LinkCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  index: number;
  featured?: boolean;
  onClick?: () => void;
  isButton?: boolean;
}

export default function LinkCard({
  title,
  description,
  href,
  icon: Icon,
  index,
  featured = false,
  onClick,
  isButton = false,
}: LinkCardProps) {
  const content = (
    <>
      <div className={`
        w-12 h-12 rounded-xl flex items-center justify-center
        ${featured
          ? "bg-[#03fd1c] text-black"
          : "bg-[#03fd1c]/10 text-[#03fd1c]"
        }
        transition-all duration-300 group-hover:scale-110
      `}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className={`
          font-bold text-lg
          ${featured ? "text-[#03fd1c]" : "text-white"}
          group-hover:text-[#03fd1c] transition-colors
        `}>
          {title}
        </h3>
        <p className="text-gray-400 text-sm truncate">{description}</p>
      </div>
      <motion.div
        className="text-[#03fd1c]/50 group-hover:text-[#03fd1c] transition-colors"
        whileHover={{ x: 4 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.div>
    </>
  );

  const className = `
    group card-neon rounded-2xl py-5 sm:py-6 px-5 sm:px-6 flex items-center gap-5
    cursor-pointer w-full min-h-[72px]
    ${featured ? "border-[#03fd1c]/40" : ""}
  `;

  if (isButton) {
    return (
      <motion.button
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        style={{ transformOrigin: "center center" }}
        className={className}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      style={{ transformOrigin: "center center" }}
      className={className}
    >
      {content}
    </motion.a>
  );
}
