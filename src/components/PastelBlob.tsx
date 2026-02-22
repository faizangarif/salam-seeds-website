import { cn } from "@/lib/utils";

type PastelBlobProps = {
  className?: string;
};

export function PastelBlob({ className }: PastelBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-secondary/40 blur-2xl" />
      <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-accent/35 blur-2xl" />
      <div className="absolute -right-24 top-28 h-72 w-72 rounded-full bg-primary/30 blur-2xl" />
      <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-warning/35 blur-2xl" />
    </div>
  );
}
