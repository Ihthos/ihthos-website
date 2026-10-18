import { ButtonLink } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { ItemHeading, Section, SectionHeading } from "@/components/section";
import { process } from "@/lib/site";

/** The stage where a person, not the system, holds the gate. Only this node
 *  carries the accent, because the accent is reserved for human review. */
const REVIEW_STAGE = 2;

type ProcessProps = {
  /** Off when a PageHero already introduced the page, so no heading repeats. */
  heading?: boolean;
  /** Short form for the home page: the four stages, no per-stage detail. */
  preview?: boolean;
};

export function Process({ heading = true, preview = false }: ProcessProps) {
  return (
    <Section id="process" className={preview ? "" : "bg-sunken"}>
      {heading ? (
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.heading}
          intro={process.intro}
        />
      ) : null}

      {/* The stage rail. A hairline runs through the numbered nodes so the
          four stages read as one sequence, and the review node is the only
          one filled with the accent. Drawn as geometry, not an image. */}
      <Reveal delay={0.05} className={heading ? "mt-14" : "mt-2"}>
        <ol className="relative grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          <span
            aria-hidden
            className="bg-line absolute top-[7px] right-0 left-0 hidden h-px lg:block"
          />
          {process.steps.map((step, index) => {
            const review = index === REVIEW_STAGE;
            return (
              <li key={step.title} className="relative">
                <div className="flex items-center gap-3 lg:block">
                  <span
                    aria-hidden
                    className={`relative z-10 block h-[15px] w-[15px] shrink-0 rounded-full border ${
                      review
                        ? "border-signal bg-signal"
                        : "border-line-strong bg-base"
                    }`}
                  />
                  <p className="text-faint text-[10.5px] tabular-nums lg:mt-5">
                    Stage {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <ItemHeading
                  as={heading ? "h3" : "h2"}
                  className={`mt-4 text-[1.0625rem] tracking-tight lg:mt-2 ${
                    review ? "text-signal" : "text-ink"
                  }`}
                >
                  {step.title}
                </ItemHeading>

                {preview ? null : (
                  <>
                    <p className="text-muted mt-3 max-w-[42ch] text-sm leading-relaxed">
                      {step.body}
                    </p>
                    <div
                      className={`border-line bg-raised mt-5 rounded-[10px] border-l-2 px-4 py-3 ${
                        review ? "border-l-signal" : "border-l-line-strong"
                      }`}
                    >
                      <p className="text-faint text-[10px] tracking-[0.12em] uppercase">
                        {step.noteLabel}
                      </p>
                      <p className="text-muted mt-2 text-[0.8125rem] leading-relaxed">
                        {step.note}
                      </p>
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </Reveal>

      {preview ? (
        <Reveal className="mt-12">
          <ButtonLink href="/process" variant="secondary" cursorLabel="Read">
            {process.link}
          </ButtonLink>
        </Reveal>
      ) : (
        <Reveal className="border-line mt-14 border-t pt-10">
          <ItemHeading
            as={heading ? "h3" : "h2"}
            className="text-[1.5rem] leading-tight tracking-[-0.02em] md:text-[1.9rem]"
          >
            {process.closeHeading}
          </ItemHeading>
          <p className="text-muted mt-4 max-w-[56ch] text-base leading-relaxed">
            {process.closeBody}
          </p>
          <ButtonLink href="/contact" className="mt-8" cursorLabel="Talk">
            {process.closeCta}
          </ButtonLink>
        </Reveal>
      )}
    </Section>
  );
}
