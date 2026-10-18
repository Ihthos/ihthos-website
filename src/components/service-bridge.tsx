import { ButtonLink } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { bridge } from "@/lib/site";

/** The three moves the paragraph makes, drawn as a rail so the section has a
 *  shape to look at without pretending to be a product screenshot. */
const RAIL = ["See the process", "Find the friction", "Agree a change"] as const;

export function ServiceBridge() {
  return (
    <Section id="approach" className="bg-sunken">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
        <Reveal className="max-w-[46ch]">
          <p className="text-faint mb-4 text-[11px] tracking-[0.14em] uppercase">
            {bridge.eyebrow}
          </p>
          <h2 className="text-[1.9rem] leading-[1.08] tracking-[-0.025em] md:text-[2.6rem]">
            {bridge.heading}
          </h2>
          <p className="text-muted mt-5 text-base leading-relaxed md:text-[1.0625rem]">
            {bridge.body}
          </p>
          <ButtonLink
            href="/services"
            variant="secondary"
            className="mt-8"
            cursorLabel="Read"
          >
            {bridge.link}
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.08}>
          <ol className="border-line-strong relative ml-1 grid gap-8 border-l pl-8">
            {RAIL.map((label, index) => (
              <li key={label} className="relative">
                <span
                  aria-hidden
                  className={`absolute top-1.5 left-[-2.375rem] block h-2.5 w-2.5 rounded-full border ${
                    index === RAIL.length - 1
                      ? "border-signal bg-signal"
                      : "border-line-strong bg-base"
                  }`}
                />
                <p className="text-faint text-[10.5px] tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-ink mt-2 text-[1.0625rem] tracking-tight">{label}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
