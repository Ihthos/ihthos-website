/**
 * Single source of truth for every string on the site.
 *
 * The copy here is the approved first-pass deck for the current broad
 * small-business direction. Treat it as fact-free of unverified claims: it
 * names the process and the limits, never a client, a metric, a location, a
 * credential, or a guarantee.
 *
 * Unconfirmed business facts (legal name, service area, founder bio, support
 * commitments, form storage) are intentionally NOT represented here and must
 * never be rendered on a public page. They live in `notes/CONFIRMATIONS.md`
 * until Kazi verifies them.
 */

/* ------------------------------------------------------------------ types */

/** A symptom an owner would recognise, phrased in their words. */
export type PainPoint = { title: string; body: string };

/**
 * A service, described in three parts so the card can never collapse into a
 * feature list: what fits, what we do, and what a project of this kind is
 * typically expected to produce.
 */
export type Service = {
  id: string;
  title: string;
  /** One-line summary for the home page's map of the site. */
  summary: string;
  problem: string;
  does: string;
  /** Phrased as a typical/example output, agreed during scoping. */
  deliverable: string;
};

/** One of the four project stages, with the client's part made explicit. */
export type ProjectStage = {
  title: string;
  body: string;
  /** Short label for the client-side note, e.g. "You bring". */
  noteLabel: string;
  note: string;
};

/** A stated commitment with its practical meaning. */
export type Boundary = { title: string; body: string };

export type FaqItem = { q: string; a: string };

/** A way to reach Ihthos. Role addresses only; no personal mailbox. */
export type ContactChannel = { label: string; address: string };

/* ----------------------------------------------------------------- brand */

export const brand = {
  name: "Ihthos",
  tagline: "Practical AI and workflow automation for small businesses",
  founder: "Kazi",
  /** Domain supplied by the owner 2026-10-16. */
  domain: "ihthos.com",
  /**
   * The one published channel. Sales and support role mailboxes exist but are
   * deliberately not presented as separately staffed, because that is not yet
   * confirmed. See notes/CONFIRMATIONS.md.
   */
  email: "business@ihthos.com",
} as const;

/* ------------------------------------------------------------------- nav */

/**
 * Top-level destinations, in the order a first-time visitor needs them:
 * what is offered, how it runs, who is behind it, the limits, and the way in.
 */
export const nav = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Boundaries", href: "/boundaries" },
  { label: "Contact", href: "/contact" },
] as const;

/** Legal pages, linked from the footer but kept out of the primary nav. */
export const legalNav = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export const menu = {
  label: "Menu",
  close: "Close",
  blurb: "Practical AI and workflow automation, with the limits written down.",
} as const;

/** The single action the site asks for, in one consistent phrase. */
export const cta = {
  primary: "Talk through a workflow",
} as const;

/* ------------------------------------------------------------------ hero */

export const hero = {
  eyebrow: "Practical AI + workflow automation for small businesses",
  headline:
    "Less time spent moving work between systems. More time for the work that matters.",
  body: "Ihthos helps small businesses improve repetitive processes with practical automation and AI where it fits—connecting the tools you already use and keeping people involved when judgment matters.",
  primaryCta: "Talk through a workflow",
  secondaryCta: "See how it works",
  micro:
    "Bring one task that keeps coming back. We’ll talk through how it works today and whether a change makes sense.",
} as const;

/**
 * Inner-page openers. Each page carries its own H1 and intro, which are NOT
 * the home page's short preview of the same section — those previews read
 * `services.heading`, `process.heading`, `boundaries.heading`, and
 * `about.heading` below, and the deck words the two differently.
 */
export const pageHero = {
  services: {
    label: "Services",
    heading: "Improve the process your team repeats every day.",
    intro:
      "Ihthos helps small businesses make recurring work easier to manage. We begin with the process and the tools already in place, then scope the smallest useful improvement.",
  },
  process: {
    label: "How it works",
    heading: "A clear process from first conversation to handoff.",
    intro:
      "You should know what is being changed, what needs your input, and what happens next before a workflow is built.",
  },
  boundaries: {
    label: "Clear boundaries",
    heading: "Useful automation needs clear limits.",
    intro:
      "A workflow should be understandable, testable, and owned. These are the questions we make clear before a build moves forward.",
  },
  about: {
    label: "About Ihthos",
    heading: "Make recurring work easier to run.",
    intro:
      "Ihthos was started by Kazi to help small businesses improve the operational work that repeats behind the scenes. The approach is practical: understand the process, find where the work gets stuck, and choose an improvement that fits the people and systems involved.",
  },
} as const;

