import { guidesIndex, type Guide } from "./types";

export const dataEntryAutomation: Guide = {
  slug: "data-entry-automation",
  title: "Data Entry Automation for Small Businesses | Ihthos",
  description:
    "What data entry automation can remove, which cases still need a person, and how to choose between an integration, document extraction, and a workflow.",
  heading: "Data entry automation for small businesses",
  intro:
    "Copying information from one place to another is often the easiest part of a process to automate, provided the source and the destination are clear. The difficult part is not the copying. It is deciding which records are reliable enough to move without review.",
  published: "2026-10-21",
  updated: "2026-10-21",
  sections: [
    {
      heading: "What the work usually looks like",
      blocks: [
        {
          type: "paragraph",
          text: "The same details are typed into a form, then a spreadsheet, then an invoicing or scheduling tool. Sometimes the information arrives in an email and is re-entered by hand. None of the individual steps is hard, but each one consumes attention and adds another chance for a typo.",
        },
        {
          type: "paragraph",
          text: "The cost is rarely visible in a single task. It shows up as delays, as records that disagree with each other, and as work that only one person knows how to do.",
        },
      ],
    },
    {
      heading: "Three kinds of data entry, three different fixes",
      blocks: [
        {
          type: "paragraph",
          text: "Not every copying problem calls for the same approach. Matching the fix to the shape of the data keeps the project smaller.",
        },
        {
          type: "list",
          items: [
            "Structured data moving between systems: names, dates, reference numbers, and amounts that already exist as fields. An integration is usually the right answer, because the rules are known and no interpretation is required.",
            "Data entering from a form or a fixed template: the workflow should validate it before saving, so a missing field or an impossible date is caught at the source rather than in three systems later.",
            "Data arriving as documents, PDFs, or messages: this is where extraction or AI can help, and also where a person should check the result before it affects money, a customer, or a legal record.",
          ],
        },
      ],
    },
    {
      heading: "Where automation stops and a person starts",
      blocks: [
        {
          type: "paragraph",
          text: "A useful rule is to automate the transfer and the checks you can describe, and to hand over anything that requires judgement. That line should be written down during scoping rather than discovered during a busy week.",
        },
        {
          type: "list",
          items: [
            "Conflicting records: two systems disagree and the correct value is not obvious.",
            "Low-confidence extraction: a document is unclear, rotated, handwritten, or missing a page.",
            "Financial or contractual effects: anything that creates an invoice, changes a price, or commits the business.",
            "Customer-facing corrections: an error that a customer would see or be affected by.",
          ],
        },
        {
          type: "note",
          text: "A failed transfer should stop and raise an error, not quietly write a blank or a zero. Silent fallbacks create records that look complete but are wrong.",
        },
      ],
    },
    {
      heading: "What to fix before automating",
      blocks: [
        {
          type: "paragraph",
          text: "Automation carries existing problems forward faster. Before building anything, check the three things that most often undermine a data project.",
        },
        {
          type: "list",
          items: [
            "Duplicates: the same customer, job, or invoice exists more than once, with no agreed way to tell which record is current.",
            "Unreliable fields: a column that is sometimes a date, sometimes a note, or is left blank when the value was unknown.",
            "Unclear ownership: nobody can say which system is the source of truth for a given field.",
          ],
        },
        {
          type: "paragraph",
          text: "These are usually worth fixing first. Cleaning up the data is less exciting than adding a model, but it is what makes the transfer dependable.",
        },
      ],
    },
    {
      heading: "A sensible first step",
      blocks: [
        {
          type: "paragraph",
          text: "Start with one recurring transfer that has a clear source and destination, and one person who can describe the rules. Keep the first version narrow enough that the result can be checked against a week of manual work.",
        },
        {
          type: "paragraph",
          text: "If that works, the same pattern can be extended to the next transfer. If it does not, the disagreement is visible early, while the change is still small enough to adjust.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can data entry be automated when a tool has no API?",
      a: "Sometimes. Many systems offer a supported import, export, or scheduled file exchange even without an API. Which method is available is checked for each system before any scope is promised, and no workaround is assumed in advance.",
    },
    {
      q: "Is data entry automation the same as AI?",
      a: "No. Most data entry automation is ordinary automation: known fields moving between systems under fixed rules. AI becomes relevant when the source is unstructured, such as a document or an email that has to be read and interpreted.",
    },
    {
      q: "What happens when the data is wrong?",
      a: "The workflow should reject, flag, or hold the record rather than pass it on. How failures are surfaced, and who sees them, is part of the design rather than an afterthought.",
    },
  ],
  related: [
    guidesIndex,
    {
      label: "AI automation examples for small businesses",
      href: "/guides/ai-automation-examples/",
    },
    {
      label: "What is workflow integration?",
      href: "/guides/workflow-integration-explained/",
    },
  ],
};
