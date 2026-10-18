"use client";

import { useState } from "react";

type NodeId =
  | "capture"
  | "classify"
  | "review"
  | "execute"
  | "record"
  | "person";

type NodeProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  accent?: boolean;
  id: NodeId;
  active: boolean;
  onHover: (id: NodeId | null) => void;
  onFocus: (id: NodeId | null) => void;
};

/**
 * One step of the workflow. Hover and keyboard focus both raise the same
 * state, so the node's ring and its connectors light the same way however the
 * visitor arrives. The default outline is dropped in `globals.css` because the
 * ring replaces it; the ring is always rendered and only its opacity changes,
 * so focus is never invisible if a style fails to apply.
 */
function Node({
  x,
  y,
  w,
  h,
  label,
  accent = false,
  id,
  active,
  onHover,
  onFocus,
}: NodeProps) {
  return (
    <g
      className="wf-node"
      tabIndex={0}
      role="group"
      aria-label={label}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onFocus(id)}
      onBlur={() => onFocus(null)}
    >
      <rect
        x={x - 4}
        y={y - 4}
        width={w + 8}
        height={h + 8}
        rx={12}
        className="wf-ring stroke-signal fill-none"
        strokeWidth={1.5}
        opacity={active ? 1 : 0}
        aria-hidden
      />
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        className={accent ? "fill-signal-wash stroke-signal" : "fill-raised stroke-line-strong"}
        strokeWidth={1}
      />
      <text
        x={x + w / 2}
        y={y + h / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className={accent ? "fill-signal text-[11px]" : "fill-ink text-[11px]"}
      >
        {label}
      </text>
    </g>
  );
}

function Chip({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={132}
        height={38}
        rx={8}
        className="fill-sunken stroke-line"
        strokeWidth={1}
      />
      <text
        x={x + 16}
        y={y + 19}
        dominantBaseline="middle"
        className="fill-muted text-[10.5px]"
      >
        {label}
      </text>
    </g>
  );
}

const SPINE_X = 170;
const SPINE_W = 210;
const SPINE_H = 52;

/**
 * A schematic of the kind of workflow Ihthos builds: sources feed a spine of
 * steps, a person holds the review gate, and anything the system is unsure
 * about lands with a person instead of being handled on a guess. Drawn as real
 * vector geometry rather than a screenshot of software that does not exist.
 *
 * The diagram is complete and legible in the HTML and on first paint. Its only
 * motion is the hover/focus highlight, which lights a node and its connectors.
 * Reduced-motion visitors get the same finished diagram.
 */
