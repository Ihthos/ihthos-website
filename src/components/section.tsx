import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionProps = {
  id: string;
  children: ReactNode;
  /** Draw the hairline that separates this section from the one above. */
  rule?: boolean;
  className?: string;
};

export function Section({ id, children, rule = true, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`${rule ? "border-line border-t" : ""} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 py-20 md:py-28">
        {children}
      </div>
    </section>
  );
}

/**
 * A title that hangs below a section heading. On the home page the section
 * draws its own h2, so a card or stage title reads as h3 — but an inner page
 * puts the only h1 in the PageHero and suppresses the section heading, which
 * would leave that title two levels under the h1 with nothing between them.
 * The level is passed in; the styling does not change.
 */
export function ItemHeading({
  as,
  className,
  children,
}: {
  as: "h2" | "h3";
  className?: string;
  children: ReactNode;
}) {
  if (as === "h2") return <h2 className={className}>{children}</h2>;
  return <h3 className={className}>{children}</h3>;
}

type SectionHeadingProps = {
  title: string;
  intro?: string;
  /** Mono micro-label. Used sparingly; not on every section. */
  eyebrow?: string;
  align?: "start" | "center";
};

export function SectionHeading({
  title,
  intro,
  eyebrow,
  align = "start",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={align === "center" ? "mx-auto max-w-[52ch] text-center" : "max-w-[46ch]"}
    >
      {eyebrow ? (
        <p className="text-faint mb-4 text-[11px] tracking-[0.14em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[1.9rem] leading-[1.08] tracking-[-0.025em] text-balance md:text-[2.75rem]">
        {title}
      </h2>
      {intro ? (
        <p className="text-muted mt-5 text-base leading-relaxed md:text-[1.0625rem]">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
