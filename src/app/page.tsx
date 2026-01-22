"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import SocialBar from "@/components/SocialBar";
import LinkCard from "@/components/LinkCard";
import ProductSlider from "@/components/ProductSlider";
import BlanketSection from "@/components/BlanketSection";
import TellYourStoryForm from "@/components/TellYourStoryForm";
import PodcastForm from "@/components/PodcastForm";
import Footer from "@/components/Footer";
import {
  Mic,
  Trophy,
  Camera,
  Globe,
  ShoppingBag,
} from "lucide-react";

// Dynamically import particles to avoid SSR issues
const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

export default function Home() {
  const [isStoryFormOpen, setIsStoryFormOpen] = useState(false);
  const [isPodcastFormOpen, setIsPodcastFormOpen] = useState(false);

  const mainLinks = [
    {
      title: "Join the Podcast",
      description: "Share your story with Cosette Abeyta",
      href: "#",
      icon: Mic,
      featured: true,
      isButton: true,
      onClick: () => setIsPodcastFormOpen(true),
    },
    {
      title: "Tell Your Story",
      description: "Athlete nomination - get featured",
      href: "#",
      icon: Trophy,
      isButton: true,
      onClick: () => setIsStoryFormOpen(true),
    },
    {
      title: "Free Photos",
      description: "Download your game day photos",
      href: "https://spectatorsportofficial.smugmug.com/",
      icon: Camera,
    },
    {
      title: "Our Gear",
      description: "Drinks, powders & apparel",
      href: "https://spectatorsport.com",
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
    <main className="min-h-screen bg-black relative">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-lg mx-auto pb-8 px-4">
        {/* Hero Section */}
        <Hero />

        {/* Social Media Bar */}
        <SocialBar />

        {/* Main Links Section */}
        <section className="px-6 pt-6 pb-12" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {mainLinks.map((link, index) => (
            <LinkCard
              key={link.title}
              title={link.title}
              description={link.description}
              href={link.href}
              icon={link.icon}
              index={index}
              featured={link.featured}
              isButton={link.isButton}
              onClick={link.onClick}
            />
          ))}
        </section>

        {/* Product Slider */}
        <ProductSlider />

        {/* Blanket Section */}
        <BlanketSection />

        {/* Footer */}
        <Footer />
      </div>

      {/* Forms */}
      <TellYourStoryForm
        isOpen={isStoryFormOpen}
        onClose={() => setIsStoryFormOpen(false)}
      />
      <PodcastForm
        isOpen={isPodcastFormOpen}
        onClose={() => setIsPodcastFormOpen(false)}
      />
    </main>
  );
}
