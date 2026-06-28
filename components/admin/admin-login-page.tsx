"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LockKeyhole, Mail, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const featureBullets = [
  "Review customer requests",
  "Manage weekly customers",
  "Track lead status",
];

export function AdminLoginPage() {
  const router = useRouter();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSigningIn(true);

    window.setTimeout(() => {
      router.push("/admin/dashboard");
    }, 450);
  };

  return (
    <main className="min-h-dvh bg-[#F8FAFC] font-sans text-[#12321C]">
      <section className="grid min-h-dvh lg:grid-cols-2">
        <div className="relative isolate hidden min-h-dvh overflow-hidden bg-[#0F5A24] lg:block">
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.045, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/login.png"
              alt="Dog Poop People admin login background"
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[#062D13]/45" />
          <motion.div
            className="absolute -left-24 top-20 size-72 rounded-full bg-[#65C22E]/28 blur-3xl"
            animate={{ y: [0, 26, 0], opacity: [0.65, 0.95, 0.65] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-8 size-80 rounded-full bg-[#FFF8E6]/16 blur-3xl"
            animate={{ y: [0, -24, 0], x: [0, -12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex min-h-dvh items-center px-12 xl:px-20">
            <motion.div
              className="max-w-xl text-white"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/12 px-4 py-2 text-sm font-extrabold text-[#FFF8E6] shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-md">
                <ShieldCheck className="size-4 text-[#65C22E]" />
                Dog Poop People
              </div>
              <h1 className="mt-7 font-heading text-6xl font-extrabold leading-none tracking-normal xl:text-7xl">
                Admin Portal
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/82">
                Manage customer requests, review qualification forms, update
                lead status, and keep your business organized from one secure
                dashboard.
              </p>
              <div className="mt-10 grid gap-4">
                {featureBullets.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-base font-bold text-[#FFF8E6]">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-[#65C22E] text-[#073516] shadow-[0_14px_34px_rgba(101,194,46,0.32)]">
                      <CheckCircle2 className="size-5" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(101,194,46,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(15,90,36,0.12),transparent_35%),linear-gradient(135deg,#F8FAFC_0%,#FFFFFF_52%,#F1F8ED_100%)]" />
          <motion.div
            className="absolute right-10 top-12 hidden rounded-2xl border border-white/80 bg-white/70 px-4 py-3 text-sm font-extrabold text-[#0F5A24] shadow-[0_20px_60px_rgba(15,90,36,0.12)] backdrop-blur-xl sm:flex sm:items-center sm:gap-2"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
          >
            <Sparkles className="size-4 text-[#65C22E]" />
            Secure admin workspace
          </motion.div>
          <motion.div
            className="relative w-full max-w-[480px] rounded-[1.75rem] border border-white/82 bg-white/88 p-6 shadow-[0_34px_120px_rgba(15,90,36,0.18)] backdrop-blur-2xl sm:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="Dog Poop People"
                width={104}
                height={98}
                priority
                className="h-20 w-auto object-contain drop-shadow-[0_16px_34px_rgba(15,90,36,0.15)]"
              />
            </div>
            <div className="mt-6 text-center">
              <h2 className="font-heading text-4xl font-extrabold tracking-normal text-[#0F5A24]">
                Welcome Back
              </h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#405244]/72">
                This area is restricted to Dog Poop People administrators only.
              </p>
            </div>

            <form className="mt-8 grid gap-5" onSubmit={handleLogin}>
              <label className="grid gap-2">
                <span className="text-sm font-extrabold text-[#12321C]">Email Address</span>
                <span className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#0F5A24]/48" />
                  <Input
                    type="email"
                    autoComplete="email"
                    placeholder="admin@dogpooppeople.com"
                    className="rounded-xl pl-11 focus:shadow-[0_16px_42px_rgba(101,194,46,0.16)]"
                  />
                </span>
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-extrabold text-[#12321C]">Password</span>
                <span className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#0F5A24]/48" />
                  <Input
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="rounded-xl pl-11 focus:shadow-[0_16px_42px_rgba(101,194,46,0.16)]"
                  />
                </span>
              </label>

              <div className="flex items-center justify-between gap-3 text-sm">
                <label className="flex items-center gap-2 font-bold text-[#405244]">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-[#0F5A24]/20 accent-[#65C22E]"
                  />
                  Remember Me
                </label>
                <Link href="/admin/login" className="font-extrabold text-[#0F5A24] transition hover:text-[#65C22E]">
                  Forgot Password
                </Link>
              </div>

              <Button type="submit" size="lg" className="mt-2 h-14 rounded-xl text-base shadow-[0_20px_55px_rgba(101,194,46,0.36)]">
                {isSigningIn ? "Opening Dashboard..." : "Login"}
                <ArrowRight className="size-4" />
              </Button>
            </form>

            <p className="mt-7 rounded-xl border border-[#0F5A24]/8 bg-[#F8FAFC] px-4 py-3 text-center text-xs font-bold text-[#405244]/66">
              This portal is for authorized administrators only.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
