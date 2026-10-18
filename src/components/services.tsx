import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { ItemHeading, Section, SectionHeading } from "@/components/section";
import { services } from "@/lib/site";

/** The three parts every service card carries, so a card can never collapse
 *  into a bare feature list. Labels are neutral; the accent stays free for
 *  the human-review meaning it is reserved for. */
const PARTS = [
  { key: "problem", label: "The problem" },
  { key: "does", label: "What we do" },
  { key: "deliverable", label: "What you receive" },
] as const;

/**
 * A drawn mark per service, so a card is findable by shape before it is read.
 * Original geometry in one hairline weight, in the muted ink rather than the
 * accent — the accent stays reserved for human review. Decorative only, so it
 * is hidden from assistive tech and the title carries the meaning.
 */
const GLYPH_PATHS: Record<string, string[]> = {
  assessment: [
    "M3 6h9M3 10h9M3 14h5",
    "M14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9",
    "M17.8 17.8 21 21",
  ],
  automation: [
    "M4 9.75h5.5v5.5H4zM14.5 9.75H20v5.5h-5.5z",
    "M9.5 12.5h5",
    "M12.6 10.7 14.6 12.5l-2 1.8",
  ],
  ai: [
    "M4 4.5h16v15H4z",
    "M7.5 9h9M7.5 13h4.5",
    "M15.5 15.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4",
  ],
  ops: ["M3 4.5h18l-7.5 8.6v7.4l-3-2v-5.4z"],
  support: ["M3 20h4.5v-4.5H12V11h4.5V6.5H21"],
  software: [
    "M3.5 4.5h17v15h-17z",
    "M3.5 8.5h17",
    "M6.5 12h5M6.5 15h8",
  ],
};

function Glyph({ id }: { id: string }) {
  const paths = GLYPH_PATHS[id] ?? GLYPH_PATHS.assessment;
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-faint h-6 w-6"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

type ServicesProps = {
  /** Off when a PageHero already introduced the page, so no heading repeats. */
  heading?: boolean;
  /** Short form for the home page: three services, one line each. */
  preview?: boolean;
};

export function Services({ heading = true, preview = false }: ServicesProps) {
  const items = preview ? services.items.slice(0, 3) : services.items;

  if (preview) {
    return (
      <Section id="services">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.heading}
          intro={services.intro}
        />

        <ul className="border-line mt-12 grid border-t md:grid-cols-3">
          {items.map((service, index) => (
            <Reveal
              as="li"
              key={service.id}
              delay={index * 0.06}
              className={`border-line py-7 md:px-8 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : "md:pl-0"
              }`}
            >
              <Glyph id={service.id} />
              <ItemHeading
                as={heading ? "h3" : "h2"}
                className="text-ink mt-5 text-[1.0625rem] tracking-tight"
              >
                {service.title}
              </ItemHeading>
              <p className="text-muted mt-3 max-w-[40ch] text-sm leading-relaxed">
                {service.summary}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10">
          <ButtonLink href="/services" variant="secondary" cursorLabel="Read">
            See all six services
          </ButtonLink>
        </Reveal>
      </Section>
    );
  }

  return (
    <Section id="services">
      {heading ? (
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.heading}
          intro={services.intro}
        />
      ) : null}

      <ul className={heading ? "mt-12" : "border-line border-t"}>
        {items.map((service, index) => (
          <Reveal
            as="li"
            key={service.id}
            delay={index * 0.05}
            className="border-line border-t py-9 md:py-10"
          >
            <div className="grid gap-6 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-12">
              <div>
                <Glyph id={service.id} />
                <ItemHeading
                  as={heading ? "h3" : "h2"}
                  className="text-ink mt-5 text-lg tracking-tight"
                >
                  {service.title}
                </ItemHeading>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {service.summary}
                </p>
              </div>

              <dl className="grid gap-5">
                {PARTS.map((part) => (
                  <div
                    key={part.key}
                    className="grid gap-1.5 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-6"
                  >
                    <dt className="text-faint text-[10.5px] tracking-[0.12em] uppercase sm:pt-1">
                      {part.label}
                    </dt>
                    <dd className="text-muted max-w-[62ch] text-[0.9375rem] leading-relaxed">
                      {service[part.key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </ul>

      {!heading ? (
        <Reveal className="mt-12 max-w-[52ch]">
          <ItemHeading
            as="h2"
            className="text-[1.5rem] leading-tight tracking-[-0.02em] md:text-[1.9rem]"
          >
            Nothing here fits?
          </ItemHeading>
          <p className="text-muted mt-4 text-base leading-relaxed">
            These are starting points, not a menu. Describe the process and we
            will say honestly whether a change is worth making.
          </p>
          <Link
            href="/contact"
            className="nav-link text-ink mt-6 inline-block text-sm font-medium"
            data-cursor="Talk"
          >
            Describe your process
          </Link>
        </Reveal>
      ) : null}
    </Section>
  );
}
