"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur">
      <div className="container-padded flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image src="/favicon.svg" alt="" width={34} height={34} priority />
          <div className="leading-tight">
            <div className="font-display text-base font-extrabold">{site.name}</div>
            <div className="text-xs text-muted">{site.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-text/90 no-underline hover:text-text"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary no-underline">
            Join the waitlist
          </Link>
        </nav>

        <button
          type="button"
          className="btn-ghost md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div
        id={panelId}
        className={cn(
          "md:hidden",
          open ? "block border-t border-border/60 bg-bg/90 backdrop-blur" : "hidden",
        )}
      >
        <div className="container-padded flex flex-col gap-2 py-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-text no-underline hover:bg-surface/70"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-2 no-underline"
            onClick={() => setOpen(false)}
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
