/**
 * The reference site's easing vocabulary, transcribed from its GSAP
 * CustomEase declarations. These are the site's own curves, not inventions:
 *
 *   main  — its global default (`gsap.defaults({ ease: "main" })`), used for
 *           nearly every transition that is not a word or line reveal.
 *   ccv   — drives its SplitText word/line reveals (`.splitword`, `.splitter`,
 *           `.splitchar`). The one that makes text arrive on a rush.
 *   cubix — the menu's panel wipe and the header's own reveals.
 *
 * Kept here so components share one source instead of each re-declaring a
 * bezier tuple. CSS mirrors live in globals.css as `--ease-main` / `--ease-ccv`
 * for the two that appear in stylesheets.
 */
export type Ease = [number, number, number, number];

/** The site-wide default. */
export const EASE_MAIN: Ease = [0.65, 0.01, 0.05, 0.99];

/** Word / line reveals. */
export const EASE_CCV: Ease = [0.9, 0.1, 0.1, 1];

/** The menu panel wipe. */
export const EASE_CUBIX: Ease = [0.3, 0.1, 0.02, 1];

/** The menu overlay's entrance. */
export const EASE_CCC: Ease = [0.5, 0.1, 0.01, 0.99];
