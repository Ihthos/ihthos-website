/**
 * Ambient background stack.
 *
 * Four fixed, non-interactive layers behind the page: a blueprint grid, a
 * soft white glow, film grain, and a vignette that pulls the edges back to
 * base. Deliberately colourless so the accent keeps its meaning.
 */
export function Ambience() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="ambient-grid absolute inset-0" />
      {/*
       * Centred with `left` rather than a transform: the drift animation owns
       * `transform`, and a translate class would be overridden by it.
       */}
      <div className="ambient-drift absolute -top-[22rem] left-[calc(50%-34rem)] h-[42rem] w-[68rem] rounded-full bg-white/[0.05] blur-[150px]" />
      <div className="ambient-grain absolute inset-0 opacity-[0.035] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[radial-gradient(125%_80%_at_50%_0%,transparent_38%,var(--color-base)_100%)]" />
    </div>
  );
}
