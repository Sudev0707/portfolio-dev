import { useEffect, useRef } from "react";

type TrailStyle = "line" | "dots" | "particles" | "pixel";

interface MouseTrailProps {
  style?: TrailStyle;
  color?: string;
  colorEnd?: string;
  size?: number;
  length?: number;
  fadeSpeed?: number;
  smoothing?: number;
  blendMode?: GlobalCompositeOperation;
  className?: string;
}

interface TrailPoint {
  x: number;
  y: number;
  t: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const DEFAULT_COLOR = "oklch(0.62 0.14 162)";
const DEFAULT_COLOR_END = "oklch(0.72 0.12 162)";

export function MouseTrail({
  style = "line",
  color = DEFAULT_COLOR,
  colorEnd = DEFAULT_COLOR_END,
  size = 2,
  length = 40,
  fadeSpeed = 0.08,
  smoothing = 0.35,
  blendMode = "screen",
  className,
}: MouseTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const smoothRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<TrailPoint[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const addPoint = (x: number, y: number) => {
      smoothRef.current.x += (x - smoothRef.current.x) * smoothing;
      smoothRef.current.y += (y - smoothRef.current.y) * smoothing;

      pointsRef.current.push({
        x: smoothRef.current.x,
        y: smoothRef.current.y,
        t: performance.now(),
      });

      if (pointsRef.current.length > length) {
        pointsRef.current.splice(0, pointsRef.current.length - length);
      }

      if (style === "particles") {
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push({
            x: smoothRef.current.x,
            y: smoothRef.current.y,
            vx: (Math.random() - 0.5) * 2.5,
            vy: (Math.random() - 0.5) * 2.5,
            life: 1,
            maxLife: 0.4 + Math.random() * 0.6,
            size: size * (0.4 + Math.random() * 0.8),
          });
        }
        if (particlesRef.current.length > 120) {
          particlesRef.current.splice(0, particlesRef.current.length - 120);
        }
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      pointerRef.current = { x: e.clientX, y: e.clientY, active: true };
      addPoint(e.clientX, e.clientY);
    };

    const onPointerLeave = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    const drawLine = (pts: TrailPoint[], now: number) => {
      if (pts.length < 2) return;

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1];
        const p1 = pts[i];
        const age = (now - p1.t) / 1000;
        const alpha = Math.max(0, 1 - age / fadeSpeed / 10) * (i / pts.length);

        if (alpha <= 0) continue;

        const gradient = ctx.createLinearGradient(p0.x, p0.y, p1.x, p1.y);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, colorEnd);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.globalAlpha = alpha * 0.85;
        ctx.lineWidth = size * (0.4 + (i / pts.length) * 0.6);
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
      }
    };

    const drawDots = (pts: TrailPoint[], now: number) => {
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const age = (now - p.t) / 1000;
        const alpha = Math.max(0, 1 - age / fadeSpeed / 10) * (i / pts.length);

        if (alpha <= 0) continue;

        const t = i / Math.max(pts.length - 1, 1);
        ctx.beginPath();
        ctx.fillStyle = t < 0.5 ? color : colorEnd;
        ctx.globalAlpha = alpha * 0.9;
        ctx.arc(p.x, p.y, size * (0.5 + t * 0.5), 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawParticles = (now: number) => {
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02;
        p.life -= 0.016 / p.maxLife;

        if (p.life <= 0) return false;

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.globalAlpha = p.life * 0.7;
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });

      drawDots(pointsRef.current.slice(-8), now);
    };

    const drawPixel = (pts: TrailPoint[], now: number) => {
      const pixelSize = Math.max(4, size * 3);

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const age = (now - p.t) / 1000;
        const alpha = Math.max(0, 1 - age / fadeSpeed / 10) * (i / pts.length);

        if (alpha <= 0) continue;

        const snapX = Math.floor(p.x / pixelSize) * pixelSize;
        const snapY = Math.floor(p.y / pixelSize) * pixelSize;

        ctx.fillStyle = i % 2 === 0 ? color : colorEnd;
        ctx.globalAlpha = alpha * 0.8;
        ctx.fillRect(snapX, snapY, pixelSize - 1, pixelSize - 1);
      }
    };

    const tick = (now: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalCompositeOperation = blendMode;

      const pts = pointsRef.current.filter((p) => now - p.t < fadeSpeed * 10000);
      pointsRef.current = pts;

      switch (style) {
        case "dots":
          drawDots(pts, now);
          break;
        case "particles":
          drawParticles(now);
          break;
        case "pixel":
          drawPixel(pts, now);
          break;
        default:
          drawLine(pts, now);
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [style, color, colorEnd, size, length, fadeSpeed, smoothing, blendMode]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-50 ${className ?? ""}`}
    />
  );
}
