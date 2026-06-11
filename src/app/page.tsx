"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import SocialBar from "@/components/SocialBar";
import FeaturedCard from "@/components/FeaturedCard";
import LinkCard from "@/components/LinkCard";
import BlanketSection from "@/components/BlanketSection";
import PodcastForm from "@/components/PodcastForm";
import Footer from "@/components/Footer";
import {
  Mic,
  Camera,
  Globe,
  ShoppingBag,
  HeartHandshake,
  Medal,
} from "lucide-react";

export default function Home() {
  const [isPodcastFormOpen, setIsPodcastFormOpen] = useState(false);

  const mainLinks = [
    {
      title: "Join the Podcast",
      description: "Share your story with Cosette Abeyta",
      href: "#",
      icon: Mic,
      isButton: true,
      onClick: () => setIsPodcastFormOpen(true),
    },
    {
      title: "Free Game Day Photos",
      description: "Download your shots, no charge",
      href: "https://spectatorsportofficial.smugmug.com/",
      icon: Camera,
    },
    {
      title: "Run a Team Fundraiser",
      description: "Your program keeps the profit",
      href: "https://spectatorsport.com/coaches",
      icon: HeartHandshake,
    },
    {
      title: "The Foundation",
      description: "Scholarships and athlete features",
      href: "https://spectatorsport.foundation",
      icon: Medal,
    },
    {
      title: "Shop Gear",
      description: "Blankets, apparel and more",
      href: "https://spectatorsport.com/shop",
      icon: ShoppingBag,
    },
    {
      title: "Visit Website",
      description: "spectatorsport.com",
      href: "https://spectatorsport.com",
      icon: Globe,
    },
  ];

  return (
    <main className="min-h-screen w-full bg-black relative">
      {/* CSS-only ambience: aurora drift + faint court grid (no particle JS) */}
      <div className="aurora" />
      <div className="grid-lines" />

      <div className="relative z-10 w-full flex flex-col items-center px-4 sm:px-6 pb-8">
        <div className="w-full max-w-md sm:max-w-lg">
          <Hero />

          <SocialBar />

          {/* Featured: scholarship nomination */}
          <div className="pt-10">
            <FeaturedCard />
          </div>

          {/* Main links */}
          <section className="flex flex-col gap-4 pt-8 pb-10">
            {mainLinks.map((link, index) => (
              <LinkCard
                key={link.title}
                title={link.title}
                description={link.description}
                href={link.href}
                icon={link.icon}
                index={index}
                isButton={link.isButton}
                onClick={link.onClick}
              />
            ))}
          </section>

          <BlanketSection />

          <Footer />
        </div>
      </div>

      <PodcastForm
        isOpen={isPodcastFormOpen}
        onClose={() => setIsPodcastFormOpen(false)}
      />
    </main>
  );
}
