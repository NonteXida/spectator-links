"use client";

import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";

interface LinkCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  index: number;
  onClick?: () => void;
  isButton?: boolean;
}

const entrance = (index: number) => ({
  initial: { opacity: 0, y: 24, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-40px" },
  transition: {
    duration: 0.45,
    delay: index * 0.07,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  whileTap: { scale: 0.96 },
});

export default function LinkCard({
  title,
  description,
  href,
  icon: Icon,
  index,
  onClick,
  isButton = false,
}: LinkCardProps) {
  const content = (
    <>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[#03fd1c]/10 text-[#03fd1c] transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0 text-left">
        <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-[#03fd1c] transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-gray-400 text-sm truncate">{description}</p>
      </div>
      <ChevronRight className="w-5 h-5 shrink-0 text-[#03fd1c]/50 group-hover:text-[#03fd1c] group-hover:translate-x-1 transition-all" />
    </>
  );

  const className =
    "group card-neon rounded-2xl py-4 px-5 flex items-center gap-4 cursor-pointer w-full min-h-[76px]";

  if (isButton) {
    return (
      <motion.button {...entrance(index)} onClick={onClick} className={className}>
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...entrance(index)}
      className={className}
    >
      {content}
    </motion.a>
  );
}
