import { brand, faq, meta, services, type FaqItem } from "./site";

/**
 * Every absolute URL in the structured-data graph derives from here. The
 * domain was confirmed by the owner on 2026-10-16, so the fallback is a real
 * address rather than an invented one; CI still passes NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ihthos.com";

export function absolute(path: string): string {
  return new URL(path, siteUrl).toString();
}

const ORG_ID = `${siteUrl}/#organization`;
const SITE_ID = `${siteUrl}/#website`;

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: brand.name,
  url: `${siteUrl}/`,
  logo: {
    "@type": "ImageObject",
    url: absolute("/icon.png"),
    width: 512,
    height: 512,
  },
  description: meta.home.description,
  email: brand.email,
  founder: {
    "@type": "Person",
    name: brand.founder,
  },
};

const website = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: `${siteUrl}/`,
  name: brand.name,
  description: meta.home.description,
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

/** Organization + WebSite nodes. Emitted once from the root layout. */
export const siteGraph = graph([organization, website]);

export type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

export function webPage({
  path,
  title,
  description,
  type = "WebPage",
}: {
  path: string;
  title: string;
  description: string;
  type?: PageType;
}) {
  return {
    "@type": type,
    "@id": `${absolute(path)}#webpage`,
    url: absolute(path),
    name: title,
    description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function breadcrumbs(
  path: string,
  label: string,
  parents: Array<{ name: string; path: string }> = [],
): Record<string, unknown> {
  const items = [
    { name: "Home", item: absolute("/") },
    ...parents.map((parent) => ({
      name: parent.name,
      item: absolute(parent.path),
    })),
    ...(path === "/" ? [] : [{ name: label, item: absolute(path) }]),
  ];
  return {
    "@type": "BreadcrumbList",
    "@id": `${absolute(path)}#breadcrumb`,
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

/**
 * One Service node per offer, all pointing at the single /services/ page.
 * No price, area, or availability is asserted because none is confirmed.
 */
export function serviceList() {
  return {
    "@type": "ItemList",
    "@id": `${absolute("/services/")}#services`,
    name: "Ihthos services",
    itemListElement: services.items.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${absolute("/services/")}#${service.id}`,
        name: service.title,
        description: service.summary,
        serviceType: service.title,
        provider: { "@id": ORG_ID },
        url: absolute("/services/"),
      },
    })),
  };
}

export function faqPage(path: string, items: FaqItem[] = faq.items) {
  return {
    "@type": "FAQPage",
    "@id": `${absolute(path)}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/** An editorial guide. Author and publisher are the confirmed public identities. */
export function article({
  path,
  title,
  description,
  published,
  updated,
}: {
  path: string;
  title: string;
  description: string;
  published: string;
  updated: string;
}) {
  return {
    "@type": "Article",
    "@id": `${absolute(path)}#article`,
    headline: title,
    description,
    datePublished: published,
    dateModified: updated,
    author: {
      "@type": "Person",
      name: brand.founder,
      url: absolute("/about/"),
    },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@id": `${absolute(path)}#webpage` },
    image: {
      "@type": "ImageObject",
      url: absolute("/opengraph-image.png"),
      width: 1200,
      height: 630,
    },
    inLanguage: "en",
  };
}

export function graph(nodes: unknown[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
