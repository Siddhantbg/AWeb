"use client";

import { useEffect, useRef } from "react";

type WavefieldCanvasProps = {
  mode: "flat" | "alive";
  intensified: boolean;
};

const lerp = (start: number, end: number, amount: number) => start + (end - start) * amount;

export default function WavefieldCanvas({ mode, intensified }: WavefieldCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let amplitude = mode === "alive" ? 42 : 9;
    let glow = mode === "alive" ? 14 : 4;
    let brightness = mode === "alive" ? 1 : 0.58;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) {
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (timeMs: number) => {
      const time = timeMs * 0.0007;

      const targetAmplitude = mode === "alive" ? (intensified ? 56 : 46) : intensified ? 12 : 8;
      const targetGlow = mode === "alive" ? (intensified ? 22 : 16) : intensified ? 7 : 4;
      const targetBrightness = mode === "alive" ? (intensified ? 1.16 : 1.02) : intensified ? 0.68 : 0.54;

      amplitude = lerp(amplitude, targetAmplitude, 0.05);
      glow = lerp(glow, targetGlow, 0.08);
      brightness = lerp(brightness, targetBrightness, 0.06);

      context.clearRect(0, 0, width, height);

      const lineCount = 34;
      const segments = 220;
      const horizon = height * 0.64;
      const lineGap = Math.max(1.9, height / 92);

      for (let line = 0; line < lineCount; line += 1) {
        const depth = line / (lineCount - 1);
        const compression = 1 - depth * 0.72;
        const baseline = horizon + line * lineGap;

        context.beginPath();

        for (let segment = 0; segment <= segments; segment += 1) {
          const xRatio = segment / segments;
          const x = xRatio * width;
          const centered = xRatio - 0.5;

          const envelope = Math.exp(-Math.pow(centered * 3.35, 2));
          const macro = Math.sin(xRatio * 18 + time * (0.85 + depth * 0.7) + depth * 9.2);
          const micro = Math.sin(xRatio * 46 - time * 1.28 + depth * 3.8) * 0.38;
          const ridge = Math.sin(xRatio * 6.2 - time * 0.34) * 0.23;
          const verticalWarp = Math.sin(time * 0.5 + depth * 8.4) * 0.12;

          let y = baseline + envelope * (macro + micro + ridge + verticalWarp) * amplitude * compression;

          if (mode === "flat") {
            // Quantize in flat mode so movement feels stiffer and less organic.
            y = Math.round(y / 1.45) * 1.45;
          }

          if (segment === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }

        const alphaBase = 0.14 + (1 - depth) * 0.52;
        const alpha = alphaBase * brightness;

        context.lineWidth = 1;
        context.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        context.shadowColor = mode === "alive" ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)";
        context.shadowBlur = glow * (1 - depth * 0.62);
        context.stroke();
      }

      context.shadowBlur = 0;
      context.strokeStyle = `rgba(255,255,255,${mode === "alive" ? 0.78 : 0.5})`;
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(0, horizon + lineCount * lineGap + 4);
      context.lineTo(width, horizon + lineCount * lineGap + 4);
      context.stroke();

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    animationFrame = window.requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(resize);
    const parent = canvas.parentElement;
    if (parent) {
      resizeObserver.observe(parent);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, [mode, intensified]);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
}