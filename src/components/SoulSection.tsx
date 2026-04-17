"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import AudioModelStage from "@/components/AudioModelStage";

const navItems = ["ABOUT US", "PRODUCTS", "SOUND ROOM", "SERVICES", "CONTACT"];

export default function SoulSection() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_85%,rgba(255,180,110,0.08),transparent_42%),radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_38%)]" />

      <section className="relative mx-auto flex min-h-[90vh] w-full max-w-400 flex-col px-6 pb-6 pt-8 md:px-10 md:pb-8 md:pt-10 lg:px-12">
        <header className="flex items-center justify-between gap-6 pt-2 md:pt-1">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex min-h-16 items-center justify-center px-1"
          >
            <Image
              src="/Atomik-White-Logo.svg"
              alt="Atomik Audio"
              width={240}
              height={72}
              className="h-auto w-auto max-h-20"
              priority
              unoptimized
            />
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
            aria-label="Primary"
            className="hidden items-center gap-12 lg:flex xl:gap-16"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg font-semibold tracking-[0.03em] text-white transition-all duration-250 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
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

        <div className="mt-8 grid grid-cols-1 gap-7 lg:mt-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <h1 className="max-w-3xl text-balance text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl">
              Your sound has lost its soul.
            </h1>
            <div className="pointer-events-none relative z-20 mt-6 h-56 w-full max-w-4xl overflow-visible md:h-64 lg:h-72">
              <AudioModelStage mode="flat" intensified={false} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="self-start lg:col-span-5 lg:justify-self-end"
          >
            <h2 className="max-w-sm text-balance text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl">
              We bring it back.
            </h2>
            <p className="mt-5 max-w-md text-base text-white/64 md:text-xl">
              Engineered clarity. Restored depth. Sound you don&apos;t just hear - you feel.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}