export function WorkflowDiagram() {
  // Two sources, so a pointer that sweeps past a node cannot clear the ring
  // the keyboard just put there. The pointer wins while it is over the node;
  // otherwise the focused node stays lit.
  const [hovered, setHovered] = useState<NodeId | null>(null);
  const [focused, setFocused] = useState<NodeId | null>(null);
  const active = hovered ?? focused;

  /**
   * A connector lights when either endpoint of the step it joins is active, so
   * hovering or focusing a node shows where work arrives from and leaves to.
   * Neutral connectors brighten to `ink`; the two accent (dashed) connectors
   * keep the accent and only thicken, so the accent keeps its meaning — a
   * person decides — instead of becoming a hover tint.
   */
  const lit = (...ids: NodeId[]) => ids.some((id) => id === active);
  const spine = (a: NodeId, b: NodeId) =>
    `wf-link ${lit(a, b) ? "stroke-ink" : "stroke-line-strong"}`;
  const spineWidth = (a: NodeId, b: NodeId) => (lit(a, b) ? 2 : 1);

  return (
    <figure className="border-line bg-sunken rounded-[10px] border p-5 md:p-6">
      <figcaption className="text-faint mb-5 text-[10.5px] tracking-[0.12em] uppercase">
        Illustrative workflow
      </figcaption>

      <svg
        viewBox="0 0 560 520"
        role="group"
        aria-label="Workflow diagram. Three sources — a form, email, and a CRM record — feed a spine of five steps: capture and normalize, classify, human review, execute action, and record and report. A low-confidence item branches off after classify to a step called Needs a person, where it waits for that person instead of proceeding."
        className="h-auto w-full"
      >
        <defs>
          <marker
            id="wf-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,1 L9,5 L0,9 z" className="fill-line-strong" />
          </marker>
          <marker
            id="wf-arrow-accent"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,1 L9,5 L0,9 z" className="fill-signal" />
          </marker>
        </defs>

        {/* Sources, merging into the first step. The chips are the inputs, not
            the workflow, so they stay out of the tab order; the merge line
            still lights when the first step is active. */}
        <Chip x={14} y={62} label="Form" />
        <Chip x={14} y={112} label="Email" />
        <Chip x={14} y={162} label="CRM record" />

        <path
          d="M146 81 H160 M146 131 H160 M146 181 H160 M160 81 V181 M160 82 H170"
          className={spine("capture", "capture")}
          strokeWidth={spineWidth("capture", "capture")}
          fill="none"
        />

        {/* Main spine */}
        <path
          d={`M${SPINE_X + SPINE_W / 2} 108 V146`}
          className={spine("capture", "classify")}
          strokeWidth={spineWidth("capture", "classify")}
          markerEnd="url(#wf-arrow)"
        />
        <path
          d={`M${SPINE_X + SPINE_W / 2} 198 V240`}
          className={spine("classify", "review")}
          strokeWidth={spineWidth("classify", "review")}
          markerEnd="url(#wf-arrow)"
        />
        <path
          d={`M${SPINE_X + SPINE_W / 2} 304 V346`}
          className={spine("review", "execute")}
          strokeWidth={spineWidth("review", "execute")}
          markerEnd="url(#wf-arrow)"
        />
        <path
          d={`M${SPINE_X + SPINE_W / 2} 398 V436`}
          className={spine("execute", "record")}
          strokeWidth={spineWidth("execute", "record")}
          markerEnd="url(#wf-arrow)"
        />

        <Node
          x={SPINE_X}
          y={56}
          w={SPINE_W}
          h={SPINE_H}
          label="Capture and normalize"
          id="capture"
          active={active === "capture"}
          onHover={setHovered}
          onFocus={setFocused}
        />
        <Node
          x={SPINE_X}
          y={146}
          w={SPINE_W}
          h={SPINE_H}
          label="Classify"
          id="classify"
          active={active === "classify"}
          onHover={setHovered}
          onFocus={setFocused}
        />
        <Node
          x={SPINE_X}
          y={240}
          w={SPINE_W}
          h={64}
          label="Human review"
          accent
          id="review"
          active={active === "review"}
          onHover={setHovered}
          onFocus={setFocused}
        />
        <Node
          x={SPINE_X}
          y={346}
          w={SPINE_W}
          h={SPINE_H}
          label="Execute action"
          id="execute"
          active={active === "execute"}
          onHover={setHovered}
          onFocus={setFocused}
        />
        <Node
          x={SPINE_X}
          y={436}
          w={SPINE_W}
          h={SPINE_H}
          label="Record and report"
          id="record"
          active={active === "record"}
          onHover={setHovered}
          onFocus={setFocused}
        />

        {/* Low-confidence branch, and the person who resolves it */}
        <path
          d="M380 172 H392 V262 H400"
          className="wf-link stroke-signal"
          strokeWidth={lit("classify", "person") ? 2 : 1}
          strokeDasharray="4 4"
          fill="none"
          markerEnd="url(#wf-arrow-accent)"
        />
        <text x={396} y={158} className="fill-signal text-[10px]">
          low confidence
        </text>

        <Node
          x={400}
          y={226}
          w={146}
          h={72}
          label="Needs a person"
          id="person"
          active={active === "person"}
          onHover={setHovered}
          onFocus={setFocused}
        />

        <path
          d="M400 288 H392 V280 H380"
          className="wf-link stroke-signal"
          strokeWidth={lit("person", "review") ? 2 : 1}
          strokeDasharray="4 4"
          fill="none"
          markerEnd="url(#wf-arrow-accent)"
        />
        <text x={392} y={330} className="fill-signal text-[10px]">
          a person decides
        </text>
      </svg>

      <p className="text-muted mt-5 max-w-[62ch] text-[0.9375rem] leading-relaxed">
        Sources feed a spine of steps. Each item is captured, sorted, and
        carried out — pausing at the human review gate before anything
        consequential happens. Anything the system is unsure about leaves the
        spine and waits with a person instead of proceeding on a guess.
      </p>
    </figure>
  );
}
