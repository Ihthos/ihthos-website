import Image from "next/image";
import { media } from "@/lib/site";

/**
 * The About-page visual. When an approved photograph is supplied it is shown
 * with a purposeful crop; until then the slot carries an editorial graphic
 * instead of an empty plate — the point of contact is how the work is
 * approached: scattered inputs are gathered into one understood process, which
 * the client reviews, then handed over documented and owned.
 *
 * The graphic is informative, so it carries a single concise description rather
 * than exposing its internal shapes. It is drawn with the site's own line,
 * surface and accent tokens and uses no fabricated person or client data.
 */
const PLATE_DESCRIPTION =
  "How the work gets clearer: scattered inputs — a form, email, and notes — are gathered into one understood process, which you review, then handed over documented with a named owner.";

const CHIP = "fill-sunken stroke-line-strong";
const NODE = "fill-raised stroke-line-strong";
const LABEL = "fill-muted text-[9.5px]";
const NODE_LABEL = "fill-ink text-[10px]";

function Arrow({ y }: { y: number }) {
  return (
    <line
      x1={160}
      y1={y}
      x2={160}
      y2={y + 26}
      className="stroke-line-strong"
      strokeWidth={1}
      markerEnd="url(#plate-arrow)"
    />
  );
}

export function FounderPlate({ className = "" }: { className?: string }) {
  const { src, alt } = media.founder;

  if (src) {
    return (
      <div
        className={`border-line bg-sunken relative overflow-hidden rounded-[10px] border ${className}`}
      >
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 20rem, 100vw" className="object-cover" />
      </div>
    );
  }

  return (
    <figure
      className={`border-line bg-sunken relative overflow-hidden rounded-[10px] border ${className}`}
    >
      {/* Colourless light from the top, matching the ambience layer rather
          than introducing a second accent hue. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_12%,rgb(255_255_255/0.07),transparent_70%)]"
      />
      <svg
        viewBox="0 0 320 400"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={PLATE_DESCRIPTION}
        className="relative h-full w-full p-4"
      >
        <defs>
          <marker
            id="plate-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M0,1 L9,5 L0,9 z" className="fill-line-strong" />
          </marker>
        </defs>

        {/* Scattered inputs. The offsets are the point: three sources that are
            not yet one process. */}
        <g>
          <rect x={26} y={30} width={104} height={30} rx={6} className={CHIP} strokeWidth={1} strokeDasharray="3 3" />
          <text x={38} y={49} className={LABEL}>Form</text>

          <rect x={116} y={58} width={104} height={30} rx={6} className={CHIP} strokeWidth={1} strokeDasharray="3 3" />
          <text x={128} y={77} className={LABEL}>Email</text>

          <rect x={42} y={92} width={104} height={30} rx={6} className={CHIP} strokeWidth={1} strokeDasharray="3 3" />
          <text x={54} y={111} className={LABEL}>Notes</text>
        </g>

        {/* The three lines resolve to one point: understanding the process. */}
        <g className="stroke-line-strong" strokeWidth={1} fill="none">
          <path d="M78 60 C78 108 120 128 160 140" />
          <path d="M168 88 C168 112 164 126 160 140" />
          <path d="M94 122 C94 132 122 138 160 140" />
        </g>
        <line x1={160} y1={140} x2={160} y2={156} className="stroke-line-strong" strokeWidth={1} />

        {/* Understood */}
        <rect x={60} y={156} width={200} height={44} rx={8} className={NODE} strokeWidth={1} />
        <text x={160} y={178} textAnchor="middle" dominantBaseline="middle" className={NODE_LABEL}>
          Understand the process
        </text>

        <Arrow y={200} />

        {/* Reviewed with the client — the one accent, because this is the step
            that needs a person. */}
        <rect x={60} y={226} width={200} height={44} rx={8} className="fill-signal-wash stroke-signal" strokeWidth={1} />
        <text x={160} y={248} textAnchor="middle" dominantBaseline="middle" className="fill-signal text-[10px]">
          Review with you
        </text>

        <Arrow y={270} />

        {/* Handed over documented */}
        <rect x={60} y={296} width={200} height={44} rx={8} className={NODE} strokeWidth={1} />
        <text x={160} y={318} textAnchor="middle" dominantBaseline="middle" className={NODE_LABEL}>
          Documented handoff
        </text>

        {/* The end state, named plainly. */}
        <text
          x={160}
          y={366}
          textAnchor="middle"
          className="fill-faint text-[9px] tracking-[0.12em] uppercase"
        >
          One process · one named owner
        </text>
      </svg>
    </figure>
  );
}
