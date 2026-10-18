# Completion note

Internal. Companion to `notes/CONFIRMATIONS.md`, which holds every unverified
fact. Nothing here is a public claim.

## Verification (this session)

| Check | Command | Result |
|---|---|---|
| Types | `npx tsc --noEmit` | pass |
| Lint | `npm run lint` | pass, no output |
| Build | `npm run build` | pass, 12 static pages |
| Routes | `curl` all 8 | 200, exactly one `<h1>` each |
| Deck H1s | `curl` all 8, print `<h1>` | each matches the deck's page H1 verbatim |
| Placeholders | grep rendered HTML | 0 `CONFIRM:` / placeholder blocks / lorem |
| No-JS legibility | curl all 8, count inline `opacity:0` | 0 on every route |
| Footer order | curl `/`, read the Sections list | Services · How it works · Boundaries · About · Contact |
| Diagram focus | curl `/`, count `wf-node` / `tabindex="0"` | 6 and 6; every node carries `role="group"` + its own `aria-label` |
| Copy label | curl `/`, read the illustrative eyebrow | "Illustrative workflow — not a client result", the deck's exact dictated string |
| Cross-links | curl `/services` `/process` `/boundaries` `/contact` | each links to the other three (nav + footer, plus in-body) |
| Service glyphs | read `GLYPH_PATHS` in `services.tsx` | 5 keys — `assessment`, `automation`, `ai`, `ops`, `support` — matching the 5 service ids exactly; original hairline geometry, `aria-hidden`, no emoji |
| Internal links | crawl all 8 routes, request every `href` | every internal target 200; no broken route, no dead CTA; one `mailto:` and the `#main` skip link |
| Form states | read `contact.tsx` | per-field `required` + `aria-invalid` + `aria-describedby` + inline error text on empty/invalid submit, and an idle/sending/handoff status line |
| Legal framing | curl `/privacy` `/terms`, grep approval and compliance terms | 0 hits; `legal.ts` states outright that no legal review is claimed |
| Titles / descriptions | curl all 8, read `<title>` and meta description | unique per route |
| Social share | curl all 8, read `og:title` / `og:description` / `og:image` / `twitter:card` | `og:title` and `og:description` unique per route; `og:image` (1200×630, `alt="Ihthos"`) on every route; card is `summary_large_image` on all 8. Was generic (home title on all 7 inner routes) until this pass. |
| Heading order | curl all 8, extract the tag sequence | every route now 1 → 2 → 2…, no level skipped; class strings on the changed elements are byte-identical to before |
| Public TODO treatment | curl `/` `/about`, grep "Portrait to follow" / lorem | 0 hits on both; the founder plate now draws the editorial approach graphic (inputs → understood process → review → documented handoff). Removed this pass — brief fix #5. |
| About visual | curl `/` `/about`, grep the plate labels | "Understand the process", "Review with you", "Documented handoff" and "One process · one named owner" all present in SSR; 0 placeholder/portrait-caption hits. Rebuilt this pass — see below. |
| Layout at required widths | Playwright DOM measurement, 8 routes × 1440/1024/768/390 | 32 combinations: `documentElement.scrollWidth == clientWidth` on all; no clipped heading or paragraph; exactly one `<h1>` per route. Only intentional off-canvas ambience and the visually-hidden skip link were flagged by the raw box scan. |
| Reduced motion | Playwright, `reducedMotion: "reduce"` | Intro panel absent, first `[data-word]` opacity 1, H1 box painted (281px), body overflow `visible`. |
| No JavaScript | Playwright, `javaScriptEnabled: false` | `<noscript>` hides the intro (`display: none`), H1 box 281px, first word opacity 1. |
| Menu keyboard | Playwright at 390px | Opens with focus on Close inside `#site-menu`; 12 consecutive Tab presses all stay inside the dialog; Escape closes it (panel gone at 1.4s) and returns focus to the trigger. |
| Contact states | Playwright, no messages sent | Empty submit sets `aria-invalid=true` on name/email/process with all three inline errors; invalid email keeps its own error; no non-GET request is made. Valid submit keeps the page, writes the honest handoff status, and builds a `mailto:` with subject + body. |
| Landing intro never blocks | read `globals.css` `.intro-lock` rule, `intro-overlay.tsx` clock, `layout.tsx` watchdog | No `overflow:hidden` on the lock; timeline cut to 1.5 s (was 5 s); watchdog 3 s. Changed this pass — the brief forbids holding the offer behind an intro screen. |

