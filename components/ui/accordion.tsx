"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

type AccordionContextValue = {
  openValue: string | undefined;
  setOpenValue: (value: string | undefined) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const AccordionItemContext = React.createContext<string | null>(null);

function useAccordion() {
  const context = React.useContext(AccordionContext);

  if (!context) {
    throw new Error("Accordion components must be used inside Accordion.");
  }

  return context;
}

function useAccordionItem() {
  const value = React.useContext(AccordionItemContext);

  if (!value) {
    throw new Error("AccordionTrigger and AccordionContent must be used inside AccordionItem.");
  }

  return value;
}

function Accordion({
  defaultValue,
  className,
  children,
}: React.ComponentProps<"div"> & {
  defaultValue?: string;
}) {
  const [openValue, setOpenValue] = React.useState<string | undefined>(defaultValue);

  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue }}>
      <div className={cn("grid gap-3", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  value,
  className,
  children,
}: React.ComponentProps<"div"> & {
  value: string;
}) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div
        className={cn(
          "overflow-hidden rounded-[1.75rem] border border-[#0F5A24]/10 bg-white/82 shadow-[0_18px_54px_rgba(31,46,35,0.08)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(31,46,35,0.12)]",
          className,
        )}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

function AccordionTrigger({
  className,
  children,
}: React.ComponentProps<"button">) {
  const itemValue = useAccordionItem();
  const { openValue, setOpenValue } = useAccordion();
  const isOpen = openValue === itemValue;

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-heading text-base font-extrabold text-[#12321C] outline-none transition focus-visible:ring-2 focus-visible:ring-[#65C22E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF8E6] sm:px-6",
        className,
      )}
      aria-expanded={isOpen}
      onClick={() => setOpenValue(isOpen ? undefined : itemValue)}
    >
      <span>{children}</span>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#E8F7DF] text-[#0F5A24]">
        {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
      </span>
    </button>
  );
}

function AccordionContent({
  className,
  children,
}: React.ComponentProps<"div">) {
  const itemValue = useAccordionItem();
  const { openValue } = useAccordion();
  const isOpen = openValue === itemValue;

  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <div className={cn("px-5 pb-5 text-sm leading-7 text-[#405244] sm:px-6", className)}>
            {children}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
