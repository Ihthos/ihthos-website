import Image from "next/image";
import Link from "next/link";
import { brand, footer, footerNav, legalNav } from "@/lib/site";

/** Resolved once, when the page is built. */
function CopyrightYear() {
  return <>{new Date().getFullYear()}</>;
}

export function SiteFooter() {
  return (
    <footer className="border-line bg-sunken relative z-10 mt-auto border-t">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/website_header_1600x400_transparent.png"
              alt="Ihthos"
              width={1600}
              height={400}
              className="invert h-7 w-auto"
            />
            <p className="text-muted mt-4 max-w-[34ch] text-sm leading-relaxed">
              {footer.blurb}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-faint text-[10.5px] tracking-[0.12em] uppercase">
              Sections
            </h2>
            <ul className="mt-4 grid gap-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-ink text-sm transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-faint text-[10.5px] tracking-[0.12em] uppercase">
              Contact
            </h2>
            <p className="mt-4">
              <a
                href={`mailto:${brand.email}`}
                className="text-muted hover:text-ink text-[0.8125rem] transition-colors duration-150"
              >
                {brand.email}
              </a>
            </p>
            <p className="text-faint mt-3 text-[11px] leading-relaxed">
              A short description of one process is enough to start.
            </p>
          </div>
        </div>

        <div className="border-line text-faint mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t pt-6 text-xs">
          <span>
            &copy; <CopyrightYear />{" "}
            {brand.name}.
          </span>
          <span className="text-line-strong" aria-hidden>
            /
          </span>
          <ul className="flex items-center gap-x-3">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-ink transition-colors duration-150"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