Dev server: `http://127.0.0.1:3005/` (clean `.next`, restarted after the build).

## Live-site findings and motion spec (this pass)

The brief lists six findings against the previous live site (lines 17-22) and a
motion spec (lines 337-342). Verified against the running build:

| Brief item | State |
|---|---|
| H1 visible immediately, never animation-dependent | Met — SSR ships it visible; the pre-paint pattern hides it only when the animation will run. One `<h1>` per route. |
| No large empty regions / literal "Placeholder" media block | None. The 5 `placeholder` hits on `/contact` are HTML input `placeholder` attributes. |
| `[CONFIRM: …]` never public | 0 across all 8 routes. Unresolved facts stay in `notes/CONFIRMATIONS.md`. |
| Footer links Privacy and Terms | Met — `legalNav` (Privacy, Terms) sits after `footerNav`. |
| Desktop nav discoverable without the Menu | Met — the bar carries `nav` at `md:flex`; the overlay is `md:hidden`. |
| Review marquee/grid/pointer motion for noise | Reviewed. No marquee. Two motifs flagged, not removed — see `notes/CONFIRMATIONS.md` → "Copy-deck deviations". |

Motion spec, checked against the code:

| Spec | Code | State |
|---|---|---|
| Hero: 500–700 ms per step, 150 ms pauses, one hold, no loop | `workflow-diagram.tsx` moves are 0.50–0.60 s, beats 0.15 s, the gate holds 1.00 s; the sequence runs once on `whileInView` | Met |
| Section arrivals: 12–20 px, 350–500 ms, visible if JS fails | `reveal.tsx` — 16 px over 0.45 s, hidden only in a pre-paint layout effect | Met |
| Page transition: under 180 ms, never hides the new H1 | `template.tsx` — 0.18 s, hidden only pre-paint | Met |
| Landing intro must not hold the offer behind a screen | `intro-overlay.tsx` clock cut to 1.5 s (was 5 s); the `.intro-lock` rule no longer sets `overflow:hidden`, so the page scrolls throughout; the layout watchdog dropped to 3 s | **Shortened this pass** — the reference motif is kept, its page-holding behaviour is not |
| Diagram hover/focus: outline node + its connectors, 150–220 ms, keyboard parity | **Added this pass** — see below | Met |
| `prefers-reduced-motion` rules | Every animated component branches on the query: seven read `REDUCED_MOTION_QUERY` from `lib/reduced-motion.ts` directly, `workflow-diagram.tsx` uses its `prefersReducedMotion` / `subscribeToReducedMotion` helpers, and `layout.tsx` gates the intro with an inline `matchMedia("(prefers-reduced-motion: reduce)")`. The diagram ships its finished state. | Met |

### Diagram hover/focus (new)

The brief asks the diagram to outline the active node *and* its incoming and
outgoing connector, at 150–220 ms, with the same state on keyboard focus — and
the acceptance list requires the diagram to be keyboard-accessible with visible
focus. The diagram was a static `role="img"`; it now behaves as specified:

- The five spine steps and the "Needs a person" step are focusable
  (`tabIndex={0}`, `role="group"`, node name as `aria-label`). The three source
  chips stay out of the tab order — they are inputs, not steps.
- Hover and focus drive one shared highlight: a ring around the node plus its
  connectors thickening. `globals.css` `.wf-link` / `.wf-ring` run at 180 ms,
  inside the spec band.
