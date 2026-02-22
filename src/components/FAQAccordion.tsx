"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQ = { q: string; a: string };

export function FAQAccordion({ items }: { items: FAQ[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map((item, idx) => (
        <Accordion.Item
          key={item.q}
          value={`item-${idx}`}
          className="card overflow-hidden"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "group flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-extrabold",
                "hover:bg-surface/70",
              )}
            >
              <span>{item.q}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-muted transition group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-5 pb-5 text-sm text-muted">
            {item.a}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