/** The home page's closing invitation. */
export const finalCta = {
  eyebrow: "Start with one process",
  heading: "What task would you be glad to stop repeating?",
  body: "Tell us what the task involves, which tools it touches, and where it gets frustrating. We’ll review the process and discuss a sensible next step.",
  secondary: {
    label: "Email business@ihthos.com",
    href: "mailto:business@ihthos.com",
  },
} as const;

/* ------------------------------------------------------------------- pain */

export const pain = {
  eyebrow: "The work behind the work",
  heading: "When routine work depends on memory, small delays multiply.",
  intro:
    "A detail gets copied twice. A handoff waits in an inbox. A follow-up goes out after the moment has passed. These small gaps add friction to the work your team is trying to do.",
  items: [
    {
      title: "The same details get entered again",
      body: "Customer or job information is copied from one system, form, or email into another.",
    },
    {
      title: "Follow-up gets buried",
      body: "A request waits for someone to notice it, remember the next step, and send the right reply.",
    },
    {
      title: "Handoffs depend on memory",
      body: "Work stalls when the next person does not know what changed or what needs attention.",
    },
    {
      title: "Reports take another round of manual work",
      body: "Information is pulled from several places and assembled into the same update again.",
    },
  ] satisfies PainPoint[],
} as const;

/* ---------------------------------------------------------- service bridge */

export const bridge = {
  eyebrow: "Start with the real process",
  heading: "Make the work clearer before making it faster.",
  body: "We look at how the process actually runs, where information gets stuck, and which tools are already involved. Then we identify a practical change—automation, an integration, AI assistance, or a human step that should stay human.",
  link: "Explore services",
} as const;

/* ------------------------------------------------- illustrative workflow */

/**
 * A worked example, not a client result. Labels trace one inquiry from arrival
 * to prepared follow-up, with the human checkpoint made visible. Used by both
 * the home page's before/after card and the hero diagram's sequence.
 */
export const illustrative = {
  eyebrow: "Illustrative workflow — not a client result",
  heading: "From a new inquiry to a clear next step.",
  body: "An inquiry arrives. Its details are captured and checked. A person reviews anything unclear before the record is updated and follow-up is prepared. The routine steps move forward; exceptions stay visible.",
  steps: [
    "Inquiry received",
    "Details captured",
    "Check for missing information",
    "Human review when needed",
    "CRM updated",
    "Follow-up prepared",
  ],
  caption:
    "The right steps depend on your process and the systems you use.",
} as const;

/* -------------------------------------------------------------- services */