- Neutral connectors brighten to `ink`; the two accent dashed connectors keep
  the accent and only thicken, so `signal` still means "a person decides"
  rather than turning into a hover tint.
- Pointer and focus are tracked separately, so a pointer sweeping past a node
  cannot clear the ring the keyboard put there.
- The ring is always rendered and only its opacity changes, so focus can never
  be invisible. The default outline is dropped on these groups because the ring
  replaces it.
- The group keeps the full narrative `aria-label`; the explanatory paragraph
  below the figure is unchanged. A no-JS visitor still gets the finished
  diagram, now with the same six focus stops.

### Menu keyboard focus (new)

The acceptance list requires the menu to be keyboard-accessible with visible
focus. The panel was already `role="dialog"` + `aria-modal`, closed on Escape,
and moved focus to the close button on open — but the scrimmed page behind it
stayed tabbable, so Tab could carry the focus ring onto content the visitor
cannot see, and closing dropped focus onto `<body>`.

`components/menu-overlay.tsx` now holds focus while the panel is open: the
trigger is remembered, focus lands on the close button, Tab/Shift+Tab wrap
within the panel's own focus stops (the scrim keeps `tabIndex={-1}`), and
closing returns focus to the trigger. `autoFocus` is replaced by an explicit
focus call in the same effect, so the trigger is captured before focus moves.
The FAQ needs no equivalent work — it is native `<details>`/`<summary>`, so it
is keyboard-operable with no JavaScript. Types and lint pass for the change; the
trap itself is a keyboard-only interaction and was not exercised headlessly.

### About visual (this pass)

The About slot was an empty concentric-ring plate, which read as unfinished work
and carried no information. No approved photograph exists (`media.founder.src`
is still `null`), so the slot was rebuilt in `components/founder-plate.tsx` as an
original editorial graphic of the approach itself:

- Three deliberately offset, dashed input chips — Form, Email, Notes — converge
  into one **Understand the process** node, then the single accent step
  **Review with you** (the step that needs a person), then **Documented
  handoff**, closing on the mono line `One process · one named owner`.
- It uses only the site's existing surface, line, ink and `signal` tokens; no
  synthetic person, client data, dashboard, or decorative network graph.
- The SVG is `role="img"` with one concise `aria-label` describing the sequence;
  the internal shapes are not exposed individually.
- The component still renders a real `next/image` when `media.founder.src` is
  set, so an approved portrait can replace the graphic without touching layout.

### Motion principles studied in the Flow mirror

Read `/home/ihthos/flowdigital-mirror` (`page.DY7m8sr3.js`,
`metadata.SD2bE4_q.css`, Alpine transition helper). What it actually does:

| Principle | Flow's implementation | Here |
|---|---|---|
| Short, controlled transitions | `transition-duration` 0.15–0.3s on colour, opacity, transform and shadow; Alpine `x-transition` defaults 75/150ms | 150–260ms for interaction states; 180ms diagram highlight |
| One easing family | `cubic-bezier(.4, 0, .2, 1)` plus Tailwind `ease-in/out`; no bounce or spring | Existing site curves (`EASE_MAIN`, `EASE_CCV`, `EASE_CUBIX`), transcribed from the brandium reference under the locked design direction |
| No scroll hijacking | No ScrollTrigger / scroll-jacking; content is present in the document and transitions on interaction | Section reveals are 16px/0.45s on first view; page transition 0.18s; no scroll lock |
| State changes stay legible | Transitions touch colour/opacity/shadow rather than layout | Hover/focus changes colour, underline sweep, and node rings; no layout-shifting animation |
| Graceful absence | Alpine-driven enhancements leave the markup readable without them | SSR ships visible content; hidden pre-state is applied pre-paint only when JS + motion are available |

The mirror supplied the interaction rhythm and restraint; the actual curves stay
the ones already locked for this site, so no new motion vocabulary was added.

## Progressive enhancement (no-JS / hydration-failure)

