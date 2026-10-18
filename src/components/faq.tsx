import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { faq } from "@/lib/site";

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeading title={faq.heading} />

      <div className="border-line mt-12 divide-y divide-line border-y">
        {faq.items.map((item, index) => (
          <Reveal key={item.q} delay={index * 0.04}>
            <details className="group">
              <summary className="text-ink hover:text-signal flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1.0625rem] transition-colors duration-150 [&::-webkit-details-marker]:hidden">
                <span className="max-w-[52ch]">{item.q}</span>
                <span
                  aria-hidden
                  className="text-faint group-open:text-signal mt-1 shrink-0 text-lg leading-none"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">&minus;</span>
                </span>
              </summary>
              <p className="text-muted max-w-[68ch] pb-6 text-[0.9375rem] leading-relaxed">
                {item.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
