import { ButtonLink } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { ItemHeading, Section, SectionHeading } from "@/components/section";
import { customSoftware } from "@/lib/site";

/**
 * A schematic of a small business process a tailored application might carry:
 * a completed job becomes a drafted invoice, pauses at a human review, and then
 * shows a payment status the team can act on. Original geometry with fictional
 * sample labels — not a screenshot of a product, and not a client result.
 */
function SoftwareExample() {
  return (
    <figure className="border-line bg-sunken rounded-[10px] border p-5 md:p-6">
      <figcaption className="text-faint mb-5 text-[10.5px] tracking-[0.12em] uppercase">
        Illustrative example
      </figcaption>

      <svg
        viewBox="0 0 360 416"
        role="group"
        aria-label="Illustrative workflow with fictional sample data. A completed job record leads to a drafted invoice, pauses at a step where a person reviews the amount and customer, then updates a payment status shown as waiting on the customer."
        className="h-auto w-full"
      >
        <defs>
          <marker
            id="cs-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,1 L9,5 L0,9 z" className="fill-line-strong" />
          </marker>
        </defs>

        {/* 01 — the record the team already keeps */}
        <rect
          x={20}
          y={16}
          width={320}
          height={80}
          rx={10}
          className="fill-raised stroke-line-strong"
          strokeWidth={1}
        />
        <text x={40} y={46} className="fill-faint text-[11px]">
          01
        </text>
        <text x={66} y={48} className="fill-ink text-[15px]">
          Job record
        </text>
        <text x={66} y={69} className="fill-muted text-[12px]">
          Completed job details captured
        </text>
        <text x={66} y={86} className="fill-faint text-[10.5px]">
          Sample job #1042 · Sample customer
        </text>

        <path
          d="M180 100 V116"
          className="stroke-line-strong"
          strokeWidth={1}
          markerEnd="url(#cs-arrow)"
          fill="none"
        />

        {/* 02 — what the software prepares */}
        <rect
          x={20}
          y={120}
          width={320}
          height={68}
          rx={10}
          className="fill-raised stroke-line-strong"
          strokeWidth={1}
        />
        <text x={40} y={150} className="fill-faint text-[11px]">
          02
        </text>
        <text x={66} y={152} className="fill-ink text-[15px]">
          Draft invoice
        </text>
        <text x={66} y={173} className="fill-muted text-[12px]">
          Prepared from the job record
        </text>

        <path
          d="M180 192 V208"
          className="stroke-line-strong"
          strokeWidth={1}
          markerEnd="url(#cs-arrow)"
          fill="none"
        />

        {/* 03 — the human gate, the only accent */}
        <rect
          x={20}
          y={212}
          width={320}
          height={88}
          rx={10}
          className="fill-signal-wash stroke-signal"
          strokeWidth={1}
        />
        <text x={40} y={242} className="fill-signal text-[11px]">
          03
        </text>
        <text x={66} y={244} className="fill-signal text-[15px]">
          You review
        </text>
        <text
          x={324}
          y={242}
          textAnchor="end"
          className="fill-signal text-[10.5px] tracking-[0.08em] uppercase"
        >
          You decide
        </text>
        <text x={66} y={265} className="fill-signal text-[12px]">
          Amount, customer, anything unclear
        </text>
        <text x={66} y={284} className="fill-signal text-[11px]">
          Approve, correct, or send back
        </text>

        <path
          d="M180 304 V320"
          className="stroke-line-strong"
          strokeWidth={1}
          markerEnd="url(#cs-arrow)"
          fill="none"
        />

        {/* 04 — what the team sees afterwards */}
        <rect
          x={20}
          y={324}
          width={320}
          height={68}
          rx={10}
          className="fill-raised stroke-line-strong"
          strokeWidth={1}
        />
        <text x={40} y={354} className="fill-faint text-[11px]">
          04
        </text>
        <text x={66} y={356} className="fill-ink text-[15px]">
          Payment status
        </text>
        <text x={66} y={377} className="fill-muted text-[12px]">
          Shown as waiting on the customer
        </text>
      </svg>

      <p className="text-muted mt-5 max-w-[52ch] text-[0.875rem] leading-relaxed">
        Work moves from the job record to a drafted invoice, pauses for a person
        to check it, then updates the status the team sees. The steps, fields,
        and review points are defined with you.
      </p>
      <p className="text-faint mt-3 text-[10.5px] leading-relaxed tracking-[0.06em] uppercase">
        Fictional sample data — not a client result
      </p>
    </figure>
  );
}

