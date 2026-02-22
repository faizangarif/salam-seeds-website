"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Lesson = { title: string; minutes: number; summary: string };

const LESSONS: Lesson[] = [
  { title: "Warm hello + intention", minutes: 6, summary: "A quick reminder that learning can be an act of worship." },
  { title: "Story moment", minutes: 7, summary: "A short, kid-friendly story that matches this month’s theme." },
  { title: "Family challenge", minutes: 5, summary: "One tiny action you can do together this week." },
];

const QUIZ = {
  question: "Which choice best matches the idea of ‘learning through play’?",
  options: [
    { label: "Reading a long textbook chapter with no breaks", correct: false },
    { label: "A short story + a craft + a cooperative game", correct: true },
    { label: "Only watching videos for an hour", correct: false },
  ],
  explanation:
    "Play-based learning is hands-on, social, and joyful—kids learn by doing, talking, and exploring.",
};

export function BadgeDemo() {
  const [done, setDone] = useState<Record<number, boolean>>({});
  const completedCount = useMemo(
    () => Object.values(done).filter(Boolean).length,
    [done],
  );

  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const earned = completedCount === LESSONS.length && submitted && selected !== null && QUIZ.options[selected].correct;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="card p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-display text-xl font-extrabold">Digital module demo</div>
            <p className="mt-1 text-sm text-muted">
              Short lessons (5–8 minutes) + a quick quiz + a badge. Screen-light on purpose.
            </p>
          </div>
          <span className="tag">{completedCount}/{LESSONS.length} lessons</span>
        </div>

        <div className="mt-5 space-y-3">
          {LESSONS.map((l, idx) => {
            const isDone = !!done[idx];
            return (
              <button
                key={l.title}
                type="button"
                className={cn(
                  "w-full rounded-xl border p-4 text-left transition",
                  isDone
                    ? "border-primary bg-primary/10"
                    : "border-border bg-surface/70 hover:bg-surface",
                )}
                onClick={() => setDone((d) => ({ ...d, [idx]: !d[idx] }))}
                aria-pressed={isDone}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-extrabold">{l.title}</div>
                    <div className="mt-1 text-sm text-muted">{l.summary}</div>
                  </div>
                  <div className="text-xs text-muted">{l.minutes} min</div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-5 rounded-xl border border-border bg-warning/25 p-4 text-sm text-muted">
          <span className="font-semibold text-text">Parent-first:</span> We recommend parent-managed
          accounts and minimal child data collection.
        </div>
      </div>

      <div className="card p-6">
        <div className="font-display text-xl font-extrabold">Mini quiz</div>
        <p className="mt-2 text-sm text-muted">{QUIZ.question}</p>

        <fieldset className="mt-5 space-y-3" aria-label="Quiz options">
          {QUIZ.options.map((o, idx) => (
            <label
              key={o.label}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-xl border bg-surface/70 p-4 transition hover:bg-surface",
                selected === idx ? "border-accent" : "border-border",
              )}
            >
              <input
                type="radio"
                name="quiz"
                className="mt-1"
                checked={selected === idx}
                onChange={() => setSelected(idx)}
              />
              <span className="text-sm text-muted">{o.label}</span>
            </label>
          ))}
        </fieldset>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="btn-primary"
            disabled={selected === null}
            onClick={() => setSubmitted(true)}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => {
              setSubmitted(false);
              setSelected(null);
            }}
          >
            Reset
          </button>

          {earned && (
            <span className="pill animate-pop">
              🏅 Badge earned: “Joyful Learner”
            </span>
          )}
        </div>

        {submitted && selected !== null && (
          <div className="mt-5 rounded-xl border border-border bg-surface/80 p-4 text-sm">
            <div className="font-semibold">
              {QUIZ.options[selected].correct ? "Correct!" : "Not quite yet."}
            </div>
            <p className="mt-1 text-muted">{QUIZ.explanation}</p>
            {!earned && completedCount !== LESSONS.length && (
              <p className="mt-2 text-muted">
                Tip: complete the mini-lessons first to unlock the badge.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
