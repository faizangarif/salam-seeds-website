"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useMemo, useRef, useState } from "react";
import { Send, Sparkles, X } from "lucide-react";
import { BotAvatar } from "@/components/BotAvatar";
import { SourceList, type Citation } from "@/components/SourceList";
import { cn } from "@/lib/utils";

type Role = "user" | "assistant";

type ChatMessage = {
  role: Role;
  content: string;
  citations?: Citation[];
};

const SUGGESTIONS = [
  "What’s inside a monthly box?",
  "What are the themes across the Hijri months?",
  "How does the digital companion platform work?",
  "What is the pricing?",
];

function clampMessages(messages: ChatMessage[], maxChars = 10_000) {
  // Keep conversation under a rough character budget for safety.
  let total = 0;
  const out: ChatMessage[] = [];
  for (let i = messages.length - 1; i >= 0; i--) {
    const m = messages[i];
    total += m.content.length;
    if (total > maxChars) break;
    out.unshift(m);
  }
  return out;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Salaam! I’m Seedly 🌱✨ Ask me anything about Salaam Seeds (boxes, Hijri themes, digital companion), or ask for parent-friendly learning ideas. I’ll cite accredited sources when I look things up.",
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Auto-pop on first entry (per session).
  useEffect(() => {
    try {
      const seen = sessionStorage.getItem("seedly_seen");
      if (!seen) {
        sessionStorage.setItem("seedly_seen", "1");
        const t = window.setTimeout(() => setOpen(true), 650);
        return () => window.clearTimeout(t);
      }
    } catch {
      // ignore
    }
  }, []);

  // Keep scrolled to bottom.
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, open, sending]);

  const canSend = useMemo(() => input.trim().length > 0 && !sending, [input, sending]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setSending(true);
    setInput("");

    const nextMessages = [...messages, { role: "user", content: trimmed } as ChatMessage];
    setMessages(nextMessages);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: clampMessages(nextMessages) }),
      });

      if (!res.ok) throw new Error("Chat request failed");
      const data = (await res.json()) as { answer: string; citations?: Citation[] };

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer, citations: data.citations || [] },
      ]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Oops—my watering can spilled. 🫗 Please try again in a moment.",
        },
      ]);
    } finally {
      setSending(false);
      // Return focus to input for fast chatting.
      window.setTimeout(() => inputRef.current?.focus(), 50);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen} modal={false}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={cn(
            "fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-3 text-sm font-extrabold shadow-soft backdrop-blur",
            "hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          )}
          aria-label="Open Seedly companion chat"
        >
          <BotAvatar />
          <span className="hidden sm:inline">Ask Seedly</span>
          <Sparkles className="h-4 w-4 text-muted" aria-hidden />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content
          className={cn(
            "fixed bottom-20 right-5 z-[70] w-[92vw] max-w-md",
            "rounded-2xl border border-border bg-bg/90 shadow-soft backdrop-blur",
            "focus:outline-none",
          )}
          aria-label="Seedly companion chat"
          onOpenAutoFocus={(e) => {
            // Prevent auto-focus stealing; we’ll focus the input instead.
            e.preventDefault();
            window.setTimeout(() => inputRef.current?.focus(), 50);
          }}
        >
          <div className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3">
            <div className="flex items-center gap-3">
              <BotAvatar className="h-9 w-9" />
              <div className="leading-tight">
                <Dialog.Title className="text-sm font-extrabold">
                  Seedly 🌱
                </Dialog.Title>
                <Dialog.Description className="text-xs text-muted">
                  Cited answers • Parent-first • Pastel vibes
                </Dialog.Description>
              </div>
            </div>
            <Dialog.Close asChild>
              <button type="button" className="btn-ghost" aria-label="Close chat">
                <X />
              </button>
            </Dialog.Close>
          </div>

          <div
            ref={listRef}
            className="max-h-[52vh] space-y-3 overflow-auto px-4 py-4"
            role="log"
            aria-live="polite"
          >
            {messages.map((m, idx) => (
              <div key={idx} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[90%] rounded-2xl border px-4 py-3 text-sm",
                    m.role === "user"
                      ? "border-primary/30 bg-primary/15"
                      : "border-border bg-surface/70",
                  )}
                >
                  <div className="whitespace-pre-wrap text-text">{m.content}</div>
                  {m.role === "assistant" && m.citations && m.citations.length > 0 && (
                    <SourceList citations={m.citations} />
                  )}
                </div>
              </div>
            ))}

            {sending && (
              <div className="flex justify-start">
                <div className="max-w-[90%] rounded-2xl border border-border bg-surface/70 px-4 py-3 text-sm text-muted">
                  Seedly is thinking…
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-border/60 px-4 py-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="tag hover:bg-surface"
                  onClick={() => send(s)}
                  disabled={sending}
                >
                  {s}
                </button>
              ))}
            </div>

            <form
              className="flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (canSend) void send(input);
              }}
            >
              <label className="sr-only" htmlFor="seedly-input">
                Ask Seedly a question
              </label>
              <input
                id="seedly-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                className="w-full rounded-xl border border-border bg-surface px-4 py-2 text-sm"
                autoComplete="off"
              />
              <button
                type="submit"
                className="btn-primary"
                disabled={!canSend}
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-2 text-xs text-muted">
              Please don’t share sensitive personal information. Seedly uses OpenAI and may cite web
              sources; click citations to verify.
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
