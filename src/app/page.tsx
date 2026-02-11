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
    <main className="min-h-screen w-full bg-black relative">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-[1]" />

      {/* Content - centered column with consistent padding */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 sm:px-6 pb-8">
        <div className="w-full max-w-lg">
          {/* Hero Section */}
          <Hero />

          {/* Social Media Bar */}
          <SocialBar />

          {/* Spacer: guaranteed space between social bar and link cards */}
          <div className="h-10 shrink-0" aria-hidden />

          {/* Main Links Section - gap for spacing between cards, padding for hover room */}
          <section className="flex flex-col gap-6 pt-6 pb-12">
          {mainLinks.map((link, index) => (
            <div key={link.title} className="py-2 min-h-0">
              <LinkCard
                title={link.title}
                description={link.description}
                href={link.href}
                icon={link.icon}
                index={index}
                featured={link.featured}
                isButton={link.isButton}
                onClick={link.onClick}
              />
            </div>
          ))}
        </section>

        {/* Product Slider */}
        <ProductSlider />

        {/* Blanket Section */}
        <BlanketSection />

        {/* Footer */}
        <Footer />
        </div>
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
