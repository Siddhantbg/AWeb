"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import MagicRings from "@/components/ui/MagicRings";

const featurePillars = [
  {
    title: "Time-Domain Precision",
    description: "Phase-conscious voicing and controlled directivity for clean, reliable coverage.",
  },
  {
    title: "Digital + Analog Blend",
    description: "DSP intelligence with musical warmth tuned for demanding pro-audio workflows.",
  },
  {
    title: "Engineered In India",
    description: "Designed and validated through rigorous acoustic testing and real-world deployment.",
  },
];

const productPreview = [
  {
    name: "Quasar XN-12",
    type: "Full-Range Point Source",
    specs: "138 dB SPL peak / 12 in LF / Wide-format horn",
  },
  {
    name: "Quasar XN-15",
    type: "High-Output Top",
    specs: "141 dB SPL peak / 15 in LF / Touring-ready response",
  },
  {
    name: "Quasar SB-18",
    type: "Matching Subwoofer",
    specs: "Low extension + punch / 18 in LF / Precision crossover",
  },
];

export default function LandingPage() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);

    return () => {
      query.removeEventListener("change", update);
    };
  }, []);

  return (
    <main className="bg-brand-white text-brand-charcoal">
      <section className="relative isolate overflow-hidden border-b border-brand-charcoal/10" id="top">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(237,29,36,0.08),transparent_28%),radial-gradient(circle_at_88%_16%,rgba(35,31,32,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,1))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-brand-charcoal/10" />
        <div className="absolute inset-0 opacity-70 mix-blend-multiply" aria-hidden="true">
          <MagicRings
            color="#ed1d24"
            colorTwo="#231f20"
            ringCount={5}
            speed={0.42}
            attenuation={8.5}
            lineThickness={1.7}
            baseRadius={0.3}
            radiusStep={0.1}
            scaleRate={0.05}
            opacity={0.42}
            blur={0.2}
            noiseAmount={0.01}
            rotation={-12}
            ringGap={1.28}
            fadeIn={0.8}
            fadeOut={0.65}
            followMouse={false}
            mouseInfluence={0}
            hoverScale={1.02}
            parallax={0.01}
            clickBurst={false}
            reducedMotion={reducedMotion}
          />
        </div>
        <header className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#top"
            className="relative inline-flex h-14 w-36 items-center justify-center rounded-full border border-transparent bg-[#fbf7f5] shadow-none"
          >
            <Image
              src="/Atomik-White-Logo.svg"
              alt="Atomik Audio"
              fill
              unoptimized
              priority
              sizes="144px"
              style={{ objectFit: "contain", filter: "brightness(0) saturate(100%)" }}
            />
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
            <a href="#products" className="text-xs uppercase tracking-[0.2em] text-brand-charcoal transition-colors hover:text-brand-red">
              Systems
            </a>
            <a href="#engineering" className="text-xs uppercase tracking-[0.2em] text-brand-charcoal transition-colors hover:text-brand-red">
              Engineering
            </a>
            <a href="#contact" className="text-xs uppercase tracking-[0.2em] text-brand-charcoal transition-colors hover:text-brand-red">
              Contact
            </a>
          </nav>
        </header>

        <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] w-full max-w-7xl gap-10 px-6 pb-8 pt-10 md:grid-cols-12 md:gap-8 md:px-10 md:pb-12 md:pt-14">
          <div className="md:col-span-7 md:pt-10 lg:pt-16">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-brand-ash">
              Minimal pro-audio identity system
            </p>
            <h1 className="max-w-4xl font-heading text-6xl uppercase leading-[0.83] tracking-[0.02em] text-brand-charcoal sm:text-7xl md:text-[7.6rem] lg:text-[9.5rem]">
              Precision.
              <span className="block text-brand-red">Power.</span>
              <span className="block">Presence.</span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-brand-charcoal/72 md:text-base md:leading-8">
              Atomik Audio builds clean, high-output systems for spaces that demand clarity, control, and visual restraint.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5" id="contact">
              <a
                href="mailto:hello@atomikaudio.com"
                className="inline-flex items-center justify-center border-b border-brand-charcoal pb-1 text-sm font-semibold uppercase tracking-[0.18em] text-brand-charcoal transition-colors duration-300 hover:text-brand-red"
              >
                Get In Touch
              </a>
              <a
                href="#products"
                className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-charcoal transition-colors duration-300 hover:text-brand-red"
              >
                <span className="h-px w-10 bg-brand-charcoal/40 transition-colors duration-300 group-hover:bg-brand-red" />
                Explore Systems
              </a>
            </div>
          </div>

          <div className="relative md:col-span-5 md:pt-6 lg:pt-12">
            <div className="rounded-[1.15rem] shadow-[0_24px_60px_rgba(35,31,32,0.08)]">
              <div className="relative aspect-4/5 overflow-hidden rounded-[1.15rem] bg-[#eae4dc]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/Luxury_Speaker_Product_Showcase_Video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,242,236,0.12)_0%,rgba(255,255,255,0.05)_30%,rgba(35,31,32,0.08)_100%)]" />
                <div className="absolute inset-0 opacity-38 mix-blend-normal">
                  <MagicRings
                    color="#ed1d24"
                    colorTwo="#231f20"
                    ringCount={4}
                    speed={0.33}
                    attenuation={8.8}
                    lineThickness={1.65}
                    baseRadius={0.28}
                    radiusStep={0.1}
                    scaleRate={0.045}
                    opacity={0.34}
                    blur={0}
                    noiseAmount={0.008}
                    rotation={18}
                    ringGap={1.22}
                    fadeIn={0.8}
                    fadeOut={0.62}
                    followMouse={false}
                    mouseInfluence={0}
                    hoverScale={1.02}
                    parallax={0.01}
                    clickBurst={false}
                    reducedMotion={reducedMotion}
                  />
                </div>
                <div className="absolute inset-x-5 bottom-5 rounded-[1rem] border border-brand-charcoal/10 bg-[#f6f2ec]/70 p-4 backdrop-blur-[2px]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand-ash">Quasar Series / Visual signature</p>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-brand-charcoal/70">
                    A restrained system for premium installers, engineers, and venue owners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-px border-t border-brand-charcoal/10 bg-brand-charcoal/10 md:grid-cols-3">
          {featurePillars.map((pillar) => (
            <article key={pillar.title} className="bg-brand-white px-6 py-6 md:px-8 md:py-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand-red">{pillar.title}</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-brand-charcoal/72">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-labelledby="pillars-title">
        <div className="flex flex-col gap-6 border-b border-brand-charcoal/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand-ash">Brand Core</p>
            <h2 id="pillars-title" className="mt-3 max-w-3xl font-heading text-4xl uppercase tracking-[0.04em] text-brand-charcoal md:text-6xl">
              Designed to disappear.
              <span className="block text-brand-red">Built to be heard.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-brand-charcoal/70 md:text-right">
            White space, sharp hierarchy, and a disciplined red accent system keep the focus on products, engineering, and conversion.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {productPreview.map((product) => (
            <article key={product.name} className="group rounded-[1.75rem] border border-brand-charcoal/12 bg-brand-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(35,31,32,0.06)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand-red">{product.type}</p>
              <h3 className="mt-6 font-heading text-4xl uppercase tracking-[0.03em] text-brand-charcoal">{product.name}</h3>
              <p className="mt-5 max-w-sm text-sm leading-7 text-brand-charcoal/70">{product.specs}</p>
              <div className="mt-8 h-px w-full bg-brand-charcoal/10" />
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-brand-ash transition-colors group-hover:text-brand-red">View details →</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-charcoal/10 bg-[#fbfbfa]" id="engineering" aria-labelledby="engineering-title">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 md:grid-cols-12 md:px-10 md:py-20">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand-red">Engineering Lab</p>
            <h2 id="engineering-title" className="mt-3 font-heading text-4xl uppercase tracking-[0.04em] text-brand-charcoal md:text-6xl">
              Acoustics first.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-brand-charcoal/70 md:text-base md:leading-8">
              Controlled listening rooms, measured voicing, and field-tested deployment are the backbone of the Atomik process.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-brand-charcoal/12 bg-brand-charcoal/10 md:grid-cols-2">
              {[
                ["Latency", "1.8 ms"],
                ["Headroom", "+21 dB"],
                ["Directivity", "90 x 60"],
                ["THD", "< 0.15%"],
              ].map(([label, value]) => (
                <div key={label} className="bg-brand-white p-6 md:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand-ash">{label}</p>
                  <p className="mt-4 font-heading text-4xl uppercase tracking-[0.03em] text-brand-charcoal md:text-5xl">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-brand-charcoal/10 pt-4">
              <a
                href="mailto:hello@atomikaudio.com?subject=Schedule%20a%20Lab%20Visit"
                className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-charcoal transition-colors hover:text-brand-red"
              >
                Schedule a visit
              </a>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand-ash">Anechoic chamber / India</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-charcoal/10 bg-brand-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand-ash">Atomik Audio © 2026</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/atomikaudio/" className="text-xs uppercase tracking-[0.2em] text-brand-charcoal transition-colors hover:text-brand-red">
              Instagram
            </a>
            <a href="https://www.youtube.com/@atomikaudio" className="text-xs uppercase tracking-[0.2em] text-brand-charcoal transition-colors hover:text-brand-red">
              YouTube
            </a>
            <a href="mailto:hello@atomikaudio.com" className="text-xs uppercase tracking-[0.2em] text-brand-charcoal transition-colors hover:text-brand-red">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
