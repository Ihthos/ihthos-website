import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbs, graph, webPage } from "@/lib/schema";
import { contact, meta, ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: meta.contact.title },
  description: meta.contact.description,
  alternates: { canonical: "/contact/" },
  openGraph: {
    url: "/contact/",
    title: meta.contact.title,
    description: meta.contact.description,
    images: [ogImage],
  },
};

const structuredData = graph([
  webPage({
    path: "/contact/",
    title: meta.contact.title,
    description: meta.contact.description,
    type: "ContactPage",
  }),
  breadcrumbs("/contact/", "Contact"),
]);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <PageHero label="Contact" title={contact.heading} intro={contact.body} />
      <Contact heading={false} />
    </>
  );
}
