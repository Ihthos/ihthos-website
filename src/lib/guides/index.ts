/**
 * Long-form guides. Every claim here is either a description of the process
 * Ihthos follows or a general statement about how automation works. No client,
 * metric, price, timeline, location, or guarantee is asserted; the examples are
 * explicitly labelled as patterns rather than results.
 */

import { aiAutomationCost } from "./ai-automation-cost";
import { aiAutomationExamples } from "./ai-automation-examples";
import { automationReadiness } from "./automation-readiness";
import { customSoftwareVsOffTheShelf } from "./custom-software-vs-off-the-shelf";
import { dataEntryAutomation } from "./data-entry-automation";
import { leadFollowUpAutomation } from "./lead-follow-up-automation";
import type { Guide } from "./types";
import { workflowIntegrationExplained } from "./workflow-integration-explained";

export type { Guide, GuideBlock, GuideLink, GuideSection } from "./types";

export const guides: Guide[] = [
  aiAutomationExamples,
  automationReadiness,
  aiAutomationCost,
  customSoftwareVsOffTheShelf,
  dataEntryAutomation,
  leadFollowUpAutomation,
  workflowIntegrationExplained,
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export const guidesPage = {
  title: "Guides | AI Automation for Small Businesses | Ihthos",
  description:
    "Practical guides on automating small-business processes: common patterns, readiness checks, project costs, data entry, follow-up, integrations, and when custom software is the right choice.",
  label: "Guides",
  heading: "Working notes on automation and custom software.",
  intro:
    "Plain explanations of how these projects work: what can be automated, when a process is ready, what changes the cost, and how to choose between an existing tool and a custom build.",
} as const;
