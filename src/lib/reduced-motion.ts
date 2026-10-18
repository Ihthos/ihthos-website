/**
 * The one reduced-motion read for the client components. Motion's own
 * `useReducedMotion` is not hydration-safe — it initialises from
 * `matchMedia` during the first client render, so its value differs from the
 * server's `null` and mismatch. Every component here reads the query through
 * `useSyncExternalStore` with an explicit server snapshot instead.
 */
export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}
