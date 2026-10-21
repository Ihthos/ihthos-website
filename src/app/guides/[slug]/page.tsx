import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { getGuide, guides } from "@/lib/guides";
import { article, breadcrumbs, faqPage, graph, webPage } from "@/lib/schema";
import { brand, ogImage } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return {
    title: { absolute: guide.title },
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}/` },
    openGraph: {
      type: "article",
      url: `/guides/${guide.slug}/`,
      title: guide.title,
      description: guide.description,
      publishedTime: guide.published,
      modifiedTime: guide.updated,
      images: [ogImage],
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const path = `/guides/${guide.slug}/`;
  const structuredData = graph([
    webPage({
      path,
      title: guide.title,
      description: guide.description,
    }),
    breadcrumbs(path, guide.heading, [
      { name: "Guides", path: "/guides/" },
    ]),
    article({
      path,
      title: guide.title,
      description: guide.description,
      published: guide.published,
      updated: guide.updated,
    }),
    faqPage(path, guide.faq),
  ]);

  return (
    <>
      <JsonLd data={structuredData} />
      <PageHero label="Guide" title={guide.heading} intro={guide.intro} />

      <Section id="guide">
        <article className="max-w-[68ch]">
          {guide.sections.map((section, index) => (
            <Reveal
              key={section.heading}
              delay={index * 0.04}
              className={index > 0 ? "mt-12" : ""}
            >
              <h2 className="text-ink text-[1.25rem] leading-snug tracking-tight">
                {section.heading}
              </h2>
              {section.blocks.map((block, blockIndex) => {
                if (block.type === "paragraph") {
                  return (
                    <p
                      key={blockIndex}
                      className="text-muted mt-4 text-[0.9375rem] leading-relaxed"
                    >
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "note") {
                  return (
                    <p
                      key={blockIndex}
                      className="border-signal-dim text-muted mt-5 border-l-2 pl-4 text-[0.9375rem] leading-relaxed"
                    >
                      {block.text}
                    </p>
                  );
                }
                return (
                  <ul
                    key={blockIndex}
                    className="text-muted mt-4 grid gap-2 text-[0.9375rem] leading-relaxed"
                  >
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden className="text-faint mt-2 shrink-0">
                          &mdash;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              })}
            </Reveal>
          ))}

          <Reveal delay={0.08} className="border-line mt-14 border-t pt-10">
            <h2 className="text-ink text-[1.25rem] leading-snug tracking-tight">
              Questions
            </h2>
            <div className="border-line mt-5 divide-y divide-line border-y">
              {guide.faq.map((item) => (
                <details key={item.q} className="group">
                  <summary className="text-ink hover:text-signal flex cursor-pointer list-none items-start justify-between gap-6 py-4 text-[1rem] transition-colors duration-150 [&::-webkit-details-marker]:hidden">
                    <span className="max-w-[52ch]">{item.q}</span>
                    <span
                      aria-hidden
                      className="text-faint group-open:text-signal mt-1 shrink-0 text-lg leading-none"
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">&minus;</span>
                    </span>
                  </summary>
                  <p className="text-muted max-w-[68ch] pb-5 text-[0.9375rem] leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <h2 className="text-faint text-[10.5px] tracking-[0.16em] uppercase">
              Related
            </h2>
            <ul className="mt-4 grid gap-2">
              {guide.related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link text-ink text-[0.9375rem]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-muted mt-10 text-[0.9375rem] leading-relaxed">
              Have a process this applies to?{" "}
              <a href={`mailto:${brand.email}`} className="nav-link text-ink">
                Describe it to {brand.name}
              </a>
              .
            </p>
          </Reveal>
        </article>
      </Section>
    </>
  );
}
