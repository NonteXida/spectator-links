"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/spectatorsportofficial/",
    icon: FaInstagram,
    hoverColor: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@SpectatorSportOfficial",
    icon: FaTiktok,
    hoverColor: "hover:bg-[#00f2ea]",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@SpectatorSport",
    icon: FaYoutube,
    hoverColor: "hover:bg-red-600",
  },
  {
    name: "X",
    url: "https://x.com/SpectatorSport7",
    icon: FaXTwitter,
    hoverColor: "hover:bg-white hover:text-black",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/SpectatorSportOfficial",
    icon: FaFacebookF,
    hoverColor: "hover:bg-[#1877f2]",
  },
];

export default function SocialBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="px-6 py-6"
    >
      <div className="flex justify-center gap-6 flex-wrap">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`
                w-12 h-12 rounded-full flex items-center justify-center
                bg-[#1a1a1a] border border-[#03fd1c]/30
                transition-all duration-300
                ${social.hoverColor}
              `}
              aria-label={social.name}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
}
