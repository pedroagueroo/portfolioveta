"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;
  suffix?: string;
  duration?: number;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUp({ end, suffix = "", duration = 1400 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(end);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        if (end === 0) {
          setCount(0);
          return;
        }

        const startTime = performance.now();
        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          setCount(Math.round(easeOutCubic(progress) * end));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  // Spanish locale: 1200 → "1.200"
  const formatted = count >= 1000 ? count.toLocaleString("es-AR") : String(count);

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}{suffix}
    </span>
  );
}
