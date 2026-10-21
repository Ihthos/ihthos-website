import type { Metadata } from "next";
import { About } from "@/components/about";
import { Boundaries } from "@/components/boundaries";
import { CtaBand } from "@/components/cta-band";
import { CustomSoftware } from "@/components/custom-software";
import { Hero } from "@/components/hero";
import { Illustrative } from "@/components/illustrative";
import { JsonLd } from "@/components/json-ld";
import { Pain } from "@/components/pain";
import { Process } from "@/components/process";
import { ServiceBridge } from "@/components/service-bridge";
import { Services } from "@/components/services";
import { graph, webPage } from "@/lib/schema";
import { finalCta, meta } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: meta.home.title },
  description: meta.home.description,
  alternates: { canonical: "/" },
};

const structuredData = graph([
  webPage({
    path: "/",
    title: meta.home.title,
    description: meta.home.description,
  }),
]);

/**
 * The home page argues in one order: the work that keeps coming back, the
 * principle behind the fix, the services, the process, the limits, a worked
 * example, who is behind it, then the single ask. Each section is the short
 * form and links to its own page for the long one.
 */
export default function Home() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Hero />
      <Pain />
      <ServiceBridge />
      <Services preview />
      <CustomSoftware />
      <Process preview />
      <Boundaries preview />
      <Illustrative />
      <About preview />
      <CtaBand
        eyebrow={finalCta.eyebrow}
        title={finalCta.heading}
        body={finalCta.body}
        secondary={finalCta.secondary}
      />
    </>
  );
}