export const services = {
  eyebrow: "Where we can help",
  heading: "Useful improvements start with one recurring task.",
  intro:
    "The right first step depends on the process, the people involved, and the tools you already rely on.",
  items: [
    {
      id: "assessment",
      title: "Workflow assessment",
      summary:
        "Find repeated work, fragile handoffs, and the changes most worth exploring first.",
      problem:
        "Repeated manual work is hard to see from inside the work itself, so it is not obvious which steps are worth changing first.",
      does: "We walk through the process as it runs today, note where information is retyped, where handoffs stall, and which tools take part.",
      deliverable:
        "A written map of the current process and a short list of candidate changes, agreed with you during scoping.",
    },
    {
      id: "automation",
      title: "Automation and integrations",
      summary:
        "Connect systems and move routine information through a process with fewer manual steps.",
      problem:
        "Systems that do not talk to each other push people into copying the same details between them by hand.",
      does: "We connect the tools you already use and move agreed information through the process without a person retyping it.",
      deliverable:
        "A configured integration for the agreed steps, tested against ordinary and failure cases before handoff.",
    },
    {
      id: "ai",
      title: "AI-assisted intake and review",
      summary:
        "Sort, summarize, or prepare information for a person to check when the work genuinely benefits from AI.",
      problem:
        "Some work involves reading, sorting, or summarising information faster than a person can comfortably keep up with.",
      does: "We add AI where it genuinely helps organise or prepare information, and define what a person checks before anything proceeds.",
      deliverable:
        "A scoped AI step with a visible review point, so its output is checked wherever the decision matters.",
    },
    {
      id: "ops",
      title: "Lead and customer operations",
      summary:
        "Improve inquiry capture, qualification, follow-up, scheduling, or support handoffs as part of a scoped workflow.",
      problem:
        "Inquiries and follow-ups depend on someone noticing them, remembering the next step, and sending the right reply.",
      does: "We improve inquiry capture, routing, scheduling, and follow-up as part of a workflow you have scoped with us.",
      deliverable:
        "An agreed intake-to-follow-up workflow, with the review and approval steps your business requires.",
    },
    {
      id: "support",
      title: "Ongoing improvement",
      summary:
        "Review how an implemented workflow is working and agree on the next adjustment or support need.",
      problem:
        "A workflow that launched cleanly still drifts as the business around it changes.",
      does: "We review how an implemented workflow is behaving and agree on the next adjustment with you.",
      deliverable:
        "A reviewed change, with any monitoring or support scope agreed separately and in writing.",
    },
    {
      id: "software",
      title: "Custom business software",
      summary:
        "Design a tailored application when an essential process cannot be supported well by the tools you have.",
      problem:
        "Some essential work is spread across spreadsheets, messages, and tools that were not built for it, so people re-enter details and cannot see what is waiting.",
      does: "We map the current process, users, data, and integrations first. If a tailored application is the right fit, we design an interface and workflow around how the work actually runs.",
      deliverable:
        "A scoped application for the agreed workflow, tested with the people who will use it, plus handover documentation and a support arrangement agreed in writing.",
    },
  ] satisfies Service[],
} as const;

/* ----------------------------------------------------- custom software */

/**
 * The custom-software offer. Deliberately framed as one option inside the
 * workflow practice, not as a separate product: discovery decides whether the
 * work needs a tailored application, an integration, or a smaller automation.
 *
 * The examples are explicitly illustrative. No client, product, metric, date,
 * price, hosting model, or support term is asserted here; those are agreed per
 * project. The 50–80% time-reduction ambition from the internal brief is
 * intentionally omitted from public copy.
 */
