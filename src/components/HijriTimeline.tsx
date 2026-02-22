"use client";

import { useMemo, useState } from "react";
import { hijriThemes } from "@/lib/hijriThemes";
import { cn } from "@/lib/utils";

export function HijriTimeline() {
  const [active, setActive] = useState(0);
  const current = useMemo(() => hijriThemes[active], [active]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <div className="card overflow-hidden">
        <div className="border-b border-border bg-surface/60 px-4 py-3">
          <div className="text-sm font-bold">Hijri-month journey (12 themes)</div>
          <div className="text-xs text-muted">
            Tap a month to preview the learning focus.
          </div>
        </div>

        <div className="px-4 pb-4 pt-3">
          <div
            className="flex gap-2 overflow-x-auto pb-2"
            role="tablist"
            aria-label="Hijri months"
          >
            {hijriThemes.map((m, idx) => (
              <button
                key={m.month}
                type="button"
                role="tab"
                aria-selected={idx === active}
                className={cn(
                  "whitespace-nowrap rounded-full border px-3 py-1 text-sm font-semibold transition",
                  idx === active
                    ? "border-primary bg-primary/15"
                    : "border-border bg-surface/60 hover:bg-surface",
                )}
                onClick={() => setActive(idx)}
              >
                {m.month}
              </button>
            ))}
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-bg/60 p-4">
              <div className="font-display text-xl font-extrabold">{current.theme}</div>
              <p className="mt-2 text-sm text-muted">{current.spotlight}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {current.skills.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface/70 p-4">
              <div className="text-sm font-bold">What you might find in this box</div>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li className="flex gap-2">
                  <span aria-hidden>📖</span> A short story booklet that matches the theme
                </li>
                <li className="flex gap-2">
                  <span aria-hidden>🧩</span> A game or family activity (cooperative + playful)
                </li>
                <li className="flex gap-2">
                  <span aria-hidden>🎨</span> A guided craft kit with safe materials
                </li>
                <li className="flex gap-2">
                  <span aria-hidden>🪪</span> Collectible learning cards (dua, vocabulary, stories)
                </li>
                <li className="flex gap-2">
                  <span aria-hidden>👨‍👩‍👧‍👦</span> Parent guide with prompts + pacing suggestions
                </li>
              </ul>
              <div className="mt-4 rounded-xl bg-primary/10 p-3 text-xs text-muted">
                Tip: Keep it screen-light—use the digital module for short boosts (5–8 minutes),
                then jump back into hands-on play.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="font-display text-xl font-extrabold">Why Hijri theming works</div>
        <p className="mt-2 text-sm text-muted">
          The Hijri calendar creates built-in anticipation and an annual story arc. Instead of
          random topics, families experience a consistent rhythm—one month at a time.
        </p>

        <div className="mt-6 space-y-3">
          <div className="rounded-xl border border-border bg-surface/70 p-4">
            <div className="text-sm font-bold">Cadence</div>
            <p className="mt-1 text-sm text-muted">
              A predictable learning ritual that’s easier to maintain than ad-hoc planning.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface/70 p-4">
            <div className="text-sm font-bold">Milestones</div>
            <p className="mt-1 text-sm text-muted">
              Ramadan and the two Eids become joyful peaks with themed family activities.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface/70 p-4">
            <div className="text-sm font-bold">Identity-building</div>
            <p className="mt-1 text-sm text-muted">
              Children learn the calendar, stories, manners, and foundations through play.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
