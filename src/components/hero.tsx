import { AnimatedHeadline } from "@/components/animated-headline";
import { ButtonLink } from "@/components/button";
import { WorkflowDiagram } from "@/components/workflow-diagram";
import { hero } from "@/lib/site";

/**
 * The hero is fully rendered and visible on first paint. The only motion is
 * the headline's accent pass, which decorates text that is already there, and
 * the diagram's hover/focus highlighting.
 */
export function Hero() {
  return (
    <section id="top" className="border-line border-b">
      <div className="mx-auto flex w-full max-w-[1180px] items-center px-6 py-16 md:py-20 lg:min-h-[calc(100dvh-4rem)]">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-14">
          <div>
            <p className="text-faint mb-6 text-[10.5px] tracking-[0.16em] uppercase">
              {hero.eyebrow}
            </p>

            <AnimatedHeadline
              text={hero.headline}
              className="text-[clamp(2.25rem,4.9vw,3.6rem)] leading-[1.08] tracking-[-0.03em]"
            />

            <p className="text-muted mt-7 max-w-[58ch] text-base leading-relaxed md:text-[1.0625rem]">
              {hero.body}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" cursorLabel="Talk">
                {hero.primaryCta}
              </ButtonLink>
              <ButtonLink href="/process" variant="secondary" cursorLabel="Read">
                {hero.secondaryCta}
              </ButtonLink>
            </div>

            <p className="text-faint mt-6 max-w-[46ch] text-[0.8125rem] leading-relaxed">
              {hero.micro}
            </p>

            {/* Fills the viewport at lg, so a cue that there is more below is
                real navigation, not decoration. */}
            <div className="mt-12 hidden items-center gap-3 lg:flex">
              <span className="text-faint text-[10.5px] tracking-[0.14em] uppercase">
                Scroll
              </span>
              <span aria-hidden className="bg-line-strong relative block h-7 w-px overflow-hidden">
                <span className="scroll-cue-dot bg-ink/70 absolute inset-x-0 top-0 block h-3" />
              </span>
            </div>
          </div>

          <div>
            {/* Neutral light behind the figure. Kept colourless so the accent
                stays reserved for the review gate inside the diagram. */}
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(58%_58%_at_50%_45%,rgb(255_255_255/0.06),transparent_72%)] blur-2xl"
              />
              <div className="relative">
                <WorkflowDiagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
