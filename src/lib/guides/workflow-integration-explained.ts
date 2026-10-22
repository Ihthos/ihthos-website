import { guidesIndex, type Guide } from "./types";

export const workflowIntegrationExplained: Guide = {
  slug: "workflow-integration-explained",
  title: "What Is Workflow Integration? A Plain Explanation | Ihthos",
  description:
    "How workflow integration lets systems exchange data, how it differs from automation and AI, the common methods, and where integrations break.",
  heading: "What is workflow integration?",
  intro:
    "Workflow integration means making two or more systems exchange the information a process needs, without a person retyping it. It is usually the least visible part of automation and the part that decides whether everything else holds together.",
  published: "2026-10-21",
  updated: "2026-10-21",
  sections: [
    {
      heading: "The basic shape: trigger, transform, destination",
      blocks: [
        {
          type: "paragraph",
          text: "Most integrations follow the same three steps. Something happens in one system, the relevant information is converted into the form the other system expects, and it is written there. The trigger might be a new record, a status change, a scheduled time, or a person pressing a button.",
        },
        {
          type: "paragraph",
          text: "The transformation step is where most of the care is needed. Field names differ, dates have different formats, and a value that is required in one system may be optional in the other. These are not deep technical problems, but they must be handled explicitly rather than guessed.",
        },
      ],
    },
    {
      heading: "How it differs from automation and AI",
      blocks: [
        {
          type: "list",
          items: [
            "Integration moves data between systems. It answers the question: how does this information get from here to there reliably?",
            "Automation performs a sequence of steps, which may include integrations. It answers the question: what should happen next, in what order?",
            "AI interprets unstructured content, such as text or documents. It answers the question: what does this material mean?",
          ],
        },
        {
          type: "paragraph",
          text: "The three are often combined, but they are not interchangeable. Using a language model to move a known field between two systems adds cost and uncertainty without adding capability.",
        },
      ],
    },
    {
      heading: "Common ways systems exchange data",
      blocks: [
        {
          type: "paragraph",
          text: "Which method is possible depends on the tools involved and on the access you can grant. The options below are listed from most to least direct, and the right choice is simply the one the systems actually support.",
        },
        {
          type: "list",
          items: [
            "An API: a documented way for one system to read or write records in another.",
            "A webhook: an automatic notification that a system sends when something changes.",
            "A scheduled sync: a recurring job that collects changes and applies them at intervals.",
            "A supported import and export: a file in a defined format that a system accepts or produces.",
            "A shared database view: only where the tools are designed to work from the same data.",
          ],
        },
      ],
    },
    {
      heading: "Where integrations break",
      blocks: [
        {
          type: "paragraph",
          text: "Integrations fail in predictable ways. Knowing them in advance is what separates a workflow that runs quietly from one that is discovered broken a month later.",
        },
        {
          type: "list",
          items: [
            "Permissions change: a token expires, an account is renamed, or an administrator revises access.",
            "The shape of the data changes: a field is renamed, a new required value appears, or a status list is edited.",
            "Duplicates appear: a retry creates a second record because the first was not confirmed.",
            "Missing values are written as blanks or zeros, so downstream reports look valid but are not.",
            "Volume grows: a manual process that handled ten records a day meets limits it never tested.",
            "Failures are silent: the workflow stops, nobody is told, and the gap is noticed only when a customer asks.",
          ],
        },
        {
          type: "note",
          text: "A dependable integration reports its own failures. If nobody learns that a transfer stopped, the integration is not finished.",
        },
      ],
    },
    {
      heading: "What to agree before building",
      blocks: [
        {
          type: "paragraph",
          text: "Most integration problems that appear later are really agreement problems that were never resolved. Settle these before build starts.",
        },
        {
          type: "list",
          items: [
            "Which system is the source of truth for each field.",
            "What the workflow should do when the two systems disagree.",
            "Which records are allowed to be created automatically and which need approval.",
            "How failures are reported, and who is responsible for acting on them.",
            "What happens when a system is unavailable for a period of time.",
            "Who owns the integration after handoff, and how changes are requested.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Do we need to replace our current tools to integrate them?",
      a: "No. The usual goal is to connect systems that already do their own jobs well, so information moves between them without retyping. Replacing a tool is a separate decision, and often an unnecessary one.",
    },
    {
      q: "What if one of our tools has no API?",
      a: "It may still support scheduled imports or exports that an integration can use. Whether that is workable depends on the specific system and the format it accepts, which is checked during scoping.",
    },
    {
      q: "Who maintains the integration afterwards?",
      a: "That is agreed per project and written into the scope. Monitoring and changes need a named owner, so support is treated as an explicit arrangement rather than something assumed.",
    },
  ],
  related: [
    guidesIndex,
    {
      label: "Custom software or an existing tool?",
      href: "/guides/custom-software-vs-off-the-shelf/",
    },
    {
      label: "Data entry automation for small businesses",
      href: "/guides/data-entry-automation/",
    },
  ],
};
