import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { privacy } from "@/lib/legal";
import { brand, meta, ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: meta.privacy.title },
  description: meta.privacy.description,
  openGraph: {
    title: meta.privacy.title,
    description: meta.privacy.description,
    images: [ogImage],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero label={privacy.label} title={privacy.title} intro={privacy.intro} />

      <Section id="privacy">
        <div className="max-w-[68ch]">
          {privacy.sections.map((section, index) => (
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
              {privacy.contactHeading}
            </h2>
            <p className="text-muted mt-3 text-[0.9375rem] leading-relaxed">
              {privacy.contactBody}
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
