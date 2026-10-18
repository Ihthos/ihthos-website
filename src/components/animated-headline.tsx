"use client";

import { stagger, useAnimate } from "motion/react";
import { useEffect } from "react";
import { EASE_CCV } from "@/lib/motion";
import { REDUCED_MOTION_QUERY } from "@/lib/reduced-motion";

/** Phrases that get a drawn box behind them, matched case-insensitively. */
const HIGHLIGHT_PHRASES = ["Less time", "that matters"];

type Token = {
  words: string[];
  highlight: boolean;
};

function normalize(word: string) {
  return word.replace(/[.,;:!?]+$/, "").toLowerCase();
}

/**
 * Splits the sentence into words, grouping any run that matches one of the
 * highlighted phrases so the box can wrap the phrase as a single unit.
 */
function tokenize(text: string): Token[] {
  const words = text.split(" ");
  const tokens: Token[] = [];

  for (let index = 0; index < words.length; index += 1) {
    const phrase = HIGHLIGHT_PHRASES.find((candidate) => {
      const phraseWords = candidate.split(" ");
      return phraseWords.every(
        (phraseWord, offset) =>
          normalize(words[index + offset] ?? "") === phraseWord.toLowerCase(),
      );
    });

    if (phrase) {
      const length = phrase.split(" ").length;
      tokens.push({ words: words.slice(index, index + length), highlight: true });
      index += length - 1;
      continue;
    }

    tokens.push({ words: [words[index]], highlight: false });
  }

  return tokens;
}

function Chars({ word }: { word: string }) {
  return (
    <>
      {Array.from(word).map((char, charIndex) => (
        <span key={charIndex} className="relative inline-block">
          <span className="text-ink">{char}</span>
          <span data-char className="text-signal absolute top-0 left-0 opacity-0">
            {char}
          </span>
        </span>
      ))}
    </>
  );
}

type AnimatedHeadlineProps = {
  text: string;
  className?: string;
};

/**
 * The headline is plain, fully visible text in the HTML, with a static box
 * behind each highlighted phrase. Once hydrated, a band sweeps across those
 * boxes and the characters take a slow pass through the accent colour on top
 * of the ink glyph underneath. Decoration only, so the sentence is readable on
 * first paint, before hydration, with JavaScript off, and for reduced-motion
 * visitors.
 */
export function AnimatedHeadline({ text, className = "" }: AnimatedHeadlineProps) {
  const tokens = tokenize(text);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    // Each panel wipes open from its left edge. A clip wipe keeps the hairline
    // border even, where scaling would distort it.
    const boxControls = animate(
      "[data-highlight-box]",
      {
        opacity: [0, 1],
        clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
      },
      {
        duration: 1.15,
        ease: EASE_CCV,
        delay: stagger(0.45, { startDelay: 0.25 }),
      },
    );

    const charControls = animate(
      "[data-char]",
      { opacity: [0, 1, 0] },
      {
        duration: 1.8,
        times: [0, 0.14, 1],
        delay: stagger(0.012, { startDelay: 1.55 }),
      },
    );

    return () => {
      boxControls.stop();
      charControls.stop();
    };
  }, [animate, scope, text]);

  return (
    <h1 ref={scope} aria-label={text} className={className}>
      {/* Hidden from assistive tech: the heading's own label already carries
          the sentence, and these spans would read as one run-on word. */}
      <span aria-hidden className="flex flex-wrap gap-x-[0.24em]">
        {tokens.map((token, tokenIndex) =>
          token.highlight ? (
            <span
              key={`${token.words.join("-")}-${tokenIndex}`}
              className="relative inline-flex gap-x-[0.24em] whitespace-nowrap"
            >
              <span
                data-highlight-box
                aria-hidden
                style={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                className="bg-signal/14 border-signal/50 pointer-events-none absolute -inset-x-[0.12em] -inset-y-[0.14em] rounded-[3px] border"
              />
              {token.words.map((word, wordIndex) => (
                <span key={wordIndex} className="relative inline-block">
                  <Chars word={word} />
                </span>
              ))}
            </span>
          ) : (
            <span key={`${token.words[0]}-${tokenIndex}`} className="inline-block">
              <Chars word={token.words[0]} />
            </span>
          ),
        )}
      </span>
    </h1>
  );
}
