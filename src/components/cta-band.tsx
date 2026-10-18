import { ButtonLink } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { cta } from "@/lib/site";

type CtaBandProps = {
  /** Mono micro-label above the headline. Omitted on inner pages. */
  eyebrow?: string;
  /** Optional editorial overline for the band's headline. */
  title?: string;
  body?: string;
  secondary?: { href: string; label: string };
};

/**
 * The closing beat on every inner page. It repeats one job, not one layout:
 * restate the invitation, then offer exactly two ways forward. The primary
 * action is a high-contrast neutral because the accent is reserved for
 * boundary and human-review meaning.
 */
export function CtaBand({
  eyebrow,
  title = "Tell us what your team would like to improve.",
  body = "Share a short description of the process, the tools involved, and what a better result would look like. We will review it and tell you whether automation is a sensible fit.",
  secondary,
}: CtaBandProps) {
  return (
    <section className="border-line bg-sunken relative overflow-hidden border-t">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgb(255_255_255/0.05),transparent_70%)] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_auto] lg:items-end lg:gap-16">
          <Reveal className="max-w-[48ch]">
            {eyebrow ? (
              <p className="text-faint mb-4 text-[11px] tracking-[0.14em] uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-[1.9rem] leading-[1.08] tracking-[-0.025em] text-balance md:text-[2.6rem]">
              {title}
            </h2>
            <p className="text-muted mt-5 text-base leading-relaxed md:text-[1.0625rem]">
              {body}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact" cursorLabel="Get in touch">
              {cta.primary}
            </ButtonLink>
            {secondary ? (
              <ButtonLink
                href={secondary.href}
                variant="secondary"
                cursorLabel="Read"
              >
                {secondary.label}
              </ButtonLink>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
