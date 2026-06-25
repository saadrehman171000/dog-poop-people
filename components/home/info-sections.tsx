"use client";

import { motion } from "framer-motion";
import { CalendarCheck2, MapPin, MessageCircle, Shield, Sparkles } from "lucide-react";
import Image from "next/image";

import { ContactSweepSvg } from "@/components/home/brand-svg";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageCircle,
    title: "Request service",
    copy: "Tell us your yard size, dogs, and preferred visit rhythm.",
  },
  {
    icon: CalendarCheck2,
    title: "Pick your schedule",
    copy: "Book a one-time reset or keep things fresh with weekly service.",
  },
  {
    icon: Sparkles,
    title: "Enjoy the yard",
    copy: "We handle the cleanup so your outdoor space is ready when you are.",
  },
];

export function InfoSections() {
  return (
    <>
      <section id="how-it-works" className="relative overflow-hidden bg-[#FAF2DE] px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#F5B84B,#65C22E,transparent)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="relative h-[320px] rounded-[2rem] bg-[linear-gradient(135deg,rgba(101,194,46,0.28),rgba(245,184,75,0.2),rgba(255,248,230,0.92))] p-[1px] shadow-[0_28px_90px_rgba(38,46,32,0.18)] sm:h-[420px] lg:h-[520px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-full overflow-hidden rounded-[calc(2rem-1px)]">
              <Image
                src="/howitworks.png"
                alt="Neatly maintained backyard after cleanup"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-[50%_42%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,230,0.02)_0%,transparent_52%,rgba(15,90,36,0.12)_100%)]" />
            </div>
          </motion.div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#B68020]">
              How It Works
            </p>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-[#0F5A24] sm:text-4xl">
              A simpler way to keep the yard guest-ready.
            </h2>
            <div className="mt-8 grid gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.title}
                    className="flex gap-4 rounded-[1.5rem] border border-[#0F5A24]/10 bg-white/80 p-4 shadow-[0_14px_40px_rgba(38,46,32,0.08)]"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[#E8F7DF] text-[#0F5A24]">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-extrabold text-[#0F5A24]">
                        {step.title}
                      </h3>
                      <p className="mt-1 leading-7 text-[#0F5A24]/70">{step.copy}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="service-area"
        className="bg-[#F7F9F4] px-4 py-20 text-[#0F5A24] sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#4C87A8]">
              Service Area
            </p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              Local, dependable, and built around nearby homes.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#405244]">
              Built for nearby neighborhoods, repeat routes, and homeowners who
              want a tidy yard without managing another chore.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Residential yards", "#FFF8E6"],
              ["Weekly routes", "#E8F7DF"],
              ["One-time cleanups", "#EAF6FF"],
              ["Multi-dog homes", "#FFF0CF"],
            ].map(([item, color]) => (
                <div
                  key={item}
                  className="flex min-h-32 items-center gap-4 rounded-[1.5rem] border border-[#0F5A24]/10 p-4 shadow-[0_16px_42px_rgba(38,46,32,0.08)]"
                  style={{ backgroundColor: color }}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white/78 text-[#0F5A24]">
                    {item === "Weekly routes" ? (
                      <CalendarCheck2 className="size-4" />
                    ) : item === "Multi-dog homes" ? (
                      <Shield className="size-4" />
                    ) : (
                      <MapPin className="size-4" />
                    )}
                  </span>
                  <p className="font-heading text-lg font-extrabold">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#151A16] px-4 py-20 sm:px-6 lg:px-8">
        <ContactSweepSvg className="left-0 top-4 w-full" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] border border-white/12 bg-[#FFF8E6] p-7 text-[#0F5A24] shadow-[0_28px_90px_rgba(0,0,0,0.2)] sm:p-9 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#B68020]">
              Ready when you are
            </p>
            <h2 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              Get transparent pricing and a cleaner yard this week.
            </h2>
          </div>
          <Button asChild size="default" className="shrink-0">
            <a href="mailto:hello@dogpooppeople.com">
              Get Started
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
