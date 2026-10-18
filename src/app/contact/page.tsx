import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { PageHero } from "@/components/page-hero";
import { contact, meta, ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: meta.contact.title },
  description: meta.contact.description,
  openGraph: {
    title: meta.contact.title,
    description: meta.contact.description,
    images: [ogImage],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero label="Contact" title={contact.heading} intro={contact.body} />
      <Contact heading={false} />
    </>
  );
}
