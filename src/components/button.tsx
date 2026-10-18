import Link from "next/link";
import type { ReactNode } from "react";

const BASE =
  "group inline-flex h-11 items-center justify-center rounded-[10px] px-5 text-sm font-medium transition-[background-color,border-color,box-shadow,transform] duration-200 ease-main hover:-translate-y-px active:translate-y-px";

/**
 * The accent colour is reserved for boundary and human-review semantics, so
 * the primary action is a high-contrast neutral instead of an accent fill.
 */
const VARIANTS = {
  primary: "bg-ink text-base hover:bg-white hover:shadow-lift",
  secondary: "border border-line-strong text-ink hover:bg-raised",
} as const;

/**
 * The label rolls up and its duplicate takes its place, so the button
 * acknowledges the pointer without the whole control moving. Reduced motion
 * drops the duplicate and the travel.
 */
function RollLabel({ children }: { children: ReactNode }) {
  return (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-300 ease-main group-hover:-translate-y-full motion-reduce:transition-none motion-reduce:transform-none">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-main group-hover:translate-y-0 motion-reduce:hidden"
      >
        {children}
      </span>
    </span>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
  /** Word the trailing cursor shows while it is over this button. */
  cursorLabel?: string;
};

/**
 * Internal destinations go through the router so route changes animate
 * instead of reloading the document; mail and external links stay plain.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  cursorLabel,
}: ButtonLinkProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;
  const label = <RollLabel>{children}</RollLabel>;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} data-cursor={cursorLabel}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} data-cursor={cursorLabel}>
      {label}
    </a>
  );
}
