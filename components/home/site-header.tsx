"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <motion.header
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/35 bg-[#FFF8E6]/78 px-4 shadow-[0_24px_80px_rgba(18,24,20,0.18)] backdrop-blur-2xl sm:h-20 sm:px-6">
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

        <Button asChild size="sm" className="h-11 px-5 shadow-[0_14px_38px_rgba(101,194,46,0.28)]">
          <a href="#contact">Get Started</a>
        </Button>
      </nav>
    </motion.header>
  );
}
