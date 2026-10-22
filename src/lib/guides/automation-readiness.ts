import { guidesIndex, type Guide } from "./types";

export const automationReadiness: Guide = {
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
};