/**
 * The custom-software offer, set inside the workflow practice rather than
 * presented as a separate product. Discovery is what decides between a tailored
 * application, an integration, and a smaller automation.
 */
export function CustomSoftware() {
  return (
    <Section id="custom-software">
      <SectionHeading
        eyebrow={customSoftware.eyebrow}
        title={customSoftware.heading}
        intro={customSoftware.intro}
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        <div>
          <ItemHeading
            as="h3"
            className="text-ink text-[1.25rem] leading-tight tracking-[-0.01em]"
          >
            {customSoftware.distinction.heading}
          </ItemHeading>
          <p className="text-muted mt-4 max-w-[52ch] text-[0.9375rem] leading-relaxed">
            {customSoftware.distinction.intro}
          </p>

          <dl className="border-line mt-8 grid gap-6 border-t pt-8">
            {customSoftware.distinction.paths.map((path) => (
              <div key={path.label} className="grid gap-2">
                <dt className="text-faint text-[10.5px] tracking-[0.12em] uppercase">
                  {path.label}
                </dt>
                <dd>
                  <p className="text-ink text-[1.0625rem] tracking-tight">
                    {path.title}
                  </p>
                  <p className="text-muted mt-2 max-w-[54ch] text-[0.9375rem] leading-relaxed">
                    {path.body}
                  </p>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <ItemHeading
              as="h3"
              className="text-ink text-[1.25rem] leading-tight tracking-[-0.01em]"
            >
              {customSoftware.audience.heading}
            </ItemHeading>
            <p className="text-muted mt-4 max-w-[52ch] text-[0.9375rem] leading-relaxed">
              {customSoftware.audience.intro}
            </p>
            <ul className="mt-5 grid gap-2.5">
              {customSoftware.audience.items.map((item) => (
                <li
                  key={item}
                  className="text-muted border-line flex gap-3 border-t pt-2.5 text-[0.9375rem] leading-relaxed first:border-t-0 first:pt-0"
                >
                  <span aria-hidden className="text-faint text-[11px]">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-line mt-10 border-t pt-8">
            <ItemHeading
              as="h3"
              className="text-ink text-[1.0625rem] tracking-tight"
            >
              {customSoftware.simpler.heading}
            </ItemHeading>
            <p className="text-muted mt-3 max-w-[54ch] text-[0.9375rem] leading-relaxed">
              {customSoftware.simpler.body}
            </p>
          </div>
        </div>

        <Reveal>
          <SoftwareExample />
        </Reveal>
      </div>

      <div className="border-line mt-14 border-t pt-8">
        <p className="text-faint text-[10.5px] tracking-[0.12em] uppercase">
          {customSoftware.examples.label}
        </p>
        <ul className="mt-6 grid gap-8 md:grid-cols-3 md:gap-10">
          {customSoftware.examples.items.map((example) => (
            <li key={example.title} className="border-line border-t pt-4">
              <p className="text-ink text-[1rem] tracking-tight">{example.title}</p>
              <p className="text-muted mt-2 max-w-[42ch] text-[0.9375rem] leading-relaxed">
                {example.body}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-line mt-14 border-t pt-10">
        <ItemHeading
          as="h3"
          className="text-ink text-[1.25rem] leading-tight tracking-[-0.01em]"
        >
          {customSoftware.path.heading}
        </ItemHeading>
        <p className="text-muted mt-4 max-w-[52ch] text-[0.9375rem] leading-relaxed">
          {customSoftware.path.intro}
        </p>

        <ol className="mt-8 grid gap-x-10 gap-y-7 md:grid-cols-2">
          {customSoftware.path.steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 0.04}
              className="border-line border-t pt-4"
            >
              <span className="text-faint text-[10.5px] tracking-[0.12em] uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-ink mt-2 text-[1rem] tracking-tight">{step.title}</p>
              <p className="text-muted mt-2 max-w-[54ch] text-[0.9375rem] leading-relaxed">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
          <div>
            <p className="text-faint max-w-[58ch] text-[0.8125rem] leading-relaxed">
              {customSoftware.limits}
            </p>
            <p className="text-muted mt-4 max-w-[58ch] text-[0.9375rem] leading-relaxed">
              {customSoftware.closeBody}
            </p>
          </div>
          <ButtonLink href="/contact" cursorLabel="Talk">
            {customSoftware.cta}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
