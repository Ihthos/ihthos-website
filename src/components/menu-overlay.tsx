"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ButtonLink } from "@/components/button";
import { EASE_CUBIX, EASE_CCC } from "@/lib/motion";
import { brand, cta, menu, nav } from "@/lib/site";

/* A `fixed inset-0` box is only viewport-relative while no ancestor creates a
   containing block. The header this menu opens from carries `backdrop-blur-xl`,
   and `backdrop-filter` does exactly that — so a drawer rendered inside the
   header was clamped to the header's 64px strip and looked dead. Portalling to
   <body> keeps the overlay viewport-relative regardless of the surrounding
   layout. Detected through `useSyncExternalStore` so the server render (which
   omits the overlay) matches the first client render exactly. */
const subscribeNoop = () => () => {};
const onClient = () => true;
const onServer = () => false;

/** Stacked wipes behind the panel. Each one leads the next by `PANEL_STAGGER`,
 *  so the drawer opens as a cascade of bands rather than a single slide. */
const PANEL_COUNT = 3;
const PANEL_STAGGER = 0.12;
const PANEL_DURATION = 0.575;

const root: Variants = { hidden: {}, shown: {} };

const scrim: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.3, ease: EASE_CCC } },
  shown: { opacity: 1, transition: { duration: 0.45, ease: EASE_CCC } },
};

const panel: Variants = {
  hidden: (index: number) => ({
    x: "101%",
    transition: {
      duration: 0.45,
      ease: EASE_CUBIX,
      delay: (PANEL_COUNT - 1 - index) * 0.06,
    },
  }),
  shown: (index: number) => ({
    x: "0%",
    transition: {
      duration: PANEL_DURATION,
      ease: EASE_CUBIX,
      delay: index * PANEL_STAGGER,
    },
  }),
};

const head: Variants = {
  hidden: { opacity: 0, y: -16, transition: { duration: 0.3, ease: EASE_CCC } },
  shown: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_CCC, delay: 0.15 } },
};

/** The link list starts only after the panels have swept, then resolves one row
 *  at a time. */
const list: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.05, delayChildren: 0.35 } },
};

const row: Variants = {
  hidden: { y: "140%", rotate: 10, transition: { duration: 0.4, ease: EASE_CUBIX } },
  shown: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: EASE_CUBIX } },
};

const fadeGroup: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.04, delayChildren: 0.75 } },
};

const fade: Variants = {
  hidden: { opacity: 0, y: "50%", transition: { duration: 0.3, ease: EASE_CCC } },
  shown: { opacity: 1, y: "0%", transition: { duration: 0.8, ease: EASE_CCC } },
};

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * A side navigation panel. Every route is one tap from here, so it is allowed
 * to be the most animated surface on the site: stacked bands wipe in from the
 * right, the links rise out of their own masks behind them, and the footer
 * resolves last. Closing reverses the cascade.
 */
export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const pathname = usePathname();
  const isClient = useSyncExternalStore(subscribeNoop, onClient, onServer);
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // A route change is the end of the conversation with the menu.
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // The page behind the panel is scrimmed but still tabbable, so focus has to
  // be held here while the menu is open: focus moves to the close button, Tab
  // cycles inside the panel, and closing hands focus back to the trigger. A
  // panel that dropped focus onto the page behind it would put the focus ring
  // where the visitor cannot see it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    const trigger = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const panel = () => panelRef.current;
    const stops = (): HTMLElement[] => {
      const el = panel();
      if (!el) return [];
      return Array.from(
        el.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = stops();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement;
      if (event.shiftKey) {
        if (current === first || !panel()?.contains(current)) {
          event.preventDefault();
          last.focus();
        }
      } else if (current === last || !panel()?.contains(current)) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      if (trigger?.isConnected) trigger.focus();
    };
  }, [open, onClose]);

  // Nothing to portal until the client is running; the menu can only be opened
  // by an interaction anyway, so the server never needs to render it.
  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          key="menu"
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          variants={root}
          initial="hidden"
          animate="shown"
          exit="hidden"
          className="fixed inset-0 z-[60]"
        >
          <motion.button
            type="button"
            aria-label={menu.close}
            tabIndex={-1}
            onClick={onClose}
            variants={scrim}
            className="bg-base/70 absolute inset-0 cursor-default backdrop-blur-sm"
          />

          <motion.aside
            ref={panelRef}
            className="absolute inset-y-0 right-0 w-full max-w-[560px] overflow-hidden"
          >
            {Array.from({ length: PANEL_COUNT }, (_, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={panel}
                className={`absolute inset-0 will-change-transform ${
                  index === PANEL_COUNT - 1
                    ? "bg-base"
                    : index === PANEL_COUNT - 2
                      ? "bg-raised"
                      : "bg-signal-wash"
                }`}
              />
            ))}

            <div className="border-line relative z-10 flex h-full flex-col overflow-y-auto border-l px-6 py-6 md:px-10">
              <motion.div
                variants={head}
                className="flex h-10 items-center justify-between"
              >
                <span className="text-faint text-[10.5px] tracking-[0.16em] uppercase">
                  {menu.label}
                </span>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  className="border-line-strong text-ink hover:bg-raised h-10 rounded-[10px] border px-4 text-sm font-medium transition-colors duration-200"
                >
                  {menu.close}
                </button>
              </motion.div>

              <motion.ul variants={list} className="mt-16 flex-1">
                {nav.map((item, index) => {
                  const active = pathname === item.href;
                  return (
                    <motion.li
                      key={item.href}
                      variants={row}
                      className="border-line overflow-hidden border-t py-1 first:border-t-0"
                    >
                      <Link
                        href={item.href}
                        className="group flex items-baseline gap-5 py-4"
                      >
                        <span className="text-faint text-[10.5px] tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-[2rem] leading-none tracking-[-0.03em] transition-colors duration-200 group-hover:text-white md:text-[2.5rem] ${
                            active ? "text-signal" : "text-ink"
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <motion.div
                variants={fadeGroup}
                className="border-line mt-10 border-t pt-8"
              >
                <motion.p
                  variants={fade}
                  className="text-muted max-w-[38ch] text-sm leading-relaxed"
                >
                  {menu.blurb}
                </motion.p>
                <motion.div variants={fade}>
                  <ButtonLink href="/contact" className="mt-5 w-full">
                    {cta.primary}
                  </ButtonLink>
                </motion.div>
                <motion.a
                  variants={fade}
                  href={`mailto:${brand.email}`}
                  className="text-faint hover:text-ink mt-4 block text-[0.8125rem] transition-colors duration-150"
                >
                  {brand.email}
                </motion.a>
              </motion.div>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