Animated content used to server-render `opacity:0`, so with JavaScript
disabled — or if a client error stopped hydration — the copy stayed invisible.
The brief requires content to be readable by default. Fixed by moving the
hidden pre-state out of SSR and into a pre-paint layout effect, the same
pattern the hero headline already used:

- `components/reveal.tsx` — visible in HTML, hidden before paint only when the
  reveal will run, animated in on first view.
- `app/template.tsx` — the route transition wrapper no longer gates the page
  behind motion.
- `components/hero.tsx` — eyebrow, body, both CTAs and the figure are visible by
  default; the arrival timing (5px / 1.5s, stagger 0.1) is unchanged.
- `components/workflow-diagram.tsx` — the server ships the finished diagram;
  it re-keys into the animated sequence on hydration. Variants untouched.

Reduced-motion visitors get the static, fully legible state on every path.


## Copy-deck compliance (this pass)

The inner pages were reusing the home page's short section preview as their own
H1 and intro. The deck words the two differently, so each page now carries its
own:

| Route | Deck H1, now rendered |
|---|---|
| `/services` | Improve the process your team repeats every day. |
| `/process` | A clear process from first conversation to handoff. |
| `/boundaries` | Useful automation needs clear limits. |
| `/about` | Make recurring work easier to run. |
| `/contact` | Tell us about the work that keeps coming back. (already correct) |

Supporting changes: `site.ts` gains `pageHero` (the four openers) and
`finalCta` (the home page's closing invitation, eyebrow and mailto fallback
included); `cta-band.tsx` gains an optional `eyebrow`; `about.tsx` gains an
optional `body` flag so `/about` does not print two different "Ihthos was
started by Kazi…" paragraphs; `about.closeHeading` was dead and is now the
`/about` band title. Footer links now use the deck's order
(`footerNav`), and the copyright reads exactly "© 2026 Ihthos.".

Deviations kept on purpose, with reasons, are listed in
`notes/CONFIRMATIONS.md` → "Copy-deck deviations". The material one: the deck's
contact success line claims the message was received, but no endpoint exists,
so the form says what it actually does instead.

## Routes

| Route | State |
|---|---|
| `/` | rebuilt — hero, pain, service bridge, services preview, process preview, boundaries preview, illustrative card, about preview, CTA |
| `/services` | rebuilt — hero + all five services, closing block, CTA |
| `/process` | rebuilt — hero + four stages, FAQ, CTA |
| `/boundaries` | rebuilt — hero + boundaries panel, FAQ, CTA |
| `/about` | rebuilt — hero + about, CTA |
| `/contact` | heading/metadata aligned; form unchanged |
| `/privacy` | new |
| `/terms` | new |

Supporting changes: `app/layout.tsx` (metadata), `app/globals.css`,
`app/template.tsx`, `components/site-footer.tsx`, `components/reveal.tsx`,
`components/services.tsx` (service glyphs), `components/animated-headline.tsx`,
`lib/site.ts`, `lib/legal.ts`, and the seven inner-route `page.tsx` metadata
blocks (each now declares its own `openGraph`, drawing the shared card from
`lib/site.ts` `ogImage`).

## Facts Kazi must confirm

All in `notes/CONFIRMATIONS.md`. Blocking eight: registered legal name;
whether "Ihthos" is a registered trading name; service area; that
`business@ihthos.com` exists and has been test-received; support commitments;
form storage destination; TWK Lausanne licence; legal review of Privacy and
Terms.

## Replaceable visual placeholders

Original designed assets, not final art. Each can be swapped without touching
layout.

| Asset | Where |
|---|---|
| Hero workflow animation | `components/hero.tsx` + `components/workflow-diagram.tsx` |
| Before/after workflow card | illustrative block on `/` (labelled "An example, not a client result") |
| Four-stage process graphic | `/process` |
| Service glyphs (5) | `components/services.tsx` `GLYPH_PATHS` |
| Founder portrait slot | `site.ts` → `media.founder.src` is `null`; `/about` draws the editorial approach graphic (inputs → understood process → review → documented handoff). Never generate a synthetic portrait. The visible "Portrait to follow" caption is gone; the replaceable-asset note lives only in `site.ts` and `notes/CONFIRMATIONS.md`. |
| OG image | `app/opengraph-image.png` — present and wired |
| Favicon | `app/icon.png` — present and wired |

