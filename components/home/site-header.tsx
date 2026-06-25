"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/35 bg-[#FFF8E6]/78 px-4 shadow-[0_24px_80px_rgba(18,24,20,0.18)] backdrop-blur-2xl sm:h-20 sm:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="Dog Poop People home">
          <Image
            src="/logo.png"
            alt="Dog Poop People"
            width={74}
            height={70}
            priority
            sizes="74px"
            className="h-12 w-auto object-contain drop-shadow-[0_10px_20px_rgba(15,90,36,0.18)] sm:h-14"
          />
          <span className="hidden font-heading text-sm font-extrabold tracking-tight text-[#12321C] xl:block">
            Dog Poop People
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-[#233528]/76 transition hover:text-[#0F5A24]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button asChild size="sm" className="hidden h-11 px-5 shadow-[0_14px_38px_rgba(101,194,46,0.28)] sm:inline-flex">
          <a href="#contact">Get Started</a>
        </Button>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-[#0F5A24]/12 bg-white/75 text-[#0F5A24] shadow-[0_12px_32px_rgba(38,46,32,0.12)] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65C22E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF8E6] lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              id="mobile-navigation"
              className="absolute inset-x-0 top-[calc(100%+0.75rem)] overflow-hidden rounded-[1.5rem] border border-white/45 bg-[#FFF8E6]/95 p-3 shadow-[0_24px_70px_rgba(18,24,20,0.18)] backdrop-blur-2xl lg:hidden"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm font-extrabold text-[#233528]/82 transition hover:bg-white/80 hover:text-[#0F5A24]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild size="sm" className="mt-2 h-11 w-full">
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </a>
                </Button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
