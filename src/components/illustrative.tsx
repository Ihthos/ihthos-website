import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { illustrative, pain } from "@/lib/site";

/** The manual path, restated from the problem section so the two panels are
 *  two views of the same work rather than two different claims. */
const TODAY = pain.items.map((item) => item.title);

/** What a first engagement produces. Each line already appears as a
 *  `deliverable` on the services page; nothing new is promised here. */
const RECEIVE = [
  "A written map of the current process",
  "A short, agreed list of candidate changes",
  "A defined scope with its review points",
  "A tested workflow and a handoff note",
] as const;

/**
 * The worked example. It is labelled as illustrative in the eyebrow and the
 * caption, and it names no client, no system, and no measured result — only
 * the shape of the change.
 */
export function Illustrative() {
  return (
    <Section id="example">
      <SectionHeading
        eyebrow={illustrative.eyebrow}
        title={illustrative.heading}
        intro={illustrative.body}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <Reveal className="border-line bg-sunken rounded-[10px] border p-6 md:p-8">
          <p className="text-faint text-[10.5px] tracking-[0.16em] uppercase">
            How it runs today
          </p>
          <ul className="mt-6 grid gap-4">
            {TODAY.map((item) => (
              <li key={item} className="text-muted flex gap-3 text-sm leading-relaxed">
                <span aria-hidden className="bg-line-strong mt-2 block h-px w-4 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={0.08}
          className="border-line-strong bg-base rounded-[10px] border p-6 md:p-8"
        >
          <p className="text-faint text-[10.5px] tracking-[0.16em] uppercase">
            How it could run
          </p>
          <ol className="mt-6 grid gap-4">
            {illustrative.steps.map((step, index) => {
              const review = step === "Human review when needed";
              return (
                <li key={step} className="flex gap-3 text-sm leading-relaxed">
                  <span
                    className={`text-[10.5px] tabular-nums ${
                      review ? "text-signal" : "text-faint"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={review ? "text-signal" : "text-ink"}>{step}</span>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>

      <p className="text-faint mt-5 text-[11px] leading-relaxed">
        {illustrative.caption}
      </p>

      <Reveal className="border-line mt-12 border-t pt-10">
        <h3 className="text-ink text-[1.0625rem] tracking-tight">
          What a first engagement produces
        </h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {RECEIVE.map((item) => (
            <li
              key={item}
              className="text-muted flex gap-3 text-sm leading-relaxed"
            >
              <span aria-hidden className="bg-signal mt-2 block h-px w-4 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