### Heading hierarchy (new)

The brief asks for one H1 and a logical H2/H3 hierarchy. The inner pages broke
the second half: each opened with the `PageHero` H1 and then passed
`heading={false}` to its section, which suppressed the section's H2 — so the
service cards, process stages, about block, contact block and the closing
headings all rendered as H3 two levels under the H1 with nothing between them.

`components/section.tsx` gains `ItemHeading`, which draws the element the caller
names and changes nothing else, and the six affected sites now pass
`heading ? "h3" : "h2"`. The home page is untouched — it renders its section
headings, so its cards stay H3. Rendered class strings are byte-identical on
both levels, so no size, weight or spacing moved; only the tag and the outline
changed. Every route now reads `1 → 2 → 2 → …` with no skipped level.

## Acceptance checklist (brief, lines 377-388)

| Checklist line | State |
|---|---|
| Hero H1 renders immediately and exactly once; nothing depends on animation to be visible | Met — one `<h1>` per route, 0 inline `opacity:0` across all 8 |
| No huge blank sections, literal "Placeholder", `[CONFIRM: …]`, lorem ipsum, broken route, dead CTA, unhandled form state | Met — 0 `CONFIRM:`, every internal `href` 200, form validates empty and invalid input in place |
| Privacy and Terms linked; unverified legal text not presented as approved policy | Met — `legalNav` in the footer; no approval or compliance claim on either page |
| Legible and functional at desktop and phone widths | Met by construction (single-column → grid at `sm`/`md`/`lg`); **not verified in a browser this session** |
| Menu, form, cards and diagram keyboard-accessible with visible focus | Met — diagram 6 focus stops with an always-drawn ring; menu focus held in the panel; form fields are native with `:focus-visible`; cards carry no interactive elements |
| Reduced-motion mode usable | Met — every animated component reads `REDUCED_MOTION_QUERY` and ships its finished state |
| Animations modest; no dependency added without need | Met — no dependency added; motion spec numbers held (see the motion table above) |

## Canonical URL (deliberately deferred)

The brief's SEO list asks for a canonical URL. It is absent on all 8 routes on
purpose: `metadataBase` in `app/layout.tsx` is set only when
`NEXT_PUBLIC_SITE_URL` exists, so no unverified absolute URL is emitted while
the domain does not yet serve the site. `notes/CONFIRMATIONS.md` item 12 holds
this. Exporting the env var resolves both the canonical and the absolute
`og:image` URL; today `og:image` points at the dev host, which is expected.

## Remaining legal review

`src/lib/legal.ts` is written to the code's actual behaviour (no cookies, no
analytics, one `sessionStorage` flag, mailto-compose form). It has not been
reviewed by a lawyer. If an endpoint, CRM, or analytics is added, the same
commit must update both the copy and Privacy.

## Flagged, not actioned

`@phosphor-icons/react` `^2.1.10` is in `package.json` with no usages in
`src/`. Removing a dependency needs explicit confirmation, so it stays.

`--color-faint` (`#6a6a72`) measures 3.36–3.76:1 against the four surfaces, so
it clears the 3:1 large/UI bar but misses the 4.5:1 normal-text bar. It carries
33 small-text uses — mostly mono eyebrows, figcaptions and numbering, but also
the hero figure caption (`hero.tsx`, 13px), the illustrative caption and the
footer's legal line. The palette is transcribed from the reference and locked
by the standing direction, so the token is left alone; `#80808a` is the value
that clears 4.5:1 on all four surfaces if the owner wants AA for small text.
`ink` (16.1–18.0), `muted` (6.4–7.2) and `signal` (5.5–6.2) all pass.

## 2026-10-18 — First-paint visibility + custom business software

