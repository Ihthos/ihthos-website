import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { terms } from "@/lib/legal";
import { brand, meta, ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: meta.terms.title },
  description: meta.terms.description,
  alternates: { canonical: "/terms/" },
  openGraph: {
    url: "/terms/",
    title: meta.terms.title,
    description: meta.terms.description,
    images: [ogImage],
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHero label={terms.label} title={terms.title} intro={terms.intro} />

      <Section id="terms">
        <div className="max-w-[68ch]">
          {terms.sections.map((section, index) => (
            <Reveal
              key={section.heading}
              delay={index * 0.04}
              className={index > 0 ? "mt-10" : ""}
            >
              <h2 className="text-ink text-[1.0625rem] tracking-tight">
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-muted mt-3 text-[0.9375rem] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          ))}

          <Reveal delay={0.08} className="border-line mt-12 border-t pt-8">
            <h2 className="text-ink text-[1.0625rem] tracking-tight">
              {terms.contactHeading}
            </h2>
            <p className="text-muted mt-3 text-[0.9375rem] leading-relaxed">
              {terms.contactBody}
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="nav-link text-ink mt-4 inline-block text-[0.8125rem]"
            >
              {brand.email}
            </a>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
