import Image from "next/image";
import { cn } from "@/lib/utils";

export function BotAvatar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-surface shadow-soft",
        className,
      )}
      aria-hidden="true"
    >
      <Image src="/seedly.svg" alt="" width={40} height={40} />
    </div>
  );
}
