"use client";

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
    <main className="bg-brand-charcoal text-brand-white">
      <section className="relative isolate overflow-hidden border-b border-brand-white/10" id="top">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(237,29,36,0.22),transparent_38%),radial-gradient(circle_at_80%_80%,rgba(160,159,159,0.2),transparent_40%)]" />
        <div className="absolute inset-0 opacity-80" aria-hidden="true">
          <MagicRings
            color="#ed1d24"
            colorTwo="#a09f9f"
            ringCount={6}
            speed={0.68}
            attenuation={9}
            lineThickness={1.8}
            baseRadius={0.32}
            radiusStep={0.1}
            scaleRate={0.08}
            opacity={0.85}
            blur={0}
            noiseAmount={0.03}
            rotation={0}
            ringGap={1.34}
            fadeIn={0.7}
            fadeOut={0.55}
            followMouse={false}
            mouseInfluence={0.14}
            hoverScale={1.06}
            parallax={0.03}
            clickBurst={false}
            reducedMotion={reducedMotion}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/30 via-brand-charcoal/66 to-brand-charcoal" />

        <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-8">
          <a href="#top" className="font-heading text-xl uppercase tracking-[0.22em] text-brand-white">
            Atomik Audio
          </a>
          <nav aria-label="Primary" className="hidden gap-8 md:flex">
            <a href="#products" className="text-sm text-brand-ash transition-colors hover:text-brand-white">
              Systems
            </a>
            <a href="#engineering" className="text-sm text-brand-ash transition-colors hover:text-brand-white">
              Engineering
            </a>
            <a href="#contact" className="text-sm text-brand-ash transition-colors hover:text-brand-white">
              Contact
            </a>
          </nav>
        </header>

        <div className="relative mx-auto grid min-h-[74svh] w-full max-w-6xl items-end px-6 pb-16 pt-16 md:grid-cols-12 md:gap-8 md:px-8 md:pb-20">
          <div className="md:col-span-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-brand-ash">
              Pro Audio, Reframed
            </p>
            <h1 className="max-w-4xl font-heading text-5xl uppercase leading-[0.9] tracking-[0.04em] text-brand-white sm:text-6xl md:text-7xl lg:text-8xl">
              Precision Sound
              <span className="block text-brand-red">Built In Time.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-brand-ash md:text-lg">
              Atomik Audio builds high-performance systems engineered for clarity, control, and musical impact in real-world spaces.
            </p>
            <div className="mt-10 flex flex-wrap gap-4" id="contact">
              <a
                href="mailto:hello@atomikaudio.com"
                className="inline-flex items-center justify-center rounded-full border border-brand-red bg-brand-red px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand-white transition-all duration-300 hover:bg-transparent"
              >
                Request A Demo
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full border border-brand-white/30 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand-white transition-colors duration-300 hover:border-brand-white"
              >
                Explore Systems
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8" aria-labelledby="pillars-title">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-red">Brand Core</p>
        <h2 id="pillars-title" className="mt-3 font-heading text-4xl uppercase tracking-[0.06em] text-brand-white md:text-5xl">
          Digital Accuracy.
          <span className="block text-brand-ash">Analog Soul.</span>
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featurePillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-brand-white/12 bg-brand-white/3 p-6 backdrop-blur-sm">
              <h3 className="font-heading text-2xl uppercase tracking-[0.05em] text-brand-white">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-brand-ash">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-brand-white/10 bg-[#1a1919]" id="products" aria-labelledby="products-title">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-red">Featured Systems</p>
          <h2 id="products-title" className="mt-3 font-heading text-4xl uppercase tracking-[0.06em] text-brand-white md:text-5xl">
            Quasar Series Snapshot
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {productPreview.map((product) => (
              <article key={product.name} className="rounded-2xl border border-brand-white/12 bg-brand-charcoal p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-red">{product.type}</p>
                <h3 className="mt-5 font-heading text-3xl uppercase tracking-[0.05em] text-brand-white">{product.name}</h3>
                <p className="mt-5 text-sm leading-7 text-brand-ash">{product.specs}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="engineering" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8" aria-labelledby="engineering-title">
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-red">Engineering Lab</p>
            <h2 id="engineering-title" className="mt-3 font-heading text-4xl uppercase tracking-[0.06em] text-brand-white md:text-5xl">
              Anechoic Accuracy
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-ash md:max-w-xl">
              Every system is shaped through controlled listening, measurement discipline, and iterative voicing inside Atomik&apos;s dedicated acoustic spaces.
            </p>
            <a
              href="mailto:hello@atomikaudio.com?subject=Schedule%20a%20Lab%20Visit"
              className="mt-8 inline-flex items-center text-sm font-semibold uppercase tracking-[0.16em] text-brand-white transition-colors hover:text-brand-red"
            >
              Schedule A Visit
            </a>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-brand-white/12 bg-gradient-to-br from-[#232021] to-[#131313] p-8 md:col-span-6">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand-red/20 blur-2xl" />
            <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-brand-ash/30 blur-2xl" />
            <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-brand-ash">Signal Integrity Readout</p>
            <dl className="relative mt-8 grid grid-cols-2 gap-6">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-brand-ash">Latency</dt>
                <dd className="mt-2 font-heading text-4xl uppercase text-brand-white">1.8 ms</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-brand-ash">Headroom</dt>
                <dd className="mt-2 font-heading text-4xl uppercase text-brand-white">+21 dB</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-brand-ash">Directivity</dt>
                <dd className="mt-2 font-heading text-4xl uppercase text-brand-white">90 x 60</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-brand-ash">THD</dt>
                <dd className="mt-2 font-heading text-4xl uppercase text-brand-white">&lt; 0.15%</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-sm text-brand-ash">Atomik Audio © 2026. Precision systems for modern listening spaces.</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/atomikaudio/" className="text-sm text-brand-ash transition-colors hover:text-brand-white">
              Instagram
            </a>
            <a href="https://www.youtube.com/@atomikaudio" className="text-sm text-brand-ash transition-colors hover:text-brand-white">
              YouTube
            </a>
            <a href="mailto:hello@atomikaudio.com" className="text-sm text-brand-ash transition-colors hover:text-brand-white">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
