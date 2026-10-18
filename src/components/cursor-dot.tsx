"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { REDUCED_MOTION_QUERY } from "@/lib/reduced-motion";

const POINTER_QUERY = "(pointer: fine)";
/** The reference hides its cursor entirely below this width. */
const DESKTOP_QUERY = "(min-width: 769px)";

/** The dot is a 50px circle held at `rest`, opened to `open` over a word. */
const DOT_SIZE = 50;
const DOT_REST = 0.235;
const DOT_OPEN = 2.3;
const DOT_LINK = 0.15;

type Mode = "rest" | "text" | "link";

/** The dot is only wanted where a real pointer exists, motion is allowed and
    the viewport is wide enough — the same three gates the reference applies. */
function subscribeToPointer(onChange: () => void) {
  const queries = [POINTER_QUERY, DESKTOP_QUERY, REDUCED_MOTION_QUERY].map((q) =>
    window.matchMedia(q),
  );
  for (const media of queries) media.addEventListener("change", onChange);
  return () => {
    for (const media of queries) media.removeEventListener("change", onChange);
  };
}

function pointerWanted() {
  return (
    window.matchMedia(POINTER_QUERY).matches &&
    window.matchMedia(DESKTOP_QUERY).matches &&
    !window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

/** Server and first client render agree, so there is nothing to hydrate. */
const noPointer = () => false;

/**
 * The reference site's MouseFollower, rebuilt on Motion. A 50px disc sits at
 * `scale(.235)` and opens to `2.3` behind the word when it is over an element
 * carrying `data-cursor`, shrinking to `.15` over any link or button. It is
 * drawn in `exclusion` blend so it inverts whatever it crosses, and it never
 * replaces the native cursor — it is an addition, not a replacement.
 */
export function CursorDot() {
  const enabled = useSyncExternalStore(
    subscribeToPointer,
    pointerWanted,
    noPointer,
  );
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("rest");
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 55, mass: 0.9 });
  const sy = useSpring(y, { stiffness: 700, damping: 55, mass: 0.9 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const labelled = target?.closest?.("[data-cursor]");
      if (labelled) {
        setLabel(labelled.getAttribute("data-cursor") || null);
        setMode("text");
        return;
      }
      setLabel(null);
      setMode(target?.closest?.("a, button, [role='button']") ? "link" : "rest");
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const open = mode === "text";

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-[70] mix-blend-exclusion"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        className="block rounded-full backdrop-blur-[10px]"
        style={{
          width: DOT_SIZE,
          height: DOT_SIZE,
          marginLeft: -DOT_SIZE / 2,
          marginTop: -DOT_SIZE / 2,
        }}
        animate={{
          scale: open ? DOT_OPEN : mode === "link" ? DOT_LINK : DOT_REST,
          backgroundColor: open ? "rgba(163,163,163,0.3)" : "#ffffff",
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
      <motion.span
        className="font-display absolute top-0 left-0 flex h-9 w-9 items-center justify-center text-center text-[0.95rem] font-[250] leading-5 whitespace-nowrap text-white"
        style={{ marginLeft: -18, marginTop: -18 }}
        animate={{
          opacity: open ? 1 : 0,
          scale: open ? 1 : 0,
          rotate: open ? 0 : 10,
        }}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
