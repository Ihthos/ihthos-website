/**
 * Long-form guides. Every claim here is either a description of the process
 * Ihthos follows or a general statement about how automation works. No client,
 * metric, price, timeline, location, or guarantee is asserted; the examples are
 * explicitly labelled as patterns rather than results.
 */

import type { FaqItem } from "./site";

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

const guidesIndex: GuideLink = { label: "All guides", href: "/guides/" };

export const guides: Guide[] = [
  {
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
    ],
  },
  {
    slug: "automation-readiness",
    title: "Is Your Process Ready to Automate? A Checklist | Ihthos",
    description:
      "Seven questions to ask before automating a business process, the signs a process is not ready yet, and what to bring to a first conversation.",
    heading: "Is your process ready to automate?",
    intro:
      "Automation works best when the process is understood well enough to describe, the rules are stable enough to repeat, and someone owns the outcome. This checklist is the set of questions we use to decide whether a change is worth scoping.",
    published: "2026-10-21",
    updated: "2026-10-21",
    sections: [
      {
        heading: "Seven questions to ask first",
        blocks: [
          {
            type: "paragraph",
            text: "A process does not need to be perfect to be automated, but it does need to be clear. If most of these answers are yes, a workflow assessment is likely to produce a useful scope.",
          },
          {
            type: "list",
            items: [
              "It repeats often enough that the time spent on it adds up.",
              "You can describe the steps in order, including who starts and who finishes.",
              "The decision rules are stable: similar inputs are handled the same way most of the time.",
              "The systems involved can be accessed, and you can grant the permissions the work requires.",
              "Exceptions can be named, so the workflow knows when to stop and ask a person.",
              "One person owns the process and is accountable for the result.",
              "You can say what a better version would change, even if you cannot put a number on it yet.",
            ],
          },
        ],
      },
      {
        heading: "Why each question matters",
        blocks: [
          {
            type: "paragraph",
            text: "Repetition determines whether the improvement is worth the effort. Step order determines whether a workflow can be built at all. Stable rules determine whether the process can run without a decision each time.",
          },
          {
            type: "paragraph",
            text: "Access determines what is technically possible. Named exceptions determine where review belongs. Ownership determines who approves the change and who handles a failure after handoff. A clear expected benefit keeps the project honest.",
          },
        ],
      },
      {
        heading: "Signs the process is not ready yet",
        blocks: [
          {
            type: "list",
            items: [
              "The process changes every few weeks, and the newest version is not written down.",
              "Different people handle the same case differently, and nobody can say which way is correct.",
              "No one is clearly responsible for the outcome.",
              "The underlying records are unreliable or duplicated across systems.",
              "The tools involved cannot be accessed or do not support any form of data exchange.",
              "The real goal is to avoid a staffing decision rather than to improve the work.",
            ],
          },
          {
            type: "paragraph",
            text: "None of these means the work can never be automated. They mean the first useful step is to clarify the process, fix the data, or agree on ownership. Automating an unclear process usually produces the same confusion faster.",
          },
        ],
      },
      {
        heading: "What to bring to a first conversation",
        blocks: [
          {
            type: "paragraph",
            text: "You do not need a specification. A short description of one process is enough to start.",
          },
          {
            type: "list",
            items: [
              "The task that keeps coming back, described in your own words.",
              "Where it starts and where it ends.",
              "The tools it touches, including spreadsheets, inboxes, and shared drives.",
              "Where it gets stuck or depends on one person's memory.",
              "Who needs to approve or review the result.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: "Does a process have to be fully documented before we start?",
        a: "No. The assessment walks through the process as it actually runs and writes down what matters. Existing documentation helps, but is not required.",
      },
      {
        q: "What if our process has many exceptions?",
        a: "That is common. Exceptions are identified during scoping so the workflow can stop and hand the case to a person instead of guessing.",
      },
      {
        q: "Should we automate the whole process at once?",
        a: "Usually not. A smaller first change is easier to review, easier to reverse, and gives the team something concrete to respond to.",
      },
    ],
    related: [
      guidesIndex,
      {
        label: "AI automation examples for small businesses",
        href: "/guides/ai-automation-examples/",
      },
      {
        label: "How Ihthos runs a project",
        href: "/process/",
      },
    ],
  },
  {
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
  },
  {
    slug: "custom-software-vs-off-the-shelf",
    title: "Custom Software vs Off-the-Shelf Tools | Ihthos",
    description:
      "How to decide between adapting an existing product, adding an integration, or building custom business software, and what to check before committing.",
    heading: "Custom software or an existing tool?",
    intro:
      "Custom software is the right answer less often than it is proposed. The decision should follow the process: what the work needs, what the current tools already do, and how much commitment a new system creates.",
    published: "2026-10-21",
    updated: "2026-10-21",
    sections: [
      {
        heading: "Start with the process, not the product",
        blocks: [
          {
            type: "paragraph",
            text: "Write down how the work actually runs: who starts it, what information arrives, which decisions are made, and where it waits. This description is the same whether the answer turns out to be a new tool, an integration, or a process change.",
          },
          {
            type: "paragraph",
            text: "A common mistake is to buy or build around the exceptions. If one unusual case drives the whole design, the everyday work ends up carrying complexity it does not need.",
          },
        ],
      },
      {
        heading: "When an existing product is the better answer",
        blocks: [
          {
            type: "list",
            items: [
              "Your process fits the product's normal workflow, or can fit with a setting rather than a workaround.",
              "The product covers the part of the work that matters most, not only a peripheral task.",
              "You can export your data without special effort.",
              "The team will actually use it, because it matches how they already work.",
            ],
          },
          {
            type: "paragraph",
            text: "Standard products carry lower cost and lower responsibility. They also improve without your involvement. Choosing one is not a compromise; it is often the more disciplined decision.",
          },
        ],
      },
      {
        heading: "When an integration is enough",
        blocks: [
          {
            type: "paragraph",
            text: "If the work is split between tools that each do their job well, the problem may be the handoff rather than the tools. Connecting them so records move without retyping can remove most of the friction without adding a new system.",
          },
          {
            type: "paragraph",
            text: "An integration is usually the correct first option when no single tool is missing a core capability and the information involved is already structured.",
          },
        ],
      },
      {
        heading: "When custom software may fit",
        blocks: [
          {
            type: "list",
            items: [
              "The process is central to the business rather than a side task.",
              "The work needs its own interface, data model, or sequence that existing products force into the wrong shape.",
              "Jobs, assets, or customers are tracked across several spreadsheets and messages, with no reliable view of what is waiting.",
              "The team has built habits around the software instead of the software supporting the work.",
            ],
          },
          {
            type: "paragraph",
            text: "Even then, the first step is a check: would a better handoff, a clearer process, or an integration solve the problem with less complexity? If yes, that comes first.",
          },
        ],
      },
      {
        heading: "What a custom build commits you to",
        blocks: [
          {
            type: "paragraph",
            text: "A custom application is a longer relationship than an integration. It needs an owner, a plan for changes, and a support arrangement. Before committing, agree on who owns the data and the system, how future changes are handled, and what happens if the arrangement ends.",
          },
          {
            type: "paragraph",
            text: "These are not reasons to avoid custom software. They are reasons to enter it with the terms written down rather than assumed.",
          },
        ],
      },
      {
        heading: "Questions to ask before choosing",
        blocks: [
          {
            type: "list",
            items: [
              "Which part of the process do the current tools handle well?",
              "Where exactly does work get stuck or get re-entered?",
              "Could a smaller change remove that friction?",
              "What would a new system need to connect to, and do those systems allow it?",
              "Who will own and maintain it after launch?",
              "What is the simplest version that would be genuinely useful?",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: "Do you recommend custom software for every process?",
        a: "No. A standard product or a single integration is often the better answer. Discovery decides which path fits, and recommends the smaller change when it solves the problem.",
      },
      {
        q: "Can custom software connect to our existing tools?",
        a: "That depends on the systems involved and whether they provide a supported way to exchange data. Integrations and access are mapped before a build is proposed.",
      },
      {
        q: "Do we own the software you build?",
        a: "Ownership, hosting, and maintenance terms are agreed per project and written into the scope. Nothing about them is assumed before scoping.",
      },
    ],
    related: [
      guidesIndex,
      {
        label: "Custom business software services",
        href: "/services/",
      },
      {
        label: "What affects the cost of an automation project",
        href: "/guides/ai-automation-cost/",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export const guidesPage = {
  title: "Guides | AI Automation for Small Businesses | Ihthos",
  description:
    "Practical guides on automating small-business processes: common patterns, readiness checks, project costs, and when custom software is the right choice.",
  label: "Guides",
  heading: "Working notes on automation and custom software.",
  intro:
    "Plain explanations of how these projects work: what can be automated, when a process is ready, what changes the cost, and how to choose between an existing tool and a custom build.",
} as const;
