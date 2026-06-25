"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

import { HeroSection } from "@/components/home/hero-section";
import { InfoSections } from "@/components/home/info-sections";
import { SiteHeader } from "@/components/home/site-header";
import { SiteLoader } from "@/components/home/site-loader";

export function HomePage() {
  const [isLandingReady, setIsLandingReady] = useState(false);
  const handleLoaderComplete = useCallback(() => setIsLandingReady(true), []);

  return (
    <main className="min-h-dvh overflow-hidden bg-[#FAF2DE]">
      <SiteLoader onComplete={handleLoaderComplete} />
      <AnimatePresence>
        {isLandingReady ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <SiteHeader />
            <HeroSection />
            <InfoSections />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
