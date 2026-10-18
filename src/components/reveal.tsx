"use client";

import { animate, useInView } from "motion/react";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  type ReactNode,
  type Ref,
} from "react";
import { EASE_CCV } from "@/lib/motion";
import { REDUCED_MOTION_QUERY } from "@/lib/reduced-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to hold before this element starts. Used to stagger lists. */
  delay?: number;
  /** Render as a list item instead of a div so it stays semantically valid. */
  as?: "div" | "li";
};

/**
 * Lifts its child 16px into place the first time it scrolls into view, over
 * 0.45s on the reference site's `ccv` curve. Opacity is never touched: the
 * content is fully legible on first paint, before hydration, with JavaScript
 * off, and for reduced-motion visitors. Only the resting offset is written in
 * a layout effect, so the motion enhances visible content rather than being
 * what reveals it. Staggering is left to each caller's `delay`.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -10% 0px",
  });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    el.style.transform = "translateY(16px)";

    return () => {
      el.style.transform = "";
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    const controls = animate(el, { y: 0 }, { duration: 0.45, ease: EASE_CCV, delay });

    return () => controls.stop();
  }, [inView, delay]);

  if (as === "li") {
    return (
      <li ref={ref as Ref<HTMLLIElement>} className={className}>
        {children}
      </li>
    );
  }
  return (
    <div ref={ref as Ref<HTMLDivElement>} className={className}>
      {children}
    </div>
  );
}
