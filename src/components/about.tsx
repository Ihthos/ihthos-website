import Link from "next/link";
import { FounderPlate } from "@/components/founder-plate";
import { Reveal } from "@/components/reveal";
import { ItemHeading, Section } from "@/components/section";
import { about } from "@/lib/site";

type AboutProps = {
  /** Off when a PageHero already carries this heading, so it is not repeated. */
  heading?: boolean;
  /** Off when a PageHero already carries the paragraph, so it is not repeated. */
  body?: boolean;
  /** Short form for the home page: the paragraph and the portrait slot. */
  preview?: boolean;
};

export function About({ heading = true, body = true, preview = false }: AboutProps) {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,20rem)] lg:items-start lg:gap-16">
        <div className="max-w-[64ch]">
          {heading ? (
            <Reveal>
              <p className="text-faint mb-4 text-[11px] tracking-[0.14em] uppercase">
                {about.eyebrow}
              </p>
              <h2 className="text-[1.9rem] leading-[1.08] tracking-[-0.025em] md:text-[2.6rem]">
                {about.heading}
              </h2>
            </Reveal>
          ) : null}

          {body ? (
            <Reveal delay={0.04} className={heading ? "mt-6" : ""}>
              <p className="text-muted text-base leading-relaxed md:text-[1.0625rem]">
                {about.body}
              </p>
            </Reveal>
          ) : null}

          {preview ? null : (
            <Reveal delay={0.08} className="mt-10">
              <ItemHeading
                as={heading ? "h3" : "h2"}
                className="text-ink text-[1.0625rem] tracking-tight"
              >
                {about.fitHeading}
              </ItemHeading>
              <p className="text-muted mt-3 max-w-[58ch] text-base leading-relaxed">
                {about.fitBody}
              </p>
            </Reveal>
          )}

          {preview ? (
            <Reveal delay={0.08} className="mt-8">
              <Link
                href="/about"
                className="nav-link text-ink inline-block text-sm font-medium"
                data-cursor="Read"
              >
                {about.link}
              </Link>
            </Reveal>
          ) : null}
        </div>

        <Reveal delay={0.12}>
          <FounderPlate className="aspect-[4/5]" />
        </Reveal>
      </div>
    </Section>
  );
}
