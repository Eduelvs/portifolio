"use client";

import * as React from "react";
import OptionWheel from "@/components/ui/OptionWheel";

export interface ScrollReelTestimonial {
  quote: string;
  author: string;
  image: string;
  alt?: string;
}

export interface ScrollReelTestimonialsProps {
  testimonials: ScrollReelTestimonial[];
  charStaggerMs?: number;
  className?: string;
}

const CELL = 121.33;
const GAP = 8;
const STEP = 3 * (CELL + GAP);

const EXIT_MS = 240;
const SLIDE_MS = 800;
const AUTO_MS = 15000;
const TIMER_R = 16;

const EASE_INOUT = "cubic-bezier(0.65,0,0.35,1)";

const QUOTE_CLASSES =
  "m-0 text-lg font-medium leading-[1.3] tracking-[-0.02em] text-foreground sm:text-[22px]";
const AUTHOR_CLASSES =
  "m-0 text-sm font-medium leading-[1.3] text-muted-foreground";

const FEATURED_SHADOW =
  "0 1.008px 0.705px -0.563px rgba(0,0,0,0.18), 0 2.389px 1.672px -1.125px rgba(0,0,0,0.17), 0 4.357px 3.05px -1.688px rgba(0,0,0,0.17), 0 7.244px 5.07px -2.25px rgba(0,0,0,0.16), 0 11.698px 8.188px -2.813px rgba(0,0,0,0.15), 0 19.148px 13.404px -3.375px rgba(0,0,0,0.13), 0 32.972px 23.08px -3.938px rgba(0,0,0,0.09), 0 60px 42px -4.5px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(0,0,0,0.6)";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Cell() {
  return (
    <div
      aria-hidden="true"
      className="shrink-0 rounded-xl border border-border bg-gradient-to-b from-secondary to-card blur-[1px] shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"
      style={{ width: CELL, height: CELL }}
    />
  );
}

function Featured({ src, alt }: { src: string; alt?: string }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-xl bg-muted dark:ring-1 dark:ring-white/10"
      style={{ width: CELL, height: CELL, boxShadow: FEATURED_SHADOW }}
    >
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] bg-white mix-blend-saturation"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] blur-[6px] mix-blend-overlay"
        style={{
          background:
            "linear-gradient(220.99deg, rgba(108,92,255,0) 32%, rgb(108,92,255) 41%, rgb(173,177,255) 47%, rgba(130,189,237,0.57) 54%, rgba(130,189,237,0) 65%)",
        }}
      />
    </div>
  );
}

function Chars({
  text,
  startIndex,
  staggerMs,
}: {
  text: string;
  startIndex: number;
  staggerMs: number;
}) {
  let idx = startIndex;
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => {
        const wordSpan = (
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch, ci) => {
              const delay = idx * staggerMs;
              idx++;
              return (
                <span
                  key={ci}
                  className="scroll-reel-char"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {ch}
                </span>
              );
            })}
          </span>
        );
        if (wi < words.length - 1) idx++;
        return (
          <React.Fragment key={wi}>
            {wordSpan}
            {wi < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </>
  );
}

