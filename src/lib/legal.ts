/**
 * Copy for the two legal pages, kept apart from `site.ts` because it is a
 * different kind of text: it describes what this website does, not what Ihthos
 * sells. Every statement here is verifiable against the code — the site sets
 * no cookies, loads no analytics or advertising script, and its only stored
 * value is a session flag for the landing animation.
 *
 * What is deliberately absent is anything unconfirmed: no registered company
 * name, no jurisdiction, no data-protection officer, no retention period, and
 * no claim of legal review. Those are open items in notes/CONFIRMATIONS.md and
 * must be settled before this text is treated as final.
 */

export type LegalSection = { heading: string; body: string[] };

export const privacy = {
  label: "Privacy",
  title: "What this website collects.",
  intro:
    "In plain terms: this site does not set cookies, does not run analytics or advertising, and does not build a profile of you. Here is the detail behind that.",
  sections: [
    {
      heading: "What this site does not do",
      body: [
        "No account is created and no login is offered. The site sets no cookies and loads no analytics, advertising, or social tracking script. There is no profiling and no automated decision-making about visitors.",
        "The pages are served as static content. Nothing about a visit is stored on our side to identify you.",
      ],
    },
    {
      heading: "What is stored in your browser",
      body: [
        "The landing animation records one value in your browser’s session storage to remember that you have already seen it, so it does not replay on every page. It holds no identifier, leaves when you close the tab, and is not transmitted anywhere.",
      ],
    },
    {
      heading: "When you email us",
      body: [
        "The contact form does not post to a server. It composes a message in your own email app, and you choose whether to send it. When you do, your message travels through your email provider and ours, and we use the details to read your enquiry and reply to it.",
        "Please do not send passwords, payment card details, or private customer records through this site.",
      ],
    },
    {
      heading: "Your choices",
      body: [
        "You can ask what we hold about your enquiry and ask us to correct or remove it. Write to the address below and say what you would like done.",
      ],
    },
    {
      heading: "Before work begins",
      body: [
        "When a project starts, the data a workflow needs, the services that process it, who can access it, and how records are retained are agreed and written down for that engagement. This page covers the website only.",
      ],
    },
  ] satisfies LegalSection[],
  contactHeading: "Questions about this page",
  contactBody:
    "Write to the address below. If you are asking about an enquiry you already sent, include enough detail for us to find it.",
} as const;

export const terms = {
  label: "Terms",
  title: "The terms that apply to this website.",
  intro:
    "These terms cover reading this site. They are not a project agreement, and nothing here is a quote or a promise about work.",
  sections: [
    {
      heading: "Using this site",
      body: [
        "You are welcome to read, link to, and share these pages. Do not attempt to disrupt the site, access it through automated means that impose a load on it, or present its content as your own.",
      ],
    },
    {
      heading: "What the content is",
      body: [
        "The pages describe services in general terms, and the workflow shown on the home page is an illustration of a kind of work rather than a record of a client project. Nothing on this site is an offer, a quotation, a guarantee, or a statement of a result achieved for anyone.",
      ],
    },
    {
      heading: "Project work is agreed separately",
      body: [
        "Any actual work is governed by a written agreement between you and Ihthos, covering the scope, the review points, the responsibilities of each side, the price, and the commercial terms. That agreement, not this website, sets out what is delivered and what happens if something goes wrong.",
      ],
    },
    {
      heading: "No promised outcome",
      body: [
        "Automation outcomes depend on the process, the systems involved, the access available, and how the team uses the result. Improvements are agreed as a target during scoping, not promised in advance.",
      ],
    },
    {
      heading: "Changes to these pages",
      body: [
        "The content may be corrected or updated as the services and the site change. Where a change affects an active project, the project agreement governs.",
      ],
    },
  ] satisfies LegalSection[],
  contactHeading: "Questions about these terms",
  contactBody:
    "Write to the address below and say which part you are asking about. Project-specific questions belong with your agreement, not this page.",
} as const;