export const customSoftware = {
  eyebrow: "Custom business software",
  heading: "When your tools do not fit how the work gets done.",
  intro:
    "If your team re-enters the same details between systems, tracks jobs or vehicles across several spreadsheets, or cannot see what is waiting on a customer or a vehicle, the problem may be the shape of the tools rather than the amount of effort. We map the process and the people in it, then design software around the work. Before proposing a build, we check whether a better handoff or integration solves the problem with less complexity.",
  distinction: {
    heading: "Two ways to improve the same process.",
    intro:
      "Discovery decides which path fits. We do not steer every process toward a custom build.",
    paths: [
      {
        label: "Change the process",
        title: "Automation and better handoffs",
        body: "Often the work improves by connecting existing tools, removing a duplicate step, or making a handoff clearer. That is a smaller change and usually the right first option.",
      },
      {
        label: "Build the tool",
        title: "Custom business software",
        body: "When the work needs its own interface, data model, or workflow — and existing products force the team around their structure — a tailored application may fit better.",
      },
    ],
  },
  audience: {
    heading: "Who it is for",
    intro:
      "This is for a business with an essential process that is awkward, fragmented, or poorly served by the software it has.",
    items: [
      "The process is central to the business, not a side task.",
      "Work is split across spreadsheets, messages, and tools that were not built for it.",
      "The team has adapted its habits around the software instead of the software fitting the work.",
    ],
  },
  simpler: {
    heading: "When an existing product or smaller automation will do",
    body: "If a standard tool already covers most of the work, or a single integration removes the friction, that is the better answer. A custom build carries more cost, more responsibility, and a longer commitment, so we recommend it only when the process genuinely needs it.",
  },
  examples: {
    label: "Illustrative examples — not client work or shipped products",
    items: [
      {
        title: "Invoice and payment-status workflow",
        body: "A small finance team re-enters invoice details from email into a spreadsheet, then checks several places to answer whether an invoice has been paid.",
      },
      {
        title: "Business operations management",
        body: "An owner tracks requests, approvals, and recurring tasks across separate documents and messages, with no single view of what is waiting.",
      },
      {
        title: "Job and fleet tracking for a moving company",
        body: "A dispatcher coordinates jobs, vehicles, and staff across a whiteboard, spreadsheets, and phone messages.",
      },
    ],
  },
  path: {
    heading: "From discovery to delivery",
    intro:
      "Each step produces something you can review, so the next one is not a surprise.",
    steps: [
      {
        title: "Understand the current work",
        body: "Walk through the process with the people who do it, including the exceptions and the parts that only make sense in practice.",
      },
      {
        title: "Map requirements and integrations",
        body: "Record the users, data, decisions, and systems the work touches, and what a new interface would need to connect to.",
      },
      {
        title: "Agree scope and ownership",
        body: "Confirm what is included, what stays manual, who owns the data and the system, and how future changes will be handled.",
      },
      {
        title: "Prototype and build",
        body: "Design the interface and workflow around the real steps, then build in reviewable pieces rather than one large reveal.",
      },
      {
        title: "Test real and exception cases",
        body: "Check ordinary work, missing information, and failure paths with the people who will use it.",
      },
      {
        title: "Deploy and hand over",
        body: "Put it into use with documentation, named responsibilities, and a support arrangement agreed in writing.",
      },
    ],
  },
  limits:
    "Delivery dates, cost, hosting, ownership terms, maintenance, and security controls are agreed per project. None of them are assumed or promised before scoping.",
  cta: "Discuss a custom software idea",
  closeBody:
    "The first conversation is about how the work runs today. Bring one process, the people involved, and the tools you currently use. We will say whether custom software, an integration, or a simpler automation is the better fit, and what information would help us decide.",
} as const;

/** The closing argument on the services page. */
export const servicesClose = {
  heading: "Start with the problem, not a tool.",
  body: "A workflow does not need AI just because AI is available. Sometimes the best change is a clearer handoff, a reliable integration, or fewer steps. We’ll explain the options and agree on the scope before building.",
  cta: "Talk through a workflow",
} as const;

/* --------------------------------------------------------------- process */

export const process = {
  eyebrow: "A clear way to start",
  heading: "Understand it. Agree on it. Build it. Hand it over.",
  intro:
    "Every project starts by understanding the current process. We agree on the scope and review points before work begins, test the workflow with ordinary and exception cases, then document what runs and who owns it.",
  link: "See the four project stages",
  steps: [
    {
      title: "Understand the process",
      body: "We walk through the task as it happens today: who starts it, where information comes from, what gets repeated, and where exceptions appear.",
      noteLabel: "You bring",
      note: "A walkthrough of one real process and the tools involved. We clarify the current steps and where friction occurs.",
    },
    {
      title: "Agree on the scope",
      body: "We describe the proposed workflow, what is included, what stays manual, how it will be reviewed, and what the project depends on.",
      noteLabel: "Before build",
      note: "The scope, intended behavior, responsibilities, and commercial terms are agreed before anything is built.",
    },
    {
      title: "Build and review",
      body: "We configure the agreed workflow and check ordinary cases, missing information, exceptions, and failure paths.",
      noteLabel: "You review",
      note: "Whether the workflow reflects how the team actually works, before it is handed over.",
    },
    {
      title: "Handoff and improve",
      body: "We explain what runs, how to spot an exception, and who owns each part.",
      noteLabel: "Support",
      note: "Any ongoing monitoring or changes are discussed and agreed as a separate, explicit responsibility.",
    },
  ] satisfies ProjectStage[],
  /** The page's closing beat. */
  closeHeading: "You stay informed at every stage.",
  closeBody:
    "No surprise scope changes and no unexplained handoff. If a process needs a human decision, that step is made visible.",
  closeCta: "Talk through a workflow",
} as const;