export function ScrollReelTestimonials({
  testimonials,
  charStaggerMs = 6,
  className,
}: ScrollReelTestimonialsProps) {
  const [index, setIndex] = React.useState(0);
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [exiting, setExiting] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [secondsLeft, setSecondsLeft] = React.useState(AUTO_MS / 1000);
  const [paused, setPaused] = React.useState(false);
  const leftMs = React.useRef(AUTO_MS);
  const animating = React.useRef(false);
  const timeouts = React.useRef<ReturnType<typeof setTimeout>[]>([]);

  const count = testimonials.length;

  React.useEffect(() => {
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setMounted(true))
    );
    return () => {
      cancelAnimationFrame(raf);
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  const goTo = React.useCallback(
    (next: number) => {
      if (count === 0) return;
      const wrapped = ((next % count) + count) % count;
      if (wrapped === index) return;
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
      animating.current = true;

      setIndex(wrapped);
      setExiting(true);

      timeouts.current.push(
        setTimeout(() => {
          setDisplayIndex(wrapped);
          setExiting(false);
        }, EXIT_MS)
      );
      timeouts.current.push(
        setTimeout(() => {
          animating.current = false;
        }, SLIDE_MS)
      );
    },
    [index, count]
  );

  const paginate = React.useCallback(
    (dir: 1 | -1, loop = false) => {
      if (animating.current) return;
      let next = index + dir;
      if (loop) next = (next + count) % count;
      else if (next < 0 || next >= count) return;
      goTo(next);
    },
    [index, count, goTo]
  );

  const [visual, setVisual] = React.useState(0);
  const [instant, setInstant] = React.useState(false);
  const labels = React.useMemo(
    () =>
      testimonials.map((item) => {
        const name = item.author.split(" · ")[0] ?? item.author;
        return name.split(" ")[0] || name;
      }),
    [testimonials]
  );

  React.useEffect(() => {
    setVisual((prev) => {
      if (count <= 1) return index;
      const turns = Math.round((prev - index) / count);
      let next = index + turns * count;
      const other = next + (next < prev ? count : -count);
      if (Math.abs(other - prev) < Math.abs(next - prev)) next = other;
      return next;
    });
  }, [index, count]);

  React.useEffect(() => {
    if (visual >= 0 && visual < count) return;
    const id = window.setTimeout(() => {
      setInstant(true);
      setVisual(((visual % count) + count) % count);
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [visual, count]);

  React.useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setInstant(false));
    });
    return () => cancelAnimationFrame(id);
  }, [instant]);

  React.useEffect(() => {
    leftMs.current = AUTO_MS;
    setSecondsLeft(AUTO_MS / 1000);
    setPaused(false);
  }, [index]);

  React.useEffect(() => {
    if (paused || count < 2) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const budget = leftMs.current;
    const started = Date.now();
    const tick = window.setInterval(() => {
      const left = Math.max(0, budget - (Date.now() - started));
      leftMs.current = left;
      setSecondsLeft(Math.ceil(left / 1000));
    }, 250);
    const advance = window.setTimeout(() => paginate(1, true), budget);

    return () => {
      leftMs.current = Math.max(0, budget - (Date.now() - started));
      window.clearInterval(tick);
      window.clearTimeout(advance);
    };
  }, [paused, index, count, paginate]);

  const middleItems = React.useMemo(() => {
    const items: Array<{ type: "cell" } | { type: "featured"; i: number }> = [];
    for (let i = 0; i < 3; i++) items.push({ type: "cell" });
    if (count > 0) {
      items.push({ type: "featured", i: count - 1 });
      items.push({ type: "cell" }, { type: "cell" });
    }
    testimonials.forEach((_, i) => {
      items.push({ type: "featured", i });
      if (i < count - 1) {
        items.push({ type: "cell" }, { type: "cell" });
      }
    });
    if (count > 0) {
      items.push({ type: "cell" }, { type: "cell" });
      items.push({ type: "featured", i: 0 });
    }
    for (let i = 0; i < 3; i++) items.push({ type: "cell" });
    return items;
  }, [testimonials, count]);

  const sideCellCount = 10 + 2 * count;
  const centerIdx = (count - 1) / 2;
  const middleY = (centerIdx - visual) * STEP;
  const sideY = -middleY;

  const colStyle = (y: number): React.CSSProperties => ({
    transform: `translateY(${y}px)`,
    transition: mounted && !instant ? `transform ${SLIDE_MS}ms ${EASE_INOUT}` : "none",
  });

  const current = testimonials[displayIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Recomendações"
      className={cn(
        "relative flex w-full max-w-[1060px] flex-col items-stretch gap-2.5 overflow-hidden rounded-xl border border-border bg-muted shadow-[inset_0_2px_0_rgba(255,255,255,1)] outline-none focus-visible:ring-2 focus-visible:ring-ring md:min-h-[320px] md:flex-row",
        "dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="relative h-56 w-full shrink-0 self-stretch overflow-hidden md:h-auto md:w-[380px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <div
            className="flex shrink-0 flex-col gap-2 will-change-transform motion-reduce:[transition:none!important]"
            style={colStyle(sideY)}
          >
            {Array.from({ length: sideCellCount }).map((_, i) => (
              <Cell key={i} />
            ))}
          </div>

          <div
            className="flex shrink-0 flex-col gap-2 will-change-transform motion-reduce:[transition:none!important]"
            style={colStyle(middleY)}
          >
            {middleItems.map((item, i) =>
              item.type === "featured" ? (
                <Featured
                  key={i}
                  src={testimonials[item.i].image}
                  alt={testimonials[item.i].alt}
                />
              ) : (
                <Cell key={i} />
              )
            )}
          </div>

          <div
            className="flex shrink-0 flex-col gap-2 will-change-transform motion-reduce:[transition:none!important]"
            style={colStyle(sideY)}
          >
            {Array.from({ length: sideCellCount }).map((_, i) => (
              <Cell key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 self-stretch">
        <div className="flex min-w-0 flex-1 flex-col px-5 py-7 md:py-10">
          <div className="mb-[9px] flex items-start justify-between gap-3">
            <svg
              className="block h-12 w-12 text-muted-foreground/40"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.58 17.32C3.55 16.23 3 15 3 13.01c0-3.5 2.46-6.64 6.03-8.19l.9 1.38c-3.34 1.8-4 4.15-4.25 5.62.54-.28 1.24-.38 1.93-.31 1.8.17 3.23 1.65 3.23 3.49a3.5 3.5 0 0 1-3.5 3.5c-1.07 0-2.1-.49-2.75-1.18zm10 0C13.55 16.23 13 15 13 13.01c0-3.5 2.46-6.64 6.03-8.19l.9 1.38c-3.34 1.8-4 4.15-4.25 5.62.54-.28 1.24-.38 1.93-.31 1.8.17 3.23 1.65 3.23 3.49a3.5 3.5 0 0 1-3.5 3.5c-1.07 0-2.1-.49-2.75-1.18z" />
            </svg>
            {count > 1 && (
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-label={paused ? "Continuar recomendações" : "Pausar recomendações"}
                aria-pressed={paused}
                className="relative grid h-12 w-12 shrink-0 cursor-pointer place-items-center rounded-full bg-transparent p-0 text-foreground"
              >
                <svg
                  className="absolute inset-0 -rotate-90"
                  viewBox="0 0 44 44"
                  aria-hidden="true"
                >
                  <circle
                    cx="22"
                    cy="22"
                    r={TIMER_R}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="2.5"
                  />
                  <circle
                    key={index}
                    cx="22"
                    cy="22"
                    r={TIMER_R}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="scroll-reel-countdown"
                    style={{
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                </svg>
                {paused ? (
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <rect x="2.25" y="1.75" width="2.4" height="8.5" rx="0.6" />
                    <rect x="7.35" y="1.75" width="2.4" height="8.5" rx="0.6" />
                  </svg>
                ) : (
                  <span className="text-xs font-semibold tabular-nums">
                    {secondsLeft}
                  </span>
                )}
              </button>
            )}
          </div>

          <div
            className="relative grid w-full max-w-[390px]"
            aria-live="polite"
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                aria-hidden="true"
                className="invisible col-start-1 row-start-1 flex flex-col gap-[19px]"
              >
                <p className={QUOTE_CLASSES}>{item.quote}</p>
                <p className={AUTHOR_CLASSES}>{item.author}</p>
              </div>
            ))}
            <div
              key={displayIndex}
              className={cn(
                "absolute inset-x-0 top-0 flex flex-col gap-[19px] will-change-[transform,opacity]",
                exiting && "scroll-reel-exit"
              )}
            >
              <p className={QUOTE_CLASSES} aria-label={current.quote}>
                <span aria-hidden="true">
                  <Chars
                    text={current.quote}
                    startIndex={0}
                    staggerMs={charStaggerMs}
                  />
                </span>
              </p>
              <p className={AUTHOR_CLASSES} aria-label={current.author}>
                <span aria-hidden="true">
                  <Chars
                    text={current.author}
                    startIndex={current.quote.length + 6}
                    staggerMs={charStaggerMs}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-[7.75rem] shrink-0 self-stretch">
          <OptionWheel
            items={labels}
            defaultSelected={0}
            selected={index}
            onChange={(next: number) => goTo(next)}
            side="right"
            textColor="#a6a6a6"
            activeColor="#ffffff"
            fontSize={1}
            spacing={2.2}
            curve={0.85}
            tilt={8}
            blur={1.2}
            fade={0.4}
            minOpacity={0.14}
            smoothing={180}
            inset={12}
            loop
            draggable
            className="absolute inset-0"
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollReelTestimonials;
