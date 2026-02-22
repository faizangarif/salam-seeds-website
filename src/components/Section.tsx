import { cn } from "@/lib/utils";

type SectionProps = {
  title?: string;
  kicker?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ title, kicker, children, className }: SectionProps) {
  return (
    <section className={cn("py-14 sm:py-16", className)}>
      <div className="container-padded">
        {(kicker || title) && (
          <header className="mb-8 max-w-2xl">
            {kicker && <div className="pill mb-3">{kicker}</div>}
            {title && (
              <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