/* ------------------------------------------------------------- boundaries */

export const boundaries = {
  eyebrow: "Designed with people in the loop",
  heading: "Automation should be useful, reviewable, and bounded.",
  intro:
    "We agree on scope before building, use only the access the work needs, test failure cases as well as the happy path, and keep a person involved where judgment matters. AI can be useful; it can also be wrong. We make its role and limits clear.",
  link: "Read how we work responsibly",
  items: [
    {
      title: "Scope comes first",
      body: "We agree on the process, intended behavior, and review points before building.",
    },
    {
      title: "Access stays limited to the work",
      body: "We identify which accounts and permissions a workflow needs. We do not claim security guarantees beyond the controls actually used.",
    },
    {
      title: "People review the decisions that need judgment",
      body: "AI output can be incomplete or wrong. We make review steps visible for ambiguous, consequential, or customer-facing actions.",
    },
    {
      title: "Testing includes exceptions",
      body: "We check normal cases and agreed failure paths, not just one successful example.",
    },
    {
      title: "Ownership is documented",
      body: "The handoff explains what runs, what can fail, who should review an exception, and which services it depends on.",
    },
    {
      title: "Support is explicit",
      body: "Monitoring, maintenance, and future changes need a named owner and agreed scope; they are not implied by a one-time build.",
    },
  ] satisfies Boundary[],
  /** The page's closing beat. */
  closeHeading: "Have a workflow in mind?",
  closeCta: "Talk through a workflow",
} as const;

/* ------------------------------------------------------------------- faq */

export const faq = {
  heading: "Questions we get asked",
  items: [
    {
      q: "Do we need to use AI?",
      a: "No. Some problems are better handled with ordinary workflow automation. We recommend AI only when it adds a useful capability, such as organizing or drafting information, and the review requirements are clear.",
    },
    {
      q: "Will automation replace our staff?",
      a: "The goal is to reduce repetitive steps and improve handoffs. The effect depends on the workflow and the choices your business makes, and we do not promise staffing outcomes.",
    },
    {
      q: "Can you work with our existing software?",
      a: "We first review the systems involved, their available integration methods, and your account permissions. Compatibility and scope are confirmed before anything is promised.",
    },
    {
      q: "What does a project cost?",
      a: "Pricing depends on the workflow, the connected systems, the access required, and the support scope. After an initial discussion we propose a defined scope and a price against it.",
    },
    {
      q: "What happens to our business data?",
      a: "Before work begins we agree on which information the workflow needs, which services process it, who can access it, and how records are retained or removed. Those specifics are listed for each engagement.",
    },
    {
      q: "How long does it take?",
      a: "We give a schedule once the scope is agreed. Timelines are set per project rather than promised up front.",
    },
  ] satisfies FaqItem[],
} as const;

/* ----------------------------------------------------------------- about */

export const about = {
  eyebrow: "About Ihthos",
  heading: "Practical systems for the work behind the work.",
  body: "Ihthos was started by Kazi to help small businesses make recurring operational work easier to manage. The work begins by listening to how a process actually happens, then choosing a useful improvement—not adding AI just because it is fashionable.",
  link: "Meet Ihthos",
  /** The about page's second beat. */
  fitHeading: "Technology should fit the work.",
  fitBody:
    "Automation is useful when it removes needless repetition or makes a handoff more dependable. AI belongs where it adds a real capability and where its output can be reviewed appropriately. The goal is a process the team can understand and own.",
  /** Closing invitation on the about page. */
  closeHeading: "Tell us about one process you would like to improve.",
  closeCta: "Talk through a workflow",
} as const;

/**
 * The founder portrait slot. Until an approved photograph exists `src` stays
 * null and the About page draws a designed editorial graphic of how the work is
 * approached (scattered inputs → understood process → client review → documented
 * handoff) — never a fabricated face. To publish a portrait, drop the file in
 * `public/media/` and set `src` here. See notes/CONFIRMATIONS.md.
 */
export const media = {
  founder: {
    src: null as string | null,
    alt: "Kazi, founder of Ihthos",
  },
} as const;

/* --------------------------------------------------------------- contact */

