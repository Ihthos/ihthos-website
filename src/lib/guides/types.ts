import type { FaqItem } from "../site";

export type GuideBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string };

export type GuideSection = {
  heading: string;
  blocks: GuideBlock[];
};

export type GuideLink = { label: string; href: string };

export type Guide = {
  slug: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  /** First publication and last substantive edit, ISO dates. */
  published: string;
  updated: string;
  sections: GuideSection[];
  faq: FaqItem[];
  related: GuideLink[];
};

export const guidesIndex: GuideLink = { label: "All guides", href: "/guides/" };
