"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import AudioModelStage from "@/components/AudioModelStage";

const navItems = ["ABOUT US", "PRODUCTS", "SOUND ROOM", "SERVICES", "CONTACT"];

export default function SoulSection() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_85%,rgba(255,180,110,0.08),transparent_42%),radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_38%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-320 flex-col px-5 pb-5 pt-6 md:px-8 md:pb-6 md:pt-8 lg:px-10">
        <header className="flex items-center justify-between gap-5 pt-1 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex min-h-14 items-center justify-center px-0"
          >
            <Image
              src="/Atomik-White-Logo.svg"
              alt="Atomik Audio"
              width={240}
              height={72}
              className="h-auto w-auto max-h-16"
              priority
              unoptimized
            />
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
            aria-label="Primary"
            className="hidden items-center gap-10 lg:flex xl:gap-14"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-base font-semibold tracking-[0.03em] text-white transition-all duration-250 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              >
                {item}
              </a>
            ))}
          </motion.nav>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 text-white lg:hidden"
          >
            <span className="block h-0.5 w-6 bg-white" />
          </button>
        </header>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:mt-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <h1 className="max-w-2xl text-balance text-4xl leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Your sound has lost its soul.
            </h1>
            <div className="pointer-events-none relative z-20 mt-4 h-48 w-full max-w-3xl overflow-visible md:h-56 lg:h-64">
              <AudioModelStage mode="flat" intensified={false} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="self-start lg:col-span-5 lg:justify-self-end"
          >
            <h2 className="max-w-sm text-balance text-4xl leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              We bring it back.
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/64 md:text-base"
              Engineered clarity. Restored depth. Sound you don&apos;t just hear - you feel.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}