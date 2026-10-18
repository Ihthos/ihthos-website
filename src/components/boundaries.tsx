import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ItemHeading, Section, SectionHeading } from "@/components/section";
import { boundaries } from "@/lib/site";

type BoundariesProps = {
  /** Off when a PageHero already introduced the page, so no heading repeats. */
  heading?: boolean;
  /** Short form for the home page: the first three commitments, then a link. */
  preview?: boolean;
};

/**
 * The site's signature section, and its honest stand-in for a testimonials
 * block: a contract panel whose single accent rule marks the whole set as
 * limits rather than marketing. Client results cannot be published yet, so
 * what is offered instead is what the work will and will not do.
 */
export function Boundaries({ heading = true, preview = false }: BoundariesProps) {
  const items = preview ? boundaries.items.slice(0, 3) : boundaries.items;

  return (
    <Section id="boundaries" className="bg-sunken">
      {heading ? (
        <SectionHeading
          eyebrow={boundaries.eyebrow}
          title={boundaries.heading}
          intro={boundaries.intro}
        />
      ) : null}

      <div
        className={`border-line-strong bg-base overflow-hidden rounded-[10px] border ${
          heading ? "mt-12" : ""
        }`}
      >
        <div className="bg-signal h-[3px]" aria-hidden />
        <ul className="grid md:grid-cols-2">
          {items.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(index % 2) * 0.06}
              className={`border-line px-6 py-7 ${index > 0 ? "border-t" : ""} ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index === 1 ? "md:border-t-0" : ""}`}
            >
              <p className="text-ink text-[0.9375rem] font-medium">{item.title}</p>
              <p className="text-muted mt-2 max-w-[46ch] text-sm leading-relaxed">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>

      {preview ? (
        <Reveal className="mt-10 max-w-[52ch]">
          <Link
            href="/boundaries"
            className="nav-link text-ink inline-block text-sm font-medium"
            data-cursor="Read"
          >
            {boundaries.link}
          </Link>
        </Reveal>
      ) : (
        <Reveal className="mt-12 max-w-[52ch]">
          <ItemHeading
            as={heading ? "h3" : "h2"}
            className="text-[1.5rem] leading-tight tracking-[-0.02em] md:text-[1.9rem]"
          >
            {boundaries.closeHeading}
          </ItemHeading>
          <p className="text-muted mt-4 text-base leading-relaxed">
            Describe the process and the part that needs judgment. We will say
            where a person should stay in the loop.
          </p>
          <Link
            href="/contact"
            className="nav-link text-ink mt-6 inline-block text-sm font-medium"
            data-cursor="Talk"
          >
            {boundaries.closeCta}
          </Link>
        </Reveal>
      )}
    </Section>
  );
}
