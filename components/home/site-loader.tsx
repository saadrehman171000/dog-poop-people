"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type SiteLoaderProps = {
  onComplete: () => void;
};

const LOADER_HOLD_MS = 520;
const LOADER_EXIT_MS = 340;

export function SiteLoader({ onComplete }: SiteLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  const finishLoading = useCallback(() => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    let exitTimer: number | undefined;
    const timer = window.setTimeout(() => {
      setIsVisible(false);
      exitTimer = window.setTimeout(finishLoading, LOADER_EXIT_MS);
    }, LOADER_HOLD_MS);

    return () => {
      window.clearTimeout(timer);
      if (exitTimer) {
        window.clearTimeout(exitTimer);
      }
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex min-h-dvh items-center justify-center overflow-hidden bg-[#101913]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.75, ease: "easeInOut" } }}
        >
          <Image
            src="/loader.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#09150D]/74" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,248,230,0.18),transparent_34%,rgba(245,184,75,0.14)_70%,transparent)]" />

          <motion.div
            className="relative z-10 flex w-full max-w-sm flex-col items-center px-8 text-center"
            initial={{ y: 18, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative mb-7 size-36 sm:size-44"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/logo.png"
                alt="Dog Poop People"
                fill
                priority
                sizes="160px"
                className="object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.45)]"
              />
            </motion.div>
            <div className="space-y-3">
              <p className="font-heading text-2xl font-extrabold tracking-tight text-[#FFF8E6] sm:text-3xl">
                Fresh yards, calm minds.
              </p>
              <p className="mx-auto max-w-xs text-sm leading-6 text-[#FFF8E6]/82 sm:text-base">
                We are preparing a smoother welcome and loading the details with care.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[#FFF8E6]/58">
              <span>Loading</span>
              <motion.span
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
              >
                ...
              </motion.span>
            </div>
            <div className="mt-7 h-2 w-full overflow-hidden rounded-full border border-white/25 bg-white/18 shadow-inner">
              <motion.div
                className="h-full rounded-full bg-[linear-gradient(90deg,#65C22E,#F5B84B,#FFF8E6)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
