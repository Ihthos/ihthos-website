import { guidesIndex, type Guide } from "./types";

export const aiAutomationCost: Guide = {
  slug: "ai-automation-cost",
  title: "What Affects AI Automation Project Cost | Ihthos",
  description:
    "The factors that shape the cost of an AI automation or integration project, and how to compare proposals when there is no fixed price list.",
  heading: "What affects the cost of an AI automation project",
  intro:
    "Two projects that sound similar can differ a great deal in effort. The difference usually comes from the process, the systems it touches, and how much review it needs, not from the AI model itself.",
  published: "2026-10-21",
  updated: "2026-10-21",
  sections: [
    {
      heading: "The factors that shape the work",
      blocks: [
        {
          type: "paragraph",
          text: "There is no single price for automation because there is no single process. These are the variables that change the amount of work most often.",
        },
        {
          type: "list",
          items: [
            "Scope: one step, a full handoff, or a workflow that crosses several teams.",
            "Integrations: how many systems are involved and whether each one offers a supported way to exchange data.",
            "Access: whether the necessary accounts and permissions can be granted, and how long that takes.",
            "Data quality: whether records are consistent enough to rely on, or need cleaning first.",
            "Review requirements: which outputs need a person to check, and how that check fits the existing routine.",
            "Exceptions: how many cases fall outside the normal path and what the workflow must do with them.",
            "Testing: whether ordinary cases, missing information, and failure paths are checked before handoff.",
            "Documentation and support: what is written down, and who owns the workflow afterwards.",
          ],
        },
      ],
    },
    {
      heading: "Why the AI model is rarely the main cost",
      blocks: [
        {
          type: "paragraph",
          text: "Using a language model is usually a small part of the effort. Most of the work is understanding the process, connecting systems, deciding what counts as correct, and testing what happens when something goes wrong.",
        },
        {
          type: "paragraph",
          text: "This is also why an AI step added to a weak process does not fix the process. It adds another component that has to be reviewed and maintained.",
        },
      ],
    },
    {
      heading: "How to compare proposals",
      blocks: [
        {
          type: "paragraph",
          text: "When quotes differ, compare what each one includes rather than the total alone. A lower number may leave out integration work, testing, documentation, or the review steps the workflow needs to be safe.",
        },
        {
          type: "list",
          items: [
            "Is the process described in the same way in each proposal?",
            "Which systems are in scope, and which integrations are included?",
            "What is explicitly left manual?",
            "How are exceptions and failures handled?",
            "What is delivered: a configured workflow, documentation, a handover session?",
            "What happens after handoff, and is support a separate agreement?",
          ],
        },
      ],
    },
    {
      heading: "Why Ihthos does not publish a price list",
      blocks: [
        {
          type: "paragraph",
          text: "A published price would either be wrong for most processes or push every project toward the same shape. Instead, the first conversation is used to understand the process, then a defined scope and a price against that scope are proposed in writing.",
        },
        {
          type: "paragraph",
          text: "If the work is not worth doing, or a simpler change would solve it, that is also a valid outcome of the conversation.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can you estimate a cost before a first conversation?",
      a: "Not reliably. The process, the systems involved, and the review requirements change the amount of work too much. A short description of the process is enough to arrange a scoped proposal.",
    },
    {
      q: "Is ongoing support included?",
      a: "No. Monitoring, maintenance, and future changes require a named owner and an agreed scope, so they are discussed as a separate, explicit arrangement.",
    },
    {
      q: "What makes a project cost more than expected?",
      a: "Usually systems without a supported integration path, inconsistent records that need cleaning, or review requirements discovered late. Scoping exists to surface those before build.",
    },
  ],
  related: [
    guidesIndex,
    {
      label: "Is your process ready to automate?",
      href: "/guides/automation-readiness/",
    },
    {
      label: "Custom software or an existing tool?",
      href: "/guides/custom-software-vs-off-the-shelf/",
    },
  ],
};
