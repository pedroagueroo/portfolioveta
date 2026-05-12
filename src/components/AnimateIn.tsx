"use client";

import { useEffect, useRef, useState, CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Scroll-triggered fade + slight slide animation.
 *
 * States:
 *   idle    → no inline styles (SSR + elements already in viewport)
 *   hidden  → opacity 0 / translateY 20px  (below fold, waiting)
 *   visible → opacity 1 / translateY 0     (entered viewport, animating)
 *
 * Rule: NEVER place this directly inside a grid/flex container as an item.
 * Always wrap the grid container itself, not its children.
 */
export default function AnimateIn({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "visible">("idle");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    const { top } = el.getBoundingClientRect();
    if (top < window.innerHeight * 0.92) return; // already visible on load

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined =
    state === "hidden"
      ? {
          opacity: 0,
          transform: "translateY(18px)",
          transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
        }
      : state === "visible"
      ? {
          opacity: 1,
          transform: "translateY(0)",
          transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
        }
      : undefined;

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
