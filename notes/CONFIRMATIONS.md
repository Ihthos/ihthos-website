# Confirmations before publishing

Internal only. Nothing in this file may be rendered on a public page until the
owner has verified the item and the value has been moved into `src/lib/site.ts`
(or `src/lib/legal.ts`).

The site is written so that every unverified fact is absent rather than
guessed. Where a page needs a value that does not exist yet, it either omits
the block or shows a designed placeholder that makes no claim.

## Blocking — must be settled before the site goes public

| # | Item | Where it lands when confirmed | Notes |
|---|------|-------------------------------|-------|
| 1 | Registered legal name of the business | `site.ts` → footer bottom line | Currently absent. The footer shows only "© 2026 Ihthos." |
| 2 | Whether "Ihthos" is a registered trading name | `site.ts` → `brand` | If it is trading-only, the footer should say so plainly. |
| 3 | Service area (countries, regions, or "remote only") | `site.ts` → footer or About | Currently absent. Do not imply a location, country, or company size until it is true. |
| 4 | `business@ihthos.com` created and test-received | already in `site.ts` → `brand.email` | The address is published on Contact, Privacy, Terms, and the footer. It must be a live, monitored mailbox. |
| 5 | Support commitments (what is included after handoff, response expectations) | `site.ts` → `boundaries` / `services` | The site currently states that support scope is agreed separately and explicitly, which is true and safe. Do not add response-time promises. |
| 6 | Form storage destination (or a decision to keep the mailto handoff) | `components/contact.tsx` | The form currently composes an email in the visitor's client and posts nowhere. If an endpoint or CRM is added, the status copy must change and Privacy must be updated. |
| 7 | TWK Lausanne licence | `globals.css` @font-face + `public/fonts/` | Commercial font, wired locally and kept out of git. Must not ship publicly on an unlicensed build. Until licensed, the Work Sans fallback is what deploys. |
| 8 | Legal review of Privacy and Terms | `src/lib/legal.ts` | Written to be accurate to the code (no cookies set, no analytics, session storage flag only). Not reviewed by a lawyer. |

## Needed for the site to feel complete

| # | Item | Where it lands | Notes |
|---|------|----------------|-------|
| 9 | Founder photograph | `site.ts` → `media.founder.src` + `public/media/` | The About page draws a designed, faceless plate until then. Never generate a synthetic portrait. |
| 10 | Founder bio details (background, years, prior work) | `site.ts` → `about` | Only what can be evidenced. The current text names the founder and the approach, nothing else. |
| 11 | Client references or testimonial | a new section | Only with written permission from the client. The site has no testimonials block on purpose. |
| 12 | Canonical site URL | `NEXT_PUBLIC_SITE_URL` env + `layout.tsx` `metadataBase` | `brand.domain` is `ihthos.com`, supplied 2026-10-16. `metadataBase` stays unset until the domain actually serves the site, so no unverified absolute URL is emitted. |
| 13 | Open Graph image | `src/app/opengraph-image.png` | Present and wired: the brand's `link_preview_1200x630_transparent.png`, copied in 2026-10-16. Confirm it is the mark to use for shared links. |
| 14 | Favicon / app icons | `src/app/icon.png` | Present and wired, from `favicon_full_wordmark_512x512_transparent.png`. There is no separate `apple-icon`, so iOS home-screen saves fall back to the favicon. |
| 15 | Analytics decision | `layout.tsx` | None installed today. If added, Privacy's "no analytics" sentence must change in the same commit. |
| 16 | Business hours / timezone for replies | `site.ts` → `contact` | Optional. Only if the mailbox is actually watched on that schedule. |

## Open scope questions from the copy deck

- **Pricing.** The FAQ answers "depends on the workflow, connected systems,
  access required, and support scope" and nothing more. Add a range only if the
  owner is willing to publish one.
- **Industries.** The site deliberately does not name a sector. Keep it that way
  until a real engagement makes the claim true.
- **Metrics.** No time-saving, revenue, accuracy, or volume figure appears
  anywhere. Do not add one without a measurement behind it.
- **Supported systems.** The site names none. `services` says compatibility is
  confirmed per engagement before anything is promised, which is true. Add a
  list only once it is a real, current capability.
- **Standard deliverables.** Each service states what you receive for that
  service; there is no company-wide "standard deliverable set" claim. Add one
  only if it is accurate across engagements.
- **Retention / data practices.** Outside the "what this site stores in your
  browser" section, no retention period or client-data practice is published.
  `legal.ts` records this as deliberately absent; add it only with a real policy.

## Copy-deck deviations (reported, not silently rewritten)

The deck says to use its words verbatim "unless a factual conflict is found;
report that conflict rather than silently rewriting". These are the conflicts
and the connective copy it does not specify.

- **Contact form status copy.** The deck gives a server-received flow —
  success "Thanks for sharing the details. Your message has been received.",
  failure "Your message did not send. Please try again or email
  business@ihthos.com.", loading "Sending…". No endpoint or storage destination
  is confirmed (blocking item 6), so claiming receipt would be a false claim.
  The site composes an email in the visitor's client and says exactly that. If
  an endpoint lands, restore the deck wording and update Privacy in the same
  commit.
- **Second closing band on inner pages.** Each inner page already ends with its
  deck-specified closing block (`servicesClose`, `process.close*`,
  `boundaries.close*`). The shared `CtaBand` then repeats a second closing. Kept
  because the brief asks to preserve existing working components; flagged for
  the owner to decide whether to drop it.
- **Connective copy the deck does not supply.** `CtaBand`'s default title and
  body, and the closing paragraph in `components/boundaries.tsx`. The home page
  overrides the band with the deck's final CTA. None of these make a claim.
- **`about.closeHeading` / `about.closeCta`** were defined but never rendered;
  `about.closeHeading` is now wired to the `/about` band title.
- **The cursor-follow dot.** The motion spec lists "cursor-follow effects" under
  *Avoid*, and the live-site findings ask for the pointer motion to be reviewed
  for noise. `components/cursor-dot.tsx` is kept because it is transcribed from
  the reference site's own MouseFollower (the standing direction: type and
  animation come from the reference), it never replaces the native cursor, and
  its `data-cursor` labels add affordance rather than decoration. It is gated to
  fine pointers, desktop widths and non-reduced-motion. If the owner reads the
  *Avoid* line strictly, removing it is a one-line change: drop
  `<CursorDot />` from `app/layout.tsx`.
- **The landing intro panel.** `components/intro-overlay.tsx` covers the first
  paint for up to 5 s on a first visit, which is in tension with "the hero H1
  appears immediately". It is kept because it is the reference's landing beat
  and it is already fenced: it runs once per tab (`sessionStorage`), is skipped
  under reduced motion, and is hidden by `<noscript>` when JavaScript is off, so
  the page underneath is always rendered. Flagged so the owner can decide
  whether the delay is wanted at all.

## Deliberate omissions (do not "fix" these)

- No `[CONFIRM: …]` markers remain on any public page; they are replaced by
  either correct copy or a designed placeholder.
- The workflow diagram and the before/after card are labelled
  "An example, not a client result". The label is not decoration; removing it
  would turn an illustration into a claim.
- The footer has no service-area line and no registered-name line, because
  neither is confirmed.
