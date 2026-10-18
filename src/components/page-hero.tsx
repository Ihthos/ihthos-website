import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  /** Mono micro-label naming the page. One per page; neutral, not accented. */
  label: string;
  title: string;
  intro: string;
  children?: ReactNode;
};

/**
 * The opening block of an inner page. It carries the page's single promise,
 * then gets out of the way — the sections below do the arguing.
 */
export function PageHero({ label, title, intro, children }: PageHeroProps) {
  return (
    <header className="border-line border-b">
      <div className="mx-auto w-full max-w-[1180px] px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <Reveal className="max-w-[54ch]">
          <p className="text-faint text-[10.5px] tracking-[0.16em] uppercase">
            {label}
          </p>
          <h1 className="mt-5 text-[clamp(2rem,4vw,3.1rem)] leading-[1.06] tracking-[-0.03em] text-balance">
            {title}
          </h1>
          <p className="text-muted mt-6 text-base leading-relaxed md:text-[1.0625rem]">
            {intro}
          </p>
        </Reveal>
        {children}
      </div>
    </header>
  );
}