export const contact = {
  eyebrow: "Contact",
  heading: "Tell us about the work that keeps coming back.",
  body: "Share one recurring process, the tools involved, and what makes it harder than it should be. We’ll review what you send and discuss whether a workflow change could help.",
  fields: {
    name: "Name",
    email: "Work email",
    company: "Company (optional)",
    process: "What process would you like to improve?",
    tools: "Which tools are involved? (optional)",
  },
  privacy:
    "Please do not include passwords, payment details, or private customer records.",
  submit: "Send workflow details",
  /** The channel that always works, whatever the form does. */
  fallbackLabel: "Prefer email?",
  channels: [
    { label: "General enquiries", address: "business@ihthos.com" },
  ] satisfies ContactChannel[],
  /**
   * Form status copy. The form composes an email rather than posting to a
   * server, because no endpoint or storage destination is confirmed yet, so
   * the wording describes exactly what happens instead of claiming a delivery
   * the site cannot make.
   */
  validation: {
    name: "Please enter your name.",
    email: "Enter a valid email address.",
    process: "Describe the process you want to improve.",
  },
  status: {
    idle: "This opens your email app with the details filled in. Nothing is sent from this page.",
    sending: "Preparing your email…",
    handoff:
      "Your email app should now be open with these details. Send it from there and we’ll take it from the subject line.",
    fallback:
      "If your email app did not open, copy the details into a message to business@ihthos.com.",
  },
  /** Heading above the working email address. */
  emailHeading: "Email us directly",
} as const;

/* ------------------------------------------------------------------ meta */

/**
 * Per-route title and description. Each states the page's actual topic. The
 * home and services lines lead with the two terms the practice is offered
 * under — AI automation and custom business software — without asserting a
 * result, client, or superlative the brief has not confirmed.
 */
export const meta = {
  home: {
    title: "Ihthos | AI Automation & Custom Business Software",
    description:
      "Practical AI automation, workflow integrations, and custom business software for small businesses. Ihthos keeps human review where decisions matter.",
  },
  services: {
    title: "AI Automation & Custom Software Services | Ihthos",
    description:
      "Workflow assessment, AI automation, system integrations, lead and customer operations, and custom software for business, delivered by Ihthos.",
  },
  process: {
    title: "How It Works | AI Automation Projects | Ihthos",
    description:
      "See how Ihthos understands a process, agrees on scope, builds and reviews a workflow, and documents the handoff.",
  },
  boundaries: {
    title: "Responsible AI & Automation Boundaries | Ihthos",
    description:
      "Learn how Ihthos scopes access, testing, human review, AI limits, documentation, and workflow ownership.",
  },
  about: {
    title: "About Ihthos | AI Automation & Custom Software",
    description:
      "Meet Ihthos and learn its practical, process-first approach to AI implementation and workflow automation for small businesses.",
  },
  contact: {
    title: "Contact Ihthos | Discuss AI Automation",
    description:
      "Describe one recurring task or handoff you would like to improve. Ihthos will review the details and discuss a sensible next step.",
  },
  privacy: {
    title: "Privacy | Ihthos",
    description:
      "What this website does and does not collect, and how to reach Ihthos about your information.",
  },
  terms: {
    title: "Terms | Ihthos",
    description:
      "The terms that apply to using the Ihthos website, and where to ask about project agreements.",
  },
} as const;

/**
 * The social-share card. One image serves every route (the file-based
 * `opengraph-image.png`), but a page that sets its own `openGraph` replaces the
 * inherited object outright — including the image — so each page re-declares it
 * from this one source.
 */
export const ogImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: brand.name,
} as const;

/* --------------------------------------------------------------- footer */

export const footer = {
  /** Sits directly under the wordmark. */
  blurb: "Practical AI and workflow automation for small businesses.",
} as const;

/**
 * Footer links, in the order the visitor meets the story: what is offered, how
 * it runs, the limits, who is behind it, then the way in — followed by the
 * legal pages. Boundaries leads About here, which is the homepage sequence,
 * rather than the header's About-then-Boundaries.
 */
export const footerNav = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/process" },
  { label: "Boundaries", href: "/boundaries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
