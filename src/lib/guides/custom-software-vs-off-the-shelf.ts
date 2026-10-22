import { guidesIndex, type Guide } from "./types";

export const customSoftwareVsOffTheShelf: Guide = {
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
    {
      label: "What is workflow integration?",
      href: "/guides/workflow-integration-explained/",
    },
  ],
};
