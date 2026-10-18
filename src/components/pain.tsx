import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { pain } from "@/lib/site";

/**
 * The problem statement. Four symptoms an owner recognises, stated as
 * symptoms rather than accusations, so nothing here depends on a client
 * result the business cannot yet show.
 */
export function Pain() {
  return (
    <Section id="pain">
      <SectionHeading
        eyebrow={pain.eyebrow}
        title={pain.heading}
        intro={pain.intro}
      />

      <ul className="border-line mt-12 grid border-t md:grid-cols-2">
        {pain.items.map((item, index) => (
          <Reveal
            as="li"
            key={item.title}
            delay={(index % 2) * 0.06}
            className={`border-line py-7 md:px-8 ${index > 0 ? "border-t" : ""} ${
              index % 2 === 1 ? "md:border-l" : "md:pl-0"
            } ${index === 1 ? "md:border-t-0" : ""} ${index % 2 === 0 ? "md:pr-8" : ""}`}
          >
            <p className="text-ink text-[0.9375rem] font-medium">{item.title}</p>
            <p className="text-muted mt-2 max-w-[46ch] text-sm leading-relaxed">
              {item.body}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
