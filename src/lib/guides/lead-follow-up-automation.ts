import { guidesIndex, type Guide } from "./types";

export const leadFollowUpAutomation: Guide = {
  slug: "lead-follow-up-automation",
  title: "Lead Follow-Up Automation for Small Businesses | Ihthos",
  description:
    "How follow-up automation works, which parts should stay human, and how to design handoffs so a person still owns the conversation.",
  heading: "Lead follow-up automation for small businesses",
  intro:
    "Follow-up slips for ordinary reasons: a request arrives while everyone is busy, the next step depends on someone's memory, or two people each assume the other replied. Automation helps most when it protects the agreed next step, not when it tries to carry the whole conversation.",
  published: "2026-10-21",
  updated: "2026-10-21",
  sections: [
    {
      heading: "Why follow-up slips",
      blocks: [
        {
          type: "paragraph",
          text: "Most small businesses do not lose inquiries because nobody cares. They lose them because the moment of arrival is inconvenient. The message sits in an inbox, a note is made somewhere else, and the follow-up depends on someone remembering to return to it.",
        },
        {
          type: "paragraph",
          text: "When several people handle inquiries, a second problem appears: nobody is sure who replied last. The customer experiences silence while the team assumes the case is covered.",
        },
      ],
    },
    {
      heading: "What automation can carry",
      blocks: [
        {
          type: "paragraph",
          text: "There is a reliable middle ground between doing nothing and sending automated sales sequences. The workflow can hold the administrative parts of follow-up while a person keeps the conversation.",
        },
        {
          type: "list",
          items: [
            "Capture: record the inquiry in one place with the details needed to respond.",
            "Routing: send it to the right person based on rules you define.",
            "Timing: create the next step at an agreed interval instead of relying on memory.",
            "Reminders: tell the owner when a reply is due, and escalate when it is overdue.",
            "Drafting: prepare a suggested reply for a person to review and send.",
            "Record: keep a simple history of what was sent, when, and by whom.",
          ],
        },
      ],
    },
    {
      heading: "What should stay human",
      blocks: [
        {
          type: "paragraph",
          text: "The boundary matters more than the tooling. A workflow that answers questions it should not answer creates problems that are more expensive than a delayed reply.",
        },
        {
          type: "list",
          items: [
            "Prices, discounts, and anything that commits the business.",
            "Dates, availability, and delivery promises.",
            "Complaints, disputes, and anything emotionally charged.",
            "Negotiation and custom scope.",
            "Decisions about whether to take the work at all.",
          ],
        },
        {
          type: "note",
          text: "Messages that pretend to be personal are a poor trade. If a message is templated, it should read as a clear, useful note rather than as a false personal touch.",
        },
      ],
    },
    {
      heading: "Designing the handoff",
      blocks: [
        {
          type: "paragraph",
          text: "The handoff is where most follow-up automations succeed or fail. Three questions decide it.",
        },
        {
          type: "list",
          items: [
            "When does the workflow stop? A reply, a stated decision, an opt-out, or a set number of attempts should end the sequence.",
            "Who owns the case at each stage? There should be one named owner at any moment, not a shared queue.",
            "What counts as urgent? Define the cases that skip the normal timing and notify a person immediately.",
          ],
        },
      ],
    },
    {
      heading: "How to start without overbuilding",
      blocks: [
        {
          type: "paragraph",
          text: "Pick one channel and one owner. Make capture and reminders reliable before adding drafting or any AI step. A reminder that reliably appears is more valuable than an elaborate sequence that nobody trusts.",
        },
        {
          type: "paragraph",
          text: "Once the basic loop is stable, the next useful additions are usually a simple status view, so anyone can see what is waiting, and a clear escalation path for inquiries that have gone quiet.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Will automated follow-up annoy customers?",
      a: "It can, if it is frequent, vague, or ignores a clear signal. Limiting the number of attempts, stopping on any reply, and sending messages that contain something useful are the practical safeguards.",
    },
    {
      q: "Does follow-up automation need AI?",
      a: "Usually not for the mechanics. Capture, routing, timing, and reminders are ordinary automation. AI is an optional addition for summarising an inquiry or drafting a reply that a person then reviews.",
    },
    {
      q: "Can it work with the email and CRM tools we already use?",
      a: "Often, if those tools provide a supported way to read and write the relevant records. The available access is checked during scoping rather than assumed.",
    },
  ],
  related: [
    guidesIndex,
    {
      label: "AI automation examples for small businesses",
      href: "/guides/ai-automation-examples/",
    },
    {
      label: "Is your process ready to automate?",
      href: "/guides/automation-readiness/",
    },
  ],
};
