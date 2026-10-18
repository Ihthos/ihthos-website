"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { ButtonLink } from "@/components/button";
import { MenuOverlay } from "@/components/menu-overlay";
import { cta, menu, nav } from "@/lib/site";

/**
 * The bar carries the map itself at desktop widths, so every primary
 * destination is one click away without opening anything. The overlay is kept
 * for the widths where five labels cannot fit, and as the larger version of
 * the same map rather than as the only way in.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 40,
    mass: 0.4,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "border-line bg-base/85" : "border-line/60 bg-base/60"
      }`}
    >
      <a
        href="#main"
        className="focus:bg-ink focus:text-base sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-[10px] focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center gap-6 px-6">
        <Link href="/" className="focus-visible:rounded-sm" aria-label="Ihthos, home">
          <Image
            src="/brand/website_header_1600x400_transparent.png"
            alt="Ihthos"
            width={1600}
            height={400}
            priority
            className="invert h-6 w-auto md:h-7"
          />
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 md:flex">
          {nav.map((entry) => {
            const active = pathname === entry.href;
            return (
              <Link
                key={entry.href}
                href={entry.href}
                aria-current={active ? "page" : undefined}
                data-cursor="Go"
                className={`nav-link text-sm transition-colors duration-150 ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {entry.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <ButtonLink href="/contact" className="hidden sm:inline-flex" cursorLabel="Talk">
            {cta.primary}
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen(true)}
            data-cursor="Open"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="site-menu"
            className="border-line-strong text-ink hover:bg-raised group flex h-11 items-center gap-2.5 rounded-[10px] border pr-1.5 pl-4 text-sm font-medium transition-colors duration-200 md:hidden"
          >
            {menu.label}
            {/* Two rules that close toward the middle as the map opens. */}
            <span aria-hidden className="relative block h-11 w-7">
              <motion.span
                animate={open ? { y: 21, rotate: 45 } : { y: 18, rotate: 0 }}
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
                className="bg-ink absolute inset-x-0 top-0 block h-px"
              />
              <motion.span
                animate={open ? { y: 21, rotate: -45 } : { y: 24, rotate: 0 }}
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
                className="bg-ink absolute inset-x-0 top-0 block h-px"
              />
            </span>
          </button>
        </div>
      </div>

      {/* Reading progress. A hairline only; it should register, not announce. */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="bg-ink/35 absolute inset-x-0 -bottom-px h-px origin-left"
      />

      <MenuOverlay open={open} onClose={close} />
    </header>
  );
}
