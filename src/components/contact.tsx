"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { ItemHeading, Section, SectionHeading } from "@/components/section";
import { brand, contact } from "@/lib/site";

const FIELD =
  "border-line bg-base text-ink placeholder:text-faint w-full rounded-[10px] border px-4 py-3 text-[0.9375rem] transition-colors duration-150 focus:border-line-strong";

const LABEL = "text-ink text-sm font-medium";

type Status = "idle" | "sending" | "handoff";

type Errors = Partial<Record<"name" | "email" | "process", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const OPTIONAL = "Optional";

type ContactProps = {
  /** Off when a PageHero already introduced the page, so no heading repeats. */
  heading?: boolean;
};

/**
 * The form does not post to a server: no endpoint and no storage destination
 * are confirmed yet, and the brief forbids implying a delivery the site cannot
 * make. Instead it validates in place and hands the details to the visitor's
 * own mail client, and says exactly that in the status line.
 */
export function Contact({ heading = true }: ContactProps) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [handoff, setHandoff] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const processDetail = String(data.get("process") ?? "").trim();
    const tools = String(data.get("tools") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = contact.validation.name;
    if (!EMAIL_RE.test(email)) next.email = contact.validation.email;
    if (!processDetail) next.process = contact.validation.process;

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");

    const body = [
      `${contact.fields.process} ${processDetail}`,
      "",
      company ? `Company: ${company}` : null,
      tools ? `Tools involved: ${tools}` : null,
      "",
      `Name: ${name}`,
      `Work email: ${email}`,
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

    const href = `mailto:${brand.email}?subject=${encodeURIComponent(
      `Workflow enquiry — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    setHandoff(href);
    setStatus("handoff");
    window.location.href = href;
  }

  const statusText =
    status === "handoff"
      ? contact.status.handoff
      : status === "sending"
        ? contact.status.sending
        : contact.status.idle;

  return (
    <Section id="contact">
      {heading ? (
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.heading}
          intro={contact.body}
        />
      ) : null}

      <div
        className={`grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16 ${
          heading ? "mt-12" : ""
        }`}
      >
        <Reveal>
          <form className="grid gap-4" onSubmit={onSubmit} noValidate>
            <div className="grid gap-1.5">
              <label htmlFor="name" className={LABEL}>
                {contact.fields.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={FIELD}
              />
              {errors.name ? (
                <p id="name-error" className="text-signal text-xs leading-relaxed">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="email" className={LABEL}>
                {contact.fields.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={FIELD}
              />
              {errors.email ? (
                <p id="email-error" className="text-signal text-xs leading-relaxed">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="company" className={LABEL}>
                {contact.fields.company}{" "}
                <span className="text-faint font-normal">({OPTIONAL})</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className={FIELD}
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="process" className={LABEL}>
                {contact.fields.process}
              </label>
              <textarea
                id="process"
                name="process"
                rows={5}
                required
                aria-invalid={Boolean(errors.process)}
                aria-describedby={errors.process ? "process-error" : undefined}
                className={FIELD}
              />
              {errors.process ? (
                <p id="process-error" className="text-signal text-xs leading-relaxed">
                  {errors.process}
                </p>
              ) : null}
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="tools" className={LABEL}>
                {contact.fields.tools}{" "}
                <span className="text-faint font-normal">({OPTIONAL})</span>
              </label>
              <input id="tools" name="tools" type="text" className={FIELD} />
            </div>

            <p className="text-faint text-xs leading-relaxed">{contact.privacy}</p>

            <button
              type="submit"
              className="bg-ink text-base hover:bg-white ease-main h-11 rounded-[10px] px-5 text-sm font-medium transition-[background-color,transform] duration-200 hover:-translate-y-px active:translate-y-px"
            >
              {contact.submit}
            </button>

            <p
              role="status"
              aria-live="polite"
              className="text-muted text-xs leading-relaxed"
            >
              {statusText}
            </p>

            {status === "handoff" ? (
              <p className="text-faint text-xs leading-relaxed">
                {contact.status.fallback}{" "}
                {handoff ? (
                  <a href={handoff} className="nav-link text-ink inline-block">
                    Open it again
                  </a>
                ) : null}
              </p>
            ) : null}
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border-line-strong bg-raised flex overflow-hidden rounded-[10px] border">
            <div className="bg-signal w-[3px] shrink-0" aria-hidden />
            <p className="text-muted px-5 py-4 text-sm leading-relaxed">
              Bringing one recurring task is enough to start. You do not need a
              specification, a budget, or a decision about AI before the first
              conversation.
            </p>
          </div>

          <div className="mt-10">
            <ItemHeading
              as={heading ? "h3" : "h2"}
              className="text-ink text-sm font-medium"
            >
              {contact.emailHeading}
            </ItemHeading>
            <dl className="border-line divide-line mt-4 divide-y border-y">
              {contact.channels.map((entry) => (
                <div
                  key={entry.address}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3"
                >
                  <dt className="text-muted text-sm">{entry.label}</dt>
                  <dd>
                    <a
                      href={`mailto:${entry.address}`}
                      className="text-ink hover:text-signal text-[0.8125rem] transition-colors duration-150"
                    >
                      {entry.address}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-faint mt-3 text-[11px] leading-relaxed">
              {contact.fallbackLabel} {brand.email}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