### First-paint visibility

The full-screen intro panel was removed, along with every pre-paint
`opacity: 0` state on essential content. What remains is motion that decorates
content already on screen.

| Change | File |
|---|---|
| Intro overlay, pre-paint gate script, `<noscript>` hide rule deleted | `src/app/layout.tsx`, deleted `src/components/intro-overlay.tsx`, `src/lib/intro-gate.ts` |
| `.intro-panel` / `.intro-skip` / `.intro-lock` CSS deleted | `src/app/globals.css` |
| Headline always visible; only the per-character accent pass remains | `src/components/animated-headline.tsx` |
| Hero entrance removed; static markup on first paint | `src/components/hero.tsx` |
| `Reveal` no longer touches opacity; it only lifts 16px into place | `src/components/reveal.tsx` |
| Route-transition fade/lift removed | deleted `src/app/template.tsx` |
| Workflow diagram ships finished and static; hover/focus remains | `src/components/workflow-diagram.tsx` |

Verified with a fresh browser context per route (empty storage), measuring
immediately after `domcontentloaded` and again after 2.6s, at 1440×900 and
390×844, plus JavaScript-disabled contexts:

- `/`, `/services`, `/about`, `/contact`: H1 chain opacity `1`, visibility
  `visible`, non-zero box, no `.intro-panel`, no horizontal overflow, in both
  initial and settled states.
- Home and About with JavaScript disabled: same result; body text length
  matches the JS-enabled render.
- H1 `aria-label` still carries the sentence while the visible split spans
  stay `aria-hidden`.
- Build, TypeScript, and ESLint pass.

### Custom business software

| Change | File |
|---|---|
| Offer copy, three illustrative examples, audience, simpler-option guidance, six-step discovery-to-delivery path, limits, CTA | `src/lib/site.ts` (`customSoftware`) |
| Sixth service entry `software` + glyph | `src/lib/site.ts`, `src/components/services.tsx` |
| Homepage section with original labelled diagram | `src/components/custom-software.tsx`, `src/app/page.tsx` |
| Services + home metadata mention custom software | `src/lib/site.ts` (`meta`) |

Deliberate omissions: the 50–80% time-reduction ambition is not in public copy;
no SaaS label; no client, product, metric, date, price, hosting, ownership, or
support claim; TutorFlow is not mentioned. Examples and the diagram are labelled
illustrative, and the diagram uses fictional sample data. The CTA links to the
existing `/contact` form, whose email-client disclosure is unchanged.

Checked at desktop and 390px: section present on `/`, six service entries on
`/services`, all three examples and the illustrative label render, CTA href is
`/contact`, no percentage or SaaS text on the home page, and the existing
contact form still composes a mailto rather than posting.

### Hero highlight + single-family type

| Change | File |
|---|---|
| Phrase-aware headline: azure panel behind "Less time" and "that matters" that wipes open from the left (clip-path, 1.15s, staggered), then a slower per-character accent pass (1.8s, 0.012 stagger, starts after the panels) | `src/components/animated-headline.tsx` |
| Mono family removed from every text element | all `src/**/*.tsx` (`font-mono` stripped), `src/app/globals.css` (`--font-mono` deleted), `src/app/layout.tsx` (Fragment Mono loader removed) |

The headline text is visible at first paint in every case. The panels ship
hidden and wipe open only when motion is allowed; with JavaScript off or under
reduced motion they render already complete. Verified on `/`, `/services`, `/about`,
`/contact`, `/process`, `/boundaries`, `/privacy`, `/terms`: zero elements
compute to a monospace family, and no route overflows horizontally. Build,
TypeScript, and ESLint pass.

### Still owner-only

Unchanged from the sections above: legal/trading names and service area,
creation and testing of `business@ihthos.com`, support commitments, form
storage, TWK Lausanne licence, approved founder photo, lawyer review of
Privacy/Terms, and `NEXT_PUBLIC_SITE_URL` for canonical URLs.
