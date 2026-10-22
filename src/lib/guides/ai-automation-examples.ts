import { guidesIndex, type Guide } from "./types";

export const aiAutomationExamples: Guide = {
  slug: "ai-automation-examples",
  title: "AI Automation Examples for Small Businesses | Ihthos",
  description:
    "Six common patterns for automating small-business work, what changes in each, and where a person should stay involved. Illustrative patterns, not client results.",
  heading: "AI automation examples for small businesses",
  intro:
    "These are patterns, not case studies. Each one describes work that is common in a small business, what an automation could change, and the point where a person should still check the result. Which pattern fits depends on your process and the tools you already use.",
  published: "2026-10-21",
  updated: "2026-10-21",
  sections: [
    {
      heading: "1. Inquiry capture and follow-up",
      blocks: [
        {
          type: "paragraph",
          text: "An inquiry arrives by email or a website form. Someone reads it, copies the details into another system, decides who should respond, and later has to remember to follow up. When volume rises, a request can wait until somebody notices it.",
        },
        {
          type: "paragraph",
          text: "An automated version captures the details in one place, routes the inquiry to the right person, and prepares a follow-up at an agreed point. Simple decisions follow rules you define; anything unclear goes to a person.",
        },
        {
          type: "note",
          text: "Keep a person in the loop for: unclear or incomplete inquiries, high-value customers, complaints, and anything that commits the business to a price or a date.",
        },
      ],
    },
    {
      heading: "2. Copying details between systems",
      blocks: [
        {
          type: "paragraph",
          text: "The same name, address, reference number, or job detail is typed into a form, then a spreadsheet, then an invoicing tool. The copying is not difficult, but it occupies attention and creates a new opportunity for a typo each time.",
        },
        {
          type: "paragraph",
          text: "This is usually solved by an integration rather than AI: one system sends an agreed set of fields to another when a record is created or changed. AI is unnecessary because the rules are known.",
        },
        {
          type: "note",
          text: "Keep a person in the loop for: conflicts between systems, records that fail validation, and any field where a wrong value would affect money or a customer.",
        },
      ],
    },
    {
      heading: "3. Invoice and payment-status tracking",
      blocks: [
        {
          type: "paragraph",
          text: "Invoice details are re-entered from email into a spreadsheet, and answering whether an invoice has been paid means checking several places. The answer exists, but assembling it takes time each week.",
        },
        {
          type: "paragraph",
          text: "A workflow can collect invoice records, match them against payment information, and present a single view of what is outstanding. The step that improves most is usually consistency, not speed.",
        },
        {
          type: "note",
          text: "Keep a person in the loop for: disputed invoices, partial payments, refunds, and any decision to chase or escalate a customer.",
        },
      ],
    },
    {
      heading: "4. Summarising documents and messages",
      blocks: [
        {
          type: "paragraph",
          text: "Long email threads, supplier documents, or support requests take time to read before someone can decide what to do. An AI step can produce a short summary, extract key details, or suggest a category.",
        },
        {
          type: "paragraph",
          text: "This is the clearest case where AI adds something ordinary automation cannot: it handles unstructured text. It is also the case where review matters most, because a summary can be incomplete or confidently wrong.",
        },
        {
          type: "note",
          text: "Keep a person in the loop for: every summary that leads to a decision, a customer reply, or a record that others will rely on. Treat the summary as a draft, not a source of truth.",
        },
      ],
    },
    {
      heading: "5. Coordinating jobs, people, and equipment",
      blocks: [
        {
          type: "paragraph",
          text: "A dispatcher or coordinator tracks jobs across a whiteboard, spreadsheets, and phone messages. Knowing what is scheduled, what changed, and who is available depends on one person's memory and attention.",
        },
        {
          type: "paragraph",
          text: "A shared workflow can hold the schedule, notify the people involved when something changes, and flag conflicts such as double bookings or missing information. Automation handles the notification and record-keeping; scheduling judgment stays human.",
        },
        {
          type: "note",
          text: "Keep a person in the loop for: last-minute changes, priority conflicts, customer exceptions, and anything that affects safety or contractual commitments.",
        },
      ],
    },
    {
      heading: "6. Recurring reporting",
      blocks: [
        {
          type: "paragraph",
          text: "The same weekly or monthly update is assembled by pulling numbers from several places and formatting them again. The work is repetitive and easy to postpone.",
        },
        {
          type: "paragraph",
          text: "A workflow can gather the figures on a schedule, check that the expected sources were available, and prepare the report for review. The important design question is what should happen when a source is missing rather than quietly reporting a zero.",
        },
        {
          type: "note",
          text: "Keep a person in the loop for: explaining a change in the numbers, publishing anything external, and deciding what to do when data is incomplete.",
        },
      ],
    },
    {
      heading: "Where AI fits, and where it does not",
      blocks: [
        {
          type: "paragraph",
          text: "AI is useful for reading, sorting, summarising, and drafting text. It is a poor choice for moving a known set of fields between systems, applying a fixed rule, or producing a number that must be exact. Those are better handled by ordinary automation.",
        },
        {
          type: "paragraph",
          text: "A practical pattern is to combine them: deterministic steps move and validate data, an AI step interprets unstructured content, and a person reviews the result before it leaves the workflow.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Do these examples describe work Ihthos has delivered?",
      a: "No. They are general patterns chosen because they are common in small businesses. They are not client work, and no result, saving, or timeline is claimed for them.",
    },
    {
      q: "Which example should a small business start with?",
      a: "The process that repeats most often and has a clear owner. A workflow assessment looks at how the work runs today and identifies which change is worth doing first.",
    },
    {
      q: "Can these workflows run with the tools we already use?",
      a: "Often, if the tools expose a supported way to exchange data. The systems involved, their integration methods, and your account permissions are checked before any scope is promised.",
    },
  ],
  related: [
    guidesIndex,
    {
      label: "Is your process ready to automate?",
      href: "/guides/automation-readiness/",
    },
    {
      label: "What affects the cost of an automation project",
      href: "/guides/ai-automation-cost/",
    },
    {
      label: "Lead follow-up automation",
      href: "/guides/lead-follow-up-automation/",
    },
  ],
};